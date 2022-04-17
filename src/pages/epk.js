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
      <div class="flex bg-gray-900 text-justify">
        <div class="flex flex-col  w-9/10 justify-between">
          {/* Bio */}
          <div class="">
            <p class='m-5 italic text-lg'>Who are the Psychedelic Roses?</p>
            <p class='m-5'>Forged by the rhythm of their home base in New Orleans, Tasche and the Psychedelic Roses sculpt sound and ardor, evolving away from the roots of R&B and gospel into a world of rock n roll with twinges of punk and grunge, the rare combination of freshness and timelessness. Rising up in the DIY scene of New Orleans, they’ve attracted a passionate zealous following through word of mouth for their energetic performance spectacles. </p>
            <p class='m-5'>Their inimitable soulful vocals with 4-part harmonies and demented musical palette melds a elegance and ferocity, coalescing into a singular genre that weaves doo-wop and glitter-gore with a psychedelic surf/punk edge.</p>
            <p class='m-5'>Band leader and producer Tasche de la Rocha began her music career as a teen on the streets of New Orleans, and quickly found recognition for her rare sound, being invited to play solo house concerts for Laurie Anderson and Jennifer Coolidge. In her acclaimed debut album Gold Rose, Tasche collaborated with Joseph Faison, out of which grew the full 8-piece band Psychedelic Roses. </p>
            <p class='m-5'>Tasche and the Psychedelic Roses’ upcoming self-titled album will soon be released in August 2022 on local New Orleans label Sinking City, and is produced and engineered by Eric Heigle, known for his work with Arcade Fire, Dr. John, Dawn Richard, and Lost Bayou Ramblers amongst others.</p>
            <p class='m-5'>Psych Roses’ feminist alchemy slays from rags to psychedelic riches, a phoenix from the ashes of garage rock to the temple of maniacal joy.</p>
          </div>
          {/* Video */}
          <div class="flex  p-5 justify-center">
            <Video videoSrcURL="https://www.youtube.com/embed/ScMzIvxBSi4" videoTitle="Placeholder"/>
          </div>
          {/* Contact */}
          <div class="">
            <h4 class='m-5 italic text-lg'>How to get in touch</h4>
            <p class='m-5'>taschedelarocha@gmail.com</p>
          </div>
        </div>
        <div class="flex flex-col ">
          <div class="flex">
            <StaticImage
              src="../images/carouselImages/IMG_2451.jpg"
              width={900}
              class="m-8 z-0"
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Psychedelic Roses @ Saturn Bar in NOLA"
            />
          </div>
          <div class="flex">
            {/* Reviews */}
            <div class="flex flex-col  self-center p-4">
              <h4 class='italic text-lg'>What folks are saying...</h4>
              <p class=''>Life is a dying art.</p>
              <p class=''>Full of complexity, dark musings, whimsy, and rib pokes at redemption, Tasche and The Psychedelic Roses' new album escorts us
                            on a tour of our most secret selves - the voices inside of our heads and the axes we long to grind.
                            It lifts us when we feel heavy, colors us boldly when we wash out to grey, and throws a glorious gauntlet down that ...
                            well, if we can't escape suffering completely, then what's the harm in finding a way to enjoy it just a little?
                            The vocals, rich harmonies and strange siren calls, tap on the glass as we sit inside of ourselves, staring out; wakey wakey.
                            Together with the sometimes raw and sometimes delicate instrumentals, the songs pick up our hearts, carefully shaking and rolling them
                            onto the table as life's eternal game of craps continues.</p>
              <p class=''>We are in good hands as we move through it all.</p>
              <p class=''>In The Abyss, there's always a party in progress, with Tasche and The Psychedelic Roses taking the stage.</p>
            </div>
            {/* Songs */}
            <div class="flex justify-center p-5">
              <SpotifyPlayer
                uri="spotify:user:Bobby:playlist:0sz2J5ZVROxMv3ZkVMTKuw"
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
