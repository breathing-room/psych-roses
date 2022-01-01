import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, StaticImage, getImage, withArtDirection } from "gatsby-plugin-image"

const IndexPage = () => {
  const {
    allFile: { nodes }
  } = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "indexImages" }
          ext: { eq: ".jpg" }
        }
        sort: { fields: name, order: DESC }
      ) {
        nodes {
          name
          sourceInstanceName
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
            )
          }
        }
      }
    }
  `)
  console.log(getImage(nodes[1]))
  const images = withArtDirection(getImage(nodes[1]), [
    {
      media: "(max-width: 700px)",
      image: getImage(nodes[0]),
    },
  ])
  console.log(images)
  return (
    <div>
      <Layout>
        <Seo title="Home" />
        {/* <GatsbyImage image={images}/> */}
        <GatsbyImage image={getImage(nodes[1])} alt="image alt"/>
      </Layout>
    </div>
  )
}

export default IndexPage
