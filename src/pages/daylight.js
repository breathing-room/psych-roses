import * as React from 'react';
import { Link } from 'gatsby';
import Seo from '../components/seo';
import DesignMockBanner from '../components/designMockBanner';
import AlbumCoverImg from '../images/album-cover.jpg';
import '@fontsource/fjalla-one';

const LISTEN = 'https://open.spotify.com/album/5WPIAEuO2jz3nBxcowCtwu?si=2EJG7T1aTMiBFOWyBrQEOQ';
const VINYL = 'https://sinkingcityrecords.bandcamp.com/merch?filter_band=182166741';

function DaylightPage() {
  return (
    <div className="min-h-screen bg-yellow-50 text-gray-900">
      <DesignMockBanner current="daylight" />
      <header className="border-b-4 border-gray-900">
        <nav className="max-w-5xl mx-auto px-6 py-4 flex flex-wrap items-baseline justify-between gap-4">
          <p className="header text-2xl m-0">Tasche &amp; the Psychedelic Roses</p>
          <div className="flex flex-wrap gap-5 text-sm font-semibold">
            <Link to="/music" className="text-gray-900 hover:text-red-500">Music</Link>
            <Link to="/shows" className="text-gray-900 hover:text-red-500">Shows</Link>
            <a href={VINYL} className="text-gray-900 hover:text-red-500" rel="noopener noreferrer" target="_blank">Shop</a>
            <Link to="/press" className="text-gray-900 hover:text-red-500">Press</Link>
          </div>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 md:flex md:gap-12 md:items-start">
        <img src={AlbumCoverImg} alt="Self-titled album cover" className="w-full md:w-1/2 border-4 border-gray-900" />
        <div className="mt-8 md:mt-0 text-left">
          <p className="header text-sm tracking-widest uppercase mb-3">New album out now</p>
          <h1 className="header text-4xl md:text-5xl mb-6">Sweetness and devastation.</h1>
          <p className="text-lg mb-8 max-w-md">
            New Orleans psych dream rock&apos;n&apos;roll. Listen on Spotify, or pick up the vinyl from Sinking City.
          </p>
          <a
            href={LISTEN}
            className="inline-block header text-xl bg-red-500 hover:bg-red-400 text-yellow-50 py-3 px-8 mr-3 mb-3"
            rel="noopener noreferrer"
            target="_blank"
          >
            Listen
          </a>
          <a
            href={VINYL}
            className="inline-block header text-xl border-4 border-gray-900 py-3 px-8 mb-3"
            rel="noopener noreferrer"
            target="_blank"
          >
            Buy vinyl
          </a>
        </div>
      </main>
    </div>
  );
}

export default DaylightPage;

export const Head = () => (
  <Seo title="Daylight (design mock)" pathname="/daylight" />
);
