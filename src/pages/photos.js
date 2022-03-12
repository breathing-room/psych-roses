import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
}

const PhotosPage = ({ data }) => {

  return (
  <div class="mx-auto">
    <Layout>
      <Seo title="Photos" />
      <div class="mx-auto max-w-4xl">
        <Slider {...settings}>
          {data.slideShow.edges.map((image) => {
            console.log(image)
            return (
              <div>
                <Img key={image.node} fluid={image.node.childImageSharp.fluid} alt="image"/>
              </div>
            )
          })}
        </Slider>
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
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
