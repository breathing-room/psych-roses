export const additionalLineup = (show) => show.lineup.filter((musician) => musician !== 'Joanna Tomassoni');

export const allCaps = (string) => [...string]
  .map((char) => char.toUpperCase())
  .join('');
