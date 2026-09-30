import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { GLOSSARY, GLOSSARY_PATTERN } from '../data/glossary';

/**
 * Renders text and wraps every known abbreviation in an <Abbr> with a hover and
 * focus tooltip. Unknown words are left untouched.
 */
export function AbbrText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  GLOSSARY_PATTERN.lastIndex = 0;
  for (let m = GLOSSARY_PATTERN.exec(text); m; m = GLOSSARY_PATTERN.exec(text)) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(<Abbr key={`${m.index}-${m[1]}`} term={m[1]} />);
    last = m.index + m[1].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts.map((p, i) => (typeof p === 'string' ? <Fragment key={i}>{p}</Fragment> : p))}</>;
}

/**
 * A single abbreviation with a tooltip rendered into document.body, so it is not
 * clipped by scrolling panels. Works with mouse hover, keyboard focus and tap.
 */
export function Abbr({ term }: { term: string }) {
  const entry = GLOSSARY[term];
  const ref = useRef<HTMLSpanElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number; above: boolean } | null>(null);

  const show = useCallback(() => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const above = r.top > 140;
    setPos({ x: Math.min(Math.max(r.left + r.width / 2, 150), window.innerWidth - 150), y: above ? r.top : r.bottom, above });
  }, []);
  const hide = useCallback(() => setPos(null), []);

  useEffect(() => {
    if (!pos) return;
    const close = () => setPos(null);
    window.addEventListener('scroll', close, true);
    window.addEventListener('resize', close);
    return () => {
      window.removeEventListener('scroll', close, true);
      window.removeEventListener('resize', close);
    };
  }, [pos]);

  if (!entry) return <>{term}</>;
  return (
    <>
      <span
        ref={ref}
        tabIndex={0}
        role="button"
        aria-label={`${term}: ${entry.full}`}
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
        onClick={(e) => {
          e.stopPropagation();
          if (pos) hide();
          else show();
        }}
        className="cursor-help underline decoration-room-500 decoration-dotted underline-offset-2 outline-none focus-visible:rounded-sm focus-visible:ring-1 focus-visible:ring-signal-cyan"
      >
        {term}
      </span>
      {pos &&
        createPortal(
          <div
            role="tooltip"
            className="pointer-events-none fixed z-[100] w-72 rounded-lg border border-room-600 bg-room-950/95 px-3 py-2 text-left text-xs shadow-2xl backdrop-blur"
            style={{
              left: pos.x,
              top: pos.above ? pos.y - 8 : pos.y + 8,
              transform: `translate(-50%, ${pos.above ? '-100%' : '0'})`,
            }}
          >
            <div className="font-semibold text-room-100">
              <span className="font-mono text-signal-cyan">{term}</span> · {entry.full}
            </div>
            {entry.note && <p className="mt-1 leading-snug text-room-300">{entry.note}</p>}
          </div>,
          document.body,
        )}
    </>
  );
}
