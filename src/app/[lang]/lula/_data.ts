import type { TocGroup } from '@/components/InnoxTocSidebar';
import {
  Award,
  BookOpen,
  Brain,
  Clock,
  Crown,
  HandCoins,
  Heart,
  MonitorOff,
  ShieldCheck,
  Target,
  Users,
  type LucideIcon,
} from 'lucide-react';
import type { Tone } from './_shared';

type Tier = '第一梯队 · AI 原生爆款' | '第二梯队 · 故事机/早教机' | '第三梯队 · IP 联名';

interface Competitor {
  img: string;
  name: string;
  brand?: string;
  link?: string;
  price: string;
  sales: string;
  salesNote?: string;
  design: string;
  clientForm: string;
  accountSystem: string;
  tier: Tier;
  tags?: string[];
  gallery?: string[];
  video?: string;
}

export const COMPETITORS: Competitor[] = [
  {
    img: '/lula/competitors/bubblepal.jpg',
    name: 'BubblePal AI 挂件',
    brand: '跃然创新 Haivivi',
    link: 'https://global.haivivi.com/products/bubblepal-ai-companion-toy',
    price: '海外 $129 / 国内 399–499 元',
    sales: '累计超 20 万台',
    salesNote: '首月销量破万',
    design: '挂件嵌入式 AI 核心，把任意毛绒玩具"复活"；多角色、长期记忆、无屏、家长后台成长报告',
    clientForm: '主推 Haivivi Pal App，iOS/Android 全平台；承担配网、角色定制、成长周报。',
    accountSystem: '手机号验证码注册登录；绑定设备后可选填宝宝昵称/性别/生日/地区，宝宝档案非强制。',
    tier: '第一梯队 · AI 原生爆款',
    tags: ['挂件', '大模型对话', '家长后台'],
  },
  {
    img: '/lula/competitors/haivivi-cocomate-ultraman.webp',
    name: 'Haivivi CocoMate 奥特曼 AI 礼盒',
    brand: 'Haivivi 旗舰店 · 跃然创新 × 圆谷 UltraPark',
    link: 'https://detail.tmall.com/item.htm?id=968588277191',
    price: '天猫店铺优惠后约 799 元；优惠前 999 元',
    sales: '天猫已售 1000+',
    salesNote: '超 8000 人加购；79 条评价 / 22 个问大家',
    design: '赛罗 / 迪迦 / 贝利亚三款奥特曼 IP 毛绒礼盒；CocoMate 主机 + 毛绒玩偶 + 好朋友指南 + 角色兑换卡 + 主题卡，主打豆包陪伴对话和儿童问答',
    clientForm: '复用 Haivivi Pal App，硬件即 BubblePal 同款，仅角色 IP 替换；无独立小程序。',
    accountSystem: '与 BubblePal 同一账号体系，手机号验证码登录，沿用宝宝档案字段（昵称/性别/生日/地区）。',
    tier: '第一梯队 · AI 原生爆款',
    tags: ['奥特曼 IP', '礼盒', '天猫热品'],
  },
  {
    img: '/lula/competitors/folotoy.png',
    name: 'FoloToy AI 仙人掌 / MagicBox',
    brand: 'FoloToy',
    link: 'https://store.folotoy.com/products/folotoy-ai-cactus',
    price: '$79–99 / 国内 200–500 元',
    sales: '2024.11 出货 2 万台',
    salesNote: '2025 目标 30–50 万台',
    design: 'AI 魔盒模组，可装进不同玩具；按键说话、跳舞互动、多语言、低成本通用机芯',
    clientForm: '面向开发者的 Web 控制台（魔匣后台）为主，无强制 C 端 App；设备出厂预置服务器。',
    accountSystem: '控制台账号自建（邮箱/账号），C 端用户基本无注册要求；不收集宝宝档案。',
    tier: '第一梯队 · AI 原生爆款',
    tags: ['通用机芯', '多语言', '潮玩'],
  },
  {
    img: '/lula/competitors/kedou.png',
    name: '可豆陪陪 友爱兔 / 好奇熊',
    brand: '贝陪科技',
    price: '单只 ≈399 元 / 礼盒 ≈549 元',
    sales: '上线两周天猫 AI 玩具 TOP3',
    salesNote: '超 3000 人加购',
    design: '毛绒本体 + 会眨眼"超能眼镜" + NFC 启智卡；免按压唤醒、连续对话、家长小程序',
    clientForm: '主推家长微信小程序 + NFC 启智卡，无独立 App；小程序承担成长报告/分享。',
    accountSystem: '微信授权登录小程序；强制注册与宝宝档案字段未完整披露。',
    tier: '第一梯队 · AI 原生爆款',
    tags: ['NFC 卡牌', '毛绒玩偶', '免唤醒'],
  },
  {
    img: '/lula/competitors/xiaozhi.png',
    name: '小智 AI 对话机器人 S3 Ultra',
    brand: '顺趣 / 小智',
    price: '截图价 229 元；首发到手约 119 元',
    sales: '电商截图热品',
    salesNote: '豆包 / DeepSeek 大模型卖点明确',
    design: '百元档 AI 对话硬件；支持角色自定义、对话打断、音乐播放和声音定制，适合做低价位对照样本',
    clientForm: '主走 Web 控制台 xiaozhi.me 配网激活，无独立 C 端 App；偏开发者形态。',
    accountSystem: '控制台需注册账号（邮箱/手机号），输入设备 6 位验证码绑定；不收集宝宝档案。',
    tier: '第一梯队 · AI 原生爆款',
    tags: ['百元档', '豆包', 'DeepSeek'],
  },
  {
    img: '/lula/competitors/honor-baoao.png',
    name: '荣耀巴博 Bao-ao AI 公仔',
    brand: '荣耀生态',
    price: '截图价 459 元',
    sales: '电商截图热品',
    salesNote: '主打官方品质和送礼心智',
    design: '泰迪熊形态的 AI 公仔，卖点集中在益智陪伴、安抚对话和大厂背书；更像"品牌信任 + 毛绒陪伴"的组合',
    clientForm: '接入荣耀智慧空间 App（iOS/Android），作为生态入口；无独立小程序。',
    accountSystem: '荣耀账号登录（手机号/邮箱/第三方）；未单独披露宝宝档案字段。',
    tier: '第三梯队 · IP 联名',
    tags: ['大厂背书', '送礼', '毛绒'],
  },
  {
    img: '/lula/competitors/folotoy-panda.png',
    name: 'FOLOTOY 智能毛绒玩具 熊猫 / 泰迪熊',
    brand: 'FoloToy',
    price: '截图价 315 元',
    sales: '电商截图热品',
    salesNote: '3–12 岁早教陪伴定位',
    design: '把 FoloToy 的 AI 模组放进更亲和的毛绒本体；能讲故事、对话互动，价格压在 300 元级',
    clientForm: '同 FoloToy 体系，开机蓝牙配网即用，C 端无强制 App / 小程序。',
    accountSystem: 'C 端无注册流程；用户档案未公开，仅开发者侧需控制台账号。',
    tier: '第一梯队 · AI 原生爆款',
    tags: ['毛绒', '早教', '300 元级'],
  },
  {
    img: '/lula/competitors/tomcat.jpg',
    name: '汤姆猫大模型 AI 机器人 AIR001',
    brand: '会说话的汤姆猫家族旗舰店 · 汤姆猫 (300459)',
    link: 'https://detail.tmall.com/item.htm?id=865150113989',
    price: '加补后 ¥1455；优惠前 ¥1799（2 年 / 5 年 / 终身大模型算力 三档 SKU）',
    sales: '天猫已售 800+',
    salesNote: '超 4000 人加购；200+ 评价；高频标签"孩子很喜欢" 44 条',
    design: '强 IP 溢价；灵动双眼、表情、120° 转头、情绪识别、主动聊天、中英互动；按"算力年限"分档售卖订阅是核心商业模式',
    clientForm: '主推微信小程序（扫码绑定），承担对话简报；无独立 C 端 App。',
    accountSystem: '微信授权登录小程序；强制绑定设备，宝宝档案字段未明确披露。',
    tier: '第三梯队 · IP 联名',
    tags: ['IP', '算力订阅', '情绪识别'],
  },
  {
    img: '/lula/competitors/fuzozo.png',
    name: '芙崽 Fuzozo / 华为智慧憨憨',
    brand: '华为生态',
    price: '399 元',
    sales: '芙崽月销超 2 万',
    salesNote: '渠道预订超 10 万；智慧憨憨上线即缺货',
    design: 'Z 世代情绪陪伴：触摸/摇晃/语音多模态、日记记忆、社群与潮玩属性强',
    clientForm: '主推 Fuzozo App（iOS/Android），承担配网、日记、好友圈；无小程序入口。',
    accountSystem: '手机号验证码强制注册登录；需授权定位完成配网；面向 18–35 岁，无宝宝档案。',
    tier: '第一梯队 · AI 原生爆款',
    tags: ['情绪陪伴', '多模态', '潮玩'],
  },
  {
    img: '/lula/competitors/babycare-westie.png',
    name: 'babycare AI 智能西高地服饰款玩具',
    brand: 'babycare',
    price: '截图价 699 元；到手约 649 元起',
    sales: '电商截图显示 700+ 人付款',
    salesNote: '西高地小狗造型，适用对象很广',
    design: '母婴品牌切入 AI 玩具；小狗毛绒外观 + 会聊会陪玩 + 服饰配件，把"玩具"做成高客单礼物',
    clientForm: '通过 babycare 自有微信小程序矩阵承接（商城/会员/智能玩具入口），无独立 App。',
    accountSystem: '微信授权登录小程序；账号沿用 babycare 会员，宝宝档案字段未公开。',
    tier: '第二梯队 · 故事机/早教机',
    tags: ['母婴品牌', '小狗', '高客单'],
    gallery: [
      '/lula/competitors/babycare-westie-gallery/01-cover.png',
      '/lula/competitors/babycare-westie-gallery/02-giftbox.png',
      '/lula/competitors/babycare-westie-gallery/03-features.png',
      '/lula/competitors/babycare-westie-gallery/04-stores.png',
      '/lula/competitors/babycare-westie-gallery/05-media.png',
      '/lula/competitors/babycare-westie-gallery/06-awards.png',
    ],
    video: 'https://ooakloo.oss-cn-shanghai.aliyuncs.com/lula/competitors/babycare-westie-gallery/video.mov',
  },
  {
    img: '/lula/competitors/bctoys/01-cover.png',
    name: 'babycare × BCTOYS AI 小丑鸭 / AI 高高 · 拖拖',
    brand: 'babycare × BCTOYS',
    price: '周年庆活动价 ¥449 起；510 限时补贴后 ¥416.55 起；优惠前 ¥600 起；88VIP 9.5 折',
    sales: '到手 ≈¥449；天猫直播间在播；168 人付款（截图口径）',
    salesNote: '"懂玩 懂聊 懂你的 AI 天鸭"；强调摸头反馈、海量曲库点歌、记忆喜好、情绪安抚',
    design: '小丑鸭 / 高高 / 拖拖三角色矩阵，六大模块力成长：嘴巴三重情绪反馈、10 种动作 / 20 种组合动作；记忆喜好并主动回应；父母自定义习惯/记事/养育提醒；多种角色扮演 / DIY 故事 / 海量歌曲；情绪识别安抚；摸头有惊喜——每次反馈不同',
    clientForm: '复用 babycare 微信小程序矩阵；硬件支持线上歌单持续更新与离线播放本地 9 首歌；适合 1–5 岁，单向问答模式',
    accountSystem: '微信授权登录小程序，沿用 babycare 会员；宝宝档案 / 习惯养成参数未单独披露；蓝牙喂哺联动其他 babycare 智能配件',
    tier: '第三梯队 · IP 联名',
    tags: ['IP 矩阵', '小丑鸭', '低龄陪伴'],
    gallery: [
      '/lula/competitors/bctoys/01-cover.png',
      '/lula/competitors/bctoys/02-touch.png',
      '/lula/competitors/bctoys/03-modes.png',
      '/lula/competitors/bctoys/04-modules.png',
      '/lula/competitors/bctoys/05-music.png',
      '/lula/competitors/bctoys/06-action.png',
    ],
    video: 'https://ooakloo.oss-cn-shanghai.aliyuncs.com/lula/competitors/bctoys/video.mov',
  },
  {
    img: '/lula/competitors/ubtech-wukong.jpg',
    name: '优必选 悟空机器人',
    brand: 'UBTECH 优必选',
    link: 'https://www.ubtrobot.com/cn/consumer/humanoid-robots/alpha-series/alpha-mini',
    price: '799–1599 元',
    sales: '2026 对标清单补充',
    salesNote: '目标人群：6–15 岁、编程启蒙家庭',
    design: '人形动作交互、编程教育、AI 对话、舞蹈表演；自研人形 AI、视觉识别和可编程拓展构成核心壁垒。',
    clientForm: '优势：人形形态差异化强，编程体系成熟，高端家长认可；短板：价格偏高，体积大，便携性差，低龄适配弱。',
    accountSystem: '对标切入点：做小型便携、平价可编程平替款，把编程启蒙压进更大众的礼品价位。',
    tier: '第一梯队 · AI 原生爆款',
    tags: ['人形机器人', '编程启蒙', '高客单'],
  },
  {
    img: '/lula/competitors/robosen-transformers.png',
    name: '乐森 变形金刚 AI 机器人',
    brand: 'Robosen 乐森 × 变形金刚',
    link: 'https://www.robosen.cn/flagship-megatron',
    price: '1299–2999 元',
    sales: '2026 对标清单补充',
    salesNote: '目标人群：7–14 岁男孩、IP 爱好者',
    design: '自动变形、语音控制、剧情对话、机甲互动；定制大模型语音交互与动作 AI 算法强化 IP 演绎。',
    clientForm: '优势：顶级 IP 加持，可玩性和溢价能力强；短板：价格门槛极高，受众较窄，教育属性弱。',
    accountSystem: '对标切入点：用中小价位国产动漫 IP、轻度变形和 AI 对话，做大众化机甲陪伴款。',
    tier: '第三梯队 · IP 联名',
    tags: ['顶级 IP', '机甲', '自动变形'],
  },
  {
    img: '/lula/competitors/popmart-monsters.jpg',
    name: '泡泡玛特 AI 潮玩系列',
    brand: 'POP MART 泡泡玛特',
    link: 'https://www.popmart.com/gb/products/3bd2b923-383d-4461-a8ab-10383fd1125e',
    price: '399–699 元',
    sales: '2026 对标清单补充',
    salesNote: '目标人群：6–15 岁、潮玩收藏家庭',
    design: 'IP 专属对话、盲盒剧情、轻早教、语音互动；第三方大模型 API 定制人设，重点服务礼品和收藏场景。',
    clientForm: '优势：IP 溢价高，自带粉丝，适合礼品市场；短板：AI 智能化一般，性价比低，重收藏轻实用。',
    accountSystem: '对标切入点：小众 IP 自研、更强 AI 交互和更低定价，切入潮玩用户但提高日常使用频率。',
    tier: '第三梯队 · IP 联名',
    tags: ['潮玩 IP', '盲盒剧情', '礼品市场'],
  },
  {
    img: '/lula/competitors/mitu.jpg',
    name: '小米米兔故事机',
    brand: 'Xiaomi',
    link: 'https://www.mi.com/mitu',
    price: '≈199 元',
    sales: '销量曾过百万',
    salesNote: '覆盖 2000 万家庭',
    design: '百元价位、微信远程语音、海量故事、智能语音点播、耐摔安全材质',
    clientForm: '双通道：主推米家 App 配网，辅以"米兔智能故事机"微信公众号扫码绑定。',
    accountSystem: '小米账号（手机号/邮箱/第三方）或微信授权；公众号路径无需注册米家账号。',
    tier: '第二梯队 · 故事机/早教机',
    tags: ['百元', '方言', '下沉'],
  },
  {
    img: '/lula/competitors/ai-toy-placeholder.svg',
    name: '澄海白牌 AI 故事机 / 公仔',
    brand: '传统玩具白牌',
    price: '69–199 元',
    sales: '走量型低客单赛道',
    salesNote: '目标人群：下沉市场、低客单价送礼',
    design: '基础讲故事、儿歌和简单问答；通常接通用低价 API，无自研模型，容易形成伪智能体验。',
    clientForm: '优势：价格极低、外观快速仿爆款、利润空间大；短板：答非所问、内容审核弱、隐私安全和合规风险高。',
    accountSystem: '对标切入点：用合规安全和真大模型交互做降维替代，避免卷到 100 元以下的纯硬件毛利战。',
    tier: '第二梯队 · 故事机/早教机',
    tags: ['白牌走量', '低价', '合规风险'],
  },
  {
    img: '/lula/competitors/alilo-f6s.png',
    name: '火火兔 F6S-AI / 新生儿礼盒',
    brand: '火火兔',
    price: '常见 100–500 元；F6S 截图价约 387 元',
    sales: '官方称服务 3000 万+ 家庭',
    salesNote: '覆盖 300+ 城市、海外 40+ 国家；截图显示 6000+ 人付款',
    design: '经典早教故事机升级 AI 形态；0–6 岁内容、儿歌、国学、哄睡、英语磨耳朵，礼盒和防摔包强化送礼场景',
    clientForm: '微信公众号扫码绑定为主入口；鸿蒙智选机型可挂在华为智慧生活 App。',
    accountSystem: '微信授权或华为账号登录；未单独披露宝宝档案字段。',
    tier: '第二梯队 · 故事机/早教机',
    tags: ['下沉之王', 'AI 早教', '礼盒'],
  },
  {
    img: '/lula/competitors/ai-toy-placeholder.svg',
    name: '奥飞娱乐 超级飞侠 AI 机器人',
    brand: '奥飞娱乐 · 超级飞侠',
    price: '199–399 元',
    sales: '2026 对标清单补充',
    salesNote: '目标人群：3–8 岁男童、传统 IP 受众',
    design: 'IP 剧情对话、早教启蒙、语音点播；第三方大模型适配，主要承接传统动画 IP 的儿童认知。',
    clientForm: '优势：IP 根基深，线下商超覆盖强；短板：AI 体验普通，创新功能少，迭代速度慢。',
    accountSystem: '对标切入点：在同 IP 赛道加入多模态交互和个性化养成，提升传统 IP 玩具的持续陪伴感。',
    tier: '第三梯队 · IP 联名',
    tags: ['传统 IP', '线下渠道', '男童市场'],
  },
  {
    img: '/lula/competitors/yeehoo-owl.png',
    name: 'YEEHOO 英氏复读歪头鸭',
    brand: '英氏 YeeHoo',
    price: '截图价 258 元',
    sales: '电商截图显示 8000+ 人付款',
    salesNote: '主打复读学舌、摇头唱歌、早教启蒙',
    design: '传统毛绒早教玩具的"低 AI"对照样本：价格不高、卖相强、功能直接，证明家长仍愿为可爱与启蒙付费',
    clientForm: '无客户端，开机即用纯本机操作；作为非智能对照组。',
    accountSystem: '无账号体系，不收集任何用户信息。',
    tier: '第二梯队 · 故事机/早教机',
    tags: ['复读', '毛绒', '早教启蒙'],
  },
  {
    img: '/lula/competitors/alphaegg.jpg',
    name: '阿尔法蛋智能故事机 Z1',
    brand: '科大讯飞 · 淘云科技',
    price: '约 179–399 元',
    sales: '具体销量未公开',
    design: '讯飞语音能力；5 分钟录 10 段，用爸妈声音讲故事——留守/异地陪伴杀器',
    clientForm: '主推"阿尔法蛋"App（iOS/Android）；承担配网、内容、家长微聊、声音定制。',
    accountSystem: '强制注册账号后绑定设备；必填宝宝年龄/兴趣/能力维度用于个性化推荐。',
    tier: '第二梯队 · 故事机/早教机',
    tags: ['声音克隆', '讯飞 ASR', '父母音'],
  },
  {
    img: '/lula/competitors/niutingting.png',
    name: '牛听听',
    brand: '小寻 · benewtech',
    price: '小水牛 ≈599 / 读书牛 ≈1400–1500 元',
    sales: '具体销量未公开',
    design: '"熏听"体系、定时播放、音频内容库、绘本/英语/国学；家长零学习成本',
    clientForm: '主推牛听听 App（iOS/Android），辅以本牛云盘 Web 端上传个性化资源。',
    accountSystem: 'App 注册登录（手机号为主），云盘支持微信授权；按 0–6 岁成长地图收集宝宝年龄等档案。',
    tier: '第二梯队 · 故事机/早教机',
    tags: ['熏听', '艾宾浩斯曲线', '自动播放'],
  },
  {
    img: '/lula/competitors/luka.png',
    name: '物灵 Luka 绘本阅读机器人',
    brand: 'Ling',
    price: 'Luka Basic 约 799 元',
    sales: '具体销量未公开',
    design: '摄像头识别绘本并朗读；亲子阅读 / 绘本启蒙；比故事机更偏"看书场景"',
    clientForm: '主推 Luka 阅读养成 App（iOS/Android），扫码下载绑定。',
    accountSystem: '强制注册登录；首个绑定账号为管理员，支持多账号家庭共管，可设宝宝信息。',
    tier: '第二梯队 · 故事机/早教机',
    tags: ['绘本识别', '摄像头', '亲子阅读'],
  },
  {
    img: '/lula/competitors/kaishu.png',
    name: '凯叔讲故事 有声硬件',
    brand: '凯叔讲故事',
    price: '故事机 99–699 元',
    sales: '6000 万+ 用户',
    salesNote: '30000+ 内容、145 亿+ 播放',
    design: '内容/IP 驱动，不靠 AI 原生能力；分龄内容、国学/历史/名著音频体系',
    clientForm: '双 App：凯叔听教机 App 管硬件，凯叔讲故事 App 管内容/会员/播放。',
    accountSystem: '手机号验证码注册登录；注册时需填宝宝年龄/性别用于内容推荐，凯叔账号通用。',
    tier: '第二梯队 · 故事机/早教机',
    tags: ['IP 内容', '分龄', '音频'],
  },
];

