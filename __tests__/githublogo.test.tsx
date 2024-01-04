import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import GitHubLogo from '@/components/svg/GitHubLogo';

describe('GitHubLogo', () => {
  it('renders an svg element', () => {
    render(<GitHubLogo />);

    const svg = screen.getByRole('img');

    expect(svg).toBeInTheDocument();
  });
});
