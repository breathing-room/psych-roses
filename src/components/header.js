import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header class='bg-black'>
    <div class='my-0 mx-4 w-11/12 py-6'>
      <h1 class='m-0 flex flex-row justify-center space-x-6 items-end'>
        <Link to="/about" activeClassName='text-yellow-500 font-bold'>
          <p>About</p>
        </Link>
        <Link to="/shows" activeClassName='text-yellow-500'>
          <p>Shows</p>
        </Link>
        <Link exact to="/" activeClassName='text-yellow-500'>
          <p class='text-3xl font-bold'>{siteTitle}</p>
        </Link>
        <Link to="/press" activeClassName='text-yellow-500'>
          <p>Press</p>
        </Link>
        <Link to="/music" activeClassName='text-yellow-500'>
          <p>Music</p>
        </Link>
        <Link to="/shop" activeClassName='text-yellow-500'>
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
