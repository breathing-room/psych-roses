export const additionalLineup = (show) => {
  return show.lineup.filter((musician) => musician !== "Joanna Tomassoni")
}

export const allCaps = (string) => {
  return [...string]
    .map((char) => char.toUpperCase())
    .join('')
}