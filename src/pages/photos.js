import * as React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Gallery from 'react-photo-gallery';

import Slider from 'react-slick';
import Seo from '../components/seo';
import Layout from '../components/layout';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function PrevArrow(props) {
  const { className, onClick } = props;
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
function NextArrow(props) {
  const { className, onClick } = props;
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
  adaptiveHeight: true,
  fade: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function PhotosPage({ data }) {
  console.log(data.slideShow.edges);
  const galleryPhotos = data.slideShow.edges.map((image) => {
    console.log(image);
    return {
      srcSet: image.node.childImageSharp.fluid.srcSet,
    };
  });

  console.log(galleryPhotos);
  return (
    <div className="mx-auto">
      <Layout>
        <Seo title="Photos" />
        {/* desktop view -- carousel */}
        <div className="hidden md:block mx-auto max-w-3xl max-h-24">
          <Slider {...settings}>
            {data.slideShow.edges.map((image) => (
              <div className="max-h-2">
                <Img key={image.node} fluid={image.node.childImageSharp.fluid} alt="image" />
              </div>
            ))}
          </Slider>
        </div>
        {/* mobile view -- gallery/scroll */}
        <div className="block md:hidden">
          <Gallery photos={galleryPhotos} />

        </div>
      </Layout>
    </div>
  );
}

export default PhotosPage;

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
`;
