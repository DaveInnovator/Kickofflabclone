import React from "react";
import "./Hero.css";
import { assets } from "../../Assets/Assets";
const Hero = () => {
  return (
    <div className="Hero container">
      <div className="header">
        <img src={assets.logo} alt="/" className="logo" />
        <h1>
          Request and spend money seamlessly <br></br>with our Fintech app
        </h1>
      </div>
      <div className="contents mt-5 row">
        <div className="inputs col-7 col-sm-5">
          <p>
            All you need is their number to request or send<br></br> funds. Join
            our Fintech app's waitlist now for<br></br> a chance to win $200 in
            credit!
          </p>
          
          <form>
            <input type="text" placeholder="Enter your phone number" />
            <div className="text-with-lines">
            <p>or</p></div>
            <input type="text" placeholder="Enter your email" />
            <button className="btn mt-4">Join the waitlist</button>
          </form>
        </div>
        <div className="images col-7 col-sm-4">
            <img src={assets.Hero_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
