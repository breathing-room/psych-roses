import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <div>
    <Layout>
      <Seo title="Home" />
      <StaticImage
        src="../images/oej-gold-dress.jpg"
        layout="constrained"
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="placeholder"
        class='hidden md:block lg:block w-screen'
        />
      <StaticImage
        src="../images/oej-gold-dress-cropped.jpg"
        layout="constrained"
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="placeholder"
        class="md:hidden lg:hidden w-screen"
      />
    </Layout>
  </div>
)

export default IndexPage
