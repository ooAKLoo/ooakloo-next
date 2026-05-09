/* eslint-disable react/no-unescaped-entities */
import { UserCircle, Users, Smartphone, ShieldCheck, GitBranch, ListChecks, Code, KeyRound } from 'lucide-react';
import { ACCENT, ACCENT_LIGHT, Card, SectionLabel, SectionTitle } from '../../_shared';

// ---- color tokens ----
const AUTH = '#0E7490';      // 认证层 (cyan-700)
const AUTH_LIGHT = '#ECFEFF';
const AUTH_BORDER = '#0E749022';

const BIZ = '#6D28D9';       // 业务层 (violet-700)
const BIZ_LIGHT = '#F5F3FF';
const BIZ_DEEP = '#4C1D95';
const BIZ_BORDER = '#6D28D922';

const DEV = '#047857';       // 设备 (emerald-700)
const DEV_LIGHT = '#ECFDF5';
const DEV_DEEP = '#065F46';
const DEV_BORDER = '#04785722';

const PAY = '#B45309';       // 微信支付 (amber-700)
const PAY_LIGHT = '#FEF3C7';
const PAY_DEEP = '#78350F';

const COMP = '#BE123C';      // 合规 (rose-700)
const COMP_LIGHT = '#FFE4E6';
const COMP_DEEP = '#9F1239';

// ============================================================
// SVG 1 · 系统架构 · Auth / Business / 外部系统
// ============================================================
const ArchitectureDiagram = () => (
  <svg viewBox="0 0 1200 460" className="w-full h-auto" style={{ minWidth: 760 }} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="ac-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569" />
      </marker>
      <marker id="ac-arr-cy" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill={AUTH} />
      </marker>
      <marker id="ac-arr-vio" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill={BIZ} />
      </marker>
    </defs>

    {/* 客户端三个入口 */}
    <g>
      <rect x="20" y="40" width="180" height="60" rx="10" fill="#F1F5F9" stroke="#475569" strokeWidth="1.5" />
      <text x="110" y="63" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">家长 App</text>
      <text x="110" y="80" textAnchor="middle" fontSize="10" fill="#475569">原生 / Flutter · 主入口</text>

      <rect x="20" y="120" width="180" height="60" rx="10" fill="#F1F5F9" stroke="#475569" strokeWidth="1.5" />
      <text x="110" y="143" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">微信小程序</text>
      <text x="110" y="160" textAnchor="middle" fontSize="10" fill="#475569">爷爷奶奶 / 县代理用</text>

      <rect x="20" y="200" width="180" height="60" rx="10" fill={DEV_LIGHT} stroke={DEV} strokeWidth="1.5" />
      <text x="110" y="223" textAnchor="middle" fontSize="11" fontWeight="700" fill={DEV_DEEP}>Lula 设备</text>
      <text x="110" y="240" textAnchor="middle" fontSize="10" fill={DEV}>ESP32-S3 · device_id 出厂烧录</text>
    </g>

    {/* 认证层 */}
    <g>
      <rect x="280" y="40" width="280" height="200" rx="14" fill={AUTH_LIGHT} stroke={AUTH} strokeWidth="2" />
      <text x="420" y="62" textAnchor="middle" fontSize="12" fontWeight="700" fill={AUTH}>Casdoor · 认证层(开源)</text>
      <text x="420" y="78" textAnchor="middle" fontSize="10" fill={AUTH}>登录 / 会话 / 多渠道身份</text>
      <line x1="295" y1="88" x2="545" y2="88" stroke={AUTH} strokeOpacity="0.3" />
      <text x="295" y="106" fontSize="10" fill={AUTH}>· 微信开放平台登录</text>
      <text x="295" y="122" fontSize="10" fill={AUTH}>· 微信小程序登录(scope: snsapi_userinfo)</text>
      <text x="295" y="138" fontSize="10" fill={AUTH}>· 手机号 + 阿里云短信验证</text>
      <text x="295" y="154" fontSize="10" fill={AUTH}>· QQ / 抖音 / 钉钉(可选)</text>
      <text x="295" y="170" fontSize="10" fill={AUTH}>· JWT + refresh token rotation</text>
      <text x="295" y="186" fontSize="10" fill={AUTH}>· 多端会话管理 / 异地登录提醒</text>
      <text x="295" y="206" fontSize="10" fill={AUTH} opacity="0.7">· 自托管 · 数据不出境(PIPL)</text>
      <text x="295" y="222" fontSize="10" fill={AUTH} opacity="0.7">· 暴露 OIDC / OAuth2 标准接口</text>
    </g>

    {/* 业务层 */}
    <g>
      <rect x="640" y="40" width="320" height="280" rx="14" fill={BIZ_LIGHT} stroke={BIZ} strokeWidth="2" />
      <text x="800" y="62" textAnchor="middle" fontSize="12" fontWeight="700" fill={BIZ}>业务模型 · 自建</text>
      <text x="800" y="78" textAnchor="middle" fontSize="10" fill={BIZ}>"账号 → 家庭 → 孩子 → 设备" 树</text>
      <line x1="655" y1="88" x2="945" y2="88" stroke={BIZ} strokeOpacity="0.3" />

      <rect x="660" y="100" width="130" height="32" rx="6" fill="white" stroke={BIZ} strokeWidth="1" />
      <text x="725" y="120" textAnchor="middle" fontSize="10" fontWeight="600" fill={BIZ_DEEP}>Account</text>

      <rect x="810" y="100" width="130" height="32" rx="6" fill="white" stroke={BIZ} strokeWidth="1" />
      <text x="875" y="120" textAnchor="middle" fontSize="10" fontWeight="600" fill={BIZ_DEEP}>Family(家庭组)</text>

      <rect x="660" y="148" width="130" height="32" rx="6" fill="white" stroke={BIZ} strokeWidth="1" />
      <text x="725" y="168" textAnchor="middle" fontSize="10" fontWeight="600" fill={BIZ_DEEP}>Child · 22B 主键</text>

      <rect x="810" y="148" width="130" height="32" rx="6" fill="white" stroke={BIZ} strokeWidth="1" />
      <text x="875" y="168" textAnchor="middle" fontSize="10" fontWeight="600" fill={BIZ_DEEP}>Device · 一孩多端</text>

      <rect x="660" y="196" width="130" height="32" rx="6" fill="white" stroke={BIZ} strokeWidth="1" />
      <text x="725" y="216" textAnchor="middle" fontSize="10" fontWeight="600" fill={BIZ_DEEP}>Subscription</text>

      <rect x="810" y="196" width="130" height="32" rx="6" fill="white" stroke={BIZ} strokeWidth="1" />
      <text x="875" y="216" textAnchor="middle" fontSize="10" fontWeight="600" fill={BIZ_DEEP}>Role(权限矩阵)</text>

      <rect x="660" y="244" width="280" height="32" rx="6" fill="white" stroke={BIZ} strokeWidth="1" />
      <text x="800" y="264" textAnchor="middle" fontSize="10" fontWeight="600" fill={BIZ_DEEP}>FamilyMember(家长 / 爷奶 / 县代理)</text>

      <text x="800" y="298" textAnchor="middle" fontSize="10" fill={BIZ} opacity="0.7">PostgreSQL · 与 22B 同库 · 事务一致</text>
    </g>

    {/* 22B Memory */}
    <g>
      <rect x="640" y="350" width="320" height="80" rx="10" fill="#FAFAFA" stroke="#94A3B8" strokeWidth="1.2" strokeDasharray="4 3" />
      <text x="800" y="372" textAnchor="middle" fontSize="11" fontWeight="700" fill="#475569">22B · Memory · 孩子画像</text>
      <text x="800" y="392" textAnchor="middle" fontSize="10" fill="#475569">ChildProfile / SessionSummary / InteractionFact / …</text>
      <text x="800" y="410" textAnchor="middle" fontSize="9" fill="#475569" opacity="0.7">通过 child_id 外键关联 · 同 PG 库</text>
    </g>

    {/* 外部 · 微信开放平台 */}
    <g>
      <rect x="1000" y="40" width="180" height="80" rx="10" fill={PAY_LIGHT} stroke={PAY} strokeWidth="1.5" />
      <text x="1090" y="62" textAnchor="middle" fontSize="11" fontWeight="700" fill={PAY_DEEP}>微信开放平台</text>
      <text x="1090" y="80" textAnchor="middle" fontSize="10" fill={PAY}>登录授权 OAuth2</text>
      <text x="1090" y="98" textAnchor="middle" fontSize="10" fill={PAY}>+ 微信支付下单 / 回调</text>

      <rect x="1000" y="140" width="180" height="60" rx="10" fill="#F1F5F9" stroke="#475569" strokeWidth="1.5" />
      <text x="1090" y="163" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">阿里云 SMS</text>
      <text x="1090" y="180" textAnchor="middle" fontSize="10" fill="#475569">手机号验证码</text>

      <rect x="1000" y="220" width="180" height="60" rx="10" fill={DEV_LIGHT} stroke={DEV} strokeWidth="1.5" />
      <text x="1090" y="243" textAnchor="middle" fontSize="11" fontWeight="700" fill={DEV_DEEP}>BluFi / SmartConfig</text>
      <text x="1090" y="260" textAnchor="middle" fontSize="10" fill={DEV}>乐鑫官方配网协议</text>
    </g>

    {/* 流向箭头 */}
    {/* App → Casdoor */}
    <path d="M 200 70 L 280 80" stroke={AUTH} strokeWidth="1.8" fill="none" markerEnd="url(#ac-arr-cy)" />
    <text x="208" y="62" fontSize="9" fill={AUTH}>OIDC / OAuth2</text>
    {/* 小程序 → Casdoor */}
    <path d="M 200 150 L 280 130" stroke={AUTH} strokeWidth="1.8" fill="none" markerEnd="url(#ac-arr-cy)" />

    {/* Casdoor → 微信开放 */}
    <path d="M 560 80 L 1000 80" stroke={PAY} strokeWidth="1.8" fill="none" markerEnd="url(#ac-arr)" strokeDasharray="4 3" />
    <text x="700" y="72" fontSize="9" fill={PAY_DEEP}>跳转微信扫码 / 小程序 wx.login</text>
    {/* Casdoor → SMS */}
    <path d="M 560 160 L 1000 165" stroke="#475569" strokeWidth="1.5" fill="none" markerEnd="url(#ac-arr)" strokeDasharray="4 3" />
    <text x="700" y="155" fontSize="9" fill="#475569">短信验证码</text>

    {/* Casdoor → 业务 */}
    <path d="M 560 200 L 640 175" stroke={BIZ} strokeWidth="2" fill="none" markerEnd="url(#ac-arr-vio)" />
    <text x="565" y="190" fontSize="9" fill={BIZ} fontWeight="600">user_id / id_token</text>

    {/* App → 业务 */}
    <path d="M 200 90 Q 420 290 640 175" stroke={BIZ} strokeWidth="1.5" fill="none" markerEnd="url(#ac-arr-vio)" />
    <text x="370" y="245" fontSize="9" fill={BIZ}>携 JWT 调业务 API</text>

    {/* 设备 → 业务(配网后) */}
    <path d="M 200 230 Q 420 280 640 220" stroke={DEV} strokeWidth="1.5" fill="none" markerEnd="url(#ac-arr-vio)" />
    <text x="380" y="280" fontSize="9" fill={DEV}>device_token(boot 时获取)</text>

    {/* 设备 ↔ BluFi */}
    <path d="M 200 230 Q 600 380 1000 250" stroke={DEV} strokeWidth="1.2" fill="none" markerEnd="url(#ac-arr)" strokeDasharray="3 2" />
    <text x="540" y="368" fontSize="9" fill={DEV}>蓝牙配网 · App 一次性传 Wi-Fi 凭证</text>

    {/* 业务 → Memory */}
    <path d="M 800 320 L 800 350" stroke={BIZ} strokeWidth="1.5" fill="none" markerEnd="url(#ac-arr-vio)" />
    <text x="640" y="340" fontSize="9" fill={BIZ}>child_id 外键</text>
  </svg>
);

