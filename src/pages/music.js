import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import MusicPlayer from "../components/musicPlayer"

const MusicPage = () => (
  <div>
  <Layout>
    <Seo title="Releases" />
    <div class='m-auto p-4 flex'>
      <MusicPlayer 
        embedUrl="https://bandcamp.com/EmbeddedPlayer/album=960835734/size=large/bgcol=333333/linkcol=e99708/transparent=true/"
        bandcampUrl="https://tascheandthepsychedelicroses.bandcamp.com/album/gold-rose"
        title="Gold Rose by Tasche And The Psychedelic Roses"
        class="m-auto"
      />
      <MusicPlayer 
        embedUrl="https://bandcamp.com/EmbeddedPlayer/album=2684022796/size=large/bgcol=333333/linkcol=e99708/transparent=true/"
        bandcampUrl="https://tascheandtheangels.bandcamp.com/album/tasche-the-angels-ep"
        title="Tasche &amp; The Angels EP by Tasche &amp; The Angels"
      />
    </div>
  </Layout>
  </div>
)

export default MusicPage