import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import StoryListSkeleton from '@/components/StoryListSkeleton';

// Mock useSearchParams:
jest.mock('next/navigation', () => ({
  useSearchParams() {
    return {
      get: () => 4,
    };
  },
}));

describe('StoryListSkeleton component', () => {
  it('renders a ul element', () => {
    render(<StoryListSkeleton />);

    const list = screen.getAllByRole('list')[0];

    expect(list).toBeInTheDocument();
  });
});
