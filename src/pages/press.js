import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import PressQuote from '../components/pressQuote';
import pressQuotes from '../data/pressQuotes';
import AlbumCover from '../images/album-cover.jpg';
import '@fontsource/fjalla-one';

function PressPage() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <p className="text-4xl font-bold header text-red-300 mb-9">
          Recent Press for
          {' '}
          <em>Tasche & the Psychedelic Roses</em>
        </p>
        <div>
          {pressQuotes.map((item, index) => (
            <PressQuote
              key={`${item.source}-${item.href}`}
              index={index}
              quote={item.quote}
              source={item.source}
              href={item.href}
            />
          ))}
        </div>
        <div className="hidden md:block mr-10">
          <img
            src={AlbumCover}
            className="mx-auto"
            alt="Tasche de la Rocha"
            width={500}
          />
        </div>
      </div>
    </Layout>
  );
}

export default PressPage;

export const Head = () => (
  <Seo title="Tasche and the Psychedelic Roses" pathname="/press" />
);
