import { Carousel } from "flowbite-react";
import bestSellerOne from "../../assets/images/img.jpg";
import bestSellerTwo from "../../assets/images/img2.jpg";
import bestSellerThree from "../../assets/images/img.jpg";

export default function Banner() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
        <img src={bestSellerOne} />
        <img src={bestSellerTwo} />
        {/* <img src={bestSellerOne} /> */}
        {/* <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." /> */}
        {/* <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." /> */}
      </Carousel>
    </div>
  );
}
