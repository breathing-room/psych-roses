import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Seo from '../components/seo';

function IndexPage({ data }) {
  return (
    <Layout>
      <Seo title="Tasche and the Psychedelic Roses" />
      <div className="w-9/12 mx-auto">
        <p className="m-5 text-4xl font-bold text-red-400">
          NEW ALBUM COMING OCTOBER 2022
        </p>
        <div class="max-w-4xl mx-auto">
          <GatsbyImage image={getImage(data.file.childImageSharp.gatsbyImageData)} alt="Album cover" />
        </div>
      </div>
      <div className="flex mx-auto md:flex-row w-40" />
    </Layout>
  );
}

export default IndexPage;

export const query = graphql`
  query IndexImage {
    file(relativePath: {eq: "album-cover.jpg"}) {
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
