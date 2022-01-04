import React, { useState, useRef } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = () => {
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <div>
      {/* menu buttons */}
      <div class="bg-gray-800 flex justify-between">
        {/* icon button */}
        <Link to="/" class="hover:bg-red-400">
          <svg class="h-6 m-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </Link>
        {/* title */}
        <Link to="/"><div class="gold-text font-title text-xl m-3">Psychedelic Roses</div></Link>
        {/* hamburger menu button */}
        <button onClick={() => toggleExpansion(!isExpanded) } class="hover:bg-red-400 menu-button">
          <svg xmlns="http://www.w3.org/2000/svg" class='h-6 m-4' fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* sidebar */}
      <div class={`h-full bg-gray-900 w-80
        absolute inset-y-0 inset-left-0 
        transform transition duration-200 ease-in-out z-50 ${ isExpanded ? `-translate-x-0` : `-translate-x-full`}`}>
        <nav class='flex flex-col'>
          <Link to="/" class="hover:bg-red-400">
            <svg class="h-6 m-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </Link>
          <Link to="/about" class="block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-400 transition duration:200" activeClassName="block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-400 transition duration:200">
            About
          </Link>
          <Link to="/shows" class="block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-400 transition duration:200" activeClassName="block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-400 transition duration:200">
            Shows
          </Link>
          <Link to="/press" class="block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-400 transition duration:200" activeClassName="block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-400 transition duration:200">
            Press
          </Link>
          <Link to="/music" class="block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-400 transition duration:200" activeClassName="block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-400 transition duration:200">
            Music
          </Link>
          <Link to="/shop" class="block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-400 transition duration:200" activeClassName="block py-3 px-4 lg:inline-block lg:mt-0 hover:bg-red-400 transition duration:200">
            Shop
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
