import { RelativeTimeUnit } from '@/lib/types';
import { ReadonlyURLSearchParams } from 'next/navigation';

/* Format function inspiration from: https://natclark.com/tutorials/javascript-relative-time/ */

/* 
  The JS timestamp is in milliseconds and so needs 
  to be converted to have the same unit (seconds) like 
  the UNIX timestamp that the Hacker News API is using. 
  I added the removal of the 's' when the unit of time is 1.
*/

function formatTime(
  name: RelativeTimeUnit,
  divisor: number,
  difference: number
) {
  const amount = Math.floor(difference / divisor);

  return `${amount} ${name}${amount === 1 ? '' : 's'} ago`;
}

export function formatRelativeTime(oldTimestamp: EpochTimeStamp) {
  const date = new Date();
  const currentTimestamp = date.getTime();
  const currentTimeSeconds = Math.floor(currentTimestamp / 1000);
  const difference = currentTimeSeconds - oldTimestamp;

  if (difference < 60) {
    // Less than a minute has passed:
    return formatTime('second', 1, difference);
  } else if (difference < 3600) {
    // Less than an hour has passed:
    return formatTime('minute', 60, difference);
  } else if (difference < 86400) {
    // Less than a day has passed:
    return formatTime('hour', 3600, difference);
  } else if (difference < 2620800) {
    // Less than a month has passed:
    return formatTime('day', 86400, difference);
  } else if (difference < 31449600) {
    // Less than a year has passed:
    return formatTime('month', 2620800, difference);
  } else {
    // More than a year has passed:
    return formatTime('year', 31449600, difference);
  }
}

export function getLastPathPart(path: string) {
  return path.split('/').pop() || '';
}

export function createPageURL(
  path: string,
  currentParams: ReadonlyURLSearchParams,
  newParams: {
    amount?: number | string;
    page?: number | string;
  }
) {
  const params = new URLSearchParams(currentParams);
  if (newParams.page) {
    params.set('page', newParams.page.toString());
  } else {
    params.delete('page');
  }
  if (newParams.amount) {
    params.set('amount', newParams.amount.toString());
  }
  return `${path}?${params.toString()}`;
}
