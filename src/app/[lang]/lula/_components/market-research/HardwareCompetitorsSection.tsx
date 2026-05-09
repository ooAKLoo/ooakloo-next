import { LulaZoomImage } from '@/components/LulaZoomImage';
import { LulaZoomVideo } from '@/components/LulaZoomVideo';
import { ACCENT, Card, Chip, SectionLabel } from '../../_shared';
import { COMPETITORS, TIER_TONE } from '../../_data';

export function HardwareCompetitorsSection() {
  return (
    <>
{/* 竞品表 */}
        <Card id="competitors" delay={0.1}>
          <SectionLabel>03 · 硬件端 · {COMPETITORS.length} 款竞品</SectionLabel>
          <div className="overflow-x-auto -mx-6 md:-mx-10 px-6 md:px-10 mt-3">
            <table className="w-full text-sm border-separate border-spacing-y-2 min-w-[1480px]">
              <thead>
                <tr className="text-left text-[11px] uppercase tracking-wider text-neutral-500">
                  <th className="font-semibold pb-2 pr-3 w-24">图片</th>
                  <th className="font-semibold pb-2 pr-3">产品</th>
                  <th className="font-semibold pb-2 pr-3 w-44">参考价格</th>
                  <th className="font-semibold pb-2 pr-3 w-52">公开销量 / 热度 / 人群</th>
                  <th className="font-semibold pb-2 pr-3 w-72">核心功能 / AI 能力</th>
                  <th className="font-semibold pb-2 pr-3 w-72">客户端 / 核心优劣势</th>
                  <th className="font-semibold pb-2 w-72">账号 / 对标切入点</th>
                </tr>
              </thead>
              <tbody>
                {COMPETITORS.map((c) => (
                  <tr
                    key={c.name}
                    className="bg-neutral-50/60 hover:bg-neutral-50 transition-colors align-top"
                  >
                    <td className="rounded-l-xl py-3 pl-3 pr-3">
                      <div className="w-20 h-20 rounded-xl bg-white border border-neutral-200 overflow-hidden flex items-center justify-center">
                        <LulaZoomImage
                          src={c.img}
                          alt={c.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="py-3 pr-3">
                      <div className="flex flex-col gap-1.5">
                        <div className="font-semibold text-neutral-900 leading-snug">
                          {c.link ? (
                            <a
                              href={c.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                              style={{ color: ACCENT }}
                            >
                              {c.name}
                            </a>
                          ) : (
                            c.name
                          )}
                        </div>
                        {c.brand && (
                          <div className="text-xs text-neutral-500">{c.brand}</div>
                        )}
                        <div className="flex flex-wrap gap-1 mt-0.5">
                          <Chip tone={TIER_TONE[c.tier]}>{c.tier}</Chip>
                          {c.tags?.map((t) => (
                            <Chip tone="neutral" key={t}>
                              {t}
                            </Chip>
                          ))}
                        </div>
                        {(c.gallery?.length || c.video) && (
                          <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                            {c.gallery?.map((src, i) => (
                              <div
                                key={src}
                                className="w-9 h-9 rounded-md overflow-hidden border border-neutral-200 bg-white flex-shrink-0"
                              >
                                <LulaZoomImage
                                  src={src}
                                  alt={`${c.name} 图集 ${i + 1}`}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ))}
                            {c.video && <LulaZoomVideo src={c.video} label="视频" />}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="py-3 pr-3 text-neutral-700">{c.price}</td>
                    <td className="py-3 pr-3">
                      <div className="text-neutral-800 font-medium leading-snug">
                        {c.sales}
                      </div>
                      {c.salesNote && (
                        <div className="text-[12px] text-neutral-500 mt-0.5 leading-snug">
                          {c.salesNote}
                        </div>
                      )}
                    </td>
                    <td className="py-3 pr-3 text-neutral-700 leading-relaxed">
                      {c.design}
                    </td>
                    <td className="py-3 pr-3 text-neutral-700 leading-relaxed">
                      {c.clientForm}
                    </td>
                    <td className="rounded-r-xl py-3 pr-3 text-neutral-700 leading-relaxed">
                      {c.accountSystem}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-xs text-neutral-500 leading-relaxed">
            数据来源：跃然创新 / Haivivi 天猫旗舰店 / FoloToy / 贝陪科技 / 荣耀亲选 / 小米 / 火火兔 / 优必选 / 乐森 / POP MART / App Store / 小米应用商店等公开页面、
            媒体报道、电商平台口径、用户截图与小红书搜索结果，非审计销量；新增热品按 2026-05-09 截图/搜索结果标注为热度口径。
            客户端形态与账号体系基于 App Store / 微信小程序 / 官网帮助中心 / 公开拆解评测核对，未披露字段明确标注；新增对标清单条目按 2026 竞品清单整理为产品定位口径；部分产品图为防盗链失败或缺少清晰素材时使用占位图。
          </p>
        </Card>
    </>
  );
}
