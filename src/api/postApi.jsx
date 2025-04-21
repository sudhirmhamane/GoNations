import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

// Fetch all countries — Correct
export const getCountryData = () => {
  return api.get("/all?fields=name,population,capital,flags,region");
};

// Fetch individual country — FIXED
export const getCountryIndivData = (name) => {
  return api.get(
    `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
  );
};

