import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the World, One Country at a Time.
          </h1>
          <p className="paragraph">
            Discover fascinating facts, stunning visuals, and key insights about countries around the globe. Dive into cultures, capitals, and everything in between — your world exploration starts here.
          </p>

          <button
            onClick={() => navigate("/country")}
            className="btn btn-darken btn-inline bg-white-box"
          >
            Start Exploring <FaLongArrowAltRight />
          </button>
        </div>

        <div className="hero-image">
          <img src="./images/worldimg.png" alt="" className="banner-image" />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
