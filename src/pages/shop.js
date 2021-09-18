import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ShopPage = () => (
  <div>
  <Layout>
    <Seo title="Shop" />
    <div class='m-auto p-4 flex align-middle'>
      <p class='m-auto p-4'>
        <StaticImage
          src="https://picsum.photos/300"
          class="m-8 p-4"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="placeholder"
        />
      </p>
      <p class='m-auto p-4'>
        <StaticImage
          src="https://picsum.photos/300"
          class="m-8 p-4"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="placeholder"
        />
      </p>
    </div> 
  </Layout>
  </div>
)

export default ShopPage
