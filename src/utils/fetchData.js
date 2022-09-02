export const exerciseOptions = {
  method: "GET",
  //   url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export const youtubeOptions = {
  method: "GET",
  // url: 'https://youtube-search-and-download.p.rapidapi.com/playlist',
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
// REACT_APP_RAPID_API_KEY=f81d5c7777msh2d926f7bd8e2c22p1af665jsn76a239cf9aaa

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
