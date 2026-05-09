import { Link as LinkIcon } from 'lucide-react';
import { Card } from '../../_shared';

export function LinkSection() {
  return (
    <>
{/* 战略：串联 */}
        <Card id="link" delay={0.44} dark className="text-white">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] mb-3 text-blue-300">
            <LinkIcon className="w-3.5 h-3.5" />
            11 · 串联
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 leading-tight">
            硬件薄毛利 + <span className="text-blue-300">软商品 / 云续费</span> + <span className="text-blue-300">县代理运营</span> = 商业闭环
          </h2>
          <p className="text-neutral-300 leading-relaxed mb-6 max-w-3xl">
            <b className="text-white">刻意放弃 NFC 卡牌路线</b>——主机带卡槽 + 一卡一内容会大幅增加生产、物流、售后复杂度，
            和我们 ¥149–249 的下沉价格段不兼容。改用更轻的三条腿：硬件买断 + 1 年云服务做获客；App 内购<b className="text-white">软商品</b>(IP 外衣 / 换装皮肤 / 内容包)
            + 二年起 ¥39/年云续费做 LTV；<b className="text-white">县代理大姐网络</b>做信任与售后。
          </p>
          <div className="grid md:grid-cols-3 gap-3">
            {[
              {
                role: '玩具(主机)',
                desc: '硬件买断 + 含 1 年云服务',
                detail: '¥149 / 199 / 249 三档、BOM ~95 元、含完整离线内容库；无屏；方言 + 父母音；WiFi + 离线兜底；离线故事 / 儿歌永不锁',
              },
              {
                role: '软商品 + 云续费',
                desc: 'App 内购 / 实体配件 / 年费',
                detail: 'IP 联名外衣(义乌代工，无电子)、换装皮肤、节日特别版、高级方言包、父母声音定制 ¥9.9–99；二年起 ¥39/年云续费(BubblePal 同档 99/年的 1/3)',
              },
              {
                role: '县代理',
                desc: '本地大姐网络',
                detail: '微信群分销 + 上门售后 + 节日亲子聚会 + 本地口碑——大厂不可复制的护城河',
              },
            ].map((x) => (
              <div
                key={x.role}
                className="rounded-2xl bg-white/5 border border-white/10 p-5"
              >
                <div className="text-blue-300 text-xs font-semibold uppercase tracking-wider mb-2">
                  {x.role}
                </div>
                <div className="text-base font-semibold text-white mb-2">{x.desc}</div>
                <div className="text-sm text-neutral-300 leading-relaxed">{x.detail}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-blue-500/10 border border-blue-400/20 p-5">
            <div className="text-blue-300 text-[11px] font-bold uppercase tracking-wider mb-2">
              组合公式
            </div>
            <div className="text-sm md:text-base text-blue-100 leading-relaxed">
              米兔的下沉价位 + BubblePal 的 AI 体验 + 阿尔法蛋的声音克隆 +
              牛听听的熏听 + 洪恩的分级内容 + FoloToy 的主动召唤 + <b className="text-white">我们的县代理大姐网络</b> = Lula 第一版
            </div>
          </div>
        </Card>
    </>
  );
}
