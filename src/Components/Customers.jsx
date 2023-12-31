import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ImageSlider from './ImageSlider'; // Import the ImageSlider component
import Slider from 'react-slick';

function Customers() {
  const customerImages = [
    "https://www.ombrulla.com/azelit.webp",
    "https://www.ombrulla.com/best-western.webp",
    "https://www.ombrulla.com/burger-king.webp",
    "https://www.ombrulla.com/damac.webp",
    "https://www.ombrulla.com/dubai-festival-city.webp",
    "https://www.ombrulla.com/emirates.webp",
    "https://www.ombrulla.com/planet-fitness.webp",
    "https://www.ombrulla.com/suja.webp",
    "https://www.ombrulla.com/wild-leaf.webp",
  ];

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000, // Change the delay as needed (in milliseconds)
  };

  return (
    <div className="h-fit xl:mx-24 xl:mb-[200px] mb-[50px] xl:mt-0 mt-[470px]">
      <div className="flex justify-center items-center">
        <div className="flex">
          <div
            style={{ width: "8px", height: "8px", backgroundColor: "blue" }}
            className="m-2 shadow"
          ></div>
          <h1 className="font-medium">OUR CUSTOMERS</h1>
          <div
            style={{ width: "8px", height: "8px", backgroundColor: "blue" }}
            className="m-2 shadow"
          ></div>
        </div>
      </div>
      <div className="text-center">
        <h1 className="font-medium text-[40px]">They Trust Us</h1>
      </div>
      <Slider {...settings}>
        {customerImages.map((imageUrl, index) => (
          <div key={index} className="p-4">
           <img
  src={imageUrl}
  alt={`Customer ${index + 1}`}
  style={{ width: '70vw' }} // Set width to 50px for mobile
  className="hidden sm:inline-block w-100" // Set width to 100px for desktop
/>

          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Customers;
