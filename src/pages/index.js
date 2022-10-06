import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { SocialIcon } from 'react-social-icons';
import "@fontsource/fjalla-one"
import SpotifyPlayer from '../components/spotifyPlayer';

function IndexPage({ data }) {
  return (
    <Layout>
      <Seo title="Tasche and the Psychedelic Roses" pathname="/" />
      <div className="md:w-9/12 mx-auto header">
        <p className="md:mb-5 md:mt-5 lg:my-2 text-lm md:text-4xl font-semibold text-red-300">
          Don't miss the album release show!
        </p>
        <p className="md:mb-5 md:mt-5 lg:my-2 text-lm md:text-xl py-0 font-semibold text-red-300">
          10/31 @ One Eyed Jack's in NOLA
        </p>

        <button className="md:mb-10 lg:mb-4 text-lg md:text-3xl font-semibold bg-red-400 hover:bg-red-300 py-2 px-4 rounded-full shadow">
          <a href="https://www.ticketweb.com/event/quintron-miss-pussycat-tasche-one-eyed-jacks-presents-at-tickets/12555525?pl=oneeyed" rel="noopener noreferrer" target="_blank">
            <span>Get your tix here!</span>
          </a>
        </button>

        <div class="md:max-w-4xl md:mx-auto">
          <GatsbyImage
            alt="Tasche de la Rocha"
            image={getImage(data.file.childImageSharp.gatsbyImageData)}
            title="Flyer for album release show on 10/31 at One Eyed Jack's in NOLA"
            />
        </div>
        <p class="text-gray-600 text-xs">Photo by Caitlyn Ridenour</p>

        <p className="md:mb-5 md:mt-5 lg:mb-0 lg:mt-10 text-lm md:text-xl py-0 font-semibold text-red-300">
          Listen to the new singles:
        </p>
        <div className="md:m-auto md:p-4 pl-16 lg:pl-0 flex flex-col lg:flex-row justify-center">
          <div className="md:p-4">
            <SpotifyPlayer src="https://open.spotify.com/embed/album/5h7FlXraimbSpDorXK94Tg?highlight=spotify:track:21jp4ZLdN66MuhvsOUFw64"/>
          </div>
          <div className="md:p-4">
            <SpotifyPlayer src="https://open.spotify.com/embed/album/0zJgqhxrieIzuNSXr63Vp7?highlight=spotify:track:7mho0mIfyWHzWJFNMBCqPI"/>
          </div>
        </div>
        {/* <div>
          <button className="md:mb-10 my-7 mx-3 text-lg md:text-4xl font-semibold bg-red-300 hover:bg-red-400 py-2 px-4 rounded-full shadow">
            <a href="https://open.spotify.com/track/7mho0mIfyWHzWJFNMBCqPI?si=c691fadc3bd94a34" rel="noopener noreferrer" target="_blank">
              <SocialIcon bgColor="#FEF3C7" fgColor="#F87171" style={{ width: '35px', height: '35px' }} network="spotify" />
              <span class="ml-2">Hook</span>
            </a>
          </button>
          <button className="md:mb-10 my-7 text-lg md:text-4xl font-semibold bg-red-300 hover:bg-red-400 py-2 px-4 rounded-full shadow">
            <a href="https://open.spotify.com/track/7mho0mIfyWHzWJFNMBCqPI?si=c691fadc3bd94a34" rel="noopener noreferrer" target="_blank">
              <SocialIcon bgColor="#FEF3C7" fgColor="#F87171" style={{ width: '35px', height: '35px' }} network="spotify" />
              <span class="ml-2">Dying Art</span>
            </a>
          </button>
        </div> */}

        {/* <p className="mt-5 text-base md:text-4xl font-semibold text-red-300">
          Available on all streaming platforms.
        </p> */}
        <div>
            <SocialIcon bgColor="#FEF3C7" fgColor="#F87171" style={{ margin: '1rem', width: '35px', height: '35px' }} url="https://open.spotify.com/artist/0Im7zcYdMp1snHs6JmrB9M?si=RnqkTi0gSJuGTaSAosUdJQ" />
            <SocialIcon bgColor="#FEF3C7" fgColor="#F87171" style={{ margin: '1rem', width: '35px', height: '35px' }} url="https://music.apple.com/us/artist/tasche-the-psychedelic-roses/1325686500" network="itunes"/>
            <SocialIcon bgColor="#FEF3C7" fgColor="#F87171" style={{ margin: '1rem', width: '35px', height: '35px' }} url="https://taschedelarocha.bandcamp.com/track/hook"/>
          </div>

      </div>
      <div className="flex mx-auto md:flex-row w-40" />
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
