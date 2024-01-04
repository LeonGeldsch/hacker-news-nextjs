'use client';

import { useState } from 'react';
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import GitHubLogo from './svg/GitHubLogo';
import { usePathname } from 'next/navigation';
import { getLastPathPart } from '@/lib/utils';
import DarkModeSwitch from '@/components/DarkModeSwitch';

export default function Navbar() {
  const pathname = usePathname() || '';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pages = [
    {
      name: 'Top',
      url: '',
    },
    {
      name: 'New',
      url: 'new',
    },
    {
      name: 'Best',
      url: 'best',
    },
    {
      name: 'Ask',
      url: 'ask',
    },
    {
      name: 'Show',
      url: 'show',
    },
    {
      name: 'Jobs',
      url: 'jobs',
    },
  ];

  function isActiveSite(urlPart: string) {
    return urlPart === getLastPathPart(pathname);
  }

  function handleMenuItemClick() {
    console.log('test');

    setIsMenuOpen(false);
  }

  return (
    <NextUINavbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen}>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className="lg:hidden"
      />
      <NavbarBrand>
        <Link className="font-bold text-inherit" href="/">
          Leon&apos;s Hacker News
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden gap-4 lg:flex" justify="center">
        {pages.map((page, index) => (
          <NavbarItem isActive={isActiveSite(page.url)} key={index}>
            <Link
              href={'/' + page.url}
              aria-current={isActiveSite(page.url) ? 'page' : 'false'}
              className={
                isActiveSite(page.url) ? 'text-primary' : 'text-default-600'
              }
            >
              {page.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent className="hidden lg:flex" justify="end">
        <NavbarItem>
          <DarkModeSwitch />
        </NavbarItem>
        <NavbarItem>
          <Button color="primary" variant="flat" startContent={<GitHubLogo />}>
            <Link href="https://github.com/" isExternal showAnchorIcon>
              GitHub Repo
            </Link>
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {pages.map((page, index) => (
          <NavbarMenuItem key={index}>
            <Link
              color={isActiveSite(page.url) ? 'primary' : 'foreground'}
              className="w-full"
              href={'/' + page.url}
              size="lg"
              onClick={handleMenuItemClick}
            >
              {page.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <DarkModeSwitch className="my-3" />
        <Button
          color="primary"
          className="w-fit"
          variant="flat"
          startContent={<GitHubLogo />}
        >
          <Link href="https://github.com/" isExternal showAnchorIcon>
            GitHub Repo
          </Link>
        </Button>
      </NavbarMenu>
    </NextUINavbar>
  );
}
