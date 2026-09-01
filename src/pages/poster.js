import * as React from 'react';
import { Link } from 'gatsby';
import Seo from '../components/seo';
import DesignMockBanner from '../components/designMockBanner';
import AlbumCoverImg from '../images/album-cover.jpg';
import '@fontsource/fjalla-one';

const LISTEN = 'https://open.spotify.com/album/5WPIAEuO2jz3nBxcowCtwu?si=2EJG7T1aTMiBFOWyBrQEOQ';
const VINYL = 'https://sinkingcityrecords.bandcamp.com/merch?filter_band=182166741';

function PosterPage() {
  return (
    <div className="min-h-screen bg-space text-yellow-100">
      <DesignMockBanner current="poster" />
      <div className="max-w-3xl mx-auto my-6 md:my-10 bg-gray-900 bg-opacity-90 px-6 py-10 md:px-12">
        <nav className="flex flex-wrap justify-center gap-6 mb-10 header text-sm tracking-widest uppercase">
          <a href={LISTEN} className="header-link" rel="noopener noreferrer" target="_blank">Listen</a>
          <Link to="/shows" className="header-link">Shows</Link>
          <a href={VINYL} className="header-link" rel="noopener noreferrer" target="_blank">Shop</a>
          <Link to="/press" className="header-link">Press</Link>
        </nav>

        <h1 className="header text-4xl md:text-6xl leading-tight mb-8">
          Tasche &amp; the
          {' '}
          <br />
          Psychedelic Roses
        </h1>

        <img src={AlbumCoverImg} alt="Self-titled album cover" className="w-full max-w-md mx-auto mb-8" />

        <p className="header text-red-300 text-2xl md:text-3xl mb-2">No shows scheduled</p>
        <p className="mb-10 text-lg">Stay tuned — mailing list at the bottom.</p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <a
            href={LISTEN}
            className="bootstrap-link-override header text-2xl bg-red-400 hover:bg-red-300 py-3 px-8"
            rel="noopener noreferrer"
            target="_blank"
          >
            Listen
          </a>
          <a
            href={VINYL}
            className="bootstrap-link-override header text-2xl bg-red-400 hover:bg-red-300 py-3 px-8"
            rel="noopener noreferrer"
            target="_blank"
          >
            Buy vinyl
          </a>
        </div>

        <img src="/assets/gaze-stars-desert-tour.PNG" alt="Gaze Stars desert tour flyer" className="w-full mb-8" />

        <p className="text-sm">
          <Link to="/photos" className="header-link">Photos</Link>
          {' · '}
          <Link to="/lyrics" className="header-link">Lyrics</Link>
          {' · '}
          <Link to="/epk" className="header-link">EPK</Link>
          {' · '}
          <Link to="/contact" className="header-link">Contact</Link>
        </p>
      </div>
    </div>
  );
}

export default PosterPage;

export const Head = () => (
  <Seo title="Poster (design mock)" pathname="/poster" />
);
