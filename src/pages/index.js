import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { SocialIcon } from 'react-social-icons';

function IndexPage({ data }) {
  return (
    <Layout>
      <Seo title="Tasche and the Psychedelic Roses" pathname="/" />
      <div className="w-9/12 mx-auto">
        <p className="mb-5 text-4xl font-semibold text-red-400">
          First single, "Hook", dropping Friday, 8/26.
        </p>
        <div class="max-w-4xl mx-auto">
          <GatsbyImage image={getImage(data.file.childImageSharp.gatsbyImageData)} alt="Tasche de la Rocha" />
        </div>
        <p className="mt-5 text-4xl font-semibold text-red-400">
          Available on all streaming platforms.
        </p>
        <div>
            <SocialIcon bgColor="#FEF3C7" fgColor="#F87171" style={{ margin: '1rem', width: '35px', height: '35px' }} url="https://open.spotify.com/artist/0Im7zcYdMp1snHs6JmrB9M?si=RnqkTi0gSJuGTaSAosUdJQ" />
            <SocialIcon bgColor="#FEF3C7" fgColor="#F87171" style={{ margin: '1rem', width: '35px', height: '35px' }} url="https://www.facebook.com/taschedelarocha" />
            <SocialIcon bgColor="#FEF3C7" fgColor="#F87171" style={{ margin: '1rem', width: '35px', height: '35px' }} url="https://www.instagram.com/tascheandthepsychedelicroses/" />
            <SocialIcon bgColor="#FEF3C7" fgColor="#F87171" style={{ margin: '1rem', width: '35px', height: '35px' }} url="https://music.apple.com/us/artist/tasche-the-psychedelic-roses/1325686500" network="itunes"/>
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
