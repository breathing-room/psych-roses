import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <div class='flex md:flex-row lg:flex-row justify-center'>
      <div class="hidden lg:flex">
        <StaticImage
          src="../images/IMG_3980.jpg"
          width={500}
          class="m-8 z-0"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Tasche de la Rocha"
          />
      </div>
      <div class='p-4 max-w-2xl leading-normal tracking-wide text-sm'>
        <p class='m-5'>Forged by the rhythm of their home base in New Orleans, Tasche and the Psychedelic Roses sculpt sound and ardor, evolving away from the roots of R&B and gospel into a world of rock n roll with twinges of punk and grunge, the rare combination of freshness and timelessness. Rising up in the DIY scene of New Orleans, they’ve attracted a passionate zealous following through word of mouth for their energetic performance spectacles. </p>
        <p class='m-5'>Their inimitable soulful vocals with 4-part harmonies and demented musical palette melds a elegance and ferocity, coalescing into a singular genre that weaves doo-wop and glitter-gore with a psychedelic surf/punk edge.</p>
        <p class='m-5'>Band leader and producer Tasche de la Rocha began her music career as a teen on the streets of New Orleans, and quickly found recognition for her rare sound, being invited to play solo house concerts for Laurie Anderson and Jennifer Coolidge. In her acclaimed debut album Gold Rose, Tasche collaborated with Joseph Faison, out of which grew the full 8-piece band Psychedelic Roses. </p>
        <p class='m-5'>Tasche and the Psychedelic Roses’ upcoming self-titled album will soon be released in August 2022 on local New Orleans label Sinking City, and is produced and engineered by Eric Heigle, known for his work with Arcade Fire, Dr. John, Dawn Richard, and Lost Bayou Ramblers amongst others.</p>
        <p class='m-5'>Psych Roses’ feminist alchemy slays from rags to psychedelic riches, a phoenix from the ashes of garage rock to the temple of maniacal joy.</p>
      </div>
    </div>
  </Layout>
)

export default AboutPage
