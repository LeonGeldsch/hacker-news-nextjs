import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Skeleton,
} from '@nextui-org/react';

export default function StorySkeleton() {
  return (
    <li>
      <Card>
        <CardHeader className="flex gap-3">
          <Skeleton className="h-10 w-10 rounded-md" />
          <div className="flex flex-col gap-3">
            <Skeleton className="h-4 w-20 rounded-full" />
            <Skeleton className="h-3 w-24 rounded-full" />
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="flex flex-col gap-3">
          <Skeleton className="h-4 w-44 rounded-full" />
          <Skeleton className="h-4 w-24 rounded-full" />
        </CardBody>
        <Divider />
        <CardFooter>
          <Skeleton className="h-4 w-44 rounded-full" />
        </CardFooter>
      </Card>
    </li>
  );
}
