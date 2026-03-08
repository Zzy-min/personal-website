import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(dateString));
}

export function sortByDateDesc<T>(items: T[], key: keyof T): T[] {
  return [...items].sort((left, right) => {
    const leftDate = new Date(left[key] as string);
    const rightDate = new Date(right[key] as string);
    return rightDate.getTime() - leftDate.getTime();
  });
}
