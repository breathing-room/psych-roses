import React from "react"
import { SocialIcon } from "react-social-icons";

const Footer = () => (
  <footer class='my-5 mx-auto text-center text-xs'>
    <div class='inline-flex space-x-4'>
      <SocialIcon url="https://www.facebook.com/taschedelarocha/" network="facebook" style={{ height: 25, width: 25 }} bgColor="#FDE68A"/>
      <SocialIcon url="mailto:taschedelarocha@gmail.com" network="email" style={{ height: 25, width: 25 }} bgColor="#FDE68A"/>
    </div>
    <div class='pt-2'>© {new Date().getFullYear()} Breathing Room Development</div>
  </footer>
)

export default Footer
