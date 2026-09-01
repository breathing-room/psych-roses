import * as React from 'react';
import { Link } from 'gatsby';
import Seo from '../components/seo';
import DesignMockBanner from '../components/designMockBanner';
import AlbumCoverImg from '../images/album-cover.jpg';
import LiveShot from '../images/carouselImages/IMG_2451.jpg';
import '@fontsource/fjalla-one';

const LISTEN = 'https://open.spotify.com/album/5WPIAEuO2jz3nBxcowCtwu?si=2EJG7T1aTMiBFOWyBrQEOQ';
const VINYL = 'https://sinkingcityrecords.bandcamp.com/merch?filter_band=182166741';

function GoldRosePage() {
  return (
    <div className="min-h-screen bg-space text-yellow-100">
      <div className="sticky top-0 z-50">
        <DesignMockBanner current="gold-rose" />
        <header className="bg-black bg-opacity-50">
          <nav className="max-w-5xl mx-auto px-6 py-4 flex flex-wrap items-baseline justify-between gap-4">
            <p className="header text-xl m-0">Tasche &amp; the Psychedelic Roses</p>
            <div className="flex flex-wrap gap-5 text-sm">
              <Link to="/music" className="header-link">Music</Link>
              <Link to="/shows" className="header-link">Shows</Link>
              <a href={VINYL} className="header-link" rel="noopener noreferrer" target="_blank">Shop</a>
              <Link to="/press" className="header-link">Press</Link>
            </div>
          </nav>
        </header>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-10">
        <img src={AlbumCoverImg} alt="Self-titled album cover" className="w-full mb-4" />
        <p className="text-sm text-red-300 mb-10">Self-titled LP · Sinking City Records</p>

        <blockquote className="header text-2xl md:text-3xl text-left max-w-3xl mb-12 leading-snug">
          “Balancing a fine line between sweetness and devastation.”
          <footer className="mt-4 text-base font-normal text-red-300">Conversations About Her</footer>
        </blockquote>

        <p className="text-lg mb-12">
          <a href={LISTEN} className="bootstrap-link-override underline" rel="noopener noreferrer" target="_blank">Listen</a>
          <span className="mx-3 text-red-300">/</span>
          <a href={VINYL} className="bootstrap-link-override underline" rel="noopener noreferrer" target="_blank">Buy vinyl</a>
        </p>

        <div className="md:flex md:gap-12 text-left">
          <div className="md:w-1/2">
            <p className="header text-red-300 text-xl mb-3">The band</p>
            <p>
              Forged in the rhythm, joy, and despair of New Orleans, Tasche and the Psychedelic Roses
              deploy four-part vocal harmonies, grunge guitar riffs, and elements of punk, doo wop,
              surf, cabaret, and psychedelia.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src={LiveShot} alt="Psychedelic Roses at Saturn Bar in New Orleans" className="w-full" />
            <p className="text-sm text-red-300 mt-2">Saturn Bar, New Orleans</p>
          </div>
        </div>
      </main>

      <footer className="max-w-5xl mx-auto px-6 py-10 text-sm flex flex-wrap gap-4">
        <Link to="/lyrics" className="header-link">Lyrics</Link>
        <Link to="/videos" className="header-link">Videos</Link>
        <Link to="/epk" className="header-link">EPK</Link>
        <Link to="/contact" className="header-link">Contact</Link>
      </footer>
    </div>
  );
}

export default GoldRosePage;

export const Head = () => (
  <Seo title="Gold Rose (design mock)" pathname="/gold-rose" />
);
