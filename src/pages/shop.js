import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';

function ShopPage() {
  return (
    <div>
      <Layout>
        <Seo title="Shop" />
        {/* <div class='lg:ml-48 lg:mr-48 p-4 lg:flex'>
      <p class='m-auto p-4'>
        <StaticImage
          src="https://picsum.photos/300"
          class="m-8 p-4"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="placeholder"
        />
        <div>TODO: Link to shop for old album here</div>
      </p>
      <p class='m-auto p-4'>
        <StaticImage
          src="https://picsum.photos/300"
          class="m-8 p-4"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="placeholder"
        />
        <div>TODO: Link to Sinking City shop for new album here</div>
      </p>
    </div>  */}
        <div className="m-5 text-4xl font-bold text-red-300 pb-5">Coming soon!</div>
      </Layout>
    </div>
  );
}

export default ShopPage;
