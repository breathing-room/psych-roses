import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ShopPage = () => (
  <div>
  <Layout>
    <Seo title="Shop" />
    <div class='ml-48 mr-48 p-4 flex align-middle'>
      <p class='m-auto p-4'>
        <StaticImage
          src="https://picsum.photos/300"
          class="m-8 p-4"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="placeholder"
        />
        <div>TODO: Link to shop for old album here</div>
      </p>
      <p class='m-auto p-4'>
        <StaticImage
          src="https://picsum.photos/300"
          class="m-8 p-4"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="placeholder"
        />
        <div>TODO: Link to Sinking City shop for new album here</div>
      </p>
    </div> 
  </Layout>
  </div>
)

export default ShopPage
