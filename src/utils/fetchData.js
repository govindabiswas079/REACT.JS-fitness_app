export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': '2a9f883453msha39c0a2a7519df6p1cf416jsn71a3bce9a381',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '2a9f883453msha39c0a2a7519df6p1cf416jsn71a3bce9a381',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};

// https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb
// https://rapidapi.com/h0p3rwe/api/youtube-search-and-download
