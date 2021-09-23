import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <nav class='bg-gray-900'>
    <div class='my-0 mx-0 ml-8 w-11/12 py-6 flex justify-between'>
      <Link exact to="/">
        <p class='gold-text text-3xl font-title'>{siteTitle}</p>
      </Link>
      <div class='flex justify-between'>
        <Link to="/about" className='mt-3 px-2 text-right' activeClassName='text-yellow-400'>
          <p>About</p>
        </Link>
        <Link to="/shows" className='mt-3 px-2 text-right' activeClassName='text-yellow-400'>
          <p>Shows</p>
        </Link>
        <Link to="/press" className='mt-3 px-2 text-right' activeClassName='text-yellow-400'>
          <p>Press</p>
        </Link>
        <Link to="/music" className='mt-3 px-2 text-right' activeClassName='text-yellow-400'>
          <p>Music</p>
        </Link>
        <Link to="/shop" className='mt-3 px-2 text-right' activeClassName='text-yellow-400'>
          <p>Shop</p>
        </Link>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
