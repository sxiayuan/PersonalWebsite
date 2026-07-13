'use client';

import dynamic from 'next/dynamic';
import { useEffect, useMemo, useState } from 'react';
import TopNav from '@/components/TopNav';
import { withBasePath } from '@/lib/withBasePath';

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-transparent" />,
});

type Photo = {
  caption: string;
};

type Folder = {
  label: string;
  slug: string;
  description: string;
  photos: Photo[];
};

const PHOTO_COUNT = 6;

function makePhotos(slug: string): Photo[] {
  return Array.from({ length: PHOTO_COUNT }, (_, i) => ({
    caption: `${slug}-${String(i + 1).padStart(2, '0')}.jpg`,
  }));
}

const folders: Folder[] = [
  {
    label: 'Old Days',
    slug: 'old-days',
    description: 'A soft archive of early summer memories, printed Polaroids, and offline nostalgia.',
    photos: makePhotos('old-days'),
  },
  {
    label: '2022',
    slug: '2022',
    description: 'The start of a new chapter. Sunlit afternoons, first creative experiments, and growth.',
    photos: makePhotos('2022'),
  },
  {
    label: '2023',
    slug: '2023',
    description: 'A bold summer of experiments, new routines, and more cinematic memories.',
    photos: makePhotos('2023'),
  },
  {
    label: '2024',
    slug: '2024',
    description: 'A season of momentum, polished ideas, and soft discovery.',
    photos: makePhotos('2024'),
  },
  {
    label: '2025',
    slug: '2025',
    description: 'The latest chapter with a future-forward feel and personal visual storytelling.',
    photos: makePhotos('2025'),
  },
  {
    label: '2026',
    slug: '2026',
    description: 'A preview of what comes next: bright intentions, curated visuals, and quiet confidence.',
    photos: makePhotos('2026'),
  },
];

function ChevronLeftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function ImagePlaceholderIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <circle cx="9" cy="10" r="1.75" />
      <path d="M21 16l-5.5-5.5a1.5 1.5 0 0 0-2.12 0L4 20" />
    </svg>
  );
}

