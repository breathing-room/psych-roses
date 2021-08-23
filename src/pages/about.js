import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <div>
  <Layout>
    <Seo title="About" />
    <p class='m-4 p-4'>
        Bio and stuff here 
    </p>
  </Layout>
  </div>
)

export default IndexPage
