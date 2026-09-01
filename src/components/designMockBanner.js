import React from 'react';
import { Link } from 'gatsby';

const OPTIONS = [
  { to: '/night-stage', id: 'night-stage', label: 'Night Stage' },
  { to: '/gold-rose', id: 'gold-rose', label: 'Gold Rose' },
  { to: '/poster', id: 'poster', label: 'Poster' },
];

function DesignMockBanner({ current }) {
  return (
    <div className="bg-gray-900 text-yellow-100 text-xs md:text-sm py-2 px-4 flex flex-wrap items-center justify-between gap-2 border-b border-gray-700">
      <p className="m-0">Design mock — not the live site</p>
      <nav className="flex flex-wrap gap-3 items-center">
        {OPTIONS.map((option) => (
          <Link
            key={option.id}
            to={option.to}
            className={`header-link ${current === option.id ? 'text-red-300' : ''}`}
          >
            {option.label}
          </Link>
        ))}
        <Link to="/" className="header-link">Live home</Link>
      </nav>
    </div>
  );
}

export default DesignMockBanner;
