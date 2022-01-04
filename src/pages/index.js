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
  const images = withArtDirection(getImage(nodes[1]), [
    {
      media: "(max-width: 700px)",
      image: getImage(nodes[0]),
    },
  ])
  return (
    <div>
      <Layout>
        <Seo title="Home" />
        <div class="flex-col">
          <p>calls to action for new album here:</p>
          <div class="flex place-content-center">
            <p class="p-2">stream music</p>
            <p class="p-2">buy stuff</p>
          </div>
        </div>
        {/* <GatsbyImage image={images}/> */}
        <GatsbyImage image={getImage(nodes[1])} alt="image alt"/>
      </Layout>
    </div>
  )
}

export default IndexPage