// ============================================================
// SVG 2 · ER · UML Class Diagram
// ============================================================
const ErDiagram = () => (
  <svg viewBox="0 0 1200 540" className="w-full h-auto" style={{ minWidth: 800 }} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="er-rel" viewBox="0 0 12 12" refX="11" refY="6" markerWidth="9" markerHeight="9" orient="auto">
        <path d="M 0 0 L 12 6 L 0 12 z" fill="none" stroke={BIZ} strokeWidth="1.2" />
      </marker>
    </defs>

    {/* Account (左上) */}
    <g>
      <rect x="40" y="40" width="240" height="180" rx="6" fill="white" stroke={BIZ} strokeWidth="2" />
      <rect x="40" y="40" width="240" height="26" rx="6" fill={BIZ} />
      <text x="160" y="58" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">Account · 由 Casdoor 同步</text>
      <text x="55" y="84" fontSize="10" fontFamily="ui-monospace, monospace" fill={BIZ_DEEP}>+ user_id : str (PK,Casdoor 主键)</text>
      <text x="55" y="100" fontSize="10" fontFamily="ui-monospace, monospace" fill={BIZ_DEEP}>+ phone : str?</text>
      <text x="55" y="116" fontSize="10" fontFamily="ui-monospace, monospace" fill={BIZ_DEEP}>+ wx_openid : str?</text>
      <text x="55" y="132" fontSize="10" fontFamily="ui-monospace, monospace" fill={BIZ_DEEP}>+ wx_unionid : str?</text>
      <text x="55" y="148" fontSize="10" fontFamily="ui-monospace, monospace" fill={BIZ_DEEP}>+ display_name : str</text>
      <text x="55" y="164" fontSize="10" fontFamily="ui-monospace, monospace" fill={BIZ_DEEP}>+ avatar_url : str</text>
      <text x="55" y="180" fontSize="10" fontFamily="ui-monospace, monospace" fill={BIZ_DEEP}>+ created_at : ts</text>
      <text x="55" y="200" fontSize="10" fontFamily="ui-monospace, monospace" fill={BIZ} opacity="0.7">{'// Casdoor 是真源,本表只缓存常用字段'}</text>
    </g>

    {/* Family (中央上) */}
    <g>
      <rect x="380" y="40" width="240" height="180" rx="6" fill="white" stroke={BIZ} strokeWidth="2" />
      <rect x="380" y="40" width="240" height="26" rx="6" fill={BIZ} />
      <text x="500" y="58" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">Family · 家庭组</text>
      <text x="395" y="84" fontSize="10" fontFamily="ui-monospace, monospace" fill={BIZ_DEEP}>+ family_id : uuid (PK)</text>
      <text x="395" y="100" fontSize="10" fontFamily="ui-monospace, monospace" fill={BIZ_DEEP}>+ name : str (e.g. "小米的家")</text>
      <text x="395" y="116" fontSize="10" fontFamily="ui-monospace, monospace" fill={BIZ_DEEP}>+ owner_user_id : str (FK→Account)</text>
      <text x="395" y="132" fontSize="10" fontFamily="ui-monospace, monospace" fill={BIZ_DEEP}>+ created_at : ts</text>
      <text x="395" y="152" fontSize="10" fontFamily="ui-monospace, monospace" fill={BIZ} opacity="0.7">{'// 主家长创建,可邀请副家长 / 爷奶'}</text>
      <text x="395" y="172" fontSize="10" fontFamily="ui-monospace, monospace" fill={BIZ} opacity="0.7">{'// 一户多孩:同 family_id 下多个 Child'}</text>
      <text x="395" y="192" fontSize="10" fontFamily="ui-monospace, monospace" fill={BIZ} opacity="0.7">{'// 二胎共用同一份订阅(看 SKU)'}</text>
    </g>

    {/* FamilyMember (右上) */}
    <g>
      <rect x="720" y="40" width="240" height="180" rx="6" fill="white" stroke={BIZ} strokeWidth="2" />
      <rect x="720" y="40" width="240" height="26" rx="6" fill={BIZ} />
      <text x="840" y="58" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">FamilyMember · 成员关系</text>
      <text x="735" y="84" fontSize="10" fontFamily="ui-monospace, monospace" fill={BIZ_DEEP}>+ id : uuid (PK)</text>
      <text x="735" y="100" fontSize="10" fontFamily="ui-monospace, monospace" fill={BIZ_DEEP}>+ family_id : uuid (FK)</text>
      <text x="735" y="116" fontSize="10" fontFamily="ui-monospace, monospace" fill={BIZ_DEEP}>+ user_id : str (FK)</text>
      <text x="735" y="132" fontSize="10" fontFamily="ui-monospace, monospace" fill={BIZ_DEEP}>+ role : enum</text>
      <text x="735" y="148" fontSize="10" fontFamily="ui-monospace, monospace" fill={BIZ_DEEP}>{'  (owner|spouse|grandparent|agent)'}</text>
      <text x="735" y="164" fontSize="10" fontFamily="ui-monospace, monospace" fill={BIZ_DEEP}>+ permissions : jsonb</text>
      <text x="735" y="180" fontSize="10" fontFamily="ui-monospace, monospace" fill={BIZ_DEEP}>+ invited_by : str (FK→user_id)</text>
      <text x="735" y="196" fontSize="10" fontFamily="ui-monospace, monospace" fill={BIZ_DEEP}>+ joined_at : ts</text>
    </g>

    {/* Role 矩阵浮层(右上小卡) */}
    <g>
      <rect x="990" y="40" width="180" height="180" rx="8" fill="#F8FAFC" stroke="#475569" strokeWidth="1" strokeDasharray="3 2" />
      <text x="1080" y="60" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">权限矩阵</text>
      <text x="1005" y="80" fontSize="9" fill="#475569">owner · 全部</text>
      <text x="1005" y="96" fontSize="9" fill="#475569">spouse · 同 owner</text>
      <text x="1005" y="112" fontSize="9" fill="#475569">grandparent</text>
      <text x="1005" y="126" fontSize="9" fill="#475569">  · 看报告 ✔</text>
      <text x="1005" y="140" fontSize="9" fill="#475569">  · 发语音 ✔</text>
      <text x="1005" y="154" fontSize="9" fill="#475569">  · 删事实 ✘</text>
      <text x="1005" y="168" fontSize="9" fill="#475569">  · 改订阅 ✘</text>
      <text x="1005" y="186" fontSize="9" fill="#475569">agent · 协助绑定</text>
      <text x="1005" y="200" fontSize="9" fill="#475569">  · 不可读孩子数据</text>
    </g>

    {/* Child (中央) */}
    <g>
      <rect x="380" y="280" width="240" height="160" rx="6" fill="white" stroke={BIZ} strokeWidth="2" />
      <rect x="380" y="280" width="240" height="26" rx="6" fill={BIZ} />
      <text x="500" y="298" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">Child · 22B 主键</text>
      <text x="395" y="324" fontSize="10" fontFamily="ui-monospace, monospace" fill={BIZ_DEEP}>+ child_id : uuid (PK) ★</text>
      <text x="395" y="340" fontSize="10" fontFamily="ui-monospace, monospace" fill={BIZ_DEEP}>+ family_id : uuid (FK)</text>
      <text x="395" y="356" fontSize="10" fontFamily="ui-monospace, monospace" fill={BIZ_DEEP}>+ nickname : str</text>
      <text x="395" y="372" fontSize="10" fontFamily="ui-monospace, monospace" fill={BIZ_DEEP}>+ birthday : date</text>
      <text x="395" y="388" fontSize="10" fontFamily="ui-monospace, monospace" fill={BIZ_DEEP}>+ age_bucket : enum</text>
      <text x="395" y="404" fontSize="10" fontFamily="ui-monospace, monospace" fill={BIZ_DEEP}>+ dialect : enum</text>
      <text x="395" y="424" fontSize="10" fontFamily="ui-monospace, monospace" fill={BIZ} opacity="0.7">{'// 22B 节 ChildProfile 通过 child_id 外键扩展'}</text>
    </g>

    {/* Device (右中) */}
    <g>
      <rect x="720" y="280" width="240" height="160" rx="6" fill="white" stroke={DEV} strokeWidth="2" />
      <rect x="720" y="280" width="240" height="26" rx="6" fill={DEV} />
      <text x="840" y="298" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">Device · 设备绑定</text>
      <text x="735" y="324" fontSize="10" fontFamily="ui-monospace, monospace" fill={DEV_DEEP}>+ device_id : str (PK,出厂烧录)</text>
      <text x="735" y="340" fontSize="10" fontFamily="ui-monospace, monospace" fill={DEV_DEEP}>+ child_id : uuid (FK,可改)</text>
      <text x="735" y="356" fontSize="10" fontFamily="ui-monospace, monospace" fill={DEV_DEEP}>+ family_id : uuid (FK)</text>
      <text x="735" y="372" fontSize="10" fontFamily="ui-monospace, monospace" fill={DEV_DEEP}>+ hw_version / fw_version</text>
      <text x="735" y="388" fontSize="10" fontFamily="ui-monospace, monospace" fill={DEV_DEEP}>+ status : enum (idle|active|lost)</text>
      <text x="735" y="404" fontSize="10" fontFamily="ui-monospace, monospace" fill={DEV_DEEP}>+ bound_at : ts · last_seen_at : ts</text>
      <text x="735" y="424" fontSize="10" fontFamily="ui-monospace, monospace" fill={DEV} opacity="0.7">{'// 一孩多端:同 child_id 多个 Device'}</text>
    </g>

    {/* Subscription (中下) */}
    <g>
      <rect x="380" y="470" width="240" height="60" rx="6" fill="white" stroke={PAY} strokeWidth="2" />
      <rect x="380" y="470" width="240" height="22" rx="6" fill={PAY} />
      <text x="500" y="486" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">Subscription</text>
      <text x="395" y="508" fontSize="10" fontFamily="ui-monospace, monospace" fill={PAY_DEEP}>+ family_id (FK) · sku · status · expires_at</text>
      <text x="395" y="522" fontSize="9" fontFamily="ui-monospace, monospace" fill={PAY} opacity="0.7">{'// 订阅挂在 Family,二胎共用一个订阅(看 SKU)'}</text>
    </g>

    {/* WechatPayOrder (右下) */}
    <g>
      <rect x="720" y="470" width="240" height="60" rx="6" fill="white" stroke={PAY} strokeWidth="1.5" />
      <rect x="720" y="470" width="240" height="22" rx="6" fill={PAY} fillOpacity="0.85" />
      <text x="840" y="486" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">WechatPayOrder</text>
      <text x="735" y="508" fontSize="10" fontFamily="ui-monospace, monospace" fill={PAY_DEEP}>+ out_trade_no · transaction_id · payer_user_id</text>
      <text x="735" y="522" fontSize="9" fontFamily="ui-monospace, monospace" fill={PAY} opacity="0.7">{'// 谁付钱 ≠ 谁能看(payer 不一定是 owner)'}</text>
    </g>

    {/* Consent (左下,合规) */}
    <g>
      <rect x="40" y="280" width="240" height="160" rx="6" fill="white" stroke={COMP} strokeWidth="2" />
      <rect x="40" y="280" width="240" height="26" rx="6" fill={COMP} />
      <text x="160" y="298" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">ParentalConsent · 合规</text>
      <text x="55" y="324" fontSize="10" fontFamily="ui-monospace, monospace" fill={COMP_DEEP}>+ consent_id : uuid</text>
      <text x="55" y="340" fontSize="10" fontFamily="ui-monospace, monospace" fill={COMP_DEEP}>+ family_id : uuid (FK)</text>
      <text x="55" y="356" fontSize="10" fontFamily="ui-monospace, monospace" fill={COMP_DEEP}>+ child_id : uuid (FK)</text>
      <text x="55" y="372" fontSize="10" fontFamily="ui-monospace, monospace" fill={COMP_DEEP}>+ signed_by_user_id : str</text>
      <text x="55" y="388" fontSize="10" fontFamily="ui-monospace, monospace" fill={COMP_DEEP}>+ template_version : int</text>
      <text x="55" y="404" fontSize="10" fontFamily="ui-monospace, monospace" fill={COMP_DEEP}>+ signed_at : ts · revoked_at : ts?</text>
      <text x="55" y="424" fontSize="10" fontFamily="ui-monospace, monospace" fill={COMP} opacity="0.7">{'// PIPL + 儿童条例 · 必须签才能创建 Child'}</text>
    </g>

    {/* 关系连线 */}
    <line x1="280" y1="130" x2="380" y2="130" stroke={BIZ} strokeWidth="1.5" markerEnd="url(#er-rel)" />
    <text x="295" y="124" fontSize="9" fill={BIZ} fontWeight="600">1 — *</text>

    <line x1="620" y1="130" x2="720" y2="130" stroke={BIZ} strokeWidth="1.5" markerEnd="url(#er-rel)" />
    <text x="635" y="124" fontSize="9" fill={BIZ} fontWeight="600">1 — *</text>

    <line x1="500" y1="220" x2="500" y2="280" stroke={BIZ} strokeWidth="1.5" markerEnd="url(#er-rel)" />
    <text x="510" y="252" fontSize="10" fill={BIZ} fontWeight="600">1 Family — * Child</text>

    <line x1="620" y1="360" x2="720" y2="360" stroke={DEV} strokeWidth="1.5" markerEnd="url(#er-rel)" />
    <text x="635" y="354" fontSize="10" fill={DEV} fontWeight="600">1 — *</text>

    <line x1="500" y1="440" x2="500" y2="470" stroke={PAY} strokeWidth="1.5" markerEnd="url(#er-rel)" />
    <text x="510" y="460" fontSize="9" fill={PAY}>via family</text>

    <line x1="620" y1="500" x2="720" y2="500" stroke={PAY} strokeWidth="1.5" markerEnd="url(#er-rel)" />
    <text x="635" y="494" fontSize="10" fill={PAY} fontWeight="600">1 — *</text>

    <line x1="280" y1="360" x2="380" y2="360" stroke={COMP} strokeWidth="1.5" markerEnd="url(#er-rel)" />
    <text x="295" y="354" fontSize="9" fill={COMP} fontWeight="600">需先签</text>
  </svg>
);