export const TIER_TONE: Record<Tier, Tone> = {
  '第一梯队 · AI 原生爆款': 'accent',
  '第二梯队 · 故事机/早教机': 'emerald',
  '第三梯队 · IP 联名': 'violet',
};

export const MIIT_TOY_SAFETY_NEWS_URL =
  'https://wap.miit.gov.cn/xwfb/xwfbh/bxwfbh/art/2025/art_ceef45b5aab04aeaa03d7d91888d9807.html';
export const MAGIC_MIRROR_AI_TOY_REPORT_URL = 'https://www.fxbaogao.com/detail/5223236';
export const LEADLEO_AI_TOY_REPORT_URL = 'https://www.fxbaogao.com/detail/5040687';

interface Stat {
  value: string;
  unit?: string;
  label: string;
  note?: string;
  sourceUrl?: string;
}

export const MARKET_STATS: Stat[] = [
  {
    value: '246',
    unit: '亿元',
    label: '2024 中国 AI 玩具市场规模',
    note: '工信部发布会公开口径',
    sourceUrl: MIIT_TOY_SAFETY_NEWS_URL,
  },
  {
    value: '290',
    unit: '亿元',
    label: '2025 预计中国 AI 玩具市场',
    note: '工信部发布会公开口径',
    sourceUrl: MIIT_TOY_SAFETY_NEWS_URL,
  },
  {
    value: '978.5',
    unit: '亿元',
    label: '2024 国内玩具零售总额',
    note: '工信部发布会公开口径',
    sourceUrl: MIIT_TOY_SAFETY_NEWS_URL,
  },
  {
    value: '1000',
    unit: '亿元+',
    label: '2025 国内玩具零售总额预计',
    note: '工信部发布会公开口径',
    sourceUrl: MIIT_TOY_SAFETY_NEWS_URL,
  },
  {
    value: '558.3',
    unit: '亿元',
    label: '2024 潮流收藏玩具及周边',
    note: '工信部发布会公开口径',
    sourceUrl: MIIT_TOY_SAFETY_NEWS_URL,
  },
];

