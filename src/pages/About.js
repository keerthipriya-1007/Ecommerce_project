import React from "react";
import "../Styles/About.css";
import Navbar from "../components/Navbar";
function About() {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <h1 className="about-title">Welcome to ClickShop!!</h1>
        <div className="about-content">
          <p>
            We're your one-stop shop for a wide variety of high-quality products
            at competitive prices. Whether you're looking for the latest trends
            in fashion, essential home goods, electronics, or anything in
            between, we have something for everyone. We offer a curated
            selection of products from trusted brands, ensuring you'll find
            exactly what you need.
          </p>
          <p>
            Our commitment to customer satisfaction is paramount. We provide
            exceptional customer service, secure transactions, and fast and
            reliable shipping to get your purchases to you quickly and safely.
            We're passionate about making your online shopping experience
            convenient, enjoyable, and trustworthy. So why wait? Start exploring
            our vast selection today and discover the ease and convenience of
            shopping online with ClickShop!
          </p>
        </div>

        <div className="availability-section">
          <h3>Countries We Serve</h3>
          <ul>
            <li>Australia</li>
            <li>Brazil</li>
            <li>Canada</li>
            <li>China</li>
            <li>France</li>
            <li>Germany</li>
            <li>Italy</li>
            <li>Japan</li>
            <li>Mexico</li>
            <li>Netherlands</li>
            <li>Poland</li>
            <li>Singapore</li>
            <li>Spain</li>
            <li>Turkey</li>
            <li>United Arab Emirates</li>
            <li>United Kingdom</li>
            <li>United States</li>
          </ul>
        </div>
      </div>
      <footer className="footer">
        <div className="legal-links">
          <a href="#">Conditions of Use & Sale</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Interest-Based Ads</a>
        </div>
        <p>&copy; 1996-2024, ClickShop or its affiliates</p>
      </footer>
    </>
  );
}

export default About;
