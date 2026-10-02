import { FlowConnector } from './FlowConnector';
import { FlowMilestonePill, FlowPhasePill, FlowTrackPill } from './FlowNodes';
import { FLOW_STATUS_TOKENS } from './tokens';
import type { FlowPhase, FlowStatus } from './types';

interface FlowChartProps {
  phases: FlowPhase[];
  /** Show the legend bar above the chart. Default: true. */
  legend?: boolean;
  /** Optional caption for the legend bar's right slot. */
  caption?: string;
  className?: string;
}

/**
 * Feishu-project-style parallel roadmap chart.
 *
 * Each phase row: [phase pill] → fan-out → [N parallel track pills] → fan-in → [milestone pill].
 * Phases are stacked vertically and connected by a thin segment between rows.
 * Connectors collapse on mobile (< md) and rows fall back to a single column.
 */
export function FlowChart({ phases, legend = true, caption, className = '' }: FlowChartProps) {
  return (
    <div className={`rounded-2xl border border-neutral-200 bg-white p-5 ${className}`}>
      {legend && (
        <div className="flex flex-wrap items-center gap-3 mb-5 text-[11px] text-neutral-500">
          <span className="font-bold uppercase tracking-[0.2em] text-neutral-400">阶段进度</span>
          {(Object.keys(FLOW_STATUS_TOKENS) as FlowStatus[]).map((s) => (
            <span key={s} className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: FLOW_STATUS_TOKENS[s].dot }} />
              {FLOW_STATUS_TOKENS[s].label}
            </span>
          ))}
          {caption && <span className="ml-auto text-neutral-400">{caption}</span>}
        </div>
      )}

      <div className="space-y-2">
        {phases.map((row, idx) => (
          <FlowPhaseRow key={row.id} row={row} isLast={idx === phases.length - 1} />
        ))}
      </div>
    </div>
  );
}

function FlowPhaseRow({ row, isLast }: { row: FlowPhase; isLast: boolean }) {
  const tone = FLOW_STATUS_TOKENS[row.status];
  const trackCount = row.tracks.length;

  return (
    <div className="relative">
      <div className="grid items-stretch gap-2 grid-cols-1 md:grid-cols-[160px_36px_1fr_36px_220px]">
        <div className="flex md:items-center">
          <FlowPhasePill phase={row.phase} span={row.span} status={row.status} />
        </div>

        <div className="hidden md:block">
          <FlowConnector kind="fanout" color={tone.dot} trackCount={trackCount} />
        </div>

        <div
          className="grid gap-2"
          style={{ gridTemplateRows: `repeat(${trackCount}, minmax(0, 1fr))` }}
        >
          {row.tracks.map((track) => (
            <FlowTrackPill key={track.label} label={track.label} status={row.status}>
              {track.description}
            </FlowTrackPill>
          ))}
        </div>

        <div className="hidden md:block">
          <FlowConnector kind="fanin" color={tone.dot} trackCount={trackCount} />
        </div>

        <div className="flex md:items-center">
          <FlowMilestonePill status={row.status} label={row.milestoneLabel}>
            {row.milestone}
          </FlowMilestonePill>
        </div>
      </div>

      {!isLast && (
        <div className="flex justify-center md:justify-start md:pl-[60px] py-1" aria-hidden>
          <div className="w-px h-4" style={{ backgroundColor: '#E5E5E5' }} />
        </div>
      )}
    </div>
  );
}
