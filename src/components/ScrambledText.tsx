"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// Note: SplitText and ScrambleTextPlugin are GSAP Club plugins. 
// If they are missing, this might fail to compile.
import { SplitText } from 'gsap/SplitText';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

import './ScrambledText.css';

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

const ScrambledText = ({
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = '.:',
  className = '',
  style = {},
  children,
  tag = 'h3'
}: any) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const charsRef = useRef<any[]>([]);

  useEffect(() => {
    if (!rootRef.current) return;

    const elToSplit = rootRef.current.querySelector(tag) || rootRef.current.querySelector('p');
    if (!elToSplit) return;

    const split = SplitText.create(elToSplit, {
      type: 'chars',
      charsClass: 'char'
    });
    charsRef.current = split.chars;

    charsRef.current.forEach(c => {
      gsap.set(c, {
        display: 'inline-block',
        attr: { 'data-content': c.innerHTML }
      });
    });

    const handleMove = (e: any) => {
      charsRef.current.forEach(c => {
        const { left, top, width, height } = c.getBoundingClientRect();
        const dx = e.clientX - (left + width / 2);
        const dy = e.clientY - (top + height / 2);
        const dist = Math.hypot(dx, dy);

        if (dist < radius) {
          gsap.to(c, {
            overwrite: true,
            duration: duration * (1 - dist / radius),
            scrambleText: {
              text: c.dataset.content || '',
              chars: scrambleChars,
              speed
            },
            ease: 'none'
          });
        }
      });
    };

    const el = rootRef.current;
    el.addEventListener('pointermove', handleMove);

    return () => {
      el.removeEventListener('pointermove', handleMove);
      split.revert();
    };
  }, [radius, duration, speed, scrambleChars, tag]);

  const Tag = tag as keyof JSX.IntrinsicElements;

  return (
    <div ref={rootRef} className={`text-block ${className}`} style={style}>
      <Tag>{children}</Tag>
    </div>
  );
};

export default ScrambledText;
