import React from "react";
import { Link } from "react-router-dom";
import Img from "../../Assets/pentagon.png";
import Cart from "../../Assets/cartt.png";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="Navbar">
        <img src={Img} alt="" className="logo" />
        <input
          type="text"
          placeholder="search"
          className="search"
          name="text"
        />
        <button type="button" className="Buttonn">
          your orders
        </button>
        <img src={Cart} alt="" className="cart" />
        <button type="button" className="Button">
          sign in here
        </button>
      </div>

      <div className="Container"></div>
    </div>
  );
}

export default Home;
