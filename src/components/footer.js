import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <footer className="p-5 mx-auto text-center text-xs">
      <div className="inline-flex space-x-4">
        <SocialIcon url="https://www.facebook.com/taschedelarocha/" network="facebook" style={{ height: 25, width: 25 }} bgColor="#FDE68A" />
        <SocialIcon url="mailto:taschedelarocha@gmail.com" network="email" style={{ height: 25, width: 25 }} bgColor="#FDE68A" />
      </div>
    </footer>
  );
}

export default Footer;
