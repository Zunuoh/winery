import React from "react";
import axios from "axios";
import Header from "./Header";
import wine from "../images/cwine.jpeg";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div>
      <Header />

      <div className="wineBanner">
        <div className="bannerTextWrapper">
          <div className="headerTitle">Dolomites</div>
          <div className="bannerTitle">Best of wine store</div>
          <div className="bannerText">
            Wizym offers expensive collections of over 2,000 unique wines from
            prestigious brands to family-owned wineries
          </div>
          <button className="button">
            <Link
              to="/productscreen"
              className="buttonLinks"
            >
              Read more
            </Link>
          </button>
        </div>
      </div>

      <div className="welcomeMessageDiv">
        <div>
          <img src={wine} alt="" className="welcomeImage" />
        </div>

        <div className="welcomeText">
          <h4 className='dolomitesHeader'>Welcome To Dolomites</h4>
          <div className="loremText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
