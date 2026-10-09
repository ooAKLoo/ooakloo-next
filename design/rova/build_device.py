"""Rova reference model, dimensions in metres. Run with Blender --background --python.
Overall plan: 80 x 100 mm, outer silhouette R11, thickness 13 mm.
The side is a continuous R6.5 semicircle, not a bevelled rectangular extrusion.
"""
import bpy
import math
from pathlib import Path
from mathutils import Vector, Quaternion

ROOT = Path(__file__).resolve().parent
ASSETS = ROOT / 'renders'
ASSETS.mkdir(parents=True, exist_ok=True)
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)

W, H, T, R = .080, .100, .013, .011
SIDE_R = T / 2

def material(name, color, metallic=0., roughness=.4, emission=0.):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get('Principled BSDF')
    bsdf.inputs['Base Color'].default_value = (*color, 1)
    bsdf.inputs['Metallic'].default_value = metallic
    bsdf.inputs['Roughness'].default_value = roughness
    if emission:
        bsdf.inputs['Emission Color'].default_value = (*color, 1)
        bsdf.inputs['Emission Strength'].default_value = emission
    return mat

shell_mat = material('Fine satin anodized aluminium', (.57, .58, .56), .94, .42)
anisotropy = shell_mat.node_tree.nodes.get('Principled BSDF').inputs.get('Anisotropic IOR Level')
if anisotropy: anisotropy.default_value = .22
port_mat = material('USB-C stainless rim', (.17, .18, .16), .75, .25)
black_mat = material('Connector recess', (.015, .020, .016), .1, .5)
led_mat = material('Four amber status lights', (1., .26, .055), .0, .23, 2.4)

def outline(width, height, radius, segments=32):
    points = []
    for cx, cy, start in [
        (width/2-radius, height/2-radius, 0),
        (-width/2+radius, height/2-radius, 90),
        (-width/2+radius, -height/2+radius, 180),
        (width/2-radius, -height/2+radius, 270),
    ]:
        for i in range(segments+1):
            a = math.radians(start + i*90/segments)
            points.append((cx+radius*math.cos(a), cy+radius*math.sin(a)))
    return points

vertices, faces = [], []
RINGS = 64
for j in range(RINGS+1):
    theta = -math.pi/2 + math.pi*j/RINGS
    inset = SIDE_R*(1-math.cos(theta))
    z = SIDE_R*math.sin(theta)
    for x, y in outline(W-2*inset, H-2*inset, R-inset):
        vertices.append((x,y,z))
N = len(outline(W,H,R))
for j in range(RINGS):
    for i in range(N):
        n = (i+1)%N
        faces.append((j*N+i,j*N+n,(j+1)*N+n,(j+1)*N+i))
faces.append(tuple(reversed(range(N))))
faces.append(tuple(RINGS*N+i for i in range(N)))
mesh = bpy.data.meshes.new('R11 plan with continuous R6.5 profile')
mesh.from_pydata(vertices, [], faces)
mesh.update()
body = bpy.data.objects.new('ROVA | 80 x 100 x 13 mm | R11 + R6.5', mesh)
bpy.context.collection.objects.link(body)
body.data.materials.append(shell_mat)
for poly in body.data.polygons:
    poly.use_smooth = len(poly.vertices) == 4

# Rounded USB-C negative space, extruded perpendicular to the bottom edge.
def capsule(name, width, height, depth, y, mat=None):
    loop = outline(width,height,height/2,24)
    n = len(loop)
    verts = [(x, y-d/2, z) for d in [depth, -depth] for x,z in loop]
    # outline is CCW in XZ; outward direction on the first face is -Y.
    polys = [tuple(range(n)), tuple(reversed(range(n,2*n)))]
    polys += [(i,n+i,n+(i+1)%n,(i+1)%n) for i in range(n)]
    m = bpy.data.meshes.new(name)
    m.from_pydata(verts,[],polys); m.update()
    obj = bpy.data.objects.new(name,m); bpy.context.collection.objects.link(obj)
    if mat: obj.data.materials.append(mat)
    for p in m.polygons: p.use_smooth = len(p.vertices)==4
    return obj

