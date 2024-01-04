'use client';

import { createPageURL } from '@/lib/utils';
import { Pagination } from '@nextui-org/react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type StoryPaginationProps = {
  totalPages: number;
};

export default function StoryPagination({ totalPages }: StoryPaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const [paginationSize, setPaginationSize] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPaginationSize(0);
      } else {
        setPaginationSize(1);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call the function initially to set the size based on the initial window width

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Pagination
      total={totalPages} // Hacker News API returns a maximum of 500 posts for stories and 200 posts for ask/show/jobs
      initialPage={currentPage}
      showControls={paginationSize === 1}
      onChange={(clickedPage) => {
        router.replace(
          createPageURL(pathname, searchParams, { page: clickedPage })
        );
      }}
      key={pathname}
    />
  );
}
