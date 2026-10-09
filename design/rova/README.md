# Rova 参考外观模型

根据用户提供的轮廓参考创建的可编辑 Blender 模型。网页使用同一模型的透明渲染，保留单一几何来源。

- 俯视外轮廓圆角：R11 mm
- 侧面：连续 R6.5 mm 半圆截面，总厚度 13 mm
- 长宽：暂按 80 × 100 mm；用户要求以视觉舒适为准，采用 4:5 的比例，非实物测量
- 细腻暖银灰哑光金属机身，USB-C 为真实布尔开孔，四颗橙色状态灯位于同一底边
- 首屏使用无左右斜视的正交相机，仅作轻微滚转；不使用透视缩放，上下等宽
- 使用完整金属反射、细微各向异性、较高粗糙度和柔和矩形灯，降低塑料感与边缘过曝
- 用解析法线保持布尔开孔周围的侧面连续，避免长条面出现拉伸阴影

`rova-reference.blend` 是可编辑场景，`rova-reference.glb` 是独立模型。`reference-views.png` 是正、侧、底视图检查板；原始透明渲染在 `renders/`。模型用于外观展示，不是经过装配、结构和尺寸验证的生产 CAD。

从项目根目录重新生成：

```sh
/Applications/Blender.app/Contents/MacOS/Blender --background --factory-startup --python design/rova/build_device.py
node design/rova/prepare_assets.mjs
```

Linux 使用系统 `blender` 命令代替 Mac 应用路径。修改 `build_device.py` 内的 `W / H / T / R` 即可调整尺寸；侧边半径始终为厚度的一半。建模后会恢复首屏相机再保存场景，导出的 GLB 不包含相机与灯光。

生成的网页素材为 `public/rova/device-reference-hero.webp`；页面其余场景图为已有图片的 WebP 优化版本。