interface MarketSegment {
  dimension: string;
  metric: string;
  note: string;
  source: string;
  sourceUrl: string;
  tone: Tone;
}

export const MARKET_SEGMENTS: MarketSegment[] = [
  {
    dimension: '国内线上 AI 玩具',
    metric: '2025.1–10 销售额 5.2 亿 / 销量 122.5 万件',
    note: '销售额同比 +394.9%，销量同比 +960.5%，线上渗透率升至 3.8%；说明线上还小，但增长非常快。',
    source: '魔镜洞察',
    sourceUrl: MAGIC_MIRROR_AI_TOY_REPORT_URL,
    tone: 'accent',
  },
  {
    dimension: '渠道',
    metric: '抖音渠道同比 +4391.3%',
    note: 'AI 玩具的交互效果需要被演示，短视频和直播比货架电商更容易完成品类教育。',
    source: '魔镜洞察',
    sourceUrl: MAGIC_MIRROR_AI_TOY_REPORT_URL,
    tone: 'rose',
  },
  {
    dimension: '品类增速',
    metric: 'AI 潮玩 +798.7% / AI 教辅益智 +473.7%',
    note: '毛绒类型潮玩份额从 7.0% 升至 15.7%；高端具身机器人份额从 60%+ 降至 38%。',
    source: '魔镜洞察',
    sourceUrl: MAGIC_MIRROR_AI_TOY_REPORT_URL,
    tone: 'violet',
  },
  {
    dimension: '价格段迁移',
    metric: '2024 高端主导 → 2025 千元以下主流',
    note: '2024 年 3000 元以上价格段占 54.0%；随着 AI 模组和供应链降本，中低端产品开始放量。',
    source: '魔镜洞察',
    sourceUrl: MAGIC_MIRROR_AI_TOY_REPORT_URL,
    tone: 'emerald',
  },
  {
    dimension: '细分均价',
    metric: 'AI 潮玩 428.7 元 / 教辅 404.9 元 / 机器人 4359.5 元',
    note: 'Lula 若打 ¥100–150，需要证明低于当前主流均价后仍能保证交互、内容和售后。',
    source: '魔镜洞察',
    sourceUrl: MAGIC_MIRROR_AI_TOY_REPORT_URL,
    tone: 'amber',
  },
  {
    dimension: '竞争集中度',
    metric: 'TOP10 品牌占 62.8%',
    note: '头部集中度已经不低，但腰尾部新品牌仍在快速涌入；窗口期存在，淘汰也会很快。',
    source: '魔镜洞察',
    sourceUrl: MAGIC_MIRROR_AI_TOY_REPORT_URL,
    tone: 'neutral',
  },
  {
    dimension: '长期上限',
    metric: '2030 中国 AI 玩具预计 797.8 亿',
    note: '头豹研究院预测口径，用于观察 2025–2030 年的中长期增长空间。',
    source: '头豹研究院',
    sourceUrl: LEADLEO_AI_TOY_REPORT_URL,
    tone: 'accent',
  },
  {
    dimension: '全球参照',
    metric: '2023 全球 AI 玩具 125 亿美元 → 2030 250 亿美元',
    note: '全球销售额预测，2030 年渗透率接近 20%；用于判断中国 AI 玩具出海空间。',
    source: '魔镜洞察',
    sourceUrl: MAGIC_MIRROR_AI_TOY_REPORT_URL,
    tone: 'violet',
  },
];

interface PriceBand {
  range: string;
  status: '已被占' | '真空段' | '已挤满';
  who: string;
  note: string;
}