// ============================================================
// SVG 3 · 设备配网 + 绑定时序图
// ============================================================
const BindSequenceDiagram = () => (
  <svg viewBox="0 0 1200 460" className="w-full h-auto" style={{ minWidth: 800 }} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="bd-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569" />
      </marker>
      <marker id="bd-arr-dev" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill={DEV} />
      </marker>
    </defs>

    {[
      { x: 100, label: '家长', color: '#334155', bg: '#F1F5F9' },
      { x: 300, label: '家长 App', color: '#334155', bg: '#F1F5F9' },
      { x: 500, label: '设备', color: DEV, bg: DEV_LIGHT },
      { x: 700, label: 'Casdoor', color: AUTH, bg: AUTH_LIGHT },
      { x: 900, label: '业务后端', color: BIZ, bg: BIZ_LIGHT },
      { x: 1100, label: '路由器 / 云', color: '#475569', bg: '#F1F5F9' },
    ].map((a) => (
      <g key={a.label}>
        <rect x={a.x - 60} y="20" width="120" height="32" rx="8" fill={a.bg} stroke={a.color} strokeWidth="1.5" />
        <text x={a.x} y="40" textAnchor="middle" fontSize="11" fontWeight="700" fill={a.color}>{a.label}</text>
        <line x1={a.x} y1="52" x2={a.x} y2="440" stroke={a.color} strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
      </g>
    ))}

    {/* 1 · 登录(家长 App) */}
    <text x="20" y="80" fontSize="10" fontWeight="700" fill={AUTH}>① 登录(微信扫码 OAuth2 / 手机号)</text>
    <line x1="100" y1="95" x2="300" y2="95" stroke="#475569" strokeWidth="1.5" markerEnd="url(#bd-arr)" />
    <text x="125" y="88" fontSize="9" fill="#334155">点击"微信登录"</text>
    <line x1="300" y1="115" x2="700" y2="115" stroke={AUTH} strokeWidth="1.5" markerEnd="url(#bd-arr)" />
    <text x="320" y="108" fontSize="9" fill={AUTH}>跳转 Casdoor /login → 微信开放平台 OAuth</text>
    <line x1="700" y1="135" x2="300" y2="135" stroke={AUTH} strokeWidth="1.5" markerEnd="url(#bd-arr)" />
    <text x="320" y="128" fontSize="9" fill={AUTH} fontWeight="600">id_token + refresh_token(JWT)</text>

    {/* 分隔 */}
    <line x1="20" y1="155" x2="1180" y2="155" stroke="#CBD5E1" strokeDasharray="4 3" />

    {/* 2 · 配网 */}
    <text x="20" y="180" fontSize="10" fontWeight="700" fill={DEV}>② 配网(BluFi 蓝牙)</text>
    <line x1="100" y1="195" x2="500" y2="195" stroke="#475569" strokeWidth="1.5" markerEnd="url(#bd-arr-dev)" />
    <text x="125" y="188" fontSize="9" fill={DEV}>长按开机键 5s 进配网态(LED 蓝色快闪)</text>
    <line x1="300" y1="215" x2="500" y2="215" stroke={DEV} strokeWidth="1.5" markerEnd="url(#bd-arr-dev)" />
    <text x="320" y="208" fontSize="9" fill={DEV}>蓝牙 BluFi · 传 Wi-Fi SSID + PSK + family_id</text>
    <line x1="500" y1="235" x2="1100" y2="235" stroke={DEV} strokeWidth="1.5" markerEnd="url(#bd-arr-dev)" />
    <text x="520" y="228" fontSize="9" fill={DEV}>设备连 Wi-Fi → 上云 mTLS 握手</text>

    {/* 3 · 设备认证 + 绑定确认 */}
    <text x="20" y="265" fontSize="10" fontWeight="700" fill={BIZ}>③ 设备认证 + 家长扫码确认</text>
    <line x1="500" y1="280" x2="900" y2="280" stroke={DEV} strokeWidth="1.5" markerEnd="url(#bd-arr)" />
    <text x="520" y="273" fontSize="9" fill={BIZ}>POST /device/handshake · {'{ device_id, fw_v, hmac }'}</text>
    <line x1="900" y1="300" x2="500" y2="300" stroke={BIZ} strokeWidth="1.5" markerEnd="url(#bd-arr-dev)" />
    <text x="520" y="293" fontSize="9" fill={BIZ}>device_token(短期 JWT)+ pending_bind_code(6 位)</text>

    <line x1="500" y1="320" x2="100" y2="320" stroke={DEV} strokeWidth="1.5" markerEnd="url(#bd-arr)" />
    <text x="120" y="313" fontSize="9" fill={DEV}>设备屏 / 喇叭播报"绑定码 8472"</text>

    <line x1="100" y1="340" x2="300" y2="340" stroke="#475569" strokeWidth="1.5" markerEnd="url(#bd-arr)" />
    <text x="125" y="333" fontSize="9" fill="#334155">App 输入 8472(或扫二维码)</text>

    <line x1="300" y1="360" x2="900" y2="360" stroke={BIZ} strokeWidth="1.5" markerEnd="url(#bd-arr)" />
    <text x="320" y="353" fontSize="9" fill={BIZ}>POST /device/bind · {'{ bind_code, family_id, child_id }'}</text>

    <line x1="900" y1="380" x2="300" y2="380" stroke={BIZ} strokeWidth="1.5" markerEnd="url(#bd-arr)" />
    <text x="320" y="373" fontSize="9" fill={BIZ} fontWeight="600">200 OK · device 写入 family_id + child_id</text>

    {/* 4 · 设备 boot 后获取业务 token */}
    <line x1="500" y1="410" x2="900" y2="410" stroke={DEV} strokeWidth="1.2" markerEnd="url(#bd-arr-dev)" strokeDasharray="3 2" />
    <text x="520" y="403" fontSize="9" fill={DEV}>之后每次 boot:用 device_token 换业务长期 session</text>

    <line x1="900" y1="430" x2="500" y2="430" stroke={BIZ} strokeWidth="1.2" markerEnd="url(#bd-arr-dev)" strokeDasharray="3 2" />
    <text x="520" y="423" fontSize="9" fill={BIZ}>session + child_id → 进入 22B 主链路</text>
  </svg>
);

