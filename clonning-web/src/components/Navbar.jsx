import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          <img src="https://www.12tails-th.com/assets/img/static/small_logo.png" />
        </Link>
        <Link to="#" className="download">
          <img src="https://www.12tails-th.com/assets/img/static/download.png" />
        </Link>
      </div>

      <div className="navbar-right">
        <Link to="/payment" className="payment">
          <img src="https://www.12tails-th.com/assets/img/static/truemoney.png" />
        </Link>
        <Link to="/login" className="login-bar">
          เข้าสู่ระบบ
        </Link>
        <Link to="register" className="register-bar">
          ลงทะเบียน
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
