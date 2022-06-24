import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { SocialIcon } from 'react-social-icons';
// import Video from '../components/video';
import SpotifyPlayer from '../components/spotifyPlayer';

import Layout from '../components/layout';
import Seo from '../components/seo';

function PressPage() {
  return (
    <Layout>
      <Seo title="Press" />
      {/* Main container */}
      <div className="flex-col md:flex-row lg:flex text-justify">
        <div className="flex flex-col w-9/10">
          {/* Image placeholder for video */}
          <div className="hidden md:inline">
            <StaticImage
              src="../images/solo-face.jpg"
              width={1000}
              class="m-8 z-0"
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Psychedelic Roses @ Saturn Bar in NOLA"
            />
          </div>
          {/* Bio */}
          <div className="bg-gray-800">
            <p className="m-5 text-lg text-red-400 font-bold">Bio</p>
            <p className="m-5">
              Forged in the rhythm, joy, and despair of New Orleans,
              <strong> Tasche and the Psychedelic Roses</strong>
              {' '}
              deploy four part vocal harmonies, grunge guitar riffs,
              and elements of punk, doo wop, surf, cabaret, and psychedelia,
              all the while swaying on a thin wire between sweetness and destruction.
            </p>
            <p className="m-5">Throughout the 10 tracks on their self-titled album, band leader and producer Tasche de la Rocha guides the Psychedelic Roses as they build, burn, and rise again. She is equally at home coming together in close harmony with the Angels (as her three backup singers are known) as she is shredding over waves of distortion as one of the three guitarists in the group.</p>
            <p className="m-5">
              Tasche began her music career as a teen busking solo on the streets of New Orleans,
              and quickly found recognition for her singular voice and guitar sound,
              playing solo house concerts for Laurie Anderson and Jennifer Coolidge.
              On her acclaimed solo debut album, 2016&apos;s
              {' '}
              <i>Gold Rose</i>
              , Tasche collaborated with producer/engineer/guitarist Joseph Faison,
              out of which grew the full eight-piece band the Psychedelic Roses.
            </p>
            <p className="m-5">
              Tasche and the Psychedelic Roses&apos; self-titled album will be released in fall of
              2022 on New Orleans label Sinking City Records. It was recorded at the Studio In The
              Country in Bogalusa, LA, and Wixmix in New Orleans, and was produced by
              Tasche de la Rocha and Eric Heigle. Heigle, who also engineered the album,
              is known for his work with Arcade Fire, Dr. John, 79rs Gang, Soul Rebels,
              and Lost Bayou Ramblers, among others.
            </p>
            <p className="m-5">
              Tasche and the Psychedelic Roses rock with a wild abandon and channel a
              feminist alchemy. It&apos;s a soundtrack for the moment - make out sessions,
              quiet contemplation, and fighting the demons around us.
            </p>
          </div>
          {/* Video */}
          {/* <div className="hidden p-5 justify-center">
            <Video videoSrcURL="https://www.youtube.com/embed/ScMzIvxBSi4" videoTitle="Placeholder" />
          </div> */}
          {/* Contact */}
          <div className="bg-gray-800 my-5 flex-col w-full self-center items-center">
            <h4 className="m-5 text-lg text-red-400 font-bold">Get in touch</h4>
            <p className="mx-5 hover:text-red-400"><a href="mailto:taschedelarocahmusic@gmail.com">taschedelarochamusic@gmail.com</a></p>
            <div>
              <SocialIcon bgColor="#FEF3C7" fgColor="#F87171" style={{ margin: '1rem', width: '35px', height: '35px' }} url="https://open.spotify.com/artist/0Im7zcYdMp1snHs6JmrB9M?si=RnqkTi0gSJuGTaSAosUdJQ" />
              <SocialIcon bgColor="#FEF3C7" fgColor="#F87171" style={{ margin: '1rem', width: '35px', height: '35px' }} url="https://www.facebook.com/taschedelarocha" />
              <SocialIcon bgColor="#FEF3C7" fgColor="#F87171" style={{ margin: '1rem', width: '35px', height: '35px' }} url="https://www.instagram.com/tascheandthepsychedelicroses/" />
              <SocialIcon bgColor="#FEF3C7" fgColor="#F87171" style={{ margin: '1rem', width: '35px', height: '35px' }} url="mailto:taschedelarochamusic@gmail.com" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center my-6">
          <div className="m-2 md:flex">
            {/* Reviews */}
            <div className="bg-gray-800 py-2">
              <p className="m-5 text-lg text-red-400 font-bold">What folks are saying...</p>
              <p className="m-5">&quot;Life is a dying art.</p>
              <p className="m-5">
                Full of complexity, dark musings, whimsy, and rib pokes at redemption, Tasche
                and the Psychedelic Roses&apos; new album escorts us on a tour of our most
                secret selves - the voices inside of our heads and the axes we long to grind.
                It lifts us when we feel heavy, colors us boldly when we wash out to grey,
                and throws a glorious gauntlet down that ... well, if we can&apos;t escape suffering
                completely, then what&apos;s the harm in finding a way to enjoy it just a little?
                The vocals, rich harmonies and strange siren calls, tap on the glass
                as we sit inside of ourselves, staring out; wakey wakey.
                Together with the sometimes raw and sometimes delicate instrumentals,
                the songs pick up our hearts, carefully shaking and rolling them
                onto the table as life&apos;s eternal game of craps continues.
              </p>
              <p className="m-5">We are in good hands as we move through it all.</p>
              <p className="m-5">
                In The Abyss, there&apos;s always a party in progress, with
                Tasche and the Psychedelic Roses taking the stage.&quot;
              </p>
              <p className="m-5">- Tansy Undercrypt</p>
            </div>
            {/* Songs */}
            <div className="m-2">
              <SpotifyPlayer />
            </div>
          </div>
          <div className="hidden md:inline">
            <StaticImage
              src="../images/carouselImages/IMG_2451.jpg"
              class="m-8 z-0"
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Psychedelic Roses @ Saturn Bar in NOLA"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default PressPage;
