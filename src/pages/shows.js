import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
const shows = require("../data/showsData.json")

const residency = {
  date: "July 20, 2023 - August 20, 2023",
  city: "Verplanck, NY",
  description: "Residency at KinoSaito",
  tickets_url: "https://www.kinosaito.org/performances",
}

function ShowsPage() {
  const today = new Date()
  const upcomingShows = shows.filter(show => {
    const date = new Date(show.date)
    return date >= today
  })

  upcomingShows.push(residency)

  console.log(upcomingShows)
  return (
    <Layout>
      <Seo title="Tasche and the Psychedelic Roses" pathname="/shows" />
      <div class="lg:p-6">
        <p class="text-4xl font-bold header text-red-300 mb-9">
          Upcoming Shows
        </p>
        {upcomingShows.length ? (
          upcomingShows.map(show => {
            const date = new Date(show.date)
            if (!(date <= today)) {
              return (
                <div class="w-9/10 p-2">
                  <div class="md:inline md:p-2">
                    <i>{show.date}</i>
                  </div>
                  <div class="md:inline md:p-2 text-red-300">{show.city}</div>
                  <div class="md:inline md:p-2 hover:text-red-400">
                    {show.tickets_url ? (
                      <a
                        class="bootstrap-link-override"
                        href={show.tickets_url}
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <strong>{show.description}</strong>
                      </a>
                    ) : (
                      <strong>{show.description}</strong>
                    )}
                  </div>
                </div>
              )
            }
          })
        ) : (
          <p class="m-4">No shows scheduled... stay tuned!</p>
        )}
      </div>
    </Layout>
  )
}

export default ShowsPage
