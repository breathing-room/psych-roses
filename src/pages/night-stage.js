import * as React from 'react';
import { Link } from 'gatsby';
import { SocialIcon } from 'react-social-icons';
import Seo from '../components/seo';
import DesignMockBanner from '../components/designMockBanner';
import AlbumCoverImg from '../images/album-cover.jpg';
import LogoImg from '../images/new-logo.jpg';
import '@fontsource/fjalla-one';

const LISTEN = 'https://open.spotify.com/album/5WPIAEuO2jz3nBxcowCtwu?si=2EJG7T1aTMiBFOWyBrQEOQ';
const VINYL = 'https://sinkingcityrecords.bandcamp.com/merch?filter_band=182166741';

const nav = [
  { to: '/night-stage', label: 'Home' },
  { to: '/shows', label: 'Shows' },
  { to: '/music', label: 'Music' },
  { to: VINYL, label: 'Shop', external: true },
  { to: '/press', label: 'Press' },
  { to: '/photos', label: 'Photos' },
  { to: '/videos', label: 'Videos' },
  { to: '/lyrics', label: 'Lyrics' },
  { to: '/epk', label: 'EPK' },
  { to: '/contact', label: 'Contact' },
];

function NightStagePage() {
  return (
    <div className="min-h-screen bg-space text-yellow-100">
      <div className="sticky top-0 z-50">
        <DesignMockBanner current="night-stage" />
        <header className="bg-gray-900 bg-opacity-80">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            {nav.map((item) => (
              item.external ? (
                <a
                  key={item.label}
                  href={item.to}
                  className="header-link text-sm hover:text-red-300"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} to={item.to} className="header-link text-sm hover:text-red-300">
                  {item.label}
                </Link>
              )
            ))}
          </nav>
        </header>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <img src={LogoImg} alt="Tasche and the Psychedelic Roses" className="mx-auto mb-8 max-w-xl w-full" />

        <div className="md:flex md:items-center md:gap-10">
          <img src={AlbumCoverImg} alt="Tasche and the Psychedelic Roses album cover" className="w-full md:w-1/2 mx-auto" />
          <div className="mt-8 md:mt-0 text-center md:text-left header">
            <p className="text-red-300 text-sm tracking-wide mb-4">Next show — stay tuned</p>
            <a
              href={LISTEN}
              className="inline-block bootstrap-link-override text-lg md:text-3xl font-semibold bg-red-400 hover:bg-red-300 py-2 px-6 mx-2 mb-4 rounded-full"
              rel="noopener noreferrer"
              target="_blank"
            >
              Listen
            </a>
            <a
              href={VINYL}
              className="inline-block bootstrap-link-override text-lg md:text-3xl font-semibold bg-red-400 hover:bg-red-300 py-2 px-6 mx-2 mb-4 rounded-full"
              rel="noopener noreferrer"
              target="_blank"
            >
              Buy vinyl
            </a>
            <p className="mt-4 text-red-300">Available on all streaming platforms.</p>
            <div className="mt-2">
              <SocialIcon bgColor="#FEF3C7" fgColor="#F87171" style={{ margin: '0.75rem', width: '35px', height: '35px' }} url="https://open.spotify.com/artist/0Im7zcYdMp1snHs6JmrB9M?si=RnqkTi0gSJuGTaSAosUdJQ" />
              <SocialIcon bgColor="#FEF3C7" fgColor="#F87171" network="itunes" style={{ margin: '0.75rem', width: '35px', height: '35px' }} url="https://music.apple.com/us/artist/tasche-the-psychedelic-roses/1325686500" />
              <SocialIcon bgColor="#FEF3C7" fgColor="#F87171" style={{ margin: '0.75rem', width: '35px', height: '35px' }} url="https://taschedelarocha.bandcamp.com/album/tasche-de-la-rocha-the-psychedelic-roses?label=3525941080&tab=artists" />
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full p-6 text-center bg-gray-900 bg-opacity-75">
        <p className="header text-red-300 mb-2">Subscribe</p>
        <p className="text-sm m-0">Mailing list stays in the footer, under the page — not on top of photos.</p>
      </footer>
    </div>
  );
}

export default NightStagePage;

export const Head = () => (
  <Seo title="Night Stage (design mock)" pathname="/night-stage" />
);
