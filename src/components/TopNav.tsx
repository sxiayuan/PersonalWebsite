'use client';

import Image from 'next/image';
import Link from 'next/link';
import MusicToggle from '@/components/MusicToggle';
import { withBasePath } from '@/lib/withBasePath';

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:stephaniexia2026@gmail.com',
    icon: '/gmail.png',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/sxiayuan',
    icon: '/github.png',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/stephanie-xia-growth/',
    icon: '/linkedin.png',
  },
];

export default function TopNav() {
  return (
    <>
      <Link
        href="/"
        aria-label="Back to home"
        className="fixed left-3 top-3 z-30 block h-9 w-9 overflow-hidden rounded-full border border-fogOlive/60 transition hover:scale-105 hover:border-charcoalMoss"
      >
        <Image
          src={withBasePath('/profile-icon.jpg')}
          alt="Stephanie Xia"
          width={36}
          height={36}
          className="h-full w-full object-cover"
        />
      </Link>

      <div className="fixed right-4 top-4 z-30 flex items-center gap-2">
        {socialLinks.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target={item.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            aria-label={item.name}
            className="block w-14 shrink-0 transition hover:scale-105"
          >
            <Image
              src={withBasePath(item.icon)}
              alt={`${item.name} icon`}
              width={56}
              height={56}
              className="h-auto w-full object-contain"
            />
          </a>
        ))}
        <MusicToggle />
      </div>
    </>
  );
}