// ============================================================
// 数据
// ============================================================
interface OssDecisionRow {
  name: string;
  license: string;
  decision: string;
  tone: 'use' | 'fork' | 'skip';
  why: string;
}

const AUTH_DECISIONS: OssDecisionRow[] = [
  { name: 'Casdoor', license: 'Apache-2.0 · github.com/casbin/casdoor', decision: '直接用', tone: 'use', why: '国产开源 · 微信 / 微信小程序 / QQ / 钉钉 / 飞书登录开箱即用 · 中文文档 · 国内云自托管 · 暴露标准 OIDC,业务层只对接 OIDC 不被锁死。这是为什么选它而非国际方案的核心:县城用户 80% 只装微信,微信登录是不可妥协的硬需求。' },
  { name: 'Logto', license: 'MPL-2.0', decision: '备选', tone: 'fork', why: 'DX 现代 + API 干净 + 文档好,但微信 connector 需自己实现(社区有现成 fork 但不官方)。如果团队偏好英文生态 + 后期国际化,可作 V2 替代品。' },
  { name: 'SuperTokens', license: 'Apache-2.0', decision: '不用', tone: 'skip', why: '主打 passwordless / 会话管理,微信生态没有原生支持,要自己接太重。我们不需要 SuperTokens 那套激进的会话刷新策略。' },
  { name: 'Keycloak', license: 'Apache-2.0', decision: '不用', tone: 'skip', why: '企业 SSO 用得多,但 JVM 运维成本太高 · 微信登录需要写 SPI 插件 · 默认 UI 偏 B 端难用。ToC 项目过重。' },
  { name: 'Auth0 / Clerk / Firebase / Cognito', license: '商业 SaaS', decision: '不用', tone: 'skip', why: '数据出境 · 3-8 岁儿童数据是 PIPL + 儿童条例最敏感类目,直接死。即便不考虑合规,价格在 ToC 规模下也不友好。' },
  { name: '完全自建', license: '—', decision: '不用', tone: 'skip', why: '密码哈希参数 / token 过期策略 / refresh rotation / 撞库防护 / 多端会话 / 找回密码 —— 这些都是已被反复验证的轮子,小团队自研 = 引入安全坑。' },
];

