import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"


const Header = () => {
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <nav class="flex items-center justify-between flex-wrap p-6 bg-gray-900">
      <div class="flex items-center flex-shrink-0 mr-6 pb-3">
        <Link to="/" class="font-semibold text-xl tracking-tight"><p class="gold-text text-3xl font-title">Psychedelic Roses</p></Link>
      </div>
      <div class="block lg:hidden">
        <button onClick={() => toggleExpansion(!isExpanded)} class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className={`${ isExpanded ? `block` : `hidden` } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
        <div class="text-sm lg:flex-grow">
          <Link to="/about" class="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4" activeClassName="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
            About
          </Link>
          <Link to="/shows" class="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4" activeClassName="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
            Shows
          </Link>
          <Link to="/press" class="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4" activeClassName="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
            Press
          </Link>
          <Link to="/music" class="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4" activeClassName="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
            Music
          </Link>
          <Link to="/shop" class="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4" activeClassName="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
            Shop
          </Link>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
