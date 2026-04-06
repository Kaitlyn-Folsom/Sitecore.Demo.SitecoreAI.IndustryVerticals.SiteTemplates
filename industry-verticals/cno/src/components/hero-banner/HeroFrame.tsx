import clsx from 'clsx';
import type { ReactNode } from 'react';

export type HeroFrameProps = {
  children: ReactNode;
  className?: string;
};

/**
 * L-bracket frame in brand accent for hero and similar full-bleed bands.
 */
export function HeroFrame({ children, className }: HeroFrameProps) {
  return (
    <div className={clsx('hero-frame', className)}>
      <span className="hero-frame__corner hero-frame__corner--tl" aria-hidden />
      <span className="hero-frame__corner hero-frame__corner--br" aria-hidden />
      <div className="hero-frame__inner">{children}</div>
    </div>
  );
}
