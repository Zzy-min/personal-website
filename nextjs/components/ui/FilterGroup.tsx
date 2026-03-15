'use client';

import { useMemo, useState } from 'react';
import { cn } from '@/lib/utils';

interface FilterGroupProps {
  items: string[];
  activeItem: string;
  onChange: (value: string) => void;
  collapsedCount?: number;
  defaultLabel?: string;
  moreLabel: string;
  lessLabel: string;
}

export function FilterGroup({
  items,
  activeItem,
  onChange,
  collapsedCount = 8,
  defaultLabel = '全部',
  moreLabel,
  lessLabel,
}: FilterGroupProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldCollapse = items.length > collapsedCount;

  const visibleItems = useMemo(() => {
    if (isExpanded || !shouldCollapse) {
      return items;
    }

    const initialItems = items.slice(0, collapsedCount);

    if (activeItem !== 'all' && !initialItems.includes(activeItem)) {
      return [...initialItems.slice(0, collapsedCount - 1), activeItem];
    }

    return initialItems;
  }, [activeItem, collapsedCount, isExpanded, items, shouldCollapse]);

  const pillClassName = (isActive: boolean) =>
    cn(
      'rounded-full px-4 py-2 text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25',
      isActive
        ? 'bg-primary text-paper-inverse'
        : 'bg-panel text-muted hover:bg-paper-hover hover:text-text'
    );

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      <button
        type="button"
        aria-pressed={activeItem === 'all'}
        className={pillClassName(activeItem === 'all')}
        onClick={() => onChange('all')}
      >
        {defaultLabel}
      </button>

      {visibleItems.map((item) => (
        <button
          key={item}
          type="button"
          aria-pressed={activeItem === item}
          className={pillClassName(activeItem === item)}
          onClick={() => onChange(item)}
        >
          {item}
        </button>
      ))}

      {shouldCollapse ? (
        <button
          type="button"
          aria-pressed={isExpanded}
          className={pillClassName(false)}
          onClick={() => setIsExpanded((value) => !value)}
        >
          {isExpanded ? lessLabel : moreLabel}
        </button>
      ) : null}
    </div>
  );
}
