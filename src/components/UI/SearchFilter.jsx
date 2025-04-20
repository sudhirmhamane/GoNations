import React from "react";

const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSelectChange = (event) => {
    setFilter(event.target.value);
  };

  const sortCountries = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortCountry);
  };

  return (
    <section className="flex flex-col sm:flex-row justify-between items-center gap-6 w-full mb-6 px-4">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by country name"
        value={search}
        onChange={handleInputChange}
        className="w-full sm:w-[400px] px-5 py-3 text-white text-lg rounded-lg border border-gray-600 bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div>
        <button onClick={() => sortCountries("asc")}>Asc</button>
      </div>

      <div>
        <button onClick={() => sortCountries("dsc")}>Desc</button>
      </div>

      {/* Region Select */}
      <select
        value={filter}
        onChange={handleSelectChange}
        className="w-full sm:w-[250px] px-5 py-3 text-white text-lg rounded-lg border border-gray-600 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        <option value="all">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </section>
  );
};

export default SearchFilter;
