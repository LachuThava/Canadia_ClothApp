import React from 'react'
import Login from './Login';
import NavbarComponent from "../Components/Navbar";
import About from '../Pages/About';
import SmartSlider from "react-smart-slider";

import Footer from './Footer';
import Category from './Category';
const Home = () => {


  const slidesArray = [
    {
      title: "Caption 1",
      url: "https://i.imgur.com/7u8i7L1.jpg"
    },
    {
      title: "Caption 2",
      url: "https://i.imgur.com/E8gkF2f.jpg"
    },
    {
      title: "Caption 3",
      url: "https://i.imgur.com/t2a1zLi.jpg",

      // Set this key, if you want to update style for specific slide caption
      customCaptionStyle: {
        color: "#7fffd4",
        fontWeight: "bold"
      }
    }
  ];

  return (
    <div className='overflow-x-hidden h-screen '>
      <NavbarComponent />
      <SmartSlider
        slides={slidesArray}
        autoSlide={true}
        buttonShape="square" // round or square
      />
      <br />
      <Category />
      <About />
      <Footer />
      </div>
  )
}

export default Home