export const PRICE_BANDS: PriceBand[] = [
  {
    range: '< 100 元',
    status: '已被占',
    who: '开源小智 + 华强北白牌',
    note: '几十元成本攒一台；没品牌、没售后、没内容',
  },
  {
    range: '¥100–150',
    status: '真空段',
    who: '——目前没有玩家——',
    note: '"有 IP / 有品牌 / 有售后 / 50%+ 毛利"的真空。这就是 Lula 的位置',
  },
  {
    range: '300–800 元',
    status: '已挤满',
    who: 'BubblePal 399 / CocoMate 799 / 芙崽 399 / 智能憨憨',
    note: '头部都在这里厮杀，主打一二线尝鲜家长',
  },
];

interface OppRisk {
  title: string;
  why: string;
}

export const OPPORTUNITIES: OppRisk[] = [
  {
    title: '¥100–150 价格真空',
    why: '头部全在 300–800 元厮杀，<100 元被开源小智 / 华强北白牌占着——中间这一段没有"有 IP、有售后、有品牌"的玩家',
  },
  {
    title: '银发陪伴已被验证',
    why: '京东京造"唠唠鹦"100 多元跑通方言+养生+紧急呼救——证明这不是 PPT 概念，是真实付费场景',
  },
  {
    title: '留守儿童刚需',
    why: '县城 / 乡镇大量"爷奶带娃、父母在外打工"，"会聊天的奥特曼"是情感代偿——比一线"AI 育儿助手"更刚性',
  },
  {
    title: '方言 + 弱网兜底',
    why: '头部都在北上广深，普通话团队、满格 WiFi——他们做不好的两件事，正是下沉用户的体验底线',
  },
  {
    title: '渠道路径清晰',
    why: '拼多多 + 抖音 / 快手是线上主战场；奥飞、火火兔已在做社区团购和母婴店下沉，路被踩通了',
  },
  {
    title: '老 IP 撬动决策',
    why: '县城妈妈认的是奥特曼 / 喜羊羊 / 熊出没——20 年沉淀的形象比 Labubu 这种潮 IP 有效得多',
  },
];

export const RISKS: OppRisk[] = [
  {
    title: '退货率 30–40%',
    why: '头部都没解决的伤口；下沉用户价格敏感、容忍度低，七天无理由会让退货更糟，直接打穿现金流',
  },
  {
    title: '技术门槛归零',
    why: '开源小智 + DeepSeek / 豆包免费 API + 乐鑫 ESP32，几十块就能攒一台；剩下能拼的只剩品牌、渠道、成本',
  },
  {
    title: '12–18 个月窗口',
    why: '行业人士预测今年多出几百家竞争者——要么这段时间打出区域品牌，要么被传统玩具厂或大厂收割',
  },
  {
    title: '订阅模式劝退',
    why: 'BubblePal 99 元/年续费才能继续聊，且不续就锁本体——下沉用户直接判定为骗局；反过来"硬件买断 + 含 1 年云服务 + 离线永不锁 + 二年起 ¥39/年(其 1/3)"是杀手锏',
  },
  {
    title: '巨头下场',
    why: '字节豆包、京东 JoyInside、华为小艺、奥飞、火火兔都在做——供应链 / IP / 渠道结构性优势压顶',
  },
  {
    title: '留存数据不堪',
    why: '两周新鲜感过去后活跃度断崖式下跌，没人敢公布 DAU / MAU——复购故事讲不通，单台硬件必须能直接挣钱',
  },
];

interface MarketingTemplate {
  label: string;
  content: string;
}

interface MarketingScene {
  num: string;
  channel: string;
  desc: string;
  templates: MarketingTemplate[];
}

export const CORE_MESSAGE = {
  oneLine: '会听话的 AI 朋友，陪孩子从 3 岁聊到 8 岁——¥149 起，硬件买断 + 含 1 年云服务，没有屏幕。',
  pillars: [
    '没有屏幕，不伤眼——比手机强多了',
    '听得懂方言、听得懂小孩话——3 岁也会用',
    '硬件买断 · 含 1 年 AI 对话 · 离线故事 / 儿歌永不锁',
  ],
  hook: '能学爸爸妈妈的声音——你不在家的时候，它替你陪孩子。',
  trust: '接入豆包全链路大模型与语音服务 · 食品级硅胶 · 365 天换新 · 全国包邮',
  banned: ['多模态', '长上下文', 'Agent', '生成式', 'AI Native', '深度学习'],
};

export const MARKETING_SCENES: MarketingScene[] = [
  {
    num: '01',
    channel: '电商主图 / 详情页',
    desc: '拼多多 + 抖音商城为主；每张图一个核心信息，文字越大越好',
    templates: [
      { label: '主图 1 · 击穿心智', content: '"¥149 起 / 含 1 年云服务 / 没有屏幕"——三行字盖住产品图一半。配图：孩子抱玩具，妈妈在旁边笑' },
      { label: '主图 2 · 声音克隆', content: '"会喊妈妈的 AI 朋友"——配妈妈对着手机录音的画面' },
      { label: '主图 3 · 方言', content: '"听得懂四川话 / 河南话 / 东北话"——下面列方言图标，命中本地用户' },
      { label: '主图 4 · 免唤醒', content: '"3 岁孩子也会用，直接喊它名字就行"——突出免按键交互' },
      { label: '主图 5 · 售后', content: '"365 天坏了换新，不修不退"——下沉市场最关心的钩子' },
      { label: '详情页 · 痛点共鸣三连', content: '担心孩子玩手机毁眼睛？/ 工作忙没时间陪孩子？/ 想给孩子用 AI 又怕交不完的会员费？' },
      { label: '详情页 · 信任背书', content: '豆包全链路大模型与语音服务 · FDA/SGS 双认证食品级硅胶 · 365 天换新 · 全国包邮 · 7 天无理由' },
    ],
  },
  {
    num: '02',
    channel: '抖音口播脚本(15–30s)',
    desc: '前 3 秒必须留人；口语 + 钩子 + 冲突感',
    templates: [
      {
        label: 'A · 留守儿童情感款 30s',
        content: '妈妈在工厂看视频里孩子哭 → 奶奶："宝宝又哭了，说想妈妈" → 妈妈打开 App 录一段话 → 玩具用妈妈声音说"宝宝乖，妈妈就在这呢" → 孩子笑着抱玩具睡了。字幕：学会妈妈声音的 AI 朋友 · ¥149 起 · 含 1 年云服务',
      },
      {
        label: 'B · 对比手机款 15s',
        content: '"你家孩子还在抢手机看？我家娃自从有了这个，再也不要手机了。" 展示玩具→"没屏幕、能聊天、会讲故事、听得懂老家话。¥149 起买回家，含 1 年 AI 对话；第二年续费才 ¥39，BubblePal 可是 99 一年呢，我都后悔没早买。"',
      },
      {
        label: 'C · 省心妈妈款 20s',
        content: '"做饭的时候孩子缠着我？以前我崩溃，现在我笑。" 玩具："宝宝，我们来背首古诗好不好？" "它能聊天、能讲故事、能哄睡，我做饭的 30 分钟它全包了。"',
      },
    ],
  },
  {
    num: '03',
    channel: '产品包装文案',
    desc: '县城母婴店 / 文具店货架；包装是"沉默销售员"，3 秒讲清楚',
    templates: [
      { label: '正面主视觉', content: '小布 · 会听话的 AI 朋友 · ¥149 起 · 含 1 年云服务 · 没有屏幕' },
      { label: '侧面三卖点', content: '🎙️ 学会爸爸妈妈的声音 · 🗣️ 听得懂方言 + 小孩话 · 📚 接入豆包大模型，和大人用的 AI 是一家' },
      { label: '背面详情', content: '适用 3-8 岁 / 食品级硅胶 + ABS / FDA·SGS 双认证 / 续航 8 小时 / 内置 500 故事 + 200 儿歌 + 1000 十万个为什么 / 365 天换新 / 含 1 年 AI 对话 · 离线故事儿歌永久不锁' },
    ],
  },
  {
    num: '04',
    channel: '县域地推 / 母婴店导购',
    desc: '乡镇母婴店 / 幼儿园门口 / 商场儿童区；县代理大姐主战场',
    templates: [
      { label: '开场 30s', content: '"姐，你家孩子几岁啦？——我这有个会说话的 AI 玩具，跟你家孩子聊一聊，他要是不喜欢咱不买。"' },
      { label: '演示阶段', content: '不要先讲产品，直接让玩具问孩子："你叫什么名字呀？最喜欢吃什么？我给你讲个故事好不好？"——孩子一笑，单子基本成了' },
      { label: '疑问 · 伤眼吗', content: '"它没屏幕，完全不发光，跟玩偶一样，只是会说话。"' },
      { label: '疑问 · 听得懂吗', content: '"专门训练过小孩说话的口音，不像那些智能音箱。咱试试就知道了——[让孩子说话]"' },
      { label: '疑问 · 续费吗', content: '"我们这个不一样。¥149 起，硬件买你的、内置一年 AI 对话；离线故事和儿歌永远不锁，不会变砖。第二年起 ¥39 一年云续费——BubblePal 是 99 一年，我们就是 1/3 价钱。"' },
      { label: '疑问 · 坏了怎么办', content: '"一年内坏了直接换新机，不修不退，微信扫码就办。"' },
    ],
  },
  {
    num: '05',
    channel: '微信群裂变 · 县代理',
    desc: '县代理大姐建本地家长群；老带新机制是命门——和 11 避战章节的 ★ 护城河咬合',
    templates: [
      { label: '入群福利', content: '入群送试用 IP 外衣体验券 / 父母声音录制引导(¥0 但有获取门槛)' },
      { label: '老带新返现', content: '推荐成功送一套 IP 外衣 / 内容包；自动生成成长卡片带二维码，朋友圈一键转发' },
      { label: '群内活动', content: '节日方言儿歌赛 / 周末线下亲子聚会 / 晒娃返现 / 县代理大姐每周直播答疑' },
      { label: '一键炫耀卡片', content: '孩子学会一首古诗后，小程序自动生成精美卡片，底部带二维码——既是炫耀也是拉新' },
    ],
  },
];

