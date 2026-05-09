import type { FlowStatus } from './types';

export interface FlowStatusToken {
  dot: string;
  bg: string;
  text: string;
  border: string;
  tagBg: string;
  label: string;
}

export const FLOW_STATUS_TOKENS: Record<FlowStatus, FlowStatusToken> = {
  done: {
    dot: '#10B981',
    bg: '#ECFDF5',
    text: '#065F46',
    border: '#A7F3D0',
    tagBg: '#D1FAE5',
    label: '已完成',
  },
  doing: {
    dot: '#F59E0B',
    bg: '#FFFBEB',
    text: '#92400E',
    border: '#FDE68A',
    tagBg: '#FEF3C7',
    label: '进行中',
  },
  pending: {
    dot: '#A3A3A3',
    bg: '#FAFAFA',
    text: '#525252',
    border: '#E5E5E5',
    tagBg: '#F5F5F5',
    label: '待开始',
  },
};
