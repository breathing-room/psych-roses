import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { SocialIcon } from 'react-social-icons';
import AlbumCover from '../images/album-cover.jpg'
import "@fontsource/fjalla-one"

function PressPage() {
  return (
    <Layout>
      <Seo title="Tasche and the Psychedelic Roses" pathname="/press" />
      <div className="w-9/12 mx-auto">
        <p class="text-4xl font-bold header text-red-300 mb-9">Recent Press</p>

        <div className="bg-gray-800 md:my-10 md:mx-72 p-5 md:p-2">
          <p className="md:m-5 md:mx-16">
            "...edgy, jarring guitars flowing into a pop-flavored melody with tangs of alt-rock...

            At once innovative and surging with a latent caustic energy that is finally liberated,
            “Hook” parades the creative talents of Tasche and the Psychedelic Roses."
            <p className="text-red-300"><a href="https://celebmix.com/music-premiere-tasche-and-the-psychedelic-roses-releases-hook/" target="_blank" rel="noopener noreferrer">
              <strong class="hover:text-red-400">Celebmix &rarr;</strong>
            </a></p>
          </p>
        </div>
        <div className="bg-gray-800 my-10 md:mx-72 p-5 md:p-2">
          <p className="md:m-5 md:mx-16">
            "...ethereal, plaintive blues and shuffling, rough-hewn doo-wop and R&B,
            all tied together by the singer-songwriter's unmistakable voice — a barbed, wiry howl"
            <p className="text-red-300"><a href="https://www.nola.com/gambit/music/article_bf7317fc-b93a-5a87-8a78-837796ab4605.html" target="_blank" rel="noopener noreferrer">
              <strong class="hover:text-red-400">New Orleans Gambit &rarr;</strong>
            </a></p>
          </p>
        </div>


        <div className="hidden md:inline mr-10">
            <img
              src={AlbumCover}
              className="mx-auto"
              alt="Tasche de la Rocha"
              width={500}
            />
          </div>
      </div>
    </Layout>
  );
}

export default PressPage;

export const query = graphql`
  query {
    file(relativePath: {eq: "solo-face.JPG"}) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
`;

