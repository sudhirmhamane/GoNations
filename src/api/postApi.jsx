import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

// Fetch all countries — Correct
export const getCountryData = () => {
  return api.get("/all?fields=name,population,capital,flags,region");
};

// Fetch individual country — Fixed with URL encoding and error handling
export const getCountryIndivData = async (name) => {
  try {
    const response = await api.get(
      `/name/${encodeURIComponent(name)}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
    );
    return response;
  } catch (error) {
    console.error("Error fetching individual country data:", error.response?.data || error.message);
    throw error;
  }
};
