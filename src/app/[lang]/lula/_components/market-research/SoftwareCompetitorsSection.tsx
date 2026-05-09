/* eslint-disable react/no-unescaped-entities */
import { LulaZoomImage } from '@/components/LulaZoomImage';
import { BookOpen } from 'lucide-react';
import { ACCENT, ACCENT_LIGHT, Card, Chip, SectionLabel } from '../../_shared';
import { SOFTWARE_APPS, SOFTWARE_CATS } from '../../_data';

export function SoftwareCompetitorsSection() {
  return (
    <>
{/* 软件端 · 竞品 */}
        <Card id="software" delay={0.15}>
          <SectionLabel>04 · 软件端 · {SOFTWARE_APPS.length} 款代表产品</SectionLabel>
          <p className="text-sm text-neutral-600 leading-relaxed mb-5 mt-3">
            赛道按形态分三类：纯 App 互动课(200–1000 元、无老师服务)、视频 AI 课(2000–3500 元、老师社群督促)、
            软硬一体玩具/早教机(无屏陪伴)。国内由互联网巨头主导——猿辅导(斑马)、字节(瓜瓜龙)、
            好未来(小猴)、洪恩、叽里呱啦、叫叫、凯叔；海外以 Khan Kids、Duolingo ABC、ABCmouse、Khanmigo、Osmo 为代表。
          </p>

          {/* 12 款竞品表 */}
          <div className="overflow-x-auto -mx-6 md:-mx-10 px-6 md:px-10 mb-8">
            <table className="w-full text-sm border-separate border-spacing-y-2 min-w-[1040px]">
              <thead>
                <tr className="text-left text-[11px] uppercase tracking-wider text-neutral-500">
                  <th className="font-semibold pb-2 pr-3 w-64">产品</th>
                  <th className="font-semibold pb-2 pr-3 w-28">界面</th>
                  <th className="font-semibold pb-2 pr-3 w-20">年龄</th>
                  <th className="font-semibold pb-2 pr-3 w-36">价格</th>
                  <th className="font-semibold pb-2 pr-3">关键设计</th>
                  <th className="font-semibold pb-2 w-72" style={{ color: ACCENT }}>
                    抄什么
                  </th>
                </tr>
              </thead>
              <tbody>
                {SOFTWARE_APPS.map((a) => (
                  <tr
                    key={a.name}
                    className="bg-neutral-50/60 hover:bg-neutral-50 transition-colors align-top"
                  >
                    <td className="rounded-l-xl py-3 pl-3 pr-3">
                      <div className="flex items-start gap-3">
                        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                          <LulaZoomImage
                            src={a.img}
                            alt={`${a.name} 产品图`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="min-w-0 flex flex-col gap-1.5">
                          <div className="font-semibold text-neutral-900 leading-snug">
                            {a.name}
                          </div>
                          {a.brand && (
                            <div className="text-xs text-neutral-500">{a.brand}</div>
                          )}
                          <div className="flex flex-wrap gap-1 mt-0.5">
                            <Chip tone={a.region === 'CN' ? 'accent' : 'violet'}>
                              {a.region === 'CN' ? '中国' : '海外'}
                            </Chip>
                            {a.tags?.map((t) => (
                              <Chip tone="neutral" key={t}>
                                {t}
                              </Chip>
                            ))}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 pr-3">
                      <div
                        className={`overflow-hidden border border-neutral-200 bg-white shadow-sm ${
                          a.screenShape === 'wide'
                            ? 'h-16 w-24 rounded-xl'
                            : 'h-[92px] w-[54px] rounded-[14px]'
                        }`}
                      >
                        <LulaZoomImage
                          src={a.screen}
                          alt={`${a.name} App 界面`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="py-3 pr-3 text-neutral-700">{a.age}</td>
                    <td className="py-3 pr-3 text-neutral-700">{a.price}</td>
                    <td className="py-3 pr-3 text-neutral-700 leading-relaxed">
                      {a.highlight}
                    </td>
                    <td
                      className="rounded-r-xl py-3 pr-3 leading-relaxed font-medium"
                      style={{ color: ACCENT }}
                    >
                      → {a.takeaway}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="-mt-3 mb-8 text-xs text-neutral-500 leading-relaxed">
            软件图标与界面图主要取自 Apple App Store 公开素材；Khanmigo 取自官网公开界面图；瓜瓜龙使用公开下载页截图兜底。
          </p>

          {/* 4 类抄法 · 产品逻辑维度 */}
          <div
            className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-3"
            style={{ color: ACCENT }}
          >
            四类抄法 · 产品逻辑维度
          </div>
          <div className="grid md:grid-cols-2 gap-3 mb-6">
            {SOFTWARE_CATS.map((s, i) => (
              <div
                key={s.type}
                className="rounded-2xl border border-neutral-200 p-5 bg-gradient-to-br from-white to-neutral-50"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold"
                    style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
                  >
                    {i + 1}
                  </div>
                  <div className="font-semibold text-neutral-900">{s.type}</div>
                </div>
                <div className="text-[12px] text-neutral-500 mb-2">代表产品：{s.apps}</div>
                <div className="text-sm text-neutral-700 leading-relaxed">{s.takeaway}</div>
              </div>
            ))}
          </div>

          {/* 无屏 callout */}
          <div
            className="rounded-2xl p-5 text-sm leading-relaxed"
            style={{ backgroundColor: '#FEF9C3', color: '#713F12' }}
          >
            <div className="font-semibold mb-1 flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> 重要观察
            </div>
            FoloToy 调研：父母希望孩子以健康方式接受电子产品，最基本就是<b>没有屏幕</b>。
            儿童端不要单独 App，全部内嵌玩具——"无屏"就是最大的差异化卖点。
          </div>
        </Card>
    </>
  );
}
