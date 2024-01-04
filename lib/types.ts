export type StoryFilter = 'top' | 'new' | 'best' | 'job' | 'ask' | 'show';

export type StoryType = 'job' | 'story' | 'comment' | 'poll' | 'pollopt';

export type StoryData = {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: EpochTimeStamp;
  title: string;
  type: StoryType;
  url: string;
};

export type RelativeTimeUnit =
  | 'second'
  | 'minute'
  | 'hour'
  | 'day'
  | 'month'
  | 'year';

export type PageWithSearchParamsProps = {
  params: {};
  searchParams: { page?: string; amount?: string };
};
