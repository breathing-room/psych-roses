import React, { useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { SocialIcon } from 'react-social-icons';

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <div className="h-full z-50">
      {/* Hamburger menu button */}
      <div className="flex">
        <button onClick={() => toggleExpansion(!isExpanded)} className="hover:bg-red-300 md:fixed top-0 left-0 m-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 m-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Logo */}
      <div className="flex justify-center pt-0 md:pt-3 pb-5">
        <Link to="/">
          <div className="flex align-middle">
            <StaticImage
              src="../images/new-logo.jpg"
              class="z-0"
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Logo"
            />
          </div>
        </Link>
      </div>

      {/* Sidebar */}
      <div className={`h-100 w-full md:w-80 bg-gray-900
        absolute inset-y-0 inset-left-0
        transform transition duration-200 ease-in-out z-50 text-center ${isExpanded ? '-translate-x-0' : '-translate-x-full'}`}
      >

        {/* Close menu button */}
        <div className="flex top-0">
          <button onClick={() => toggleExpansion(!isExpanded)} className="text-xl block cursor-pointer py-3 px-5 hover:bg-red-300"><strong>X</strong></button>
        </div>

        {/* Menu items */}
        <nav className="h-full flex flex-col items-center">
          {/* <Link to="/about" class="w-full block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-300 transition duration:200" activeClassName="w-full block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-300 transition duration:200">
            About
          </Link> */}
          <Link to="/" class="w-full block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-300 transition duration:200" activeClassName="w-full block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-300 transition duration:200">
            Home
          </Link>
          <Link to="/shows" class="w-full block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-300 transition duration:200" activeClassName="w-full block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-300 transition duration:200">
            Shows
          </Link>
          <Link to="/music" class="w-full block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-300 transition duration:200" activeClassName="w-full block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-300 transition duration:200">
            Music
          </Link>
          <Link to="https://sinkingcityrecords.bandcamp.com/merch?filter_band=182166741" class="w-full block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-300 transition duration:200" activeClassName="w-full block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-300 transition duration:200" rel="noopener noreferrer" target="_blank">
            Shop
          </Link>
          <Link to="/press" class="w-full block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-300 transition duration:200" activeClassName="w-full block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-300 transition duration:200">
            Press
          </Link>
          <Link to="/photos" class="w-full block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-300 transition duration:200" activeClassName="w-full block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-300 transition duration:200">
            Photos
          </Link>
          <Link to="/videos" class="w-full block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-300 transition duration:200" activeClassName="w-full block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-300 transition duration:200">
            Videos
          </Link>
          <Link to="/lyrics" class="w-full block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-300 transition duration:200" activeClassName="w-full block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-300 transition duration:200">
            Lyrics
          </Link>
          <Link to="/epk" class="w-full block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-300 transition duration:200" activeClassName="w-full block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-300 transition duration:200">
            EPK
          </Link>
          <Link to="/contact" class="w-full block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-300 transition duration:200" activeClassName="w-full block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-300 transition duration:200">
            Contact
          </Link>
          <div>
            <SocialIcon bgColor="#FEF3C7" fgColor="#F87171" style={{ margin: '1rem', width: '35px', height: '35px' }} url="https://open.spotify.com/artist/0Im7zcYdMp1snHs6JmrB9M?si=RnqkTi0gSJuGTaSAosUdJQ" />
            <SocialIcon bgColor="#FEF3C7" fgColor="#F87171" style={{ margin: '1rem', width: '35px', height: '35px' }} url="https://www.facebook.com/taschedelarocha" />
            <SocialIcon bgColor="#FEF3C7" fgColor="#F87171" style={{ margin: '1rem', width: '35px', height: '35px' }} url="https://www.instagram.com/tascheandthepsychedelicroses/" />
            <SocialIcon bgColor="#FEF3C7" fgColor="#F87171" style={{ margin: '1rem', width: '35px', height: '35px' }} url="mailto:taschedelarochamusic@gmail.com" />
          </div>
        </nav>
      </div>
    </div>
  );
}

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
