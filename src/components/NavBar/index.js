import "./css.css";
import logo from "../../images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import EastIcon from "@mui/icons-material/East";
import { useRef } from "react";

export const NavBarMobile = ({ handleToogle }) => {
  return (
    <div className="container-nav-mobile">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <div>
          <button className="btn-icon" onClick={handleToogle}>
            <MenuIcon sx={{ color: "white" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export const MenuLateral = ({ handleToogle, navref }) => {
  return (
    <div className="menu-lateral" ref={navref}>
      <div className="icon-arrow">
        <button className="btn-icon" onClick={handleToogle}>
          <EastIcon fontSize="large" />
        </button>
      </div>
      <div>
        <ul>
          <li>Buy/Sell</li>
          <li>Grow</li>
          <li>Markets</li>
          <li>Business</li>
          <li>Support</li>
        </ul>
      </div>
    </div>
  );
};

const NavBar = ({ children }) => {
  const navref = useRef();
  const handleToogle = () => {
    navref.current.classList.toggle("responsive_nav");
  };
  return (
    <div>
      <MenuLateral handleToogle={handleToogle} navref={navref} />
      <NavBarMobile handleToogle={handleToogle} />
      <div className="container-nav">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="list">
          <ul>
            <li>Buy/Sell</li>
            <li>Grow</li>
            <li>Markets</li>
            <li>Business</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="box-buttons">
          <button className="btn btn-border ">Sign In</button>
          <button className="btn btn-degraded">Sign Up</button>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default NavBar;
