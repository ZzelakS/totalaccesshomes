import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
  bannerImgOne,
  bannerImgTwo,
  bannerImgThree,
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../assets/images";
import Image from "../designLayouts/Image";

const CustomSlide = ({ Subtext, imgSrc, text, buttonLink, buttonText }) => (
  <div
    className="bg-contain bg-center md:bg-no-repeat sm:bg-no-repeat"
    style={{
      position: "relative",
      backgroundImage: `url(${bestSellerOne})`, // Gray background color
      display: "flex",
      justifyContent: "center",
      alignItems: "center", // Center vertically
      width: "auto",
      height: "600px",
      // marginLeft: "25px",
      // padding: "15px",
    }}
  >
    <div
      style={{
        // maxWidth: "auto", // Adjust the maxWidth as needed
        // marginRight: "200px", // Add margin between text/button and image
        marginTop: "350px",
      }}
    >
      <h1
        style={{
          marginBottom: "15px",
          fontSize: "1.5rem", // Adjust the font size as needed
          color: "#010066", // Blue color
          fontWeight: "700",
        }}
      >
        {text}
      </h1>
      <p
        style={{
          marginBottom: "25px",
          fontSize: "1.0rem", // Adjust the font size as needed
          color: "#010066", // Gray color
        }}
      >
        {Subtext}
      </p>

      <Link to="/about">
        <button className="bg-[#010066] rounded-2xl text-white text-lg font-bodyFont w-[185px] h-[50px] hover:bg-[7eb6ff] duration-300 font-bold">
          {buttonText}
        </button>
      </Link>
    </div>
    {/* <div style={{ marginLeft: "10px" }}>
      {/* <Image imgSrc={imgSrc} /> */}
    {/* </div> */}
  </div>
);

const Banner = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    adaptiveWidth: true,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "7%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "8px 0",
                cursor: "pointer",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: false,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
                  : {
                      width: "25px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };

  const slides = [
    {
      imgSrc: bannerImgOne,
      // text: "Dependability, Trustworthiness and Quality Care",
      // Subtext:
      //   "We provide Experienced, Professional, Dependable and Compassionate Care Givers",
      buttonLink: "/offer",
      buttonText: "Contact Us",
    },
    {
      imgSrc: bannerImgOne,
      // text: "Total Access Home Healthcare",
      // Subtext:
      //   "Care Givers who understand that dignified care is a priority for clients.",
      buttonLink: "/offer",
      buttonText: "Contact Us",
    },
    {
      imgSrc: bannerImgOne,
      // text: "First Class Retirement Living",
      // Subtext:
      //   "Explore our premium private care options for your aged loved ones",
      buttonLink: "/offer",
      buttonText: "Contact Us",
    },

    // Add more slides as needed
  ];
  return (
    <div className="w-full bg-white">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <CustomSlide key={index} {...slide} />
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