interface AnxietyWindow {
  label: string;
  age: string;
  trigger: string;
}

export const ANXIETY_WINDOWS: AnxietyWindow[] = [
  {
    label: '窗口 A',
    age: '2.5–3 岁',
    trigger: '幼儿园前焦虑——第一次面对"我要把孩子交给社会"，第一次担心"我家孩子会不会比别人差"，第一次被幼儿园老师 / 家长群"卷"到',
  },
  {
    label: '窗口 B',
    age: '5–6 岁',
    trigger: '幼小衔接焦虑——拼音 / 识字 / 英语 / 数学要不要提前学，"再不学就晚了"的压迫感最强；家长群疯狂讨论"学习机 / 网课 / AI"',
  },
];

interface UserCircle {
  letter: string;
  label: string;
  scale: string;
  desc: string;
  strategy: string;
  budget: string;
  tone: Tone;
}

export const USER_CIRCLES: UserCircle[] = [
  {
    letter: 'A',
    label: '县城/乡镇 普通工薪',
    scale: '~5,000 万家庭',
    desc: '县城公务员 / 教师 / 小生意人 / 打工夫妻；爸妈双方在身边或同城',
    strategy: '主战场——付费稳、传播效率高、复购最有潜力',
    budget: '60% 资源',
    tone: 'accent',
  },
  {
    letter: 'B',
    label: '留守儿童家庭',
    scale: '~3,000 万家庭',
    desc: '父母在外务工(45.6% 双方都外出)，爷奶带娃，平均 59 岁、小学文化为主',
    strategy: '情感杀器——声音克隆 + 远程留言为这群人设计',
    budget: '30% 资源',
    tone: 'violet',
  },
  {
    letter: 'C',
    label: '三四线 中产 / 准中产',
    scale: '~2,000 万家庭',
    desc: '事业单位中层 / 银行 / 医院；有钱有闲焦虑足；女儿幼小衔接',
    strategy: '扩张目标——V2 阶段客单 ¥399–499 上探',
    budget: '10% 资源',
    tone: 'amber',
  },
];

interface Persona {
  name: string;
  role: string;
  age: string;
  city: string;
  child: string;
  income: string;
  apps: string;
  pain: string;
  decision: string;
  quote: string;
  oneLiner: string;
  weight: string;
  tone: Tone;
}

export const PERSONAS: Persona[] = [
  {
    name: '王芳',
    role: '县城宝妈',
    age: '32 岁 / 大专',
    city: '河南某县城自购房',
    child: '5 岁儿子幼儿园中班',
    income: '家庭月入 ¥6,000–12,000',
    apps: '微信 / 抖音 / 拼多多 / 小红书',
    pain: '一天累成狗孩子还粘人；他爸天天打游戏陪都是我陪；想不输人但讨厌被骗',
    decision: '抖音种草 → 妈妈群熟人验证 → 拼多多 / 抖音商城下单(7 天可退)',
    quote: '"我没文化辅导他作业讲不清楚，要是有个东西能教他就好了。"',
    oneLiner: '想做"好妈妈"但累得想撂挑子，会被"省心 + 不伤眼 + 一次买断 + 续费不到 BubblePal 一半"打动，但只在熟人验证后才下单',
    weight: '★★★ 主战场',
    tone: 'accent',
  },
  {
    name: '刘秀英 + 李丽',
    role: '留守家庭(奶奶 + 在外妈妈)',
    age: '奶奶 62 / 妈妈 30',
    city: '四川县下乡镇 ↔ 东莞',
    child: '4 岁孙子小宝',
    income: '妈妈夫妻月入 ¥8,000–12,000，寄回 3,000–4,000',
    apps: '奶奶千元安卓只用微信视频；妈妈 OPPO + 抖音 / 1688 / 拼多多',
    pain: '妈妈愧疚想"在场"；奶奶不会用电子产品；小宝想妈妈说不出来',
    decision: '抖音被"妈妈声音哄睡"打中 → 老乡群验证"奶奶能用" → 直接寄回老家',
    quote: '"我在外打工挣钱给孩子，但孩子根本不认识我。每次视频他都哭。"',
    oneLiner: '一对被距离割开的母子——妈妈愿意为"声音的在场"付任何价钱，奶奶不会用任何复杂的东西',
    weight: '★★★ 情感杀器',
    tone: 'violet',
  },
  {
    name: '陈晓',
    role: '三四线虎妈',
    age: '34 岁 / 本科',
    city: '江苏南通自购房',
    child: '6 岁女儿幼小衔接',
    income: '家庭年入 ¥25–40 万',
    apps: '小红书 / 微信 / 抖音 / 京东',
    pain: '怕产品太"低龄向"显得不专业；要看到学习效果；担心错过 AI 时代',
    decision: '小红书测评 + 教育博主 → 京东 / 天猫下单 → 同时给孩子用学习机',
    quote: '"AI 玩具能不能让孩子开口说英语？"',
    oneLiner: '能为"教育价值"花钱的三线虎妈，买之前看测评、买之后看效果——V2 阶段才发力',
    weight: '★ V2 扩张',
    tone: 'amber',
  },
];

interface UseScene {
  num: string;
  name: string;
  time: string;
  who: string;
  desc: string;
}

export const USE_SCENES: UseScene[] = [
  {
    num: '01',
    name: '做饭时的"哄娃神器"',
    time: '17:00–18:30',
    who: '王芳 / 奶奶 / 陈晓',
    desc: '★ 出现频次最高的核心 daily use case；传统解法是给手机看动画片',
  },
  {
    num: '02',
    name: '睡前故事',
    time: '21:00 前后',
    who: '王芳 / 奶奶★★★ / 陈晓',
    desc: '★★★ 留守家庭核杀器；孩子要听故事才肯睡，奶奶完全讲不了',
  },
  {
    num: '03',
    name: '留守儿童"妈妈替身"',
    time: '全天散布',
    who: '奶奶★★★',
    desc: '★★★ 行业里没人专门做的差异化；妈妈克隆声音 + 远程留言',
  },
  {
    num: '04',
    name: '哭闹安抚',
    time: '每周 2–3 次',
    who: '王芳 / 奶奶',
    desc: '检测到哭声 / 关键词，自动切换安抚模式；情绪兜底',
  },
  {
    num: '05',
    name: '学龄前启蒙',
    time: '20–40 分钟/天',
    who: '王芳 / 陈晓★★★',
    desc: '古诗 / 儿歌 / 十万个为什么 / 英语 / 拼音 / 数学——家长付费的"理性理由"',
  },
  {
    num: '06',
    name: '祖辈带娃的省力工具',
    time: '工作日全天',
    who: '奶奶★★★',
    desc: '零操作：孩子直接喊就能聊；行业普遍忽视的"老人友好"维度',
  },
];

interface AntiPersona {
  who: string;
  why: string;
  shouldBuy: string;
}

export const ANTI_PERSONAS: AntiPersona[] = [
  {
    who: '一线城市精英妈妈',
    why: '"¥149–249 + 县代理土味"在她们眼里像便宜货',
    shouldBuy: 'BubblePal / 汤姆猫 / 乐森机器人',
  },
  {
    who: 'Z 世代 / 单身潮玩',
    why: '"启蒙 / 教育"对他们没意义',
    shouldBuy: '芙崽 Fuzozo / 显眼包',
  },
  {
    who: '海淀 / 顺义鸡娃虎妈',
    why: '在她们眼里这是"低龄玩具"，不如学而思 1对1',
    shouldBuy: '学习机 / 网课 / 1对1',
  },
  {
    who: '0–2 岁宝宝家庭',
    why: '宝宝不会说话，玩具核心交互(对话)用不上',
    shouldBuy: '传统早教机 / 绘本 / 亲子陪伴',
  },
];

interface BigCoNotDo {
  title: string;
  desc: string;
}

export const THREE_REASONS: BigCoNotDo[] = [
  {
    title: '数据看不见',
    desc: '一个细分场景一年 5000 万 GMV——对独立创业者是命，对字节是凑不齐 OKR 的零头，产品经理不会立项',
  },
  {
    title: '品牌不能贴',
    desc: '京东自营 / 华为 / 字节豆包的 logo 印上去要担社会责任和审美包袱，土味设计先被法务和品牌部毙掉',
  },
  {
    title: '渠道下不去',
    desc: '大厂用天猫旗舰店、京东自营、抖音蓝 V 矩阵；县城母婴店、大集庙会、学校门口文具店——销售总监招不到下得去的人',
  },
];

interface LowPath {
  num: string;
  title: string;
  desc: string;
  examples: string[];
  whyMoat: string;
}

