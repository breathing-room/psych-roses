import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Video from "../components/video"
import SpotifyPlayer from "../components/spotifyPlayer";


import Layout from "../components/layout"
import Seo from "../components/seo"

const PressPage = () => (
  <Layout>
    <Seo title="Press" />
      {/* Main container */}
      <div class="flex-col md:flex-row lg:flex text-justify">
        <div class="flex flex-col w-9/10 justify-between">
          {/* Bio */}
          <div class="bg-gray-900">
            <p class='m-5 text-lg text-red-400 font-bold'>Bio</p>
            <p class='m-5'>Forged in the rhythm, joy, and despair of New Orleans, <strong>Tasche and the Psychedelic Roses</strong> deploy four part vocal harmonies, grunge guitar riffs, and elements of punk, doo wop, surf, cabaret, and psychedelia, all the while swaying on a thin wire between sweetness and destruction.</p>
            <p class='m-5'>Throughout the 10 tracks on their self-titled album, band leader and producer Tasche de la Rocha guides the Psychedelic Roses as they build, burn, and rise again. She is equally at home coming together in close harmony with the Angels (as her three backup singers are known) as she is shredding over waves of distortion as one of the three guitarists in the group.</p>
            <p class='m-5'>Tasche began her music career as a teen busking solo on the streets of New Orleans, and quickly found recognition for her singular voice and guitar sound, even being invited to play solo house concerts for Laurie Anderson and Jennifer Coolidge. On her acclaimed solo debut album, 2016’s <i>Gold Rose</i>, Tasche collaborated with Joseph Faison, out of which grew the full eight-piece band the Psychedelic Roses.</p>
            <p class='m-5'>Tasche and the Psychedelic Roses’ self-titled album will be released in August 2022 on New Orleans label Sinking City Records. It was recorded at the Studio In The Country in Bogalusa and Wixmix in New Orleans, and is produced by Tasche de la Rocha and Eric Heigle. Heigle, who also engineered the album, is known for his work with Arcade Fire, Dr. John, 79rs Gang, Soul Rebels, and Lost Bayou Ramblers, amongst others.</p>
            <p class='m-5'>Tasche and the Psychedelic Roses rock with a wild abandon and channel a feminist alchemy. It’s a soundtrack for the moment - make out sessions, quiet contemplation, and fighting the demons around us.</p>
          </div>
          {/* Video */}
          <div class="flex p-5 justify-center">
            <Video videoSrcURL="https://www.youtube.com/embed/ScMzIvxBSi4" videoTitle="Placeholder"/>
          </div>
          {/* Contact */}
          <div class="bg-gray-900 flex-col w-full self-center items-center">
            <h4 class='m-5 text-lg text-red-400 font-bold'>How to get in touch</h4>
            <p class='m-5'>taschedelarochamusic@gmail.com</p>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div class="hidden md:inline">
            <StaticImage
              src="../images/carouselImages/IMG_2451.jpg"
              width={1000}
              class="m-8 z-0"
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Psychedelic Roses @ Saturn Bar in NOLA"
            />
          </div>
          <div class="m-2 md:flex">
            {/* Reviews */}
            <div class="bg-gray-900 py-2">
              <p class='m-5 text-lg text-red-400 font-bold'>What folks are saying...</p>
              <p class='m-5'>"Life is a dying art.</p>
              <p class='m-5'>Full of complexity, dark musings, whimsy, and rib pokes at redemption, Tasche and The Psychedelic Roses' new album escorts us
                            on a tour of our most secret selves - the voices inside of our heads and the axes we long to grind.
                            It lifts us when we feel heavy, colors us boldly when we wash out to grey, and throws a glorious gauntlet down that ...
                            well, if we can't escape suffering completely, then what's the harm in finding a way to enjoy it just a little?
                            The vocals, rich harmonies and strange siren calls, tap on the glass as we sit inside of ourselves, staring out; wakey wakey.
                            Together with the sometimes raw and sometimes delicate instrumentals, the songs pick up our hearts, carefully shaking and rolling them
                            onto the table as life's eternal game of craps continues.</p>
              <p class='m-5'>We are in good hands as we move through it all.</p>
              <p class='m-5'>In The Abyss, there's always a party in progress, with Tasche and The Psychedelic Roses taking the stage."</p>
              <p class='m-5'>- Tansy Undercrypt</p>
            </div>
            {/* Songs */}
            <div class="m-2">
              <SpotifyPlayer
                uri="spotify:album:1c5wv4ZOmfz6mRtcI2pUw4"
                size="large"
                theme="black"
                view="list"
              />
            </div>
          </div>
        </div>
      </div>
  </Layout>
)

export default PressPage
