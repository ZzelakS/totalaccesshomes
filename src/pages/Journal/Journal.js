import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
// import BestSellers from "../../components/home/BestSellers/BestSellers";
import BestServices from "../../components/home/BestSellers/BestServices";

const Journal = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container text-[#010066] mx-auto px-4 bg-[#CBECF8]">
      <Breadcrumbs title="Services" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-[#010066] mb-2">
          <span className="font-semibold text-lg">Total Access Home Healthcare</span>{" "}
        </h1>
        <BestServices/>
        {/* <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button> */}
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Journal;
