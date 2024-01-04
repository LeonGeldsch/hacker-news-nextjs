import { formatRelativeTime } from '@/lib/utils';

describe('formatRelativeTime utility function', () => {
  beforeEach(() => {
    // 04.01.2024 12:00pm
    const mockedDate = new Date(2024, 0, 4, 12);

    jest.useFakeTimers();
    jest.setSystemTime(mockedDate);
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('converts a UNIX timestamp to a string containing the relative time to the current time.', () => {
    expect(formatRelativeTime(1704369600)).toBe('0 seconds ago');
    expect(formatRelativeTime(1704369599)).toBe('1 second ago');
    expect(formatRelativeTime(1704369565)).toBe('35 seconds ago');

    expect(formatRelativeTime(1704369540)).toBe('1 minute ago');
    expect(formatRelativeTime(1704367980)).toBe('27 minutes ago');

    expect(formatRelativeTime(1704366000)).toBe('1 hour ago');
    expect(formatRelativeTime(1704326400)).toBe('12 hours ago');

    expect(formatRelativeTime(1704283165)).toBe('1 day ago');
    expect(formatRelativeTime(1703937565)).toBe('5 days ago');

    expect(formatRelativeTime(1701691165)).toBe('1 month ago');
    expect(formatRelativeTime(1675511965)).toBe('11 months ago');

    expect(formatRelativeTime(1672833565)).toBe('1 year ago');
    expect(formatRelativeTime(1175714200)).toBe('16 years ago');
  });
});
