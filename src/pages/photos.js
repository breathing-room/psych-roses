import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"


import Gallery from '@browniebroke/gatsby-image-gallery'

const PhotosPage = ({ data }) => {
  console.log(data)
  const images = data.slideShow.edges.map(({ node }) => node.childImageSharp)
  return (
  <div class="mx-auto">
    <Layout>
      <Seo title="Photos" />
      <div class="mx-auto max-w-4xl">
        <Gallery
          images={images}
          colWidth={100}
          mdColWidth={30}
        />
        {/* {
          images.map((image) => {
            <div data-sal>
              <GatsbyImage image={image} />
            </div>
          })
        } */}
      </div>
    </Layout>
  </div>
  )
}

export default PhotosPage

export const query = graphql`
  query {
    slideShow: allFile(
      filter: {relativeDirectory: {eq: "carouselImages"}}
      sort: {fields: base, order: ASC}
    ) {
      edges {
        node {
          id
          base
          childImageSharp {
            thumb: gatsbyImageData(
              width: 270
              height: 270
              placeholder: BLURRED
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
            gatsbyImageData(
              width: 900
              height: 600
              placeholder: BLURRED
              quality: 70
              blurredOptions: {width: 100}
            )
          }
        }
      }
    }
  }
`
