import * as React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';

function ShopPage() {
  return (
    <div>
      <Layout>
        <div className="m-5 text-4xl font-bold text-red-300 pb-5">Coming soon!</div>
      </Layout>
    </div>
  );
}

export default ShopPage;

export const Head = () => <Seo title="Shop" />;

