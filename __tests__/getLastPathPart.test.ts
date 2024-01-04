import { getLastPathPart } from '@/lib/utils';

describe('getLastPathPart utility function', () => {
  it('returns the last part of a path string', () => {
    expect(getLastPathPart('/home/profile/edit')).toBe('edit');
  });
});
