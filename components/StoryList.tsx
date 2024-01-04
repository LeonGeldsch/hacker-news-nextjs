import Story from '@/components/Story';
import { fetchStories } from '@/lib/data';
import { StoryData, StoryFilter } from '@/lib/types';

export default async function StoryList({
  currentPage,
  itemsPerPage = 5,
  filter,
}: {
  currentPage: number;
  itemsPerPage?: number;
  filter: StoryFilter;
}) {
  const stories = await fetchStories(currentPage, itemsPerPage, filter);

  return (
    <ul className="flex max-w-full flex-col gap-5" key={Math.random()}>
      {stories.map((story: StoryData, index) => (
        <Story
          key={index}
          title={story.title}
          author={story.by}
          score={story.score}
          time={story.time}
          type={story.type}
          url={story.url}
        />
      ))}
    </ul>
  );
}
