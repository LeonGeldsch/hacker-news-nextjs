import StoryListWithFallback from '@/components/StoryListWithFallback';
import { fetchStoriesAmount } from '@/lib/data';
import { PageWithSearchParamsProps } from '@/lib/types';

export default async function NewStories(props: PageWithSearchParamsProps) {
  const currentPage = Number(props.searchParams.page ?? '1');
  const amount = Number(props.searchParams.amount ?? '5');
  const totalStories = await fetchStoriesAmount('new');
  const totalPages = Math.ceil(totalStories / amount);

  return (
    <StoryListWithFallback
      currentPage={currentPage}
      filter="new"
      totalPages={totalPages}
    />
  );
}
