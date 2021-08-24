import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header class='bg-gold-foil'>
    <div class='my-0 mx-4 w-11/12 py-6'>
      <h1 class='m-0 flex flex-row justify-center space-x-6 items-end'>
        <Link to="/about" activeClassName='text-yellow-400'>
          <p>About</p>
        </Link>
        <Link to="/shows" activeClassName='text-yellow-400'>
          <p>Shows</p>
        </Link>
        <Link exact to="/">
          <p class='gold-text text-3xl font-title'>{siteTitle}</p>
        </Link>
        <Link to="/press" activeClassName='text-yellow-400'>
          <p>Press</p>
        </Link>
        <Link to="/music" activeClassName='text-yellow-400'>
          <p>Music</p>
        </Link>
        <Link to="/shop" activeClassName='text-yellow-400'>
          <p>Shop</p>
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
