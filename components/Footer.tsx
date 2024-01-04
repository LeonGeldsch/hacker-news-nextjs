import { Link } from '@nextui-org/react';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-3 bg-secondary-50 px-5 py-10 text-default-500">
      <Link href="https://news.ycombinator.com/" isExternal showAnchorIcon>
        Official HN site
      </Link>
      <Link href="https://github.com/HackerNews/API" isExternal showAnchorIcon>
        HN API documentation
      </Link>
      <p>&copy; Leon Geldschläger 2024</p>
    </footer>
  );
}
