import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { SocialIcon } from 'react-social-icons';
import "@fontsource/fjalla-one"
import SpotifyPlayer from '../components/spotifyPlayer';
import AlbumCoverImg from '../images/album-cover.jpg'
import Video from '../components/video';

function IndexPage({ data }) {
  return (
    <Layout>
      <Seo title="Tasche and the Psychedelic Roses" pathname="/" />
      <div className="md:w-9/12 mx-auto header">
        <div className="md:flex p-5 mb-10">
          <div className="md:flex md:items-center mx-auto">
            <div>
              <p className="text-xl md:mb-5 md:mt-5 lg:my-2 lg:text-3xl font-semibold text-red-400">
                "HAPPY SONG" OFFICIAL MUSIC VIDEO
              </p>
              <p className="lg:hidden text-xl md:mb-5 md:mt-5 lg:my-2 lg:text-3xl font-semibold text-red-300">
                OUT NOW
              </p>

              <button className="lg:hidden md:mb-10 text-lg font-semibold bg-red-400 hover:bg-red-300 py-2 pl-5 pr-7 my-3 rounded-full shadow">
                <a href="https://youtu.be/USTBDhGY8Ig" rel="noopener noreferrer" target="_blank">
                  <span class="ml-2">WATCH</span>
                </a>
              </button>

              <div class="hidden lg:block md:max-w-2xl md:mx-auto ">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/USTBDhGY8Ig" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
          </div>
          </div>
        </div>

        <div className="md:flex">
          <div class="md:max-w-2xl md:mx-auto">
            <img
              src={AlbumCoverImg}
              className="m-auto z-0"
            />
          </div>

          <div className="md:flex md:items-center mx-auto">
            <div>
              <p className="text-2xl md:mb-5 md:mt-5 lg:my-2 text-lm md:text-4xl font-semibold text-red-300">
                NEW ALBUM OUT NOW
              </p>

              <button className="md:mb-10 text-lg md:text-4xl font-semibold bg-red-400 hover:bg-red-300 py-2 px-4 mx-3 rounded-full shadow">
                <a href="https://open.spotify.com/album/5WPIAEuO2jz3nBxcowCtwu?si=2EJG7T1aTMiBFOWyBrQEOQ" rel="noopener noreferrer" target="_blank">
                  <SocialIcon bgColor="#FEF3C7" fgColor="#F87171" network="spotify"/>
                  <span class="ml-2">LISTEN</span>
                </a>
              </button>

              <button className="md:mb-10 text-lg md:text-4xl font-semibold bg-red-400 hover:bg-red-300 py-2 px-4 mx-3 rounded-full shadow">
                <a href="https://sinkingcityrecords.bandcamp.com/merch?filter_band=182166741" rel="noopener noreferrer" target="_blank">
                  <SocialIcon bgColor="#FEF3C7" fgColor="#F87171" />
                  <span class="ml-2">BUY VINYL</span>
                </a>
              </button>

              <p className="mt-5 text-base md:text-2xl font-semibold text-red-300">
                Available on all streaming platforms.
              </p>
              <div>
                <SocialIcon
                  bgColor="#FEF3C7"
                  fgColor="#F87171"
                  rel="noopener noreferrer"
                  style={{ margin: '1rem', width: '35px', height: '35px' }}
                  target="_blank"
                  url="https://open.spotify.com/artist/0Im7zcYdMp1snHs6JmrB9M?si=RnqkTi0gSJuGTaSAosUdJQ" />
                <SocialIcon
                  bgColor="#FEF3C7"
                  fgColor="#F87171"
                  network="itunes"
                  rel="noopener noreferrer"
                  style={{ margin: '1rem', width: '35px', height: '35px' }}
                  target="_blank"
                  url="https://music.apple.com/us/artist/tasche-the-psychedelic-roses/1325686500" />
                <SocialIcon
                  bgColor="#FEF3C7"
                  fgColor="#F87171"
                  rel="noopener noreferrer"
                  style={{ margin: '1rem', width: '35px', height: '35px' }}
                  target="_blank"
                  url="https://taschedelarocha.bandcamp.com/album/tasche-de-la-rocha-the-psychedelic-roses?label=3525941080&tab=artists" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}

export default IndexPage;

export const query = graphql`
  query IndexImage {
    file(relativePath: {eq: "halloween-show-flyer.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
          width: 400
        )
      }
    }
  }
`;
