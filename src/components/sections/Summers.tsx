'use client';

import { useState } from 'react';
import { SITE_CONTENT } from '@/data/siteContent';

export default function SummersSection() {
  const slides = SITE_CONTENT.sections.summers.slides;
  const [slideIndex, setSlideIndex] = useState(1);
  const [draftBodies, setDraftBodies] = useState(() => slides.map((slide) => slide.body));

  const activeSlide = slides[slideIndex];
  const activeBody = draftBodies[slideIndex];

  const goPrev = () => {
    setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    setSlideIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="summers" className="min-h-screen w-full bg-[#e9e9e9] px-5 py-8 md:px-10">
      <article className="mx-auto max-w-6xl">
        <p className="text-3xl text-black md:text-5xl">{activeSlide.heading}</p>

        <h2 className="mt-6 text-center text-5xl font-normal text-black underline decoration-[#2b96ff] decoration-[3px] underline-offset-2 md:text-7xl">
          {activeSlide.yearLabel}
        </h2>

        <div className="mt-10 grid grid-cols-[auto_1fr_auto] items-center gap-4 md:gap-8">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous summer"
            className="h-14 w-14 rounded-full text-6xl leading-none text-black transition hover:bg-black/10"
          >
            ←
          </button>

          <div className="mx-auto w-full max-w-[760px] rounded-[28px] border border-[#b9c0c5] bg-[#cfd5da] p-3 shadow-[0_8px_18px_rgba(0,0,0,0.18)]">
            <div className="grid min-h-[340px] grid-cols-[1fr_118px] overflow-hidden rounded-[20px] border border-[#adb4bb] bg-[#d8dde2]">
              <div className="p-8">
                <div className="h-full rounded-[4px] border border-[#b8bdc2] bg-[#eceff2] p-4">
                  <textarea
                    value={activeBody}
                    onChange={(event) => {
                      const updated = [...draftBodies];
                      updated[slideIndex] = event.target.value;
                      setDraftBodies(updated);
                    }}
                    className="h-full w-full resize-none border-0 bg-transparent text-3xl text-black outline-none md:text-4xl"
                  />
                </div>
              </div>

              <div className="relative border-l border-[#b6bdc4] bg-[#d9dee3]">
                <div className="absolute inset-x-0 top-4 mx-auto h-7 w-20 rounded-full border border-[#9099a1]" />
                <div className="absolute right-5 top-16 h-24 w-3 rounded bg-[#c0c7ce]" />
                <div className="absolute left-1/2 top-[45%] h-16 w-16 -translate-x-1/2 rounded-full border-4 border-[#bcc3ca] bg-[#e7ebef]" />
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next summer"
            className="h-14 w-14 rounded-full text-6xl leading-none text-black transition hover:bg-black/10"
          >
            →
          </button>
        </div>
      </article>
    </section>
  );
}
