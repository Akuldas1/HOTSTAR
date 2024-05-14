// export const fetchMovies = async (genre) => {
//   try {
//     const resp = await fetch(`https://api.sampleapis.com/movies/${genre}`);
//     const json = await resp.json();
//     return json;
//   } catch (error) {
//     console.error(`Error fetching ${genre} movies:`, error);
//     return [];
//   }
// };

import axios from "axios"

export const fetchMovies = async (genre) => {
  try {
    const resp = await axios.get(`https://api.sampleapis.com/movies/${genre}`);
    return resp.data
  } catch (error) {
    console.error(`Error fetching ${genre} movies:`, error);
    return [];
  }
};