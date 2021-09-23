import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { additionalLineup } from '../utils/additionalLineup'

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr) 3fr repeat(2, 1fr)',
  gridTemplateRows: 'repeat(5, 1fr)',
  gridColumnGap: '0px',
  gridRowGap: '0px',
}

const ShowsPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allShow {
        nodes {
          artist {
            id
            name
            url
          }
          datetime
          id
          title
          url
          venue {
            name
            city
            region
          }
          lineup
        }
      }
    }
  `)
  
  const shows = data.allShow.nodes
  
  return (
    <Layout>
      <Seo title="Shows" />
      <h2 class='text-3xl m-4 p-4'>Upcoming shows</h2>
      <div class='m-4 p-4'>
          {
            shows.map((show) => {
              console.log(show)
              let otherArtists = additionalLineup(show);
              let options = { weekday: 'short', month: 'short', day: 'numeric' };
              return (
                // <div style={grid} class='ml-48 mr-48 border-t p-5'>
                <div class='grid lg:grid-flow-col lg:ml-48 lg:mr-48 border-t p-5'>
                  <div class='font-semibold'>{new Date(show.datetime).toLocaleString("en-US", options)}</div>
                  <div>{show.venue.name}</div>
                  <div class='pl-16 pr-16'></div>
                  <div>{show.venue.city}, {show.venue.region}</div>
                  <div><a href={show.url}>Link</a></div>
                  { otherArtists.length ?
                    <div>{otherArtists}</div>
                    :
                    null
                  }
                </div>
              )
            })
          }
      </div>
    </Layout>
  )
}

export default ShowsPage
