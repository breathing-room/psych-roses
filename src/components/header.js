import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <div class="fixed h-full z-50">
      {/* Hamburger menu button */}
       <button onClick={() => toggleExpansion(!isExpanded) } class={`hover:bg-red-400 menu-button fixed top-0 right-0 m-0` }>
          <svg xmlns="http://www.w3.org/2000/svg" class='h-6 m-4' fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

      {/* Logo */}
      <div class="flex">
        {/* logo */}
        <Link to="/"><div class="m-3">
          <StaticImage
            src="../images/tempLogoTransparent.png"
            width={250}
            class="z-0"
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Logo"
          />
        </div></Link>
      </div>

      {/* Sidebar */}
      <div class={`h-full bg-gray-900 w-80
        absolute inset-y-0 inset-left-0
        transform transition duration-200 ease-in-out z-50 text-center ${ isExpanded ? `-translate-x-0` : `-translate-x-full`}`}>

        {/* Close menu button */}
        <div class="flex justify-end">
          <button onClick={() => toggleExpansion(!isExpanded) } class="text-xl block cursor-pointer py-3 px-5 hover:bg-red-400"><strong>X</strong></button>
        </div>

        {/* Menu items */}
        <nav class='h-full flex flex-col items-center'>
          <Link to="/about" class="w-full block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-400 transition duration:200" activeClassName="w-full block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-400 transition duration:200">
            About
          </Link>
          <Link to="/shows" class="w-full block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-400 transition duration:200" activeClassName="w-full block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-400 transition duration:200">
            Shows
          </Link>
          <Link to="/music" class="w-full block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-400 transition duration:200" activeClassName="w-full block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-400 transition duration:200">
            Music
          </Link>
          <Link to="/shop" class="w-full block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-400 transition duration:200" activeClassName="w-full block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-400 transition duration:200">
            Shop
          </Link>
          <Link to="/photos" class="w-full block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-400 transition duration:200" activeClassName="w-full block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-400 transition duration:200">
            Photos
          </Link>
          <Link to="/press" class="w-full block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-400 transition duration:200" activeClassName="w-full block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-400 transition duration:200">
            Press
          </Link>
        </nav>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
