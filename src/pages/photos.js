import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: true,
  autoplay: true,
  fade: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

const PhotosPage = ({ data }) => {

  return (
  <div class="mx-auto">
    <Layout>
      <Seo title="Photos" />
      <div class="mx-auto max-w-3xl">
        <Slider {...settings}>
          {data.slideShow.edges.map((image) => {
            return (
              <div class='max-h-2'>
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
            fluid(quality: 90, maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
