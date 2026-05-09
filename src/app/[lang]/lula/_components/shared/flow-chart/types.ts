export type FlowStatus = 'done' | 'doing' | 'pending';

export interface FlowTrack {
  label: string;
  description: string;
}

export interface FlowPhase {
  id: string;
  phase: string;
  span?: string;
  status: FlowStatus;
  tracks: FlowTrack[];
  milestone: string;
  milestoneLabel?: string;
}
