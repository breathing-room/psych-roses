import * as React from 'react';
import { Link } from 'gatsby';
import Seo from '../components/seo';
import DesignMockBanner from '../components/designMockBanner';
import AlbumCoverImg from '../images/album-cover.jpg';
import '@fontsource/fjalla-one';

const LISTEN = 'https://open.spotify.com/album/5WPIAEuO2jz3nBxcowCtwu?si=2EJG7T1aTMiBFOWyBrQEOQ';
const VINYL = 'https://sinkingcityrecords.bandcamp.com/merch?filter_band=182166741';

function FilmPage() {
  return (
    <div
      className="min-h-screen text-yellow-50"
      style={{
        backgroundImage: `url(${AlbumCoverImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="min-h-screen bg-black bg-opacity-70">
        <DesignMockBanner current="film" />
        <main className="max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
          <p className="header tracking-widest uppercase text-sm mb-4">Tasche &amp; the Psychedelic Roses</p>
          <h1 className="header text-5xl md:text-7xl mb-8">The self-titled LP</h1>
          <p className="text-xl md:text-2xl mb-12 max-w-xl mx-auto">
            A barbed, wiry howl. Four-part harmony. Grunge, doo-wop, surf, cabaret.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a
              href={LISTEN}
              className="header text-2xl border-2 border-yellow-50 py-3 px-10 hover:bg-yellow-50 hover:text-black"
              rel="noopener noreferrer"
              target="_blank"
            >
              Listen
            </a>
            <a
              href={VINYL}
              className="header text-2xl bg-yellow-50 text-black py-3 px-10 hover:bg-red-400"
              rel="noopener noreferrer"
              target="_blank"
            >
              Vinyl
            </a>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-widest">
            <Link to="/shows" className="text-yellow-50 hover:text-red-300">Shows</Link>
            <Link to="/press" className="text-yellow-50 hover:text-red-300">Press</Link>
            <Link to="/photos" className="text-yellow-50 hover:text-red-300">Photos</Link>
            <Link to="/contact" className="text-yellow-50 hover:text-red-300">Contact</Link>
          </nav>
        </main>
      </div>
    </div>
  );
}

export default FilmPage;

export const Head = () => (
  <Seo title="Film (design mock)" pathname="/film" />
);
