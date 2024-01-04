import { StoryType } from '@/lib/types';
import { formatRelativeTime } from '@/lib/utils';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
  Image,
  Chip,
} from '@nextui-org/react';

type StoryProps = {
  title: string;
  author: string;
  score: number;
  time: EpochTimeStamp;
  type: StoryType;
  url: string;
};

export default function Story({
  title,
  author,
  score,
  time,
  type,
  url,
}: StoryProps) {
  function selectImageSrc() {
    switch (type) {
      case 'job':
        return '/img/job.svg';
      case 'poll':
        return '/img/poll.svg';
      default:
        return '/img/news.svg';
    }
  }

  return (
    <li>
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <div className="grid h-10 min-w-10 place-items-center rounded-lg bg-background p-2">
            <Image alt="nextui logo" radius="none" src={selectImageSrc()} />
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col">
              <p className="text-md">{author}</p>
              <p className="text-small text-default-500">
                {formatRelativeTime(time)}
              </p>
            </div>
            <Chip className="text-sm text-default-600">{score} points</Chip>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>{title}</p>
        </CardBody>
        <Divider />
        <CardFooter className="overflow-hidden text-ellipsis text-nowrap">
          <Link
            isExternal
            href={url}
            className="inline overflow-hidden text-ellipsis whitespace-nowrap"
          >
            {url}
          </Link>
        </CardFooter>
      </Card>
    </li>
  );
}
