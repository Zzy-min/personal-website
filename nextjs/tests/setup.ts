import React from 'react';
import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

vi.mock('next/link', () => ({
  default: ({
    href,
    children,
    ...props
  }: {
    href: string | { pathname?: string };
    children: React.ReactNode;
  }) => {
    const resolvedHref =
      typeof href === 'string' ? href : href?.pathname ?? '#';
    return React.createElement('a', { href: resolvedHref, ...props }, children);
  },
}));

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}));
