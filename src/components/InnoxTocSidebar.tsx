'use client';

import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, List } from 'lucide-react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';

const ACCENT = '#2563EB';
const ACCENT_LIGHT = '#EFF6FF';

export interface TocItem {
  id: string;
  num: string;
  title: string;
  children?: TocItem[];
}

export interface TocGroup {
  label: string;
  hint?: string;
  items: TocItem[];
}

function flattenItems(items: TocItem[]): TocItem[] {
  return items.flatMap((it) => (it.children ? [it, ...it.children] : [it]));
}

type Props =
  | { items: TocItem[]; groups?: never }
  | { items?: never; groups: TocGroup[] };

export function InnoxTocSidebar(props: Props) {
  const flat = useMemo<TocItem[]>(
    () =>
      props.groups
        ? props.groups.flatMap((g) => flattenItems(g.items))
        : flattenItems(props.items ?? []),
    [props.groups, props.items],
  );

  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState<string>(flat[0]?.id ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top,
          );
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 },
    );

    flat.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [flat]);

  const activeItem = flat.find((it) => it.id === active);
  const activeGroupLabel = props.groups?.find((g) =>
    flattenItems(g.items).some((it) => it.id === active),
  )?.label;

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence mode="wait" initial={false}>
        {collapsed ? (
          <motion.button
            key="collapsed"
            type="button"
            onClick={() => setCollapsed(false)}
            initial={{ opacity: 0, x: -12, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -12, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 420, damping: 32 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="hidden lg:flex fixed top-24 left-5 z-40 items-center gap-2 px-3 py-2 bg-white rounded-full shadow-md hover:shadow-lg"
            aria-label="展开目录"
          >
            <List size={14} className="text-neutral-600" />
            <span
              className="text-[11px] font-semibold tabular-nums tracking-wider"
              style={{ color: ACCENT }}
            >
              {activeItem?.num ?? '目录'}
            </span>
            {activeGroupLabel && (
              <span className="text-[10px] text-neutral-400 border-l border-neutral-200 pl-2 ml-0.5">
                {activeGroupLabel}
              </span>
            )}
          </motion.button>
        ) : (
          <motion.nav
            key="expanded"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
            className="hidden lg:flex flex-col fixed top-24 left-5 z-40 w-60 max-h-[calc(100vh-7rem)] bg-white rounded-2xl shadow-md overflow-hidden"
            aria-label="章节目录"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-100">
              <span
                className="text-[10px] font-semibold uppercase tracking-[0.25em]"
                style={{ color: ACCENT }}
              >
                目录
              </span>
              <motion.button
                type="button"
                onClick={() => setCollapsed(true)}
                whileHover={{ scale: 1.1, x: -1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 600, damping: 28 }}
                className="text-neutral-400 hover:text-neutral-700"
                aria-label="收起目录"
              >
                <ChevronLeft size={14} />
              </motion.button>
            </div>
            <div className="overflow-y-auto py-3 px-2">
              {props.groups ? (
                <ul className="space-y-3.5">
                  {props.groups.map((group) => {
                    const isGroupActive = flattenItems(group.items).some(
                      (it) => it.id === active,
                    );
                    return (
                      <li key={group.label}>
                        <div className="px-2.5 mb-1.5 flex items-baseline gap-2">
                          <motion.span
                            className="text-[9.5px] font-semibold uppercase tracking-[0.28em]"
                            animate={{ color: isGroupActive ? ACCENT : '#9CA3AF' }}
                            transition={{ duration: 0.25 }}
                          >
                            {group.label}
                          </motion.span>
                          {group.hint && (
                            <span className="text-[10px] text-neutral-300 truncate">
                              {group.hint}
                            </span>
                          )}
                        </div>
                        <ul className="space-y-0.5 border-l border-neutral-100 ml-2.5 pl-1.5">
                          {group.items.map((it) => (
                            <TocLink key={it.id} item={it} active={active} />
                          ))}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <ul className="space-y-0.5">
                  {(props.items ?? []).map((it) => (
                    <TocLink key={it.id} item={it} active={active} />
                  ))}
                </ul>
              )}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}

function TocLink({
  item,
  active,
  depth = 0,
}: {
  item: TocItem;
  active: string;
  depth?: number;
}) {
  const isActive = active === item.id;
  const childActive = item.children?.some((c) => c.id === active) ?? false;
  return (
    <li>
      <a
        href={`#${item.id}`}
        className="relative flex items-baseline gap-2.5 px-2.5 py-1.5 rounded-lg leading-snug"
        style={{
          paddingLeft: depth > 0 ? `${10 + depth * 12}px` : undefined,
          fontSize: depth > 0 ? '11.5px' : '12px',
        }}
      >
        {isActive && (
          <motion.span
            layoutId="innox-toc-active"
            className="absolute inset-0 rounded-lg"
            style={{ backgroundColor: ACCENT_LIGHT }}
            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
          />
        )}
        <span
          className="relative z-[1] font-semibold tabular-nums shrink-0 transition-colors duration-200"
          style={{
            color: isActive || childActive ? ACCENT : '#9CA3AF',
            fontSize: depth > 0 ? '9.5px' : '10px',
          }}
        >
          {item.num}
        </span>
        <span
          className="relative z-[1] line-clamp-2 transition-colors duration-200"
          style={{ color: isActive ? ACCENT : childActive ? '#374151' : '#525252' }}
        >
          {item.title}
        </span>
      </a>
      {item.children && item.children.length > 0 && (
        <ul className="space-y-0.5">
          {item.children.map((child) => (
            <TocLink key={child.id} item={child} active={active} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}
