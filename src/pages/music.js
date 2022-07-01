import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import MusicPlayer from '../components/musicPlayer';

function MusicPage() {
  return (
    <Layout>
      <Seo title="Releases" />
      <div className="md:m-auto md:p-4 flex flex-col lg:flex-row justify-center">
        <div className="md:p-4">
          <MusicPlayer
            // embedUrl="https://bandcamp.com/EmbeddedPlayer/album=960835734/size=medium/bgcol=333333/linkcol=e99708/transparent=true/"
            embedUrl="https://bandcamp.com/EmbeddedPlayer/album=960835734/size=large/bgcol=333333/linkcol=e99708/tracklist=false/transparent=true/"
            bandcampUrl="https://tascheandthepsychedelicroses.bandcamp.com/album/gold-rose"
            title="Gold Rose by Tasche And The Psychedelic Roses"
            class="m-auto"
          />
        </div>
        <div className="md:p-4">
          <MusicPlayer
            embedUrl="https://bandcamp.com/EmbeddedPlayer/album=2684022796/size=large/bgcol=333333/linkcol=e99708/tracklist=false/transparent=true/"
            bandcampUrl="https://tascheandtheangels.bandcamp.com/album/tasche-the-angels-ep"
            title="Tasche &amp; The Angels EP by Tasche &amp; The Angels"
          />
        </div>
      </div>
    </Layout>
  );
}

export default MusicPage;
