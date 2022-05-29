import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const IndexPage = ({data}) => {
  return (
    <Layout>
      <Seo title="Home" />
        {/* replace with new album photo */}
        <div class="w-9/12 mx-auto">
          <p class="m-5 text-4xl font-bold'">
            NEW ALBUM COMING OCTOBER 2022
          </p>
          <GatsbyImage image={getImage(data.file.childImageSharp.gatsbyImageData)} alt="Album cover"/>
        </div>
        <div class="flex mx-auto md:flex-row w-40">
        {/* <div class="flex-col w-40 items-center md:flex md:place-content-center md:space-x-4 md:mb-6"> */}
          {/* <p class="p-2 border-2 mb-4 hover:bg-red-400 font-semibold hover:cursor-pointer">STREAM MUSIC</p> */}
          {/* <p class="p-2 border-2 mb-4 hover:bg-red-400 font-semibold hover:cursor-pointer">BUY STUFF</p> */}
        {/* </div> */}
        </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexImage {
    file(relativePath: {eq: "album-cover.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`
