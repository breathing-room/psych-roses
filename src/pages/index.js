import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const IndexPage = ({data}) => {
  return (
    <Layout>
      <Seo title="Home" />
      <div class="flex-col mx-auto md:flex-row w-40">
        {/* <div class="flex-col w-40 items-center md:flex md:place-content-center md:space-x-4 md:mb-6"> */}
          <p class="p-2 border-2 mb-4 hover:bg-red-400 font-semibold hover:cursor-pointer">STREAM MUSIC</p>
          <p class="p-2 border-2 mb-4 hover:bg-red-400 font-semibold hover:cursor-pointer">BUY STUFF</p>
        {/* </div> */}
      </div>
      <GatsbyImage image={getImage(data.file.childImageSharp.gatsbyImageData)}/>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexImage {
    file(relativePath: {eq: "oej-gold-dress-cropped.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`