interface RoleRow {
  role: string;
  who: string;
  perms: string;
}

const ROLES: RoleRow[] = [
  { role: 'owner · 主家长', who: '创建 Family 的那个人(通常是主要购买者)', perms: '全部权限:管理成员 / 增删孩子 / 改订阅 / 删事实 / 解绑设备 / 注销家庭' },
  { role: 'spouse · 副家长', who: '主家长邀请的配偶或共抚养人', perms: '同 owner 但不可注销家庭、不可移除 owner' },
  { role: 'grandparent · 爷爷奶奶', who: '主家长邀请加入的祖辈', perms: '看周报 ✔ · 录语音叫醒 ✔ · 改孩子画像 ✘ · 删事实 ✘ · 改订阅 ✘' },
  { role: 'agent · 县代理', who: '帮助乡镇用户首次配网 / 解决问题的代理人', perms: '协助配网完成绑定 ✔ · 看孩子任何数据 ✘ · 售后工单仅看脱敏字段(详见 28)' },
];

interface MvpRow {
  phase: string;
  auth: string;
  biz: string;
  bind: string;
  pay: string;
}

const MVP_PHASES: MvpRow[] = [
  { phase: 'M2 · 内测(50 户)', auth: 'Casdoor 默认 UI · 仅手机号登录', biz: 'Account / Family / Child / Device 主表', bind: '蓝牙 BluFi + 6 位绑定码,无二维码', pay: '不上付费,内测全免' },
  { phase: 'M4 · DVT(300 户)', auth: '+ 微信开放平台 OAuth · App 走原生登录', biz: '+ FamilyMember + Role 矩阵 + ParentalConsent', bind: '+ 二维码扫码绑定 + 设备转赠流程', pay: '+ 微信支付 + Subscription + 内购订单' },
  { phase: 'M6 · PVT(1000 户)', auth: '+ 微信小程序登录 · 异地登录提醒 · 多端会话管理', biz: '+ 一键导出 + 一键删除 + 注销家庭', bind: '+ 设备丢失上报 + 解绑 + 设备风控', pay: '+ 月付 / 年付 / 续费提醒 + 退款流程' },
  { phase: 'V1.5 后', auth: '+ 抖音 / QQ 登录 · 实名核验(可选)', biz: '+ 县代理体系(详见 28) + 多 Family 协同', bind: '+ 多设备群组(同孩子多场景) + 漫游', pay: '+ 软商品商城 + IP 联名内购 + 拼团' },
];

// ============================================================
// 小工具组件
// ============================================================
const PartHeader = ({
  icon: Icon,
  color,
  kicker,
  title,
  sub,
}: {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
  kicker: string;
  title: string;
  sub: string;
}) => (
  <div className="flex items-start gap-3 mb-4 pt-3" style={{ borderTop: `2px solid ${color}33` }}>
    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: 'white', border: `1.5px solid ${color}` }}>
      <Icon className="w-5 h-5" style={{ color }} />
    </div>
    <div>
      <div className="text-[10px] font-bold tracking-[0.25em] mb-0.5" style={{ color, opacity: 0.7 }}>{kicker}</div>
      <div className="text-lg font-bold leading-tight" style={{ color }}>{title}</div>
      <div className="text-[12px] mt-1 text-neutral-600">{sub}</div>
    </div>
  </div>
);

const CodeBlock = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-2xl p-4 my-3 font-mono text-[11px] leading-[1.7] overflow-x-auto whitespace-pre" style={{ backgroundColor: '#1F2937', color: '#F9FAFB' }}>
    {children}
  </div>
);

