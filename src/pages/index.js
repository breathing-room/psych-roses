import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <div>
    <Layout>
      <Seo title="Home" />
      <StaticImage
        src="https://picsum.photos/1050"
        class="m-0 p-0 max-h-screen"
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="placeholder"
      />
    </Layout>
  </div>
)

export default IndexPage
