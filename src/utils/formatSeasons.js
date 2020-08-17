export const formatSeasons = (allEpisodes) => {
  const seasons = {};
  allEpisodes.forEach((e) => {
    if (!seasons.hasOwnProperty(`Season ${e.season}`)) {
      seasons[`Season ${e.season}`] = [];
      console.log('e.seasons', e.season)
      console.log('e', e)
    }
    seasons[`Season ${e.season}`].push(e);
    console.log('e.seasons', e.season)
    console.log('e', e)
  });
  console.log('seasons', seasons)
  return seasons;
};
