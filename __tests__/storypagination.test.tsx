import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import StoryPagination from '@/components/StoryPagination';

// Mock useRouter, usePathname & useSearchParams:
jest.mock('next/navigation', () => ({
  usePathname() {
    return '/';
  },
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
  useSearchParams() {
    return {
      get: () => 2,
    };
  },
}));

describe('The pagination for the story list', () => {
  it('renders a nav element', () => {
    render(<StoryPagination />);

    const heading = screen.getByRole('navigation');

    expect(heading).toBeInTheDocument();
  });
});
