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
        <p class="text-4xl font-bold header text-red-300 mb-9">Recent Press for <em>Tasche & the Psychedelic Roses</em></p>
          <div>
            <div className="bg-gray-700 opacity-75 md:my-10 md:mx-72 p-5 md:p-2">
              <p className="md:m-5 md:mx-16">
                "The surreal psychedelic psycho-dramatic horror pastiche of the "Happy Song" Official Video...
                feels like a crazy garish amalgam of John Waters, Natalie Erika James and David Cronenberg.
                The punchy sonics energized by the band's signature blend of cabaret meets doo wop punk meets surf punk
                meets progressive jam rock and more as punctuated by Tasche de la Rocha unique vocals offers inside and out twists and turns.
                In the end, "Happy Song" from Tasche and the Psychedelic Roses eponymous album feels like a thrill ride of sorts fused from darks seeds,
                "a murder ballad written in honor of survivors" as the whole band chews up the scenery in the most artful ways."
                <p className="text-red-300"><a href="https://www.americanpancake.com/2022/12/tasche-and-psychedelic-roses-celebrate.html" target="_blank" rel="noopener noreferrer">
                  <strong class="hover:text-red-400">American Pancake &rarr;</strong>
                </a></p>
              </p>
            </div>

            <div className="bg-gray-700 opacity-75 md:my-10 md:mx-72 p-5 md:p-2">
              <p className="md:m-5 md:mx-16">
                "Tasche de la Rocha and the Psychedelic Roses approach their full potential on this release, blending sounds of doo-wop, surf rock,
                cabaret, punk and ’70s-era classic rock. De la Rocha is a captivating vocalist who aesthetically feels plucked right out of the ‘50s
                but lyrically provides a level of emotional intelligence that seemingly can only exist in 2022."
                <p className="text-red-300"><a href="https://www.offbeat.com/news/new-releases-in-new-orleans-koan-kenpachi-tasche-de-la-rocha-more/" target="_blank" rel="noopener noreferrer">
                  <strong class="hover:text-red-400">Offbeat &rarr;</strong>
                </a></p>
              </p>
            </div>

            <div className="bg-gray-700 opacity-75 md:my-10 md:mx-72 p-5 md:p-2">
              <p className="md:m-5 md:mx-16">
                "...grunge guitar riffs, punk, doo-wop, surf, cabaret, and psychedelic influences...
                balancing a fine line between sweetness and devastation."
                <p className="text-red-300"><a href="https://conversationsabouther.net/new-orleans-band-tasche-and-the-psychedelic-roses-release-happy-song/" target="_blank" rel="noopener noreferrer">
                  <strong class="hover:text-red-400">Conversations About Her &rarr;</strong>
                </a></p>
              </p>
            </div>

            <div className="bg-gray-700 opacity-75 md:my-10 md:mx-72 p-5 md:p-2">
              <p className="md:m-5 md:mx-16">
                "intoxicating...an authentic sound that will leave you in awe.
                Their music sways between the lines of sweetness and destruction."
                <p className="text-red-300"><a href="https://happymag.tv/tasche-and-the-psychedelic-roses-self-titled-album-track-by-track/?mibextid=Zxz2cZ" target="_blank" rel="noopener noreferrer">
                  <strong class="hover:text-red-400">Happy Mag &rarr;</strong>
                </a></p>
              </p>
            </div>

            <div className="bg-gray-700 opacity-75 md:my-10 md:mx-72 p-5 md:p-2">
              <p className="md:m-5 md:mx-16">
                "electrifying...energetic...dynamic, infectious...
                Across 10 riotous, evocative and effervescent tracks, the multi-genre collective effortlessly fuse elements of
                psychedelia, glam rock, garage and doo wop.
                Forged in the rhythm, joy, and despair of New Orleans, frontwoman Tasche de la Rocha emits a sound that is both contemporary and vintage."
                <p className="text-red-300"><a href="https://happymag.tv/tasche-and-the-psychedelic-roses-new-self-titled-album/" target="_blank" rel="noopener noreferrer">
                  <strong class="hover:text-red-400">Happy Mag &rarr;</strong>
                </a></p>
              </p>
            </div>

            <div className="bg-gray-700 opacity-75 md:my-10 md:mx-72 p-5 md:p-2">
              <p className="md:m-5 md:mx-16">
                "Simultaneously innovative and terrifically retro,
                Tasche De La Rocha and the Psychedelic Roses is a grand, swanky album highlighted by superb vocals."
                <p className="text-red-300"><a href="https://guitargirlmag.com/featured/tasche-de-la-rocha-and-the-psychedelic-roses-drop-self-titled-album/" target="_blank" rel="noopener noreferrer">
                  <strong class="hover:text-red-400">Guitar Girl &rarr;</strong>
                </a></p>
              </p>
            </div>

            <div className="bg-gray-700 opacity-75 md:my-10 md:mx-72 p-5 md:p-2">
              <p className="md:m-5 md:mx-16">
                "New Orleans alternative rock band Tasche and the Psychedelic Roses live up to their name
                in the new mind-melting music video for “Happy Song,” the latest single from the band’s self-titled album."
                <p className="text-red-300"><a href="https://www.nola.com/gambit/music/article_510282ea-6108-11ed-8e6b-23c36d7a4b35.html" target="_blank" rel="noopener noreferrer">
                  <strong class="hover:text-red-400">Gambit &rarr;</strong>
                </a></p>
              </p>
            </div>

            <div className="bg-gray-700 opacity-75 md:my-10 md:mx-72 p-5 md:p-2">
              <p className="md:m-5 md:mx-16">
                "With songs crafted over the course of five years and an album recorded during the height of the pandemic,
                Tasche and the Psychedelic Roses debut a new, evolved sound on their self-titled sophomore album, released on Halloween night.
                The album showcases a much heavier psych-rock‘n’roll sound for the group, with twinges of grunge and punk,
                and drawing inspiration from artists like Joe Meek, David Bowie, Nina Hagen, and Queen.
                ...
                With roots in R&B that reflected influences of gospel and doo-wop, the group’s sound has grown to include a plethora of genres
                that ultimately speaks more about their desire to play what feels right or fresh versus that which they already know and have played before."
                <p className="text-red-300"><a href="https://antigravitymagazine.com/feature/tasche-de-la-rocha-a-bloody-love-note-to-the-universe/" target="_blank" rel="noopener noreferrer">
                  <strong class="hover:text-red-400">Antigravity Magazine &rarr;</strong>
                </a></p>
              </p>
            </div>

            <div className="bg-gray-700 opacity-75 md:my-10 md:mx-72 p-5 md:p-2">
              <p className="md:m-5 md:mx-16">
                "Tasche has a thoroughly unique voice, like literally but also in terms of the art she seeds and her and her band give birth to.
                'Dying Art' in terms of some of it's shapes, sonic temperaments and attitudes made me think of the progressive / experimental side of the Beatles,
                of Abbey Road in particular but put though an art punk filter (think Pere Ubu, Mission of Burma) and as exquisitely jammy and crazy (good crazy)
                Tasche and the Psychedelic Roses get here, they equally can feel just as elegant and therein lies their off-kilter brilliance...
                It will likely stun you and that is a wonderful thing."
                <p className="text-red-300"><a href="https://www.americanpancake.com/2022/10/tasche-and-psychedelic-roses-and.html" target="_blank" rel="noopener noreferrer">
                  <strong class="hover:text-red-400">American Pancake &rarr;</strong>
                </a></p>
              </p>
            </div>

            <div className="bg-gray-700 opacity-75 md:my-10 md:mx-72 p-5 md:p-2">
              <p className="md:m-5 md:mx-16">
                "Tasche & the Psychedelic Roses hit us up with their new single,
                “Dying Art” and we were immediately drawn to its whimsical vibe.
                With jaunty guitars, silky harmonies, and a retro sensibility that never sounds dated,
                Tasche & co. whip up a magical brew of rock-n-roll flavored indie with hints of psychedelia.
                Stick around for the swirly guitar theatrics and slow-down bridge that ultimately winds its way back into an ooh-laden symphony."
                <p className="text-red-300"><a href="https://buffablog.com/tasche-the-psychedelic-roses-dying-art/" target="_blank" rel="noopener noreferrer">
                  <strong class="hover:text-red-400">buffaBLOG &rarr;</strong>
                </a></p>
              </p>
            </div>

            <div className="bg-gray-700 opacity-75 md:my-10 md:mx-72 p-5 md:p-2">
              <p className="md:m-5 md:mx-16">
                "[Co-producers Tasche de la Rocha and Eric Heigle] capture the duality of life’s tumultous bumps and indents,
                at different points conveying unsettling uncertainty and blissful euphoria."
                <p className="text-red-300"><a href="https://www.wonderlandmagazine.com/2022/10/21/premiere-tasche-and-the-psychedelic-roses/" target="_blank" rel="noopener noreferrer">
                  <strong class="hover:text-red-400">Wonderland &rarr;</strong>
                </a></p>
              </p>
            </div>

            <div className="bg-gray-700 opacity-75 md:my-10 md:mx-72 p-5 md:p-2">
              <p className="md:m-5 md:mx-16">
                "Led by the charismatic and compelling Tasche de la Rocha, the band rocks with freedom and candour
                typical of the great punk acts of past and present, as well as a feminist spirit that really helps bring the energy.
                Joining four-part vocal harmonies, grunge-like guitar riffs, a punk rock disposition, and pinches of doo-wop, cabaret, and psychedelia,
                Tasche and her team really pack a powerful punch for rock fans of both past and present."
                <p className="text-red-300"><a href="https://v13.net/2022/09/tasche-and-the-psychedelic-roses-dying-art-single-premiere/" target="_blank" rel="noopener noreferrer">
                  <strong class="hover:text-red-400">V13 &rarr;</strong>
                </a></p>
              </p>
            </div>

            <div className="bg-gray-700 opacity-75 md:my-10 md:mx-72 p-5 md:p-2">
              <p className="md:m-5 md:mx-16">
                "...potent...so divergent, so stunning...

                The exquisite progressive art rock meets oompah is not only fun but rocks so hard.
                There are nods to surf punk to psych and stoner rock...
                There is also a beautifully odd sensibility, a touch of 80's caberet and punk / new wave..."
                <p className="text-red-300"><a href="https://www.americanpancake.com/2022/09/tasche-and-psychedelic-roses-and.html" target="_blank" rel="noopener noreferrer">
                  <strong class="hover:text-red-400">American Pancake &rarr;</strong>
                </a></p>
              </p>
            </div>

            <div className="bg-gray-700 opacity-75 md:my-10 md:mx-72 p-5 md:p-2">
              <p className="md:m-5 md:mx-16">
                "Tasche and the Psychedelic Roses brings together a menagerie of genres like only a song created in The Big Easy can
                with the energy of a busker contained only by the performance’s pinpoint precision.
                Tight vocal harmonies wind in and out of crunchy surf guitars to create an almost manic, psychedelic doo-wop explosion
                that’s impossible to turn away from until the very end."
                <p className="text-red-300"><a href="https://glidemagazine.com/280863/listen-tasche-and-the-psychedelic-roses-bring-throwback-psych-doo-wop-explosion-via-hook/" target="_blank" rel="noopener noreferrer">
                  <strong class="hover:text-red-400">Glide Magazine &rarr;</strong>
                </a></p>
              </p>
            </div>

            <div className="bg-gray-700 opacity-75 md:my-10 md:mx-72 p-5 md:p-2">
              <p className="md:m-5 md:mx-16">
                "Lively sound...beautiful instrumental performance and excellent vocal lines...

                Hook is a composition full of energy where guitar, bass and drums form a perfect sound layer
                so that vocal melodies can be applied in a sensational and exciting way,
                closing the ideal package of a lot of talent and competence of a fantastic band." (translation)
                <p className="text-red-300"><a href="https://roadie-music.com/tasche-and-the-psychedelic-roses-traz-um-incrivel-lancamento-com-hook/" target="_blank" rel="noopener noreferrer">
                  <strong class="hover:text-red-400">Roadie Music &rarr;</strong>
                </a></p>
              </p>
            </div>

            <div className="bg-gray-700 opacity-75 md:my-10 md:mx-72 p-5 md:p-2">
              <p className="md:m-5 md:mx-16">
                "...edgy, jarring guitars flowing into a pop-flavored melody with tangs of alt-rock...

                At once innovative and surging with a latent caustic energy that is finally liberated,
                “Hook” parades the creative talents of Tasche and the Psychedelic Roses."
                <p className="text-red-300"><a href="https://celebmix.com/music-premiere-tasche-and-the-psychedelic-roses-releases-hook/" target="_blank" rel="noopener noreferrer">
                  <strong class="hover:text-red-400">Celebmix &rarr;</strong>
                </a></p>
              </p>
            </div>

            <div className="bg-gray-700 opacity-75 my-10 md:mx-72 p-5 md:p-2">
              <p className="md:m-5 md:mx-16">
                "...ethereal, plaintive blues and shuffling, rough-hewn doo-wop and R&B,
                all tied together by the singer-songwriter's unmistakable voice — a barbed, wiry howl"
                <p className="text-red-300"><a href="https://www.nola.com/gambit/music/article_bf7317fc-b93a-5a87-8a78-837796ab4605.html" target="_blank" rel="noopener noreferrer">
                  <strong class="hover:text-red-400">New Orleans Gambit &rarr;</strong>
                </a></p>
              </p>
            </div>
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

