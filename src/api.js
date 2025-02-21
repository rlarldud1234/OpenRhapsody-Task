import axios from "axios";
const getRequest = () => {
  const request = axios.create({
    timeout: 10000,
    baseURL: "https://api-v2.adrop.io",
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjAxSEQ1UTNaOEdYTk5XRjQ2NENOV0NNQlM0OjAxSEZCTU1HRkZXUU5OMk5aVkpCNU5GUFZaIiwia2V5VHlwZSI6MSwiaWF0IjoxNzAwMTI0MDQ5LCJleHAiOjI1MzQwMjEyODAwMH0.J877rLr4xvUWqcEzsesEp_KNzO8XnHaJeESPXdABubQ",
    },
  });

  return request;
};

export const fetchAd = async ({ unit }) => {
  const params = {
    unit: unit,
    uid: "asdasdasd",
    pf: "web",
    lcl: "ko_KR",
  };
  const response = await getRequest().get("/request", { params });

  return response.data;
};