export const LOW_PATHS: LowPath[] = [
  {
    num: '01',
    title: '方言垂直 · 一种方言一个 SKU',
    desc: '不要做"支持 8 种方言"，做"潮汕话讲故事熊"、"四川话识字猫"、"粤语启蒙鸭"。每个方言版本是独立 SKU、独立直播间、独立分销',
    examples: [
      '潮汕话讲故事熊 / 闽南话儿歌兔',
      '四川话识字猫 / 粤语启蒙鸭',
      '豫语讲故事熊 / 东北话哄睡公主',
    ],
    whyMoat: '潮汕话母语 2500 万人——做不出大厂"集团重点产品"的千万 DAU KPI，立项不过',
  },
  {
    num: '02',
    title: '场景极窄 · 不要"陪伴"，要"哄饭神器"',
    desc: '把"陪伴启蒙"这种 PPT 友好话改成具体到一线销售员都能复述的儿童场景',
    examples: [
      '哄饭机：不张嘴讲故事，张嘴吃饭就奖励',
      '写作业陪伴：小狗坐桌上，写一题表扬一句',
      '接送陪聊：挂书包侧，放学路上听故事',
      '哄睡神器：睡前 30 分钟方言儿歌自动播放',
    ],
    whyMoat: '"哄饭"两个字进不了字节豆包的 PRD 文档；这种细分写不出"通用 AI 助手"的 narrative',
  },
  {
    num: '03',
    title: '命名土味 · 功能直白 + 老 IP 借力',
    desc: '不要 BubblePal / CocoMate / 芙崽 这种英文 + 二次元名字。直白功能 + 老 IP 才是下沉语言',
    examples: [
      '❌ "BubblePal" / "芙崽" / "智能憨憨"',
      '✅ 讲故事熊 / 哄饭小狗 / 学拼音猫 / 接娃小老虎',
      '✅ 奥特曼讲故事机 / 喜羊羊学拼音 / 熊出没哄饭神器',
    ],
    whyMoat: '"哄饭小狗"四个字会让京东京造的品牌部集体辞职——这就是壁垒',
  },
  {
    num: '04',
    title: '价格 ¥149 / 199 / 249 · BOM ~95 元 · 含 1 年云服务',
    desc: '锁定 ¥100–150 真空价格带切入(¥149 入门款)，三档分级到 ¥249。50k 量产出厂目标 ¥68–96 / 台，5k 试产更接近 ¥96–128；单台必须预留首年云服务 ¥30–45，二年起轻量年费 / 内容包补云成本',
    examples: [
      '硬件一次买断(区别于 BubblePal 99/年订阅锁本体)；离线故事 / 儿歌 / 熏听永不锁，断网也是个故事机',
      '云服务首年内置；第二年起 ¥39/年云续费(BubblePal 同档 99/年的 1/3)，或仅买内容包按需补',
      'IP 联名外衣 / 节日内容包 / 高级方言包 ¥9.9–99，持续供料补 LTV',
    ],
    whyMoat: '大厂硬件最低毛利门槛 35%+、SKU 出货 50 万台起、品牌不肯贴县城——¥149 价位段 + 县代理土味渠道这两件事大厂三个都过不了',
  },
];

interface NetDeadEnd {
  num: string;
  title: string;
  desc: string;
}

export const NET_DEAD_ENDS: NetDeadEnd[] = [
  {
    num: '01',
    title: '儿童手表不开放热点',
    desc: '小天才 / 华为 / 米兔只支持作为 WiFi 客户端，不支持热点共享。续航撑不住、儿童套餐运营商不允许共享给第三方、"教育白名单"监管认证过不了',
  },
  {
    num: '02',
    title: '蓝牙 PAN 没开放',
    desc: '理论上能用蓝牙 PAN 共享网络，但主流国产儿童手表蓝牙只开放给"耳机 / 面对面交友"，PAN profile 全部关闭',
  },
  {
    num: '03',
    title: '流量与延迟都不够',
    desc: '儿童手表套餐 1–3GB/月，AI 持续语音对话每天 100MB+，一周就把套餐耗完。即使能开热点，体验也不可用',
  },
  {
    num: '04',
    title: '上学路上 / 学校里有争议',
    desc: '玩具一旦"任何地方都能联网"，会被带去学校——老师反感、同学打扰、家长投诉，反而变成负面口碑源头',
  },
];

interface ArchLayer {
  scope: 'cloud' | 'edge';
  label: string;
  hint: string;
  features: string[];
}

export const NET_ARCHITECTURE: ArchLayer[] = [
  {
    scope: 'cloud',
    label: '云端 · 联网时增强',
    hint: '锦上添花',
    features: [
      '大模型自由对话',
      '声音克隆训练',
      '远程留言 / 微信叫醒玩具',
      '内容更新 / 卡包下发',
    ],
  },
  {
    scope: 'edge',
    label: '端侧 · 断网也能用',
    hint: '产品命门',
    features: [
      '唤醒词识别(本地)',
      '内置 500 故事 + 200 首儿歌',
      '完整内置故事/儿歌/古诗音频库(全本地)',
      '已下载的父母声音故事 ★ 关键',
      '1000 条预设 FAQ 简单问答',
    ],
  },
];

interface NetPhase {
  stage: string;
  network: string;
  price: string;
  pitch: string;
  tone: 'mvp' | 'next' | 'never';
}

export const NET_PHASES: NetPhase[] = [
  {
    stage: 'MVP · 首发',
    network: 'WiFi + 离线缓存',
    price: '¥199–299',
    pitch: '"断网也能讲故事"',
    tone: 'mvp',
  },
  {
    stage: 'V2 · 6 个月后',
    network: 'WiFi / 4G 双 SKU',
    price: '¥299 / 499',
    pitch: '"出门也能用"(可选)',
    tone: 'next',
  },
  {
    stage: '永远不做',
    network: '依赖儿童手表热点',
    price: '—',
    pitch: '技术不可行 + 用户认知错位',
    tone: 'never',
  },
];

interface SoftwareCat {
  type: string;
  apps: string;
  takeaway: string;
}

interface SoftApp {
  name: string;
  brand?: string;
  img: string;
  screen: string;
  screenShape?: 'phone' | 'wide';
  region: 'CN' | 'INTL';
  age: string;
  price: string;
  highlight: string;
  takeaway: string;
  tags?: string[];
}

