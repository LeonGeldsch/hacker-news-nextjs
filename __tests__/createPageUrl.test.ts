import { createPageURL } from '@/lib/utils';
import { ReadonlyURLSearchParams, useParams } from 'next/navigation';

describe('createPageURL utility function', () => {
  // simulate URL params
  const params = new URLSearchParams();
  const readOnlyParams = new ReadonlyURLSearchParams(params);

  it('returns the last part of a path string', () => {
    expect(createPageURL('/home', readOnlyParams, { page: 3, amount: 5 })).toBe(
      '/home?page=3&amount=5'
    );
    expect(createPageURL('/home', readOnlyParams, { amount: 5 })).toBe(
      '/home?amount=5'
    );
    expect(createPageURL('/test', readOnlyParams, { page: 23 })).toBe(
      '/test?page=23'
    );
  });
});
