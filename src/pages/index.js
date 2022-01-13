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
    <Layout>
      <Seo title="Home" />
      <div class="flex-col mx-auto md:flex-row w-40">
        {/* <div class="flex-col w-40 items-center md:flex md:place-content-center md:space-x-4 md:mb-6"> */}
          <p class="p-2 border-2 mb-4 hover:bg-red-400 font-semibold hover:cursor-pointer">STREAM MUSIC</p>
          <p class="p-2 border-2 mb-4 hover:bg-red-400 font-semibold hover:cursor-pointer">BUY STUFF</p>
        {/* </div> */}
      </div>
      {/* <GatsbyImage image={images}/> */}
      <GatsbyImage image={getImage(nodes[1])} alt="image alt"/>
    </Layout>
  )
}

export default IndexPage
