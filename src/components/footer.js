import React from "react"

const Footer = () => (
  <footer class='my-5 mx-auto text-center text-xs'>
    <div class='inline-flex space-x-4'>
      <div>© {new Date().getFullYear()}</div>
      <div>SP</div>
      <div>FB</div>
    </div>
  </footer>
)

export default Footer
