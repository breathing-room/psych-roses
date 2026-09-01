import React, { useLayoutEffect, useRef, useState } from 'react';

function PressQuote({ quote, source, href, index }) {
  const ref = useRef(null);
  const [state, setState] = useState('visible');

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof window.matchMedia === 'function'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setState('revealed');
      return undefined;
    }

    const revealIfVisible = () => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8 && rect.bottom > 48) {
        setState('revealed');
        return true;
      }
      return false;
    };

    if (revealIfVisible()) return undefined;

    setState('pending');

    const onScroll = () => {
      if (revealIfVisible()) {
        window.removeEventListener('scroll', onScroll);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('scroll', onScroll, { passive: true, capture: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('scroll', onScroll, { capture: true });
    };
  }, []);

  const side = index % 2 === 0 ? 'from-left' : 'from-right';

  return (
    <article
      ref={ref}
      className={`press-quote ${state} ${side} my-16 md:my-24 text-left`}
    >
      <div className="bg-gray-700 bg-opacity-75 p-5 md:p-6">
      <p className="m-0">
        {`“${quote}”`}
        <span className="block mt-3 text-red-300">
          <a
            className="bootstrap-link-override"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong className="hover:text-red-400">
              {source}
              {' '}
              &rarr;
            </strong>
          </a>
        </span>
      </p>
      </div>
    </article>
  );
}

export default PressQuote;
