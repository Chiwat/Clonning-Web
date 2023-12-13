import { useEffect, useState } from "react";
import "./Login.css";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

const Login = () => {
  const [usernameLogin, setUsernameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [showUsernameIcon, setShowUsernameIcon] = useState(false);
  const [showPasswordIcon, setShowPasswordIcon] = useState(false);
  const [usernameStatus, setUsernameStatus] = useState(false);
  const [passwordStatus, setPasswordStatus] = useState(false);

  const changeIcon = () => {
    if (usernameLogin.length > 0) {
      setShowUsernameIcon(true);
      setUsernameStatus(true);
    } else {
      setUsernameStatus(false);
    }
    if (passwordLogin.length > 3) {
      setShowPasswordIcon(true);
      if (passwordLogin.length > 4) {
        setPasswordStatus(true);
      } else {
        setPasswordStatus(false);
      }
    }
  };
  const validate = () => {
    return usernameStatus & passwordStatus;
  };

  useEffect(() => {
    changeIcon();
  }, [usernameLogin, passwordLogin]);
  return (
    <section className="section login">
      <div className="header">
        <div className="img-header">
          <img
            src="https://www.12tails-th.com/assets/img/static/whead-left.png"
            className="title-left"
          />
          <img src="https://www.12tails-th.com/assets/img/static/whead.png" />
          <img
            src="https://www.12tails-th.com/assets/img/static/whead-right.png"
            className="title-right"
          />
        </div>
        <div className="text-header">
          <h2>เข้าสู่ระบบ</h2>
          <p>LOGIN</p>
        </div>
      </div>
      <div className="login-form">
        <div className="form-box">
          <label>Username</label>
          <div className="input-box">
            <input
              type="text"
              value={usernameLogin}
              name="username"
              onChange={(e) => setUsernameLogin(e.target.value)}
            />
            {showUsernameIcon && (
              <span>
                {usernameStatus ? (
                  <FaCheckCircle className="checked" />
                ) : (
                  <FaCircleXmark className="cross" />
                )}
              </span>
            )}
          </div>
        </div>
        <div className="form-box">
          <label>Password</label>
          <div className="input-box">
            <input
              type="password"
              value={passwordLogin}
              name="password"
              onChange={(e) => setPasswordLogin(e.target.value)}
            />
            {showPasswordIcon && (
              <span>
                {passwordStatus ? (
                  <FaCheckCircle className="checked" />
                ) : (
                  <FaCircleXmark className="cross" />
                )}
              </span>
            )}
          </div>
        </div>
        <div className="forgot">
          <h2>Forgot Password?</h2>
        </div>
      </div>
      <button className="login-btn" disabled={!validate()}>
        เข้าสู่ระบบ
      </button>

      <div className="guru">
        <img src="https://www.12tails-th.com/assets/img/static/obj-4.png" />
        <h4>ติดต่อสอบถามเรื่องต่าง ๆ</h4>
      </div>
      <div className="panda">
        <img src="https://www.12tails-th.com/assets/img/static/obj-3.png" />
      </div>
    </section>
  );
};
export default Login;
