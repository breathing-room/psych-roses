import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header class='bg-green-900 mb-6'>
    <div class='my-0 mx-auto w-11/12 py-6 px-4'
    >
      <h1 class='m-0'>
        <Link to="/">
          {siteTitle}
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
