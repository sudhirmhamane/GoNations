import React, { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndivData } from "../../api/postApi";
import Loader from "../UI/Loader";

const CountryDetails = () => {
  const { id } = useParams();

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryIndivData(id);
        if (res.status === 200 && res.data.length > 0) {
          setCountry(res.data[0]);
        }
      } catch (error) {
        console.error("Error fetching country:", error.message);
        setCountry(null);
      }
    });
  }, [id]);
  

  if (isPending || !country) return <Loader />;

  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-20 py-10 bg-gray-900 text-white overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto bg-gray-800 p-10 rounded-2xl shadow-xl">
        <div className="grid md:grid-cols-2 gap-40 items-center">
          <img
            src={country.flags.svg}
            alt={country.flags.alt}
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
          <div className="space-y-4">
            <h2 className="text-6xl font-bold text-white">
              {country.name.common}
            </h2>
            <div className="space-y-2 text-base leading-relaxed">
              <p>
                <span className="font-semibold text-gray-300">Native Names: </span>
                {country.name.nativeName &&
                  Object.keys(country.name.nativeName)
                    .map((key) => country.name.nativeName[key].common)
                    .join(", ")}
              </p>
              <p>
                <span className="font-bold text-gray-300">Population: </span>
                {country.population?.toLocaleString() || "N/A"}
              </p>
              <p>
                <span className="font-bold text-gray-300">Region: </span>
                {country.region}
              </p>
              <p>
                <span className="font-bold text-gray-300">Sub Region: </span>
                {country.subregion}
              </p>
              <p>
                <span className="font-bold text-gray-300">Capital: </span>
                {country.capital?.join(", ")}
              </p>
              <p>
                <span className="font-semibold text-gray-300">Top Level Domain: </span>
                {country.tld?.[0]}
              </p>
              <p>
                <span className="font-bold text-gray-300">Currencies: </span>
                {country.currencies &&
                  Object.keys(country.currencies)
                    .map((cur) => country.currencies[cur].name)
                    .join(", ")}
              </p>
              <p>
                <span className="font-bold text-gray-300">Languages: </span>
                {country.languages &&
                  Object.keys(country.languages)
                    .map((key) => country.languages[key])
                    .join(", ")}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <NavLink to="/country">
            <button>
              Go Back
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
