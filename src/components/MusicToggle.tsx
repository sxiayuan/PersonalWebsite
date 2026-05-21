'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const audio = audioRef.current;
    let cancelled = false;

    if (!audio) {
      return;
    }

    if (isPlaying) {
      const playMedia = async () => {
        try {
          if (video) {
            await video.play();
          }
          await audio.play();
        } catch {
          if (!cancelled) {
            setIsPlaying(false);
          }
        }
      };
      void playMedia();
    } else {
      if (video) {
        video.pause();
      }
      audio.pause();
    }

    return () => {
      cancelled = true;
      if (video) {
        video.pause();
      }
      audio.pause();
    };
  }, [isPlaying]);

  return (
    <button
      type="button"
      aria-label={isPlaying ? 'Turn music off' : 'Turn music on'}
      onClick={() => setIsPlaying((prev) => !prev)}
      className="h-[64px] w-[86px] overflow-hidden rounded-lg border border-white/45 bg-black/25 shadow-lg backdrop-blur-sm"
    >
      {!isPlaying ? (
        <Image
          src="/music/cassette-tape.webp"
          alt="Cassette tape music toggle"
          width={86}
          height={64}
          className="h-full w-full object-cover"
        />
      ) : (
        <video
          ref={videoRef}
          src="/music/cassette-tape.mp4"
          className="h-full w-full object-cover"
          loop
          muted
          playsInline
        />
      )}
      <audio ref={audioRef} src="/music/wantchu.mp3" loop />
    </button>
  );
}
