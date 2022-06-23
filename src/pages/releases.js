import * as React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';

function MusicPage() {
  return (
    <div>
      <Layout>
        <Seo title="Music" />
        <p className="m-4 p-4">
          Embed music here for both albums?
        </p>
      </Layout>
    </div>
  );
}

export default MusicPage;
