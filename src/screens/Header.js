import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerSize">
      <div className="headerTitle">Dolomites</div>

      <div className="headerBody">
        <NavLink to="/" className="headerNavs">
          HOME
        </NavLink>
        <NavLink to="/productscreen" className="headerNavs">
          FEATURES
        </NavLink>
        <NavLink to="/productscreen" className="headerNavs">
          PRODUCT
        </NavLink>
        <NavLink to="/productscreen" className="headerNavs">
          BLOG
        </NavLink>
        <NavLink to="/productscreen" className="headerNavs">
          CONTACT US
        </NavLink>
      </div>

      <div>
        <input
          className="headerSearchInput"
          type="search"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default Header;
