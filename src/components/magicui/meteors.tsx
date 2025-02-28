'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

interface MeteorsProps {
  number?: number;
  minDelay?: number;
  maxDelay?: number;
  minDuration?: number;
  maxDuration?: number;
  angle?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className,
  style,
}: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    []
  );

  useEffect(() => {
    const updateMeteorStyles = () => {
      const styles = [...new Array(number)].map(() => {
        const screenWidth = window.innerWidth;
        const leftPosition =
          screenWidth > 768
            ? `calc(-50% + ${Math.floor(Math.random() * screenWidth)}px)`
            : `calc(-50% + ${Math.floor(Math.random() * (screenWidth / 2))}px)`;
        const topPosition = screenWidth > 768 ? -5 : -50; // Higher start position for mobile
        return {
          '--angle': angle + 'deg',
          top: topPosition,
          left: leftPosition,
          animationDelay:
            Math.random() * (maxDelay - minDelay) + minDelay + 's',
          animationDuration:
            Math.floor(
              Math.random() * (maxDuration - minDuration) + minDuration
            ) + 's',
        };
      });
      setMeteorStyles(styles);
    };

    updateMeteorStyles();
    window.addEventListener('resize', updateMeteorStyles);

    return () => {
      window.removeEventListener('resize', updateMeteorStyles);
    };
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle]);

  return (
    <>
      {[...meteorStyles].map((style, idx) => (
        // Meteor Head
        <span
          key={idx}
          style={{ ...style }}
          className={cn(
            'pointer-events-none absolute size-0.5 rotate-[var(--angle)] animate-meteor rounded-full bg-zinc-500 shadow-[0_0_0_1px_#ffffff10] ',
            className,
            style
          )}
        >
          {/* Meteor Tail */}
          <div className='pointer-events-none absolute top-1/2 -z-10 h-px w-[90px] -translate-y-1/2 bg-gradient-to-r from-black to-transparent ' />
        </span>
      ))}
    </>
  );
};