def subtract(obj, cutter):
    bpy.context.view_layer.objects.active = obj
    modifier = obj.modifiers.new('Real recessed aperture', 'BOOLEAN')
    modifier.operation = 'DIFFERENCE'; modifier.solver = 'EXACT'; modifier.object = cutter
    bpy.ops.object.modifier_apply(modifier=modifier.name)
    bpy.data.objects.remove(cutter,do_unlink=True)

port_cut = capsule('USB-C opening cutter', .0095, .0033, .009, -H/2)
subtract(body,port_cut)
# A metal liner and deep dark recess inside the cut. Opening remains hollow.
liner = capsule('USB-C metal liner', .00915, .00305, .0034, -H/2+.0013, port_mat)
liner_hole = capsule('USB-C liner cavity cutter', .0085, .0026, .006, -H/2+.0013)
subtract(liner,liner_hole)
capsule('Dark back of USB-C cavity',.0085,.0026,.0002,-H/2+.0028,black_mat)
capsule('USB-C tongue',.0062,.00075,.0026,-H/2+.00145,black_mat)

for i in range(4):
    x = .0115 + i*.003
    bpy.ops.mesh.primitive_cylinder_add(vertices=48,radius=.00053,depth=.003,location=(x,-H/2,0),rotation=(math.pi/2,0,0))
    subtract(body,bpy.context.object)
    bpy.ops.mesh.primitive_uv_sphere_add(segments=32,ring_count=16,radius=.00049,location=(x,-H/2-.00002,0))
    light=bpy.context.object; light.name=f'Amber indicator {i+1} of 4'; light.scale=(1,.33,1)
    light.data.materials.append(led_mat)
    for p in light.data.polygons: p.use_smooth=True

# Preserve the analytical exterior normals after cutting the small apertures.
# Boolean splits of long perimeter strips must not introduce stretched shading.
loop_normals=[]
for poly in body.data.polygons:
    poly.use_smooth=True
    for li in poly.loop_indices:
        co=body.data.vertices[body.data.loops[li].vertex_index].co
        dx=max(abs(co.x)-(W/2-R),0)
        dy=max(abs(co.y)-(H/2-R),0)
        d=math.hypot(dx,dy)
        sin_theta=max(-1,min(1,co.z/SIDE_R))
        cos_theta=math.sqrt(max(0,1-sin_theta*sin_theta))
        expected=R-SIDE_R*(1-cos_theta)
        if d and abs(d-expected)<.00004:
            normal=(math.copysign(dx/d*cos_theta,co.x),math.copysign(dy/d*cos_theta,co.y),sin_theta)
        else:
            normal=tuple(poly.normal)
        loop_normals.append(normal)
body.data.normals_split_custom_set(loop_normals)

# A restrained micro texture: satin, no visibly grainy or glossy plastic finish.
nodes=shell_mat.node_tree.nodes; links=shell_mat.node_tree.links
noise=nodes.new('ShaderNodeTexNoise'); noise.inputs['Scale'].default_value=2800
bump=nodes.new('ShaderNodeBump'); bump.inputs['Strength'].default_value=.12; bump.inputs['Distance'].default_value=.000003
links.new(noise.outputs['Fac'],bump.inputs['Height']); links.new(bump.outputs['Normal'],nodes.get('Principled BSDF').inputs['Normal'])

