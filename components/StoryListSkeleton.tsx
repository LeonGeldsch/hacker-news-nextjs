'use client';

import StorySkeleton from '@/components/StorySkeleton';
import { Pagination } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';

export default function StoryListSkeleton() {
  const itemsPerPage = Number(useSearchParams().get('amount') ?? 5);

  return (
    <>
      <ul className="flex w-full max-w-[400px] flex-col gap-5">
        {Array.from(Array(itemsPerPage)).map((_x, index) => (
          <StorySkeleton key={index} />
        ))}
      </ul>
      <Pagination total={10} showControls isDisabled initialPage={undefined} />
    </>
  );
}
