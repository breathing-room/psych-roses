import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import "@fontsource/fjalla-one"
import loadable from '@loadable/component'
const Accordion = loadable(() => import('../components/accordion'))

function LyricsPage() {
  return (
    <Layout>
      <Seo title="Tasche and the Psychedelic Roses" pathname="/lyrics" />
      <div className="mx-auto">
        <p class="text-2xl font-bold header text-red-300 mb-9">Lyrics for <em>Tasche & the Psychedelic Roses</em></p>
        <Accordion />
      </div>
    </Layout>
  );
}

export default LyricsPage;
