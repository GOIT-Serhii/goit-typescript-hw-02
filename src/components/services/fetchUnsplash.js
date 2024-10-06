import axios from "axios";

const KEY = "BlqfZrWoM_3fMKISicNxFz8q_mWk0T21x4nZ2b2vSl8";
axios.defaults.baseURL = `https://api.unsplash.com/`;

export const fetchPhotos = async (topic, page) => {
  const response = await axios.get("/search/photos", {
    params: {
      query: topic,
      page,
      per_page: 12,
      client_id: KEY,
    },
  });

  return response.data;
};
