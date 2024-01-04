import StoryListWithFallback from '@/components/StoryListWithFallback';
import { fetchStoriesAmount } from '@/lib/data';
import { PageWithSearchParamsProps } from '@/lib/types';

export default async function ShowStories(props: PageWithSearchParamsProps) {
  const currentPage = Number(props.searchParams.page ?? '1');
  const amount = Number(props.searchParams.amount ?? '5');
  const totalStories = await fetchStoriesAmount('show');
  const totalPages = Math.ceil(totalStories / amount);

  return (
    <StoryListWithFallback
      currentPage={currentPage}
      filter="show"
      totalPages={totalPages}
      itemsPerPage={amount}
    />
  );
}
