import { APP_LOGO } from "../utils/constants";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img className="app-logo" src={APP_LOGO}></img>
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;
