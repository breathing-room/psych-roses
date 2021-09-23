export const additionalLineup = (show) => {
  return show.lineup.filter((musician) => musician !== "Joanna Tomassoni")
}