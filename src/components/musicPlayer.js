import * as React from "react"
import PropTypes from "prop-types"

const MusicPlayer = ({ embedUrl, bandcampUrl, title }) => (
  <iframe 
    style={{border: 0, width: "350px", height: "700px"}}
    src={embedUrl} seamless
    class="m-auto flex"
    >
      <a href={bandcampUrl}>{title}</a>
    </iframe>
)

MusicPlayer.propTypes = {
  bandcampUrl: PropTypes.string,
  embedUrl: PropTypes.string,
  title: PropTypes.string,
}

export default MusicPlayer
