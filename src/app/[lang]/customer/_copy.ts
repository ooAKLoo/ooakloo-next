export const customerCopy = {
  cn: {
    design: {
      skipLink: '跳到页面内容', heroNote: '属于你的世界，始终在你身边。',
      media: ['照片', '视频', '文件'], visualCaption: '你的资料，近在身边', factsLabel: '自由，从这里开始',
      featuresEyebrow: '为自由而设计', platformEyebrow: '一个资料库，所有设备',
      stepHint: '连接。打开。出发。', supported: '支持', unsupported: '不支持',
      ctaEyebrow: '一起，探索下一步', footerNote: '为生活而造，为自由而生。', privacy: '隐私政策（中文）',
    },
    meta: {
      title: 'Rova 若行 · 随身携带的随行云',
      description:
        '照片、视频、文件不用上传云端，也不用插线。手机、iPad、电脑连上 Rova 若行，就能随时访问、备份和播放个人资料。',
      keywords: ['Rova 若行', '若行', '随行云', '私人云', '个人云存储', '近场共享', '本地存储'],
      author: 'Rova 若行团队',
      siteName: 'Rova 若行',
    },
    brand: {
      name: 'Rova 若行',
      product: '随行云',
      fullName: 'Rova 若行 · 随行云',
    },
    nav: {
      links: [
        { label: '这是什么', href: '#what' },
        { label: '使用场景', href: '#scenes' },
        { label: '怎么用', href: '#how' },
        { label: '对比', href: '#compare' },
      ],
      cta: '申请内测',
      menu: '菜单',
      languageShort: 'EN',
      languageAria: 'Switch to English',
    },
    hero: {
      eyebrow: 'Rova 若行 · 随行云',
      title: ['你的世界，', '随你而行。'],
      description:
        '认识 Rova 若行，一朵可以带走的私人云。照片、影片和文件，都在自己身边。带上它，去你想去的地方。',
      points: ['不用上传云端', '不依赖网络', '多设备无线访问'],
      primaryCta: '申请内测',
      secondaryCta: '查看使用场景',
      deviceAlt: 'Rova 若行随行云设备',
    },
    what: {
      eyebrow: '01 · 这是什么',
      title: '小小一台。\n装下你的大世界。',
      description:
        'Rova 若行是一台随行云设备，把硬盘、Wi-Fi、电池和智能文件管理做在一个小盒子里。它不像云盘要上传服务器，也不像 NAS 那么复杂，更像一个随身的个人资料库。',
      devices: ['iPhone', 'iPad', 'Mac', 'Windows', '电视 / 投影', '朋友的设备'],
      tags: ['本地存储', '自带 Wi-Fi', '无需公网', '无线访问', '照片 / 视频 / 文件 / 音乐 / 电子书'],
    },
    scenes: {
      eyebrow: '02 · 它解决什么麻烦',
      title: '生活向前，\n你的世界跟上。',
      description:
        '从日常的珍贵记忆，到远方的每次探索。把重要的内容带在身边，不让网络决定你的下一步。',
      items: [
        {
          no: '场景一',
          title: '手机空间不够',
          desc: '照片、视频太多，不想一直买 iCloud，也不想为了存储换更大容量的手机。一键把内容备份进 Rova 若行，随时释放手机空间。',
          img: '/rova/scene-phone.webp',
          alt: '手机连接 Rova 若行备份照片',
        },
        {
          no: '场景二',
          title: '出门拍摄 / 旅行',
          desc: '不带电脑，也能把相机、无人机、手机的素材就地备份到身边。没网也能预览、筛选，绕开微信压缩与上传等待。',
          img: '/rova/scene-outdoor.webp',
          alt: '户外拍摄时用 Rova 若行备份素材',
        },
        {
          no: '场景三',
          title: '多人近场共享',
          desc: '没网也能让朋友、家人、顾客一起访问同一批照片、视频、音乐或资料。一人随身携带，众人无线接入。',
          img: '/rova/scene-share.webp',
          alt: '多人近场共享同一批内容',
        },
      ],
    },
    features: {
      title: '少一些依赖，\n多一些自由。',
      advantages: [
        { title: '本地私有', desc: '资料放在自己身边，不默认上传到别人的服务器。' },
        { title: '多端访问', desc: '手机、平板、电脑都能连接，跨设备查看同一份资料。' },
        { title: '近场高速', desc: '大文件在附近设备间直接流转，少等云盘上传和下载。' },
        { title: '近场共享', desc: '旅行、聚会、店内空间里，指定内容可以给附近的人访问。' },
        { title: '现代浏览', desc: '照片、视频、文件用更自然的界面打开，而不是只面对文件夹。' },
      ],
      mockupAlt: '随行云在笔记本、平板和手机上的界面',
      platformTitle: '不同的屏幕，\n同一个世界。',
      platformDesc: '无论使用哪种设备，随行云都能适配，让你的文件在手机、平板和电脑之间自然流转。',
      platforms: ['Windows', 'macOS', 'iOS', 'Android', 'Web'],
    },
    how: {
      eyebrow: '03 · 怎么用',
      title: '轻松连接，\n即刻出发。',
      steps: [
        { n: '1', title: '开机带走', desc: '自带电池和 Wi-Fi，放进包里即可。不用插线、不用配置、不用折腾。' },
        { n: '2', title: '连接设备', desc: '手机、iPad、电脑搜索并连接 Rova 若行的近场网络，无需公网、无需登录云账号。' },
        { n: '3', title: '访问与备份', desc: '像看本地相册一样浏览照片视频，一键把设备里的内容备份进来，没网也能用。' },
        { n: '4', title: '智能整理', desc: 'AI 会逐步帮你自动分类、搜索和理解资料，让这个私人资料库越用越懂你。' },
      ],
    },
    compare: {
      eyebrow: '04 · 和云盘 / NAS / 硬盘有什么不同',
      title: '你的资料，\n有了第四种选择。',
      description:
        '云盘方便，但数据不在自己手里；NAS 私有，但太复杂也不便携；移动硬盘便宜，但手机和平板用起来很麻烦。随行云想做的是放在身边、可以带走、手机电脑都能直接用的私人云。',
      ability: '能力',
      partial: '部分',
      columns: ['云盘', 'NAS', '移动硬盘', '随行云'],
      rows: [
        { dim: '数据在自己手里', cloud: false, nas: true, drive: true, rova: true },
        { dim: '便携、可随身带走', cloud: true, nas: false, drive: true, rova: true },
        { dim: '手机 / 平板无线访问', cloud: true, nas: 'half', drive: false, rova: true },
        { dim: '没网也能用', cloud: false, nas: 'half', drive: true, rova: true },
        { dim: '一次买断、长期省', cloud: false, nas: true, drive: true, rova: true },
        { dim: '现代浏览交互', cloud: true, nas: false, drive: false, rova: true },
      ],
    },
    cta: {
      title: '带上你的世界，\n一起出发。',
      description: '更私密、更智能、更便携，也更易用。留下邮箱，第一批内测设备发放时我们会第一时间联系你。',
      submitted: '已收到，感谢你的关注！',
      emailPlaceholder: '你的邮箱',
      submit: '申请内测',
      submitting: '提交中…',
      submitError: '提交失败，请稍后重试。',
    },
    footer: {
      description: '一个可以随身携带的私人云，让你的照片、视频和文件，始终在身边。',
      contactTitle: '联系方式',
      address: '广东省深圳市南山区创智云城',
      contactTeam: '联系团队',
      followUs: '关注我们',
      social: ['小红书', 'Bilibili', 'YouTube', 'GitHub'],
      copyright: '© 2026 akl. 版权所有。',
    },
  },
  en: {
    design: {
      skipLink: 'Skip to content', heroNote: 'A little device. A lot more freedom.',
      media: ['Photos', 'Videos', 'Files'], visualCaption: 'Your data. Right here.', factsLabel: 'Made to move',
      featuresEyebrow: 'Designed for independence', platformEyebrow: 'One library. Every screen.',
      stepHint: 'Connect. Open. Go.', supported: 'Supported', unsupported: 'Not supported',
      ctaEyebrow: 'Be part of what comes next', footerNote: 'Built for life. Made to move.', privacy: 'Privacy policy (Chinese)',
    },
    meta: {
      title: 'Rova · Portable Personal Cloud',
      description:
        'Access, back up, and play your photos, videos, and files from nearby devices without uploading them to the cloud or plugging in cables.',
      keywords: ['Rova', 'portable personal cloud', 'private cloud', 'personal storage', 'nearby sharing', 'local storage'],
      author: 'Rova Team',
      siteName: 'Rova',
    },
    brand: {
      name: 'Rova',
      product: 'Portable Cloud',
      fullName: 'Rova · Portable Cloud',
    },
    nav: {
      links: [
        { label: 'What it is', href: '#what' },
        { label: 'Use cases', href: '#scenes' },
        { label: 'How it works', href: '#how' },
        { label: 'Compare', href: '#compare' },
      ],
      cta: 'Apply for beta',
      menu: 'Menu',
      languageShort: '中',
      languageAria: '切换到中文',
    },
    hero: {
      eyebrow: 'Rova · Portable Cloud',
      title: ['Your world.', 'In your hands.'],
      description:
        'Meet Rova. A private cloud that travels with you. Your photos, films, and files — close at hand, wherever life takes you.',
      points: ['No cloud upload', 'Works offline', 'Wireless multi-device access'],
      primaryCta: 'Apply for beta',
      secondaryCta: 'View use cases',
      deviceAlt: 'Rova portable personal cloud device',
    },
    what: {
      eyebrow: '01 · What it is',
      title: 'A small device.\nA world of possibilities.',
      description:
        'Rova combines a hard drive, Wi-Fi, battery, and intelligent file management in a compact device. It avoids cloud uploads and NAS complexity, giving you a personal data library you can carry.',
      devices: ['iPhone', 'iPad', 'Mac', 'Windows', 'TV / projector', "Friend's device"],
      tags: ['Local storage', 'Built-in Wi-Fi', 'No public internet', 'Wireless access', 'Photos / videos / files / music / ebooks'],
    },
    scenes: {
      eyebrow: '02 · What it solves',
      title: 'Life moves.\nYour world comes along.',
      description:
        'From everyday memories to faraway adventures. Keep what matters close, without depending on a connection.',
      items: [
        {
          no: 'Use case 1',
          title: 'More memories. More space.',
          desc: 'Back up large photo and video libraries to Rova instead of paying for more iCloud storage or buying a higher-capacity phone. Free up space whenever you need it.',
          img: '/rova/scene-phone.webp',
          alt: 'A phone backing up photos to Rova',
        },
        {
          no: 'Use case 2',
          title: 'Off the grid. In the moment.',
          desc: 'Back up camera, drone, and phone footage on location without bringing a laptop. Preview and sort media offline, without compressed chat transfers or upload waits.',
          img: '/rova/scene-outdoor.webp',
          alt: 'Backing up footage to Rova during an outdoor shoot',
        },
        {
          no: 'Use case 3',
          title: 'Good things, shared nearby.',
          desc: 'Let friends, family, or customers access the same photos, videos, music, or documents even without internet. One person carries it, everyone nearby connects wirelessly.',
          img: '/rova/scene-share.webp',
          alt: 'People nearby sharing the same content through Rova',
        },
      ],
    },
    features: {
      title: 'Less dependence.\nMore freedom.',
      advantages: [
        { title: 'Local and private', desc: 'Your data stays with you and is not uploaded to someone else’s server by default.' },
        { title: 'Multi-device access', desc: 'Phones, tablets, and computers can all connect to the same personal library.' },
        { title: 'Nearby speed', desc: 'Large files move directly between nearby devices, without waiting for cloud uploads and downloads.' },
        { title: 'Nearby sharing', desc: 'Share selected content with people around you during trips, gatherings, or in-store moments.' },
        { title: 'Modern browsing', desc: 'Open photos, videos, and files through a natural interface instead of staring at folders.' },
      ],
      mockupAlt: 'Rova interface on a laptop, tablet, and phone',
      platformTitle: 'Different screens.\nThe same world.',
      platformDesc: 'Whatever device you use, Rova adapts so files can flow naturally across your phone, tablet, and computer.',
      platforms: ['Windows', 'macOS', 'iOS', 'Android', 'Web'],
    },
    how: {
      eyebrow: '03 · How it works',
      title: 'Less setup.\nMore living.',
      steps: [
        { n: '1', title: 'Power on and go', desc: 'Built-in battery and Wi-Fi make it bag-ready. No cables, setup, or technical tinkering required.' },
        { n: '2', title: 'Connect devices', desc: 'Find and join Rova’s nearby network from your phone, iPad, or computer. No public internet or cloud account required.' },
        { n: '3', title: 'Access and back up', desc: 'Browse photos and videos like a local album, then back up device content with one tap even when offline.' },
        { n: '4', title: 'Organize intelligently', desc: 'AI gradually helps classify, search, and understand your files, making the library more useful over time.' },
      ],
    },
    compare: {
      eyebrow: '04 · How it differs from cloud drives, NAS, and hard drives',
      title: 'A different way\nto keep your world.',
      description:
        'Cloud drives are convenient but your data lives elsewhere. NAS is private but complex and not portable. External drives are affordable but awkward on phones and tablets. Rova is a private cloud you keep nearby, carry with you, and use directly from mobile and desktop devices.',
      ability: 'Capability',
      partial: 'Partial',
      columns: ['Cloud drive', 'NAS', 'External drive', 'Rova'],
      rows: [
        { dim: 'You hold the data', cloud: false, nas: true, drive: true, rova: true },
        { dim: 'Portable and bag-ready', cloud: true, nas: false, drive: true, rova: true },
        { dim: 'Wireless phone / tablet access', cloud: true, nas: 'half', drive: false, rova: true },
        { dim: 'Works without internet', cloud: false, nas: 'half', drive: true, rova: true },
        { dim: 'One-time purchase, saves long term', cloud: false, nas: true, drive: true, rova: true },
        { dim: 'Modern browsing interface', cloud: true, nas: false, drive: false, rova: true },
      ],
    },
    cta: {
      title: 'Take your world\nwith you.',
      description:
        'More private, smarter, more portable, and easier to use. Leave your email and we will reach out when the first beta devices are available.',
      submitted: 'Received. Thanks for your interest!',
      emailPlaceholder: 'Your email',
      submit: 'Apply for beta',
      submitting: 'Submitting…',
      submitError: 'Couldn’t submit. Please try again.',
    },
    footer: {
      description: 'A portable private cloud that keeps your photos, videos, and files close at hand.',
      contactTitle: 'Contact',
      address: 'Chuangzhi Cloud City, Nanshan District, Shenzhen, Guangdong',
      contactTeam: 'Contact team',
      followUs: 'Follow us',
      social: ['Xiaohongshu', 'Bilibili', 'YouTube', 'GitHub'],
      copyright: '© 2026 akl. All rights reserved.',
    },
  },
} as const;

export type CustomerCopy = (typeof customerCopy)[keyof typeof customerCopy];
