import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { SocialIcon } from 'react-social-icons';
import "@fontsource/fjalla-one"

function IndexPage({ data }) {
  return (
    <Layout>
      <Seo title="Tasche and the Psychedelic Roses" pathname="/" />
      <div className="md:w-9/12 mx-auto header">
        <p className="md:mb-5 md:mt-5  text-lg md:text-4xl font-semibold text-red-300">
          First single, "Hook", now streaming!
        </p>

        <button className="md:mb-10 my-2 text-lg md:text-4xl font-semibold bg-red-300 hover:bg-red-400 py-2 px-4 rounded-full shadow">
          <a href="https://open.spotify.com/track/21jp4ZLdN66MuhvsOUFw64?si=Vsd1HJGXTuaJASTviG7dAg" rel="noopener noreferrer" target="_blank">
            <SocialIcon bgColor="#FEF3C7" fgColor="#F87171" style={{ width: '35px', height: '35px' }} network="spotify" />
            <span class="ml-2">Listen now</span>
          </a>
        </button>

        <div class="md:max-w-4xl md:mx-auto">
          <GatsbyImage image={getImage(data.file.childImageSharp.gatsbyImageData)} alt="Tasche de la Rocha" />
        </div>
        <p className="mt-5 text-base md:text-4xl font-semibold text-red-300">
          Available on all streaming platforms.
        </p>
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
    file(relativePath: {eq: "hook-single-image.jpeg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`;
