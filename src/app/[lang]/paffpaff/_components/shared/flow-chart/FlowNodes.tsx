import { FLOW_STATUS_TOKENS } from './tokens';
import type { FlowStatus } from './types';

export function FlowPhasePill({
  phase,
  span,
  status,
}: {
  phase: string;
  span?: string;
  status: FlowStatus;
}) {
  const tone = FLOW_STATUS_TOKENS[status];
  return (
    <div
      className="w-full rounded-2xl border px-3 py-2.5 flex flex-col gap-1"
      style={{ backgroundColor: tone.bg, borderColor: tone.border }}
    >
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: tone.dot }} />
        <span className="text-sm font-bold" style={{ color: tone.text }}>{phase}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span
          className="text-[10px] font-bold px-1.5 py-0.5 rounded"
          style={{ backgroundColor: tone.tagBg, color: tone.text }}
        >
          {tone.label}
        </span>
        {span && <span className="text-[11px] text-neutral-500">{span}</span>}
      </div>
    </div>
  );
}

export function FlowTrackPill({
  label,
  status,
  children,
}: {
  label: string;
  status: FlowStatus;
  children: React.ReactNode;
}) {
  const tone = FLOW_STATUS_TOKENS[status];
  return (
    <div
      className="rounded-2xl border bg-white px-3 py-2 flex items-start gap-2 min-h-[58px]"
      style={{ borderColor: tone.border }}
    >
      <span className="w-2 h-2 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: tone.dot }} />
      <div className="min-w-0">
        <div className="text-[11px] font-bold tracking-wider mb-0.5" style={{ color: tone.text }}>
          {label}
        </div>
        <div className="text-[12px] leading-relaxed text-neutral-600">{children}</div>
      </div>
    </div>
  );
}

export function FlowMilestonePill({
  status,
  label = '里程碑',
  children,
}: {
  status: FlowStatus;
  label?: string;
  children: React.ReactNode;
}) {
  const tone = FLOW_STATUS_TOKENS[status];
  return (
    <div
      className="w-full rounded-2xl border-2 px-3 py-2.5 flex items-start gap-2 bg-white"
      style={{ borderColor: tone.dot }}
    >
      <span className="w-2 h-2 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: tone.dot }} />
      <div className="min-w-0">
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] mb-0.5" style={{ color: tone.text }}>
          {label}
        </div>
        <div className="text-[12px] font-semibold leading-snug text-neutral-900">{children}</div>
      </div>
    </div>
  );
}
