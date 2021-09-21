const fetch = require("node-fetch")

exports.onPreInit = () => console.log("Loaded gatsby-starter-plugin")

const NODE_TYPE = `Show`

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
}) => {
  const { createNode } = actions

  const shows = await fetch("https://rest.bandsintown.com/artists/joannatomassoni/events/?app_id=5639901e1129574969f94455b77d147c")
    .then((response) => response.json());
  
  shows.forEach(show =>
    createNode({
      ...show,
      id: createNodeId(`${NODE_TYPE}-${show.id}`),
      parent: null,
      children: [],
      internal: {
        type: NODE_TYPE,
        content: JSON.stringify(show),
        contentDigest: createContentDigest(show),
      },
    })
  )

  return
}