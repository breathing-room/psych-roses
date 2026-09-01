import React from 'react';
import { Link } from 'gatsby';

const CLOSE = [
  { to: '/night-stage', id: 'night-stage', label: 'Night Stage' },
  { to: '/gold-rose', id: 'gold-rose', label: 'Gold Rose' },
  { to: '/poster', id: 'poster', label: 'Poster' },
];

const CONTRAST = [
  { to: '/daylight', id: 'daylight', label: 'Daylight' },
  { to: '/film', id: 'film', label: 'Film' },
  { to: '/neon', id: 'neon', label: 'Neon' },
];

function DesignMockBanner({ current }) {
  return (
    <div className="bg-gray-900 text-yellow-100 text-xs md:text-sm py-2 px-4 border-b border-gray-700">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
        <p className="m-0">Design mock — not the live site</p>
        <Link to="/" className="header-link">Live home</Link>
      </div>
      <nav className="flex flex-wrap gap-x-4 gap-y-1 items-center">
        <span className="text-gray-400">Close:</span>
        {CLOSE.map((option) => (
          <Link
            key={option.id}
            to={option.to}
            className={`header-link ${current === option.id ? 'text-red-300' : ''}`}
          >
            {option.label}
          </Link>
        ))}
        <span className="text-gray-400 ml-2">Contrast:</span>
        {CONTRAST.map((option) => (
          <Link
            key={option.id}
            to={option.to}
            className={`header-link ${current === option.id ? 'text-red-300' : ''}`}
          >
            {option.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default DesignMockBanner;
