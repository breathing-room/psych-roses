import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, StaticImage, getImage, withArtDirection } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Seo title="Home" />
        <StaticImage 
          src="../images/indexImages/oej-gold-dress.jpg"
          // layout="constrained"
          // height="1000px"
          // cropFocos="attention"
          // fit="cover"
          class="hidden lg:flex mg:flex"
        />
        <StaticImage 
          src="../images/indexImages/oej-gold-dress-cropped.jpg"
          // layout="constrained"
          // height="1000px"
          // cropFocos="attention"
          // fit="cover"
          class="lg:hidden mg:hidden"
        />
      </Layout>
    </div>
  )
}

export default IndexPage

// const {
//   allFile: { nodes }
// } = useStaticQuery(graphql`
//   # query {
//   #   allFile(
//   #     filter: {
//   #       sourceInstanceName: { eq: "images" }
//   #       ext: { eq: ".jpg" }
//   #     }
//   #     sort: { fields: name, order: DESC }
//   #   ) {
//   #     nodes {
//   #       name
//   #       sourceInstanceName
//   #       childImageSharp {
//   #         gatsbyImageData(
//   #           layout: FULL_WIDTH
//   #         )
//   #       }
//   #     }
//   #   }
//   # }
//   query {
//     allFile(filter: {relativeDirectory: {eq: "indexImages"}}) {
//       nodes {
//         childrenImageSharp {
//           gatsbyImageData
//         }
//       }
//     }
//   }
// `)

// const images = withArtDirection(getImage(nodes[1]), [
//   {
//     media: "(max-width: 700px)",
//     image: getImage(nodes[0]),
//   },
// ])