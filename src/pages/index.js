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
          <p class="m-5 text-4xl font-bold text-red-400 pb-5">
            NEW ALBUM COMING OCTOBER 2022
          </p>
          <GatsbyImage image={getImage(data.file.childImageSharp.gatsbyImageData)} alt="Album cover"/>
        </div>
        <div class="flex mx-auto md:flex-row w-40">
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
