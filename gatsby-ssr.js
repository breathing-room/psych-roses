const React = require("react")

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    React.createElement("link", {
      key: "mailchimp-css",
      rel: "stylesheet",
      href: "https://cdn-images.mailchimp.com/embedcode/classic-071822.css",
      type: "text/css",
    }),
  ])
}
