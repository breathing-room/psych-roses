import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

function VideoPage() {
  return (
    <Layout>
      <Seo title="Tasche and the Psychedelic Roses" pathname="/videos" />
      <div className="mx-auto flex flex-col items-center">
        <div class="p-4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/USTBDhGY8Ig"
            title="Happy Song"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
        <div className="p-4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/U7AmVS_njVY"
            title="'Happy Song', live @ One Eyed Jack's, 10/31/22"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
      </div>
    </Layout>
  );
}

export default VideoPage;
