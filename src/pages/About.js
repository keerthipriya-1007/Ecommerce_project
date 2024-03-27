// import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
 
import "../Styles/About.css";
 
function About() {
  return (
    <>
      <Navbar />
     
        <h1 className="about-title">Welcome to ClickShop!</h1>
        <div class="row">
  <div class="col-sm-6 ">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Capsule Coallections</h5>
        <p class="card-text">If there’s an occasion to express your personal style, we’ve got a capsule collection to match. Shopping for a specific mood, event or style story has never been easier.</p>
       
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">The Indie Experience</h5>
        <p class="card-text">Our Indie styles are literally art you can wear. They are carefully handpicked, so that only the most authentic, handcrafted pieces by artisans across the country and globe make the cut.</p>
       
      </div>
    </div>
  </div>
 
</div>
<div class="row">
  <div class="col-sm-6 ">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Style Tribes</h5>
        <p class="card-text">A high-fashion editorial where we feature the internet’s coolest cats. It’s where you get to read the stories of these influencers and shop their stunning shoot looks..</p>
       
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Exclusive International Labels</h5>
        <p class="card-text">We bring you the trendiest and most exclusive brands from around the world to your wardrobe. Forget scouring the net for what’s hot globally, we’ve got you covered.</p>
       
      </div>
    </div>
  </div>
 
</div>
        {/* <div className="card-container">
          <div className="card">
            <h2>Discover Trendy Fashion</h2>
            <p>Explore the latest fashion trends from top brands.</p>
          </div>
         
          <div className="card">
            <h2>Upgrade Your Electronics</h2>
            <p>Find cutting-edge electronics for your lifestyle.</p>
          </div>
         
          <div className="card">
            <h2>Essential Home Goods</h2>
            <p>Shop for high-quality home goods for every room.</p>
          </div>
        </div> */}
 
 
        <div className="about-content">
          <p>
            We are your ultimate destination for a diverse range of high-quality products offered at competitive prices. Whether you are in search of the latest fashion trends, essential home goods, cutting-edge electronics, or anything in between, ClickShop has something for everyone. Explore our carefully curated selection of products from renowned brands to find exactly what you need.
          </p>
          <p>
            At ClickShop, customer satisfaction is our top priority. We are committed to providing exceptional customer service, secure transactions, and swift and reliable shipping to ensure your purchases reach you promptly and securely. Our goal is to make your online shopping experience convenient, enjoyable, and trustworthy. Don't hesitate – start browsing our extensive collection today and experience the ease and convenience of online shopping with ClickShop!
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
            {/* <li>Germany</li>
            <li>Italy</li>
            <li>Japan</li>
            <li>Mexico</li>
            <li>Netherlands</li> */}
          </ul>
        </div>
 
        <Footer />
   
    </>
  );
 
}
 
export default About;
 