export default function SummersSection() {
  const [view, setView] = useState<'root' | 'folder'>('root');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [opening, setOpening] = useState(false);

  const backgrounds = useMemo(
    () => [
      'https://picsum.photos/seed/finder1/1600/900',
      'https://picsum.photos/seed/finder2/1600/900',
      'https://picsum.photos/seed/finder3/1600/900',
      'https://picsum.photos/seed/finder4/1600/900',
      'https://picsum.photos/seed/finder5/1600/900',
      'https://picsum.photos/seed/finder6/1600/900',
    ],
    []
  );

  useEffect(() => {
    backgrounds.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [backgrounds]);

  const activeFolder = folders[activeIndex];

  const openWindow = () => {
    if (isAnimating || isOpen) return;

    setIsOpen(true);
    setOpening(true);
    setIsAnimating(true);
    window.setTimeout(() => {
      setIsAnimating(false);
    }, 450);
  };

  const closeWindow = () => {
    if (isAnimating || !isOpen) return;

    setIsAnimating(true);
    setOpening(false);

    window.setTimeout(() => {
      setIsOpen(false);
      setIsAnimating(false);
    }, 450);
  };

  const openFolder = (index: number) => {
    setActiveIndex(index);
    setView('folder');
  };

  const goBack = () => setView('root');

  const windowClass = isAnimating
    ? opening
      ? 'scale-[0.98] opacity-100'
      : 'scale-[0.96] opacity-0'
    : isOpen
      ? 'scale-100 opacity-100'
      : 'scale-0 opacity-0';

  return (
    <section id="summers" className="relative min-h-screen w-full overflow-hidden bg-slate-100/80">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center transition-opacity duration-700"
        style={{ backgroundImage: `url(${backgrounds[activeIndex]})` }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/80 via-slate-100/70 to-slate-200/95" />

      <TopNav />

      <button
        type="button"
        onClick={openWindow}
        className="absolute bottom-10 left-10 z-10 flex flex-col items-center gap-3 rounded-[24px] border border-white/70 bg-white/80 p-4 shadow-[0_20px_40px_rgba(15,23,42,0.16)] backdrop-blur-xl transition-transform duration-200 hover:-translate-y-1"
      >
        <img
          src={withBasePath('/finder.png')}
          alt="Finder app icon"
          className="h-16 w-16 object-contain"
          style={{ filter: 'drop-shadow(0 10px 16px rgba(15,23,42,0.35))' }}
        />
        <span className="text-sm font-medium text-slate-700">Finder</span>
      </button>

      <div className="absolute bottom-10 right-10 z-10 h-36 w-36 overflow-hidden rounded-full border border-white/70 bg-white/60 shadow-[0_20px_40px_rgba(15,23,42,0.16)] backdrop-blur-xl sm:h-44 sm:w-44">
        <HeroScene compact />
      </div>

      <article className="relative z-20 mx-auto flex min-h-screen w-full max-w-[1100px] items-center justify-center px-6 py-12">
        <div
          className={`mx-auto w-full max-w-[1040px] rounded-[36px] border border-slate-200/80 bg-white/95 shadow-[0_40px_120px_rgba(15,23,42,0.18)] backdrop-blur-xl transition-all duration-500 ${windowClass}`}
        >
          <header className="flex items-center justify-between gap-4 rounded-t-[36px] border-b border-slate-200/80 bg-slate-50 px-5 py-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={closeWindow}
                  aria-label="Close Finder"
                  className="flex h-3.5 w-3.5 rounded-full bg-[#ff605c] shadow-[0_0_0_1px_rgba(0,0,0,0.1)]"
                />
                <button
                  type="button"
                  onClick={closeWindow}
                  aria-label="Minimize Finder"
                  className="flex h-3.5 w-3.5 rounded-full bg-[#ffbd44] shadow-[0_0_0_1px_rgba(0,0,0,0.1)]"
                />
                <button
                  type="button"
                  onClick={openWindow}
                  aria-label="Open Finder"
                  className="flex h-3.5 w-3.5 rounded-full bg-[#28c840] shadow-[0_0_0_1px_rgba(0,0,0,0.1)]"
                />
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={goBack}
                  disabled={view === 'root'}
                  aria-label="Back"
                  className="flex h-7 w-7 items-center justify-center rounded-full text-slate-500 transition enabled:hover:bg-slate-200/70 disabled:opacity-30"
                >
                  <ChevronLeftIcon />
                </button>
                <button
                  type="button"
                  disabled
                  aria-label="Forward"
                  className="flex h-7 w-7 items-center justify-center rounded-full text-slate-300"
                >
                  <ChevronRightIcon />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <span className="rounded-full bg-slate-200/80 px-3.5 py-1.5">Finder</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-400">{view === 'root' ? 'All My Files' : activeFolder.label}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className="flex items-center gap-1.5 rounded-full bg-slate-900 px-3.5 py-1.5 text-white">
                <GridIcon />
                Icon
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-slate-200/80 px-3.5 py-1.5">
                <ListIcon />
                View
              </span>
            </div>
          </header>

          <div className="min-h-[620px]">
            {view === 'root' ? (
              <div className="grid grid-cols-4 gap-x-6 gap-y-9 p-10 sm:grid-cols-5 lg:grid-cols-6">
                {folders.map((folder, idx) => (
                  <button
                    key={folder.slug}
                    type="button"
                    onClick={() => openFolder(idx)}
                    className="group flex flex-col items-center gap-2.5 rounded-2xl px-3 py-4 text-center transition hover:bg-blue-500/10 focus-visible:bg-blue-500/15 focus-visible:outline-none"
                  >
                    <img
                      src={withBasePath('/folder.png')}
                      alt=""
                      aria-hidden="true"
                      className="h-20 w-20 object-contain transition-transform duration-200 group-hover:scale-105"
                      style={{ filter: 'drop-shadow(0 12px 16px rgba(15,23,42,0.3))' }}
                    />
                    <span className="max-w-[7rem] truncate text-sm font-medium text-slate-800">{folder.label}</span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex h-full flex-col p-8 sm:p-10">
                <button
                  type="button"
                  onClick={goBack}
                  className="mb-8 flex w-fit items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm transition hover:bg-slate-50"
                >
                  <ChevronLeftIcon />
                  Summers
                </button>

                <div className="mb-9 flex items-start gap-5">
                  <img
                    src={withBasePath('/folder.png')}
                    alt=""
                    aria-hidden="true"
                    className="h-16 w-16 shrink-0 object-contain"
                    style={{ filter: 'drop-shadow(0 10px 14px rgba(15,23,42,0.28))' }}
                  />
                  <div>
                    <h1 className="text-3xl font-semibold text-slate-950">{activeFolder.label}</h1>
                    <p className="mt-2.5 max-w-2xl text-sm leading-7 text-slate-600">{activeFolder.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-x-6 gap-y-9 sm:grid-cols-4">
                  {activeFolder.photos.map((photo) => (
                    <div key={photo.caption} className="flex flex-col items-center gap-2.5">
                      <div className="flex h-28 w-full items-center justify-center rounded-xl border border-slate-200/80 bg-gradient-to-br from-slate-100 to-slate-200/80 shadow-sm">
                        <ImagePlaceholderIcon />
                      </div>
                      <span className="truncate text-xs text-slate-500">{photo.caption}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
    </section>
  );
}
