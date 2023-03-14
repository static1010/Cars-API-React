import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: " Client-ID KCSSG8kVwHwPMRZ6OGVP6QwTf7pWM-DXSxx1D57FUvs",
    },
    params: {
      query: term,
    },
  });
  console.log(response);
  return response.data.results;
};

export default searchImages;
