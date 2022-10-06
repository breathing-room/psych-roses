/**
  * Spotify player iframe widget
  *
  * @author Alexander Wallin <office@alexanderwallin.com>
  * @see https://developer.spotify.com/technologies/widgets/spotify-play-button/
  */

import React, { Component } from 'react';

// Size presets, defined by Spotify
const sizePresets = {
  large: {
    width: 320,
    height: 500,
  },
  compact: {
    width: 300,
    height: 80,
  },
};

/**
 * SpotifyPlayer class
 */
class SpotifyPlayer extends Component {
  // ------------------------------------------------------
  // Render
  // ------------------------------------------------------

  render() {
    // const { uri, view, theme } = this.props
    let { size } = this.props;

    if (typeof size === 'string') {
      size = sizePresets[size];
    }

    return (

      <iframe
        title="Spotify"
        src={this.props.src}
        width="300"
        height={this.props.height}
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen=""
      />
    );
  }
}

export default SpotifyPlayer;
