import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import { useStaticQuery, graphql } from "gatsby"
// import { additionalLineup, allCaps } from '../utils/utils'
const shows = require('../data/showsData.json');

const ShowsPage = () => {
  // const data = useStaticQuery(graphql`
  //   query MyQuery {
  //     allShow {
  //       nodes {
  //         artist {
  //           id
  //           name
  //           url
  //         }
  //         datetime
  //         id
  //         title
  //         url
  //         venue {
  //           name
  //           city
  //           region
  //         }
  //         lineup
  //       }
  //     }
  //   }
  // `)
  const today = new Date()

  return (
    <Layout>
      <Seo title="Shows" />
      <div class='lg:p-6'>
        {
          shows.length ? shows.map((show) => {
            const date = new Date(show.date)
            console.log(new Date(show.date))
            if (date >= today) {
              return (
                <div class="w-9/10 p-2">
                  <div class="md:inline md:p-2">
                    <i>{show.date}</i>
                  </div>
                  <div class="md:inline md:p-2 text-red-400">
                    {show.city}
                  </div>
                  <div class="md:inline md:p-2">
                    <strong>{show.description}</strong>
                  </div>
                </div>
              )
            }
          })
          :
          "No shows"
        }
          {/* {
            shows.length ? shows.map((show) => {
              let otherArtists = additionalLineup(show);
              let options = { weekday: 'short', month: 'short', day: 'numeric' };
              return (
                <div class='lg:grid lg:grid-flow-col lg:ml-48 lg:mr-48 pt-5'>
                  <div class='font-bold text-yellow-300 my-2 lg:my-5'>{allCaps(new Date(show.datetime).toLocaleString("en-US", options))}</div>
                  <div class='lg:my-5'>{show.venue.name}</div>
                  <div class='pl-16 pr-16'></div>
                  <div class='lg:my-5'>{show.venue.city}, {show.venue.region}</div>
                  <button class='bg-yellow-500 hover:bg-yellow-700 font-bold py-2 px-2 rounded w-28 my-3 mx-auto'><a href={show.url}>RSVP</a></button>
                  { otherArtists.length ?
                    <div>{otherArtists}</div>
                    :
                    null
                  }
                </div>
              )
            })
            : <p class='text-md p-4'>No upcoming shows right now! Stay tuned...</p>
          } */}
      </div>
    </Layout>
  )
}

export default ShowsPage
