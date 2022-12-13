const fetch = require("node-fetch")

exports.onPreInit = () => console.log("Loaded gatsby-starter-plugin")

const NODE_TYPE = `Show`

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type Show implements Node {
      artist: Artist,
      datetime: Date,
      id: ID,
      title: String,
      url: String,
      venue: Venue,
      lineup: [String],
    },

    type Artist implements Node {
      id: ID,
      name: String,
      url: String,
    }

    type Venue implements Node {
      name: String,
      city: String,
      region: String,
    }
  `
  createTypes(typeDefs)
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bootstrap\/dist\/js\/bootstrap.bundle.min/,
            use: loaders.null(),
          },
          {
            test: /bootstrap\/dist\/css\/bootstrap.min.css/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
}) => {
  const { createNode } = actions

  const shows = await fetch("https://rest.bandsintown.com/artists/id_13708959/events/?app_id=5639901e1129574969f94455b77d147c&trigger=rsvp_going")
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