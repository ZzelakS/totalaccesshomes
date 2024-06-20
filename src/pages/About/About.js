import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Total Access Home Healthcare </span>{" "}
          is one of the world's leading care giver healthcare outlets and is internationally
          recognized for providing Experienced, Professional, Dependable and Compassionate Care Givers
        </h1>
        {/* <Link to="/contact">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Contact Us
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default About;
