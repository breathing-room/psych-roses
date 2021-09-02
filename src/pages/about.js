import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
      <StaticImage
        src="https://picsum.photos/300"
        class="m-8 p-4"
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="placeholder"
      />
      <div class='m-4 p-4 mx-auto max-w-3xl leading-normal tracking-wide'>
        <p class='m-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla laoreet interdum. Maecenas a vehicula arcu, in tincidunt risus. Proin mollis nunc vel velit commodo rutrum. Donec dolor felis, fermentum in nisl vitae, auctor aliquet lectus. Duis erat augue, laoreet eu orci in, viverra ultrices augue. Phasellus viverra erat sed mi eleifend euismod. Nam vel iaculis ex. In tempus libero sodales placerat facilisis.</p>
        <p>Nulla sodales pulvinar est id volutpat. Curabitur sit amet ligula posuere, ultricies quam id, venenatis magna. Etiam enim mauris, maximus sed odio id, feugiat egestas odio. Maecenas id nisi eget magna lacinia tempus id nec purus. Proin in varius mauris. Proin mattis tellus ac ligula aliquet tristique. Nullam pretium metus tortor, ac semper ligula porta et. Nunc sed erat arcu. Fusce convallis magna et nisi ultrices pulvinar. Aliquam a commodo neque, quis ullamcorper arcu. Sed facilisis leo a ante laoreet convallis. </p>
      </div>
  </Layout>
)

export default AboutPage
