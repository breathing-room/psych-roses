import * as React from 'react';
import { Link } from 'gatsby';
import Seo from '../components/seo';
import DesignMockBanner from '../components/designMockBanner';
import AlbumCoverImg from '../images/album-cover.jpg';
import '@fontsource/fjalla-one';

const LISTEN = 'https://open.spotify.com/album/5WPIAEuO2jz3nBxcowCtwu?si=2EJG7T1aTMiBFOWyBrQEOQ';
const VINYL = 'https://sinkingcityrecords.bandcamp.com/merch?filter_band=182166741';

function NeonPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <DesignMockBanner current="neon" />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <nav className="flex flex-wrap gap-6 mb-10 header text-xs tracking-widest uppercase text-pink-400">
          <a href={LISTEN} className="hover:text-green-300" rel="noopener noreferrer" target="_blank">Listen</a>
          <Link to="/shows" className="hover:text-green-300">Shows</Link>
          <a href={VINYL} className="hover:text-green-300" rel="noopener noreferrer" target="_blank">Shop</a>
          <Link to="/press" className="hover:text-green-300">Press</Link>
        </nav>

        <div className="md:flex md:items-stretch md:gap-0 border-2 border-pink-400">
          <div className="md:w-1/2 p-6 md:p-10 border-b-2 md:border-b-0 md:border-r-2 border-pink-400 text-left">
            <p className="text-green-300 header text-sm tracking-widest mb-4">New Orleans</p>
            <h1 className="header text-4xl md:text-6xl leading-none mb-8">
              TASCHE
              <br />
              &amp; THE
              <br />
              PSYCHEDELIC
              <br />
              ROSES
            </h1>
            <p className="text-lg mb-8 text-gray-200">
              Punk. Doo-wop. Surf. Cabaret. Psych.
            </p>
            <a
              href={LISTEN}
              className="inline-block header text-xl bg-pink-500 hover:bg-pink-400 text-black py-3 px-8 mr-2 mb-3"
              rel="noopener noreferrer"
              target="_blank"
            >
              Play
            </a>
            <a
              href={VINYL}
              className="inline-block header text-xl border-2 border-green-300 text-green-300 py-3 px-8 mb-3"
              rel="noopener noreferrer"
              target="_blank"
            >
              Vinyl
            </a>
          </div>
          <div className="md:w-1/2">
            <img src={AlbumCoverImg} alt="Self-titled album cover" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NeonPage;

export const Head = () => (
  <Seo title="Neon (design mock)" pathname="/neon" />
);
