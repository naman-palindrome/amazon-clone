import React from "react";
import logo from "./static/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      <Link to="/">
        <img className="header_logo" src={logo} />
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"} className="header_link">
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLinkOne">
              Hello
              {user ? user.email : " Guest"}
            </span>
            <span className="header_optionLinkTwo">
              {user ? "SIGN OUT" : "SIGN IN"}{" "}
            </span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLinkOne">Returns</span>
            <span className="header_optionLinkTwo"> &Orders </span>
          </div>
        </Link>

        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLinkOne">Your</span>
            <span className="header_optionLinkTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span>{basket.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
