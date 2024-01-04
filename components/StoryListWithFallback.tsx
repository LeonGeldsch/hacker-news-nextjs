import { Suspense } from 'react';
import StoryListSkeleton from '@/components/StoryListSkeleton';
import StoryList from '@/components/StoryList';
import { StoryFilter } from '@/lib/types';
import StoryPagination from '@/components/StoryPagination';
import { useSearchParams } from 'next/navigation';

type StoryListWithFallbackProps = {
  currentPage: number;
  filter: StoryFilter;
  totalPages: number;
  itemsPerPage: number;
};

export default function StoryListWithFallback({
  currentPage,
  filter,
  totalPages,
  itemsPerPage,
}: StoryListWithFallbackProps) {
  return (
    <Suspense fallback={<StoryListSkeleton />} key={currentPage}>
      <StoryList
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        filter={filter}
      />
      <StoryPagination totalPages={totalPages} />
    </Suspense>
  );
}
