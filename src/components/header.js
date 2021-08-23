import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header class='bg-black'>
    <div class='my-0 mx-4 w-11/12 py-6'>
      <h1 class='m-0 flex flex-row justify-center space-x-6'>
        <Link exact to="/" activeClassName='text-yellow-500 font-bold'>
          <p>{siteTitle}</p>
        </Link>
        <Link to="/about" activeClassName='text-yellow-500 font-bold'>
          <p>About</p>
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
