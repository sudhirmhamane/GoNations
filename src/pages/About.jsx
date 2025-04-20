import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
          About Us
        </h2>
        <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Welcome to <span className="font-semibold text-yellow-400">WorldTour</span> — your gateway to explore the world, one country at a time. Discover fascinating facts about the planet, including its countries, continents, oceans, rivers, deserts, and much more.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Countries Card */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold text-yellow-400 mb-4">Countries</h3>
            <p className="text-2xl text-gray-300">195</p>
            <p className="text-gray-500 text-lg">Countries around the world to explore!</p>
          </div>

          {/* Continents Card */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold text-yellow-400 mb-4">Continents</h3>
            <p className="text-2xl text-gray-300">7</p>
            <p className="text-gray-500 text-lg">Continents that make up our planet's geography.</p>
          </div>

          {/* Oceans Card */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold text-yellow-400 mb-4">Oceans</h3>
            <p className="text-2xl text-gray-300">5</p>
            <p className="text-gray-500 text-lg">The vast oceans that cover the Earth’s surface.</p>
          </div>

          {/* Rivers Card */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold text-yellow-400 mb-4">Rivers</h3>
            <p className="text-2xl text-gray-300">700+</p>
            <p className="text-gray-500 text-lg">Major rivers that flow through the continents.</p>
          </div>

          {/* Deserts Card */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold text-yellow-400 mb-4">Deserts</h3>
            <p className="text-2xl text-gray-300">6</p>
            <p className="text-gray-500 text-lg">The most famous deserts that cover large areas of land.</p>
          </div>

          {/* Languages Card */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold text-yellow-400 mb-4">Languages</h3>
            <p className="text-2xl text-gray-300">7000+</p>
            <p className="text-gray-500 text-lg">Languages spoken across the globe.</p>
          </div>

          {/* Population Card */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold text-yellow-400 mb-4">Population</h3>
            <p className="text-2xl text-gray-300">8 Billion+</p>
            <p className="text-gray-500 text-lg">The estimated number of people living on Earth.</p>
          </div>

          {/* Time Zones Card */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold text-yellow-400 mb-4">Time Zones</h3>
            <p className="text-2xl text-gray-300">24</p>
            <p className="text-gray-500 text-lg">Time zones across the world that define our clocks.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
