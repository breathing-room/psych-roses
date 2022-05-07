import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = (props) => {
  const { className, onClick } = props
  return (
      <div
          className={className}
          onClick={onClick}
      >
          <FontAwesomeIcon
              // style={{ marginRight: 31000}}
              icon={faAngleLeft}
              color="rgb(252 165 165)"
              size="4x"
          />
      </div>
  );
}
const NextArrow = (props) => {
  const { className, onClick } = props
  return (
      <div
          className={className}
          onClick={onClick}
      >
          <FontAwesomeIcon
              // style={{ padding: '2rem'}}
              icon={faAngleRight}
              color="rgb(252 165 165)"
              size="4x"
          />
      </div>
  );
}

const settings = {
  infinite: true,
  // adaptiveHeight: true,
  fade: true,
  prevArrow: <PrevArrow/>,
  nextArrow: <NextArrow/>,
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
        <div class="mx-auto max-w-3xl max-h-24">
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
