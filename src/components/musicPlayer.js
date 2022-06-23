import * as React from 'react';
import PropTypes from 'prop-types';

function MusicPlayer({ embedUrl, bandcampUrl, title }) {
  return (
    <iframe
      style={{ border: 0, width: '350px', height: '700px' }}
      src={embedUrl}
      seamless
      className="m-auto flex"
    >
      <a href={bandcampUrl}>{title}</a>
    </iframe>
  );
}

MusicPlayer.propTypes = {
  bandcampUrl: PropTypes.string,
  embedUrl: PropTypes.string,
  title: PropTypes.string,
};

export default MusicPlayer;
