interface FlowConnectorProps {
  kind: 'fanout' | 'fanin';
  color: string;
  /** Number of parallel tracks on the multi side. */
  trackCount: number;
}

/**
 * Renders the SVG fan-out / fan-in connector between a single node and N parallel tracks.
 *
 * Uses viewBox 36×100 stretched non-uniformly via preserveAspectRatio="none" so it
 * adapts to the row's actual height. Stroke width stays crisp via vector-effect.
 * Track centers are evenly distributed at i/(N+1) of viewport height.
 */
export function FlowConnector({ kind, color, trackCount }: FlowConnectorProps) {
  const left = kind === 'fanout' ? 0 : 36;
  const right = kind === 'fanout' ? 36 : 0;
  const c1 = kind === 'fanout' ? 22 : 14;
  const c2 = kind === 'fanout' ? 14 : 22;

  const targets = Array.from({ length: trackCount }, (_, i) => ((i + 1) / (trackCount + 1)) * 100);

  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 36 100"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden
    >
      {targets.map((y) => (
        <path
          key={y}
          d={`M ${left} 50 C ${c1} 50, ${c2} ${y}, ${right} ${y}`}
          stroke={color}
          strokeWidth="1.25"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          opacity="0.8"
        />
      ))}
      <circle cx={left} cy="50" r="2.5" fill={color} vectorEffect="non-scaling-stroke" />
      {targets.map((y) => (
        <circle
          key={`dot-${y}`}
          cx={right}
          cy={y}
          r="1.75"
          fill={color}
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}