scene=bpy.context.scene
scene.unit_settings.system='METRIC'
scene.unit_settings.length_unit='MILLIMETERS'
scene.render.engine='CYCLES'
scene.cycles.samples=128
scene.cycles.use_denoising=True
scene.render.film_transparent=True
scene.render.image_settings.file_format='PNG'
scene.render.image_settings.color_mode='RGBA'
scene.render.resolution_percentage=100
scene.world.use_nodes=True
background=scene.world.node_tree.nodes.get('Background')
background.inputs['Color'].default_value=(.32,.34,.31,1)
background.inputs['Strength'].default_value=.65
scene.view_settings.view_transform='AgX'

# Turn a camera or softbox toward the exact model centre.
def point_at(obj, target=(0,0,0)):
    obj.rotation_euler=(Vector(target)-obj.location).to_track_quat('-Z','Y').to_euler()

def area(name, location, energy, size, color):
    data=bpy.data.lights.new(name,'AREA'); data.energy=energy; data.shape='RECTANGLE'; data.size=size; data.size_y=size*.7; data.color=color
    obj=bpy.data.objects.new(name,data); bpy.context.collection.objects.link(obj); obj.location=location; point_at(obj)

area('Broad satin reflection',(-.13,-.05,.19),.95,.19,(1.,.99,.96))
area('Cool soft fill',(.12,.02,.16),.4,.15,(.97,.99,1.))
area('Narrow metallic edge strip',(.03,.14,.06),.45,.085,(1.,1.,.99))

camera_data=bpy.data.cameras.new('Hero orthographic camera')
camera=bpy.data.objects.new('Hero orthographic camera',camera_data)
bpy.context.collection.objects.link(camera); scene.camera=camera
camera_data.type='ORTHO'; camera_data.lens=55

camera.location=(0,-.145,.34); point_at(camera)
# Roll the camera without rotating it sideways: upper and lower edges stay parallel.
camera.rotation_euler=(camera.rotation_euler.to_quaternion() @ Quaternion((0,0,1),math.radians(-8))).to_euler()
camera_data.ortho_scale=.131
scene.render.resolution_x=1400; scene.render.resolution_y=1600
scene.render.filepath=str(ASSETS/'device-reference-hero.png')
bpy.ops.wm.save_as_mainfile(filepath=str(ROOT/'rova-reference.blend'))
bpy.ops.render.render(write_still=True)

# An additional bottom view records the real aperture and four LED placements.
camera.location=(0,-.22,0); point_at(camera)
camera_data.ortho_scale=.105
scene.render.resolution_x=1400; scene.render.resolution_y=480
scene.render.filepath=str(ASSETS/'device-reference-bottom.png')
bpy.ops.render.render(write_still=True)

# Orthographic front and side views for proportion review.
for name, position, scale, resolution in [
    ('front', (0,0,.3), .118, (1000,1300)),
    ('side', (.3,0,0), .118, (1400,380)),
]:
    camera.location=position; point_at(camera)
    camera_data.ortho_scale=scale
    scene.render.resolution_x, scene.render.resolution_y=resolution
    scene.render.filepath=str(ASSETS/f'device-reference-{name}.png')
    bpy.ops.render.render(write_still=True)

# Restore hero camera in the editable scene.
camera.location=(0,-.145,.34); point_at(camera)
# Roll the camera without rotating it sideways: upper and lower edges stay parallel.
camera.rotation_euler=(camera.rotation_euler.to_quaternion() @ Quaternion((0,0,1),math.radians(-8))).to_euler()
camera_data.ortho_scale=.131
scene.render.resolution_x=1400; scene.render.resolution_y=1600
scene.render.filepath=str(ASSETS/'device-reference-hero.png')
bpy.ops.wm.save_as_mainfile(filepath=str(ROOT/'rova-reference.blend'))

# Export only the product, excluding lights/cameras, with real millimetre geometry.
bpy.ops.object.select_all(action='DESELECT')
for obj in scene.objects:
    if obj.type=='MESH': obj.select_set(True)
bpy.ops.export_scene.gltf(filepath=str(ROOT/'rova-reference.glb'),export_format='GLB',use_selection=True)
print('Rova model and transparent renders ready.')
