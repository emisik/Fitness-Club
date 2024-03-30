export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "36000d3c25mshc4bd542e0a1a321p1c9bf8jsn8ba74d93affe",
    "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
