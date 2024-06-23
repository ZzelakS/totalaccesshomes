import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestServices = () => {
  return (
    <div className="w-full pb-20 text-[#010066]">
      <Heading heading="Our Services" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-3 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Companionship"
          // price="35.00"
          color="We provide emotional care and assistance to senior citizens and disabled adults. This is bacause we recognize compassion as an essential element of effective care."
          // badge={true}
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="Medication Reminders"
          // price="180.00"
          color="We ensure timely and correct medication while also encouraging healthy eating habits and all-round wellbeing. Our care-givers pay attention to every detail."
          badge={false}
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Errands and Escort Services"
          // price="25.00"
          color="Mixed"
          // badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Light Housekeeping"
          // price="220.00"
          color="You don't have to worry about an untidy space as our professionals can assist in basic clean up and organizing stuff around the house."
          badge={false}
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Retirement Home"
          // price="35.00"
          color="Blank and White"
          // badge={true}
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="Care for the terminally ill"
          // price="180.00"
          color="Our patient-centered approach caters to every need of our patients, providing the highest level of comfort and quality of life; enabling them to resolve individual issues."
          badge={false}
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Reading to the Visually Impaired"
          // price="25.00"
          color="Mixed"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Continuing Care"
          // price="220.00"
          color="Black"
          badge={false}
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Personal Hygiene"
          price="220.00"
          color="Black"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
      </div>
    </div>
  );
};

export default BestServices;
