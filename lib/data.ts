import { StoryData, StoryFilter } from '@/lib/types';

async function fetchStoryDetails(id: number | string) {
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
    {
      method: 'GET',
    }
  );

  const data: StoryData = await response.json();

  return data;
}

export async function fetchStories(
  page: number = 1,
  storiesPerPage: number = 5,
  filter: StoryFilter
) {
  const startIndex = (page - 1) * storiesPerPage;

  // Fetch the stories and convert them to json. This will be a list of their ID's.
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/${filter}stories.json?print=pretty`,
    {
      method: 'GET',
    }
  );
  const allStories: number[] = await response.json();

  // Select only the next stories from the provided page, depending on the amount per page.
  const selectedStories = allStories.slice(
    startIndex,
    startIndex + storiesPerPage
  );

  // Fetch the details of each story
  const actions = selectedStories.map(fetchStoryDetails);

  const results = await Promise.all(actions);

  return results;
}

export async function fetchStoriesAmount(filter: StoryFilter) {
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/${filter}stories.json?print=pretty`,
    {
      method: 'GET',
    }
  );
  const allStories: number[] = await response.json();

  return allStories.length;
}
