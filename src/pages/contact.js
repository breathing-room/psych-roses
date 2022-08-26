import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { SocialIcon } from 'react-social-icons';

function ContactPage() {
  return (
    <Layout>
    <Seo title="Tasche and the Psychedelic Roses" pathname="/contact" />
    <div className="w-9/12 mx-auto">
      <p class="text-4xl font-bold header text-red-300 mb-9">Booking/Contact</p>

      <div className="bg-gray-800 md:my-10 md:mx-60 p-5 md:p-2">
        <p className="text-sm text-center md:text-lg md:m-5 md:mx-16 hover:text-red-300">
          <a href="mailto:taschedelarochamusic@gmail.com">taschedelarochamusic@gmail.com</a>
        </p>
      </div>

      <div>
        <SocialIcon bgColor="#FEF3C7" fgColor="#F87171" style={{ margin: '1rem', width: '35px', height: '35px' }} url="https://open.spotify.com/artist/0Im7zcYdMp1snHs6JmrB9M?si=RnqkTi0gSJuGTaSAosUdJQ" />
        <SocialIcon bgColor="#FEF3C7" fgColor="#F87171" style={{ margin: '1rem', width: '35px', height: '35px' }} url="https://www.facebook.com/taschedelarocha" />
        <SocialIcon bgColor="#FEF3C7" fgColor="#F87171" style={{ margin: '1rem', width: '35px', height: '35px' }} url="https://www.instagram.com/tascheandthepsychedelicroses/" />
        <SocialIcon bgColor="#FEF3C7" fgColor="#F87171" style={{ margin: '1rem', width: '35px', height: '35px' }} url="mailto:taschedelarochamusic@gmail.com" />
      </div>
    </div>
  </Layout>
  );
}

export default ContactPage;