export const SOFTWARE_APPS: SoftApp[] = [
  {
    name: '斑马 App',
    brand: '猿辅导',
    img: '/lula/software/zebra.jpg',
    screen: '/lula/software/screens/zebra.png',
    region: 'CN',
    age: '2–8 岁',
    price: '系统课 2000–3500 元',
    highlight: '英语 / 思维 / 语文一体化；AI 互动课 + 辅导老师双轮；大量配套教具(点读笔、卡、绘本)',
    takeaway: '免费工具引流 → 系统课变现 → 多品类延长 LTV，是国内启蒙赛道标杆路径',
    tags: ['多学科', '辅导老师', '教具'],
  },
  {
    name: '叽里呱啦',
    brand: '台湾团队 · 2014',
    img: '/lula/software/jiliguala.jpg',
    screen: '/lula/software/screens/jiliguala.jpg',
    region: 'CN',
    age: '0–8 岁',
    price: '中低价位',
    highlight: '0-2 岁萌芽路线 + 2-8 岁 L0–L6 七级体系；自然拼读独立模块；原创真人音视频',
    takeaway: '抄它的 7 级分龄结构和"价格友好打下沉"的策略',
    tags: ['英语', '7 级分龄', '下沉强'],
  },
  {
    name: '瓜瓜龙',
    brand: '字节跳动',
    img: '/lula/software/guagualong.png',
    screen: '/lula/software/screens/guagualong.jpg',
    region: 'CN',
    age: '2–8 岁',
    price: '系统课 2000+',
    highlight: 'K0/K1/K2 三阶段；每节 15 分钟；正课 → 绘本 → 复习 → 趣味四节循环；思维对标 CCSS',
    takeaway: '抄它的"周课节奏"——固定四类课形周内闭环，孩子有期待',
    tags: ['流量打法', 'K0-K2', '15 分钟'],
  },
  {
    name: '洪恩识字 / 英语',
    brand: '完美世界',
    img: '/lula/software/hongen.jpg',
    screen: '/lula/software/screens/hongen.jpg',
    region: 'CN',
    age: '3–8 岁',
    price: '198–998 元',
    highlight: '游戏公司基因 → 重游戏化；5 节一周期(单词→儿歌→绘本→口语)；识字 1300 字',
    takeaway: '抄"五节循环 + 游戏皮肤奖励"，但小心被家长批"游戏成分过重"',
    tags: ['游戏化', '识字', '完美世界'],
  },
  {
    name: '叫叫 AI 启蒙与应用',
    brand: '叫叫 · 2025 新品',
    img: '/lula/software/jiaojiao.jpg',
    screen: '/lula/software/screens/jiaojiao.jpg',
    region: 'CN',
    age: '5–9 岁',
    price: '未公开',
    highlight: '行业首款"完整世界观 + 角色扮演" AI 启蒙课；不是用 AI 教孩子，而是教孩子用 AI',
    takeaway: '2026 最值得抄的方向——把"和 AI 协作"本身做成课程内容',
    tags: ['新趋势', '世界观', '教孩子用 AI'],
  },
  {
    name: '小猴 AI 课',
    brand: '好未来',
    img: '/lula/software/xiaohou.jpg',
    screen: '/lula/software/screens/xiaohou.png',
    region: 'CN',
    age: '3–8 岁',
    price: '系统课 2000+',
    highlight: '好未来旗下 AI 启蒙课；语数英覆盖；学而思教研体系背书',
    takeaway: '抄"教研体系包装"——"学而思出品"是中国家长的强信任符号',
    tags: ['学而思系', '教研背书'],
  },
  {
    name: '凯叔讲故事',
    brand: '凯叔',
    img: '/lula/software/kaishu.jpg',
    screen: '/lula/software/screens/kaishu.jpg',
    region: 'CN',
    age: '0–12 岁',
    price: '免费 + 内购',
    highlight: '6000 万用户 / 8000+ 故事 / 145 亿播放；按年龄智能推荐；强 IP 驱动',
    takeaway: '抄"分龄推荐 + 哄睡场景"，配合我们硬件的熏听功能',
    tags: ['音频', 'IP', '6000 万用户'],
  },
  {
    name: 'ABCmouse / 开心鼠',
    brand: '腾讯引进 · 美国老牌',
    img: '/lula/software/abcmouse.jpg',
    screen: '/lula/software/screens/abcmouse.jpg',
    region: 'CN',
    age: '2–8 岁',
    price: '约 1500–2500 元',
    highlight: '10000+ 活动；语言艺术 / 数学 / 科学 / 艺术全学科；结构化课程路径',
    takeaway: '抄它的"全学科课程图谱"——把启蒙变成一张闯关地图',
    tags: ['全学科', '结构化'],
  },
  {
    name: 'Khan Academy Kids',
    brand: 'Khan Academy',
    img: '/lula/software/khan-kids.jpg',
    screen: '/lula/software/screens/khan-kids.jpg',
    region: 'INTL',
    age: '2–8 岁',
    price: '完全免费 / 无广告',
    highlight: '斯坦福合作研发；AI 自适应路径(ABC ✓ 但形状 ✗ 自动调内容)；RCT 验证早期识字提升',
    takeaway: '抄"自适应内容路径"——根据表现实时改下一题，不是固定课表',
    tags: ['免费', 'AI 自适应', 'RCT'],
  },
  {
    name: 'Duolingo ABC',
    brand: 'Duolingo',
    img: '/lula/software/duolingo-abc.jpg',
    screen: '/lula/software/screens/duolingo-abc.jpg',
    region: 'INTL',
    age: '3–8 岁',
    price: '免费',
    highlight: 'AI 实时调难度 + 即时反馈；字母 / 自然拼读 / 高频词 / 词汇；bite-size 微课',
    takeaway: '抄"bite-size 微课 + streak 激励"——绑定每日打开习惯',
    tags: ['微课', 'streak', '免费'],
  },
  {
    name: 'Khanmigo',
    brand: 'Khan Academy',
    img: '/lula/software/khanmigo.png',
    screen: '/lula/software/screens/khanmigo.webp',
    screenShape: 'wide',
    region: 'INTL',
    age: '8 岁+',
    price: '订阅制',
    highlight: '苏格拉底式 AI 1v1 辅导——不直接给答案，引导思考',
    takeaway: '硬件大年龄段的升级范本：从"陪聊"进化到"启发式辅导"',
    tags: ['苏格拉底式', '一对一'],
  },
  {
    name: 'Osmo',
    brand: 'Osmo',
    img: '/lula/software/osmo.jpg',
    screen: '/lula/software/screens/osmo.jpg',
    region: 'INTL',
    age: '3–10 岁',
    price: '套装 ¥800–2000',
    highlight: '实体玩具 + iPad 视觉识别；"看得见摸得着"的混合学习',
    takeaway: '"实体教具 + 屏幕"混合形态值得借鉴；但实体识别系统(NFC/AR)生产链复杂，我们刻意不做',
    tags: ['软硬结合', '实体卡', 'AR 识别'],
  },
];

interface SoftMethod {
  icon: LucideIcon;
  title: string;
  desc: string;
  source: string;
}

export const SOFT_METHODS: SoftMethod[] = [
  {
    icon: Target,
    title: '分龄分阶段',
    desc: '0-2 启蒙 / 2-4 兴趣 / 4-6 系统 / 6-8 应用；K0-K2 或 L0-L6 是行业通用切片',
    source: '叽里呱啦 7 级 / 瓜瓜龙 K0-K2',
  },
  {
    icon: Award,
    title: '游戏化四要素',
    desc: '收集 / 养成 / 交互 / 探索；落地成闯关、星星、勋章、皮肤、连续打卡 streak',
    source: '洪恩识字 / Duolingo ABC',
  },
  {
    icon: BookOpen,
    title: 'IP 世界观',
    desc: '"剑桥小镇"30 秒动画把孩子拉进故事；用英雄主义代入感驱动闯关动机',
    source: '叫叫 / 瓜瓜龙 / 斑马',
  },
  {
    icon: Heart,
    title: '即时反馈 + 情感化',
    desc: '答对 = 烟花 / 掌声；答错 = "再试一次"，从不出现"错"字',
    source: '通用',
  },
  {
    icon: Clock,
    title: '短时高频',
    desc: '每节 10–15 分钟匹配幼儿注意力曲线；周节奏闭环(正-绘本-复习-趣味)',
    source: '瓜瓜龙 / Lingokids',
  },
  {
    icon: Users,
    title: '服务即内容',
    desc: '学习报告 + 微信群辅导老师 + 家长社群裂变；"教育是人之于内容的生意"',
    source: '中国独门',
  },
];

export const SOFTWARE_CATS: SoftwareCat[] = [
  {
    type: '程序式互动 · 游戏化学习',
    apps: '小伴龙、宝宝巴士奇妙屋、叫叫',
    takeaway: '抄"任务驱动 + 奖励反馈"循环——把学习包装成闯关，找魔法字卡 / 找丢失的声音',
  },
  {
    type: '内容式音频陪伴',
    apps: '凯叔讲故事',
    takeaway: '8000+ 故事、按年龄智能推荐、6000 万用户、145 亿播放——抄分龄推荐 + 哄睡场景',
  },
  {
    type: '学科启蒙 · 识字 / 拼音 / 数学 / 英语',
    apps: '洪恩、斑马 AI 学、叽里呱啦',
    takeaway: '抄"分级体系 + 短时高频"——洪恩识字 1300 字、动画儿歌、科学分龄；几分钟一课',
  },
  {
    type: '大模型对话 · 新势力',
    apps: '豆包、智谱清言、Kimi',
    takeaway: '大人在用，小孩没人教——这就是机会点：用一个玩具把"和 AI 聊天"可视化、儿童化',
  },
];

interface ParentDriver {
  icon: LucideIcon;
  tone: Tone;
  title: string;
  oneLiner: string;
  insight: string;
  evidence: string;
}

export const PARENT_DRIVERS: ParentDriver[] = [
  {
    icon: Brain,
    tone: 'rose',
    title: 'FOMO 教育焦虑',
    oneLiner: '"不能让孩子输在 AI 时代"',
    insight: '70% 家长选玩具最看重教育价值；县域家长最怕的不是"学得慢"，而是"没人管"',
    evidence: '下沉的话术不该是"AI 赋能学习"，而是"会哄孩子的 AI 老师，大人忙的时候顶上"',
  },
  {
    icon: MonitorOff,
    tone: 'accent',
    title: '无屏幕情结',
    oneLiner: '"不能再让他刷手机了"',
    insight: '78% 家长把"避免屏幕依赖"列为首要购买动机；2025.1 销量环比 +600%',
    evidence: '85/90 后父母眼中，AI 玩具是"无屏幕教育神器"——县城父母对此尤其偏执',
  },
  {
    icon: Heart,
    tone: 'violet',
    title: '陪伴代偿',
    oneLiner: '"我没时间陪，机器替我陪"',
    insight: '60%+ 家长担忧孩子社交不足；下沉市场叠加留守儿童 / 父母外出务工，代偿需求更强',
    evidence: 'BubblePal 卖点不是"老师"而是"朋友"——卖的不是玩具，是赎罪券',
  },
  {
    icon: Crown,
    tone: 'amber',
    title: '面子身份信号',
    oneLiner: '"别人家娃有，我家也得有"',
    insight: '县城家长对"AI"两个字带光环——你不需解释多模态，只需让产品看起来像 AI',
    evidence: '"AI 智习室"在县城高客单的逻辑：营销下沉 ≠ 技术下沉',
  },
  {
    icon: HandCoins,
    tone: 'emerald',
    title: '价格 + 安全双锚',
    oneLiner: '"便宜但靠谱"',
    insight: '300 元以下区间销量最大；安全感来自大牌背书 + 售后 + 内容三重钩子',
    evidence: '99–199 元是贝灵 / babycare / 洪恩 / 米兔 / 乐乐鱼共同的胜区',
  },
  {
    icon: ShieldCheck,
    tone: 'neutral',
    title: '订阅强排斥',
    oneLiner: '"二次收费 = 被骗"',
    insight: '58.8% 家长吐槽"解锁需持续付费"；订阅制在下沉市场是死刑',
    evidence: 'BubblePal 卖爆下沉的关键："终身会员"四个字',
  },
];

export const TWO_USER_ROWS: { dim: string; parent: string; child: string }[] = [
  { dim: '是谁', parent: '家长（主力 36–45 岁妈妈，其次 25–35 岁）', child: '3–8 岁孩子（主流 3–6 岁）' },
  { dim: '关心什么', parent: '教育价值、安全、面子、性价比', child: '好不好玩、好不好看、有没有回应' },
  { dim: '决定权', parent: '100% 决定买不买', child: '100% 决定用不用' },
  { dim: '心智时间线', parent: '决策时刻 + 后悔时刻', child: '第 1 周高潮 + 第 3 周抛弃' },
];

