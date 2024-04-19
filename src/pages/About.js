import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Welcome to Pizzeria! We are passionate about serving delicious, handcrafted pizzas made with the finest ingredients. 
        Our story began with a love for authentic Italian flavors and a vision to create a warm, inviting space where friends 
        and families can gather to enjoy great food and good company. At [Pizzeria Name], we take pride in our commitment to quality, from our freshly made dough to our c
          arefully selected toppings and savory sauces. Whether you're craving a classic Margherita pizza or a unique specialty pie, our menu offers a variety of options to satisfy your appetite. 
            We strive to provide exceptional service and a memorable dining experience for every guest who walks through our doors. 
            Thank you for choosing [Pizzeria Name], and we look forward to sharing our passion for great pizza with you.
        </p>
      </div>
    </div>
  );
}

export default About;
