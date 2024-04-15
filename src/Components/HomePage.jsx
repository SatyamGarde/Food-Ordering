import React, { useRef } from 'react';
import { LOGO_URL } from "../Utils/constants";

const HomePage = () => {
  const homepageRef = useRef(null);

  const scrollToHeight = () => {
    const targetHeight = 850; // Adjust this value to the desired height
    window.scrollTo({ top: targetHeight, behavior: 'smooth' });
  };
  const desiredWidth = "calc(159vh)";
  return (
    <div className='homepage' style={{width: desiredWidth }} ref={homepageRef}>
      <div className='text'>
        <div className='content'>
          <h1>Cuisine Crafted with Loving Hands</h1>
          <p>
            Step into a World of Delicious Delights, Crafted with Care and Love.
            From Our Kitchen to Your Table, Every Dish is a Culinary Masterpiece.
            Explore Our Menu, Delight in the Tastes, and Let Us Transport You to
            a Realm of Gastronomic Joy." 🍽️🌟🍔
          </p>
          <button className="explore-btn" onClick={scrollToHeight}>Explore Now</button>
        </div>
      </div>
      <div className="image">
        <img className="images" src={LOGO_URL} alt="Logo" />
      </div>
    </div>
  );
};

export default HomePage;