interface UsagePhase {
  range: string;
  label: string;
  desc: string;
  tone: Tone;
}

export const USAGE_PHASES: UsagePhase[] = [
  { range: '第 1–7 天', label: '神奇期', desc: '"它会说话！它认识我！"高强度互动，每天玩几小时', tone: 'accent' },
  { range: '第 8–14 天', label: '试探期', desc: '"它会唱歌吗？它能干嘛？"开始试探边界', tone: 'emerald' },
  { range: '第 15–21 天', label: '幻灭期', desc: '"它怎么老说一样的话"——发现复读、听不懂', tone: 'amber' },
  { range: '第 22 天+', label: '抛弃期', desc: '扔进玩具堆；行业退货率 30–40%', tone: 'rose' },
];

interface AbandonReason {
  pct: string;
  reason: string;
}

export const ABANDON_REASONS: AbandonReason[] = [
  { pct: '58.8%', reason: '解锁功能要持续付费（家长视角）' },
  { pct: '50.8%', reason: '机械复读、像复读机、丢失灵魂' },
  { pct: '49.2%', reason: '脑回路清奇、聊天对不上频道' },
  { pct: '44.7%', reason: '功能单一（只会读诗不会唱歌）' },
  { pct: '43.0%', reason: '安静时突然语出惊人' },
];

export const TOC_GROUPS: TocGroup[] = [
  {
    label: '概念基础',
    hint: '上篇 · 前置',
    items: [
      { id: 'foundation', num: '01', title: '概念定义 · 什么是启蒙教育' },
    ],
  },
  {
    label: '市场调研',
    hint: '上篇 · 调研',
    items: [
      { id: 'market', num: '02', title: '大盘数据' },
      { id: 'competitors', num: '03', title: '硬件 · 竞品 17 款' },
      { id: 'software', num: '04', title: '软件 · 竞品 12 款' },
      { id: 'methodology', num: '05', title: '软件 · 共性方法论' },
    ],
  },
  {
    label: '用户心智',
    hint: '上篇 · 调研',
    items: [
      { id: 'parent-mind', num: '06', title: '家长侧 · 6 个驱动力' },
      { id: 'child-mind', num: '07', title: '孩子侧 · 21 天曲线' },
      { id: 'personas', num: '08', title: '用户画像 · 三类家庭' },
    ],
  },
  {
    label: '战略框架',
    hint: '调研 → 落地',
    items: [
      { id: 'moat', num: '09', title: '避战 · 做大厂做不了的' },
      { id: 'network', num: '10', title: '联网策略 · 居家为主' },
      { id: 'link', num: '11', title: '串联 · 商业闭环' },
    ],
  },
  {
    label: '产品侧 · 做什么',
    hint: '下篇 · A',
    items: [
      { id: 'product-overview', num: '12', title: '产品功能总览 · 一图看完' },
      { id: 'form-factor', num: '13', title: '产品形态 / 硬件外观' },
      { id: 'dialogue', num: '14', title: '对话能力 · 分龄 + 教育法' },
      { id: 'safety', num: '15', title: '安全与家长可控' },
      { id: 'content', num: '16', title: '内容体系 · IP + 方言' },
      { id: 'parent-app', num: '17', title: '家长后台 · 软件边界' },
    ],
  },
  {
    label: '技术侧 · 怎么落',
    hint: '下篇 · B',
    items: [
      { id: 'tech-overview', num: '18', title: '技术总览 · 端到端低延时' },
      { id: 'device-layer', num: '19', title: '端侧 · ESP32-S3' },
      { id: 'orchestration', num: '20', title: '接入网关与实时编排' },
      { id: 'memory-cache', num: '20B', title: 'Context · Memory · Cache · 三层职责' },
      { id: 'account-system', num: '20C', title: '账号 · 家庭 · 设备绑定 · 微信生态' },
      { id: 'model-layer', num: '21', title: '模型层 · 火山引擎' },
      { id: 'mvp-scope', num: '22', title: 'MVP 取舍 + PRD 硬指标' },
    ],
  },
  {
    label: '商业 + 推广',
    hint: '下篇 · C',
    items: [
      {
        id: 'business',
        num: '23',
        title: '商业模式 / 定价 SKU',
        children: [
          { id: 'business-1', num: '23.1', title: '模式 1.0 · 硬件 + 订阅 + 软商品' },
          { id: 'business-2', num: '23.2', title: '模式 2.0 · 流量化备选' },
        ],
      },
      { id: 'prereq', num: '23B', title: '前置准备 / 资质与上线时序' },
      { id: 'cost', num: '24', title: '成本估算 / 落地账' },
      { id: 'marketing', num: '25', title: '营销话术 / 文案模板' },
      { id: 'creator-recruitment', num: '26', title: '宝妈带货招募 / 面试介绍' },
      { id: 'roadmap', num: '27', title: '路线图与里程碑' },
      { id: 'team-risk', num: '28', title: '团队 · 风险 · 下一步' },
    ],
  },
];

interface PlaceholderSection {
  id: string;
  num: string;
  label: string;
  title: string;
  bullets: string[];
  images?: { src: string; alt: string }[];
}

export const PLACEHOLDERS: PlaceholderSection[] = [
  {
    id: 'form-factor',
    num: '13',
    label: '产品形态 / 硬件方案',
    title: 'Lula v1 长什么样',
    images: [
      { src: '/lula/v1/v1-01.png', alt: 'Lula v1 概念图 01' },
      { src: '/lula/v1/v1-02.png', alt: 'Lula v1 概念图 02' },
      { src: '/lula/v1/v1-03.png', alt: 'Lula v1 概念图 03' },
      { src: '/lula/v1/v1-04.png', alt: 'Lula v1 概念图 04' },
      { src: '/lula/v1/v1-05.png', alt: 'Lula v1 概念图 05' },
      { src: '/lula/v1/v1-06.png', alt: 'Lula v1 概念图 06' },
      { src: '/lula/v1/v1-07.png', alt: 'F-01 未来鸭 Future Ducky 设定稿（IP 档案 / 配色 / 三视图 / 表情延展）' },
    ],
    bullets: [
      '外观与材质：毛绒 + IP 形象一体机 / 形态 / 尺寸 / 颜色 / 安全认证',
      '成本口径：50k 量产目标 ¥68–96 / 台，5k 试产更接近 ¥96–128；详见 24 成本估算',
      '续航与功耗：典型场景下的使用时长与充电方式',
      '可扩展配件：可换洗外衣 / 颈带 / 充电底座(义乌代工，无电子模组)',
    ],
  },
  {
    id: 'content',
    num: '16',
    label: '内容体系 · IP + 方言 + 父母音',
    title: '不靠卡牌，靠语音指令路由',
    bullets: [
      '内容分类：英语启蒙 / 古诗词 / 故事 / 儿歌 / 父母声音故事',
      '调用方式：语音指令直达——"讲个奥特曼故事" / "教我拼音"，不靠任何实体识别',
      '分发：基础内容内置出厂；高级内容包通过 App 内购 → 一次买断终身可用',
      '分龄：0-3 / 3-6 / 6-7 三档独立内容包',
      'IP 联名：喜羊羊学拼音 / 熊出没哄饭 / 奥特曼讲故事 / 小猪佩奇儿歌',
      '更新节奏：月度内容包 + 节日特别版(春节 / 六一 / 中秋等)',
    ],
  },
  {
    id: 'parent-app',
    num: '17',
    label: '家长后台 · 软件边界',
    title: '家长 App 的边界',
    bullets: [
      '成长报告：今天孩子问了什么有趣的问题——温情正向，避免监控感',
      '软商品商城：IP 联名外衣 / 换装皮肤 / 内容包 / 高级方言包',
      '父母音录制 / 声音克隆引导',
      '远程留言 / 微信叫醒玩具',
      '使用时长管控 / 防沉迷',
      '县代理入口：本地微信群、附近用户活动、上门服务预约',
    ],
  },
  {
    id: 'roadmap',
    num: '27',
    label: '路线图与里程碑',
    title: '12 个月节奏',
    bullets: [
      'M0–M1：ESP32-S3 原型 + 豆包全链路 POC + 3 家 PCBA / 电池 / 毛绒厂 RFQ',
      'M2–M3：EVT 30–50 台 + 毛绒样衣二轮 + 100 户内测前可靠性版本',
      'M4–M5：DVT 100–300 台 + CCC / SRRC / 电池资料准备 + 真实账单回填订阅底价',
      'M6–M7：PVT 500–1000 台 + 直播 / 县代理灰度；IP 外衣作为软商品先跑，不增加电子复杂度',
    ],
  },
  {
    id: 'team-risk',
    num: '28',
    label: '团队 · 风险 · 下一步',
    title: '我们 / 不确定 / 接下来要做',
    bullets: [
      '团队结构：硬件 / 算法 / 内容 / 运营 / BD',
      '关键风险：儿童 ASR 准确率 / 内容审核合规 / 第三周抛弃曲线',
      '下一步动作：列出未来 4 周必须做的事——打样 / 调研 / BD / 渠道试水',
      '资金需求：天使轮 vs 启动资金的判断',
    ],
  },
];