const OssRow = ({ tone, row }: { tone: string; row: OssDecisionRow }) => {
  const tagBg = row.tone === 'use' ? '#ECFDF5' : row.tone === 'fork' ? '#FEF3C7' : '#F3F4F6';
  const tagColor = row.tone === 'use' ? '#047857' : row.tone === 'fork' ? '#B45309' : '#525252';
  return (
    <tr style={{ backgroundColor: 'white' }}>
      <td className="px-3 py-2.5 align-top font-bold whitespace-nowrap" style={{ color: tone }}>
        {row.name}
        <div className="text-[10px] font-normal opacity-70">{row.license}</div>
      </td>
      <td className="px-3 py-2.5 align-top whitespace-nowrap">
        <span className="text-[11px] font-bold rounded-full px-2 py-0.5" style={{ backgroundColor: tagBg, color: tagColor }}>{row.decision}</span>
      </td>
      <td className="px-3 py-2.5 align-top text-[12px] text-neutral-700 leading-relaxed">{row.why}</td>
    </tr>
  );
};

// ============================================================
// 主组件
// ============================================================
export const AccountSystemSection = () => (
  <Card id="account-system" delay={0.62}>
    <SectionLabel>22C · 账号 · 家庭 · 设备绑定 · 微信生态 + 国内合规的账号体系</SectionLabel>
    <SectionTitle>
      <UserCircle className="inline-block w-6 h-6 mr-2 -mt-1" style={{ color: ACCENT }} />
      认证用 Casdoor(开源),业务模型自建——一户多孩、一孩多端、爷奶可读不可买
    </SectionTitle>

    {/* 论点 */}
    <div className="rounded-2xl p-5 mb-7" style={{ backgroundColor: ACCENT_LIGHT }}>
      <div className="text-[11px] font-bold tracking-[0.25em] uppercase mb-2" style={{ color: ACCENT }}>
        核心论点 · 为什么这一节必须独立讲
      </div>
      <ul className="space-y-2 text-sm leading-relaxed" style={{ color: ACCENT }}>
        <li className="flex gap-2.5">
          <span className="shrink-0 font-bold">①</span>
          <span><b>Account 不是简单的"用户登录"</b>——它决定了谁能买、谁能看周报、谁能改孩子画像、设备丢了怎么办、二胎共不共用订阅、爷爷奶奶能不能录语音。这些是产品决策,不是技术细节。</span>
        </li>
        <li className="flex gap-2.5">
          <span className="shrink-0 font-bold">②</span>
          <span><b>认证 vs 业务必须分层</b>——认证(登录 / 会话 / OAuth)用开源(Casdoor),业务模型(Family / Child / Device / Subscription)自建。这两层混在一起的项目最后都会重写一次。</span>
        </li>
        <li className="flex gap-2.5">
          <span className="shrink-0 font-bold">③</span>
          <span><b>国内合规是硬约束</b>——3-8 岁儿童数据是 PIPL + 《儿童个人信息网络保护规定》最敏感的类目,Auth0 / Clerk / Firebase / Cognito 全部因数据出境直接出局。Casdoor 自托管在国内云是少数能用的开源认证方案。</span>
        </li>
        <li className="flex gap-2.5">
          <span className="shrink-0 font-bold">④</span>
          <span><b>微信生态是不可妥协的</b>——县城用户 80% 只装微信不装独立 App,微信登录 + 微信小程序 + 微信支付三件套必须能跑。这直接决定了认证方案选 Casdoor 而非 Logto / SuperTokens。</span>
        </li>
      </ul>
    </div>

    {/* SVG 1 · 系统架构 */}
    <div className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: ACCENT }}>
      系统架构 · 客户端 · Casdoor(认证) · 业务模型(自建) · 微信开放平台 / 阿里云 SMS / BluFi
    </div>
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 mb-8 overflow-x-auto">
      <ArchitectureDiagram />
    </div>

    {/* ============================== Part I · 认证层 ============================== */}
    <PartHeader
      icon={KeyRound}
      color={AUTH}
      kicker="PART I · 认证层"
      title="Casdoor · 开源 + 国产 + 微信原生"
      sub={'只用 Casdoor 做"登录 / 会话 / 多渠道身份"——业务层永远只接 OIDC / OAuth2 标准接口,不耦合 Casdoor 内部表,后期可换。'}
    />

    {/* A · 选型表 */}
    <div className="text-[11px] font-semibold mb-2 tracking-wider flex items-center gap-2" style={{ color: AUTH }}>
      <GitBranch className="w-4 h-4" /> A · 选型决策表 · 为什么是 Casdoor
    </div>
    <div className="overflow-x-auto rounded-2xl border mb-6" style={{ borderColor: AUTH_BORDER }}>
      <table className="w-full text-[12px]" style={{ minWidth: 760 }}>
        <thead>
          <tr style={{ backgroundColor: AUTH_LIGHT }}>
            <th className="text-left px-3 py-2.5 font-bold whitespace-nowrap" style={{ color: AUTH }}>候选</th>
            <th className="text-left px-3 py-2.5 font-bold whitespace-nowrap" style={{ color: AUTH }}>决策</th>
            <th className="text-left px-3 py-2.5 font-bold" style={{ color: AUTH }}>为什么</th>
          </tr>
        </thead>
        <tbody>
          {AUTH_DECISIONS.map((r) => <OssRow key={r.name} tone={AUTH} row={r} />)}
        </tbody>
      </table>
    </div>

    {/* B · 部署 */}
    <div className="text-[11px] font-semibold mt-5 mb-2 tracking-wider" style={{ color: AUTH }}>B · 部署方案 · 国内三区自托管</div>
    <ul className="text-[12px] space-y-1.5 mb-3 leading-relaxed text-neutral-700">
      <li>• <b>主部署</b>:阿里云华东 1 主 + 华北 2 备 · Postgres 与业务库共集群 · Casdoor 自身无状态可水平扩</li>
      <li>• <b>对外</b>:仅暴露 <code className="font-mono text-[11px]">/login</code>、<code className="font-mono text-[11px]">/api/login/oauth/access_token</code> 等 OIDC 端点 · 业务层不直连其内部表</li>
      <li>• <b>合规</b>:数据全部留在境内 · 已有 ICP 备案 · 后续走等保二级</li>
    </ul>

    {/* C · API */}
    <div className="text-[11px] font-semibold mt-5 mb-2 tracking-wider" style={{ color: AUTH }}>C · 业务层与 Casdoor 的接口形态(标准 OIDC)</div>
    <CodeBlock>{`# 业务后端只通过 OIDC discovery 与 Casdoor 通信
# 不直接读写 Casdoor 数据库 —— 后期可换实现

OIDC_ISSUER = "https://auth.lula.cn"

class AuthClient:
    def verify(id_token: str) -> Claims:
        """验证 JWT 签名 + iss + aud + exp"""

    def refresh(refresh_token: str) -> tuple[id_token, refresh_token]:
        """token 续签 · rotation 策略"""

    def get_userinfo(access_token: str) -> UserInfo:
        """拿到 wx_unionid / phone / display_name 等"""

    def revoke(refresh_token: str) -> None:
        """登出 / 撤销会话"""

# 业务侧第一次见到某个 user_id 时 · upsert 到 Account 表
# 之后业务表只引用 user_id 字符串 · 不存密码不存 OAuth state`}</CodeBlock>

    {/* ============================== Part II · 业务模型 ============================== */}
    <PartHeader
      icon={Users}
      color={BIZ}
      kicker="PART II · 业务模型"
      title="自建 · Account → Family → Child → Device 实体树"
      sub="这块没有任何开源能直接对应——一户多孩 / 一孩多端 / 爷奶共管 / 二胎共订阅 / 县代理协助绑定 / 家长一键删孩子数据,全部是自己的业务语义。"
    />

    {/* A · ER 图 */}
    <div className="text-[11px] font-semibold mb-2 tracking-wider" style={{ color: BIZ }}>A · UML ER 图 · 7 个核心实体</div>
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 mb-5 overflow-x-auto">
      <ErDiagram />
    </div>

    {/* B · 关键设计决策 */}
    <div className="text-[11px] font-semibold mt-2 mb-2 tracking-wider" style={{ color: BIZ }}>B · 关键设计决策 · 为什么这样建模</div>
    <ul className="text-[12px] space-y-2 mb-5 leading-relaxed text-neutral-700">
      <li>• <b>Family 是订阅与权限的中心</b>,不是 Account。原因:二胎共用一个订阅、爷爷奶奶要能加入但不能买。如果订阅挂在 Account 上,二胎要重复付费、爷奶看不到孩子,产品上跑不通。</li>
      <li>• <b>Child 的 child_id 是 22B 的主键</b>。Memory 节里的 ChildProfile / SessionSummary / InteractionFact 全部以这个 child_id 为外键。两张表跨节但同库,事务一致。</li>
      <li>• <b>Device.child_id 是可改的</b>。场景:孩子升级了一台 Lula、玩具转赠给弟弟、设备坏了换新机但孩子画像要继承。这要求设备绑定是"可解耦的引用"而非"出厂硬绑"。</li>
      <li>• <b>付款人 ≠ 主家长</b>。WechatPayOrder 单独存 payer_user_id,因为爷爷奶奶可能代付、妈妈付钱给小姨家的孩子。订阅归属看 family_id 而非 payer。</li>
      <li>• <b>ParentalConsent 单独成表 · 模板版本化</b>。PIPL / 儿童条例是会改的,我们要能查"这个孩子是基于哪一版同意书加入系统的",必要时触发重新签署。</li>
    </ul>

    {/* C · API 签名 */}
    <div className="text-[11px] font-semibold mt-5 mb-2 tracking-wider flex items-center gap-2" style={{ color: BIZ }}>
      <Code className="w-4 h-4" /> C · 业务后端核心 API · 围绕"家庭组"展开
    </div>
    <CodeBlock>{`class FamilyService:
    """家庭组管理 · 订阅与权限的中心"""
    def create(owner_user_id: str, name: str) -> Family
    def invite_member(family_id, inviter_user_id, role: Role) -> InviteCode
    def accept_invite(code: str, user_id: str) -> FamilyMember
    def remove_member(family_id, target_user_id, by_user_id) -> None  # 鉴权 owner only
    def list_members(family_id) -> list[FamilyMember]

class ChildService:
    """孩子档案的元数据 · 22B 通过 child_id 扩展画像"""
    def create(family_id, nickname, birthday, dialect, by_user_id) -> Child
        # 前置:family_id 必须有有效的 ParentalConsent(template_version 当前)
    def update_meta(child_id, fields, by_user_id) -> Child       # 鉴权:owner|spouse
    def soft_delete(child_id, by_user_id) -> None                # 鉴权:owner only
    def export_all_data(child_id) -> bytes                       # PIPL · 一键导出
    def hard_delete(child_id, by_user_id) -> None                # PIPL · 一键删除

class DeviceService:
    """设备绑定 · 一孩多端 · 可解耦"""
    def handshake(device_id, fw_version, hmac) -> tuple[device_token, bind_code]
    def bind(bind_code, family_id, child_id, by_user_id) -> Device
    def unbind(device_id, by_user_id) -> None
    def transfer(device_id, new_child_id, by_user_id) -> None    # 转赠场景
    def report_lost(device_id, by_user_id) -> None               # 锁设备 + 风控`}</CodeBlock>

    {/* D · Role 矩阵 */}
    <div className="text-[11px] font-semibold mt-5 mb-2 tracking-wider" style={{ color: BIZ }}>D · Role 矩阵 · 四种角色,产品规则与权限</div>
    <div className="overflow-x-auto rounded-2xl border mb-8" style={{ borderColor: BIZ_BORDER }}>
      <table className="w-full text-[12px]" style={{ minWidth: 760 }}>
        <thead>
          <tr style={{ backgroundColor: BIZ_LIGHT }}>
            <th className="text-left px-3 py-2.5 font-bold whitespace-nowrap" style={{ color: BIZ }}>角色</th>
            <th className="text-left px-3 py-2.5 font-bold whitespace-nowrap" style={{ color: BIZ }}>是谁</th>
            <th className="text-left px-3 py-2.5 font-bold" style={{ color: BIZ }}>权限边界</th>
          </tr>
        </thead>
        <tbody>
          {ROLES.map((r, i) => (
            <tr key={r.role} style={{ backgroundColor: i % 2 ? 'white' : '#FAFAFA' }}>
              <td className="px-3 py-2.5 font-bold align-top" style={{ color: BIZ }}>{r.role}</td>
              <td className="px-3 py-2.5 align-top text-neutral-700">{r.who}</td>
              <td className="px-3 py-2.5 align-top text-neutral-700">{r.perms}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* ============================== Part III · 设备配网与绑定 ============================== */}
    <PartHeader
      icon={Smartphone}
      color={DEV}
      kicker="PART III · 设备配网与绑定"
      title="蓝牙 BluFi + 6 位绑定码 · 县城奶奶辈也能 60 秒搞定"
      sub={'不用扫码 App 这种弱网县城走不通的方案 · 设备直接播报"绑定码 8472"+ App 输入 · 路径最短最容错。'}
    />

    <div className="text-[11px] font-semibold mb-2 tracking-wider" style={{ color: DEV }}>A · 端到端时序图 · 登录 → 配网 → 设备认证 → 家长扫码确认</div>
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 mb-5 overflow-x-auto">
      <BindSequenceDiagram />
    </div>

    <div className="text-[11px] font-semibold mt-2 mb-2 tracking-wider" style={{ color: DEV }}>B · 协议选择 · BluFi vs SmartConfig vs SoftAP</div>
    <ul className="text-[12px] space-y-1.5 mb-5 leading-relaxed text-neutral-700">
      <li>• <b>BluFi(蓝牙配网)</b>—— 主选 · 乐鑫 ESP-IDF 原生支持 · 免切换 Wi-Fi · 县城路由器五花八门兼容性最好 · 体感最像"米家"</li>
      <li>• <b>SmartConfig</b> · 备选(广播 Wi-Fi 帧 · 部分路由器禁用 · 不稳)</li>
      <li>• <b>SoftAP</b> · 兜底(设备开热点 · App 切热点 · 体验差,只在 BluFi 失败时降级)</li>
    </ul>

    <div className="text-[11px] font-semibold mt-2 mb-2 tracking-wider" style={{ color: DEV }}>C · 异常场景 · 全部要走通,不能让客服扛</div>
    <div className="grid md:grid-cols-2 gap-3 mb-8">
      <div className="rounded-2xl p-4 border" style={{ backgroundColor: DEV_LIGHT, borderColor: DEV_BORDER }}>
        <div className="text-[12px] font-bold mb-2" style={{ color: DEV_DEEP }}>设备转赠 / 二手</div>
        <div className="text-[12px] leading-relaxed" style={{ color: DEV }}>原家长 App 主动 unbind → 设备 OTA 接收 → 清本地 child_id → 进入待配网态。新家长按正常流程 bind。</div>
      </div>
      <div className="rounded-2xl p-4 border" style={{ backgroundColor: DEV_LIGHT, borderColor: DEV_BORDER }}>
        <div className="text-[12px] font-bold mb-2" style={{ color: DEV_DEEP }}>设备丢失 / 被偷</div>
        <div className="text-[12px] leading-relaxed" style={{ color: DEV }}>家长 App 一键 report_lost → 后端拉黑 device_id · 拒绝再次握手 · 该设备永远无法重新绑定到任何家庭(防销赃)。</div>
      </div>
      <div className="rounded-2xl p-4 border" style={{ backgroundColor: DEV_LIGHT, borderColor: DEV_BORDER }}>
        <div className="text-[12px] font-bold mb-2" style={{ color: DEV_DEEP }}>家长换手机 / 重装 App</div>
        <div className="text-[12px] leading-relaxed" style={{ color: DEV }}>用同手机号 / 微信重新登录即恢复 Family + Child + Device,无需重新配网。设备 device_token 一直在云上有效。</div>
      </div>
      <div className="rounded-2xl p-4 border" style={{ backgroundColor: DEV_LIGHT, borderColor: DEV_BORDER }}>
        <div className="text-[12px] font-bold mb-2" style={{ color: DEV_DEEP }}>县代理协助配网</div>
        <div className="text-[12px] leading-relaxed" style={{ color: DEV }}>agent 角色可代为完成 BluFi · bind 时使用家长扫的二维码 · 全程不接触家长账号密码 · 完成后自动退场(详见 28 节宝妈带货)。</div>
      </div>
    </div>

    {/* ============================== Part IV · 微信支付 / 订阅 ============================== */}
    <PartHeader
      icon={ShieldCheck}
      color={PAY}
      kicker="PART IV · 微信支付 + 订阅 + 内购"
      title="走开放平台官方 SDK · 订阅挂 Family · 状态机最简"
      sub="无开源替代品 · 直接接微信开放平台 + 微信支付 V3 · 重点是订阅与 Family 的关联设计,而非支付本身。"
    />

    <div className="text-[11px] font-semibold mb-2 tracking-wider" style={{ color: PAY }}>A · 订阅 · 与 Family 而非 Account 关联</div>
    <ul className="text-[12px] space-y-1.5 mb-5 leading-relaxed text-neutral-700">
      <li>• <b>挂 Family 不挂 Account</b>:二胎共用同一份订阅(看 SKU)、爷爷奶奶代付不影响订阅归属、主家长换号订阅不丢</li>
      <li>• <b>状态机:</b><code className="font-mono text-[11px]">trial → active → grace(过期 7 天宽限) → expired → renewed</code> · 设备端只关心 active vs not</li>
      <li>• <b>SKU 切片</b>(对齐 25 节):¥149 主机含 1 年 · 第 2 年起 ¥39/年 / ¥9.9 月 · 升级 ¥19.9 月安全档 · 内购按"次"或"包"</li>
      <li>• <b>异步通知必须幂等</b>:微信支付回调可能重复 · 用 out_trade_no 做唯一键</li>
    </ul>

    <div className="text-[11px] font-semibold mt-2 mb-2 tracking-wider" style={{ color: PAY }}>B · 微信开放平台清单 · 应用要先备案</div>
    <ul className="text-[12px] space-y-1.5 mb-8 leading-relaxed text-neutral-700">
      <li>• 微信开放平台移动应用(Android + iOS) · 用于 App 微信登录与支付</li>
      <li>• 微信小程序 · 用于爷爷奶奶 / 县代理低门槛入口</li>
      <li>• 微信公众号(订阅号) · 用于产品通知 + 周报 H5 推送</li>
      <li>• 商户号(微信支付) · 与开放平台账号关联</li>
    </ul>

    {/* ============================== Part V · 合规 ============================== */}
    <PartHeader
      icon={ShieldCheck}
      color={COMP}
      kicker="PART V · 合规边界"
      title="PIPL + 儿童条例 · 家长同意书 · 一键删除"
      sub={'儿童数据是国内合规最高敏感等级 · 这一节的所有设计都不是"加分项"是"门槛"。'}
    />
    <div className="rounded-2xl p-5 mb-7 border" style={{ backgroundColor: COMP_LIGHT, borderColor: '#BE123C33' }}>
      <ul className="space-y-2 text-[13px] leading-relaxed" style={{ color: COMP_DEEP }}>
        <li>· <b>家长同意书是创建 Child 的前置条件</b>——没有有效签署的 ParentalConsent,业务层拒绝 <code className="font-mono text-[11px]">ChildService.create()</code>。同意书模板版本化,法规改了就触发重新签。</li>
        <li>· <b>一键导出 + 一键删除</b>——家长 App 暴露这两个按钮 · 调 <code className="font-mono text-[11px]">export_all_data()</code> / <code className="font-mono text-[11px]">hard_delete()</code> · 后端级联删 22B 节所有该 child_id 的画像 / 摘要 / 事实 / 学习项 / 情绪日志。</li>
        <li>· <b>数据出境零暴露</b>——Casdoor 自托管在阿里云国内 · 业务库 PG 国内 · 火山引擎模型同区内网 · BGE embedding 本地推理 · 整条链路无任何数据离境。</li>
        <li>· <b>账号注销 = 家庭注销</b>——主家长注销 → 删 Family + 所有 Child + 所有 Device 解绑 + 所有 FamilyMember 关系。30 天软删除窗口可撤销。</li>
        <li>· <b>实名留口子不强制</b>——M2/M4 不要求实名 · M6 PVT 后视渠道要求(如直播带货)上实名核验 · 留接口不上线。</li>
      </ul>
    </div>

    {/* ============================== Part VI · MVP 节奏 ============================== */}
    <div className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3 flex items-center gap-2" style={{ color: ACCENT }}>
      <ListChecks className="w-4 h-4" /> Part VI · MVP 节奏 · 四块各自不同节奏(对齐 24 节)
    </div>
    <div className="overflow-x-auto rounded-2xl border mb-3" style={{ borderColor: '#E5E5E5' }}>
      <table className="w-full text-[12px]" style={{ minWidth: 800 }}>
        <thead>
          <tr className="bg-neutral-100">
            <th className="text-left px-3 py-2.5 font-bold whitespace-nowrap text-neutral-700">阶段</th>
            <th className="text-left px-3 py-2.5 font-bold whitespace-nowrap" style={{ color: AUTH }}>认证</th>
            <th className="text-left px-3 py-2.5 font-bold whitespace-nowrap" style={{ color: BIZ }}>业务模型</th>
            <th className="text-left px-3 py-2.5 font-bold whitespace-nowrap" style={{ color: DEV }}>设备绑定</th>
            <th className="text-left px-3 py-2.5 font-bold whitespace-nowrap" style={{ color: PAY }}>支付 / 订阅</th>
          </tr>
        </thead>
        <tbody>
          {MVP_PHASES.map((m, i) => (
            <tr key={m.phase} style={{ backgroundColor: i === 0 ? ACCENT_LIGHT : i % 2 ? 'white' : '#FAFAFA' }}>
              <td className="px-3 py-2.5 align-top font-bold whitespace-nowrap" style={{ color: ACCENT }}>{m.phase}</td>
              <td className="px-3 py-2.5 align-top text-neutral-700">{m.auth}</td>
              <td className="px-3 py-2.5 align-top text-neutral-700">{m.biz}</td>
              <td className="px-3 py-2.5 align-top text-neutral-700">{m.bind}</td>
              <td className="px-3 py-2.5 align-top text-neutral-700">{m.pay}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p className="text-[11px] text-neutral-500 leading-relaxed">
      <b>原则</b>:M2 用 Casdoor 默认 UI 顶住,先把"登录 + 一户一孩 + 蓝牙绑定"这条主轴跑通;
      M4 加微信生态 + 角色矩阵 + 同意书 + 微信支付;
      M6 加爷奶 / 异地登录 / 设备风控 / 一键删除 / 续费提醒;
      V1.5 后再做县代理体系与软商品商城。
      <b>合规四件套(同意书 / 一键导出 / 一键删 / 注销家庭)在 M4 必须全部到位</b>,因为这是发售前置条件。
    </p>
  </Card>
);
