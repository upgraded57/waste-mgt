import "./auth.css";
import authImg from "../../assets/images/welcome.png";
import Input from "./../../Components/Input/Input";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

export default function Auth() {
  const [signup, setSignup] = useState(false);
  const [login, setLogin] = useState(false);

  const showLogin = () => {
    if (signup) {
      setSignup(false);
    }
    setLogin(true);
  };

  const showSignup = () => {
    if (login) {
      setLogin(false);
    }
    setSignup(true);
  };
  return (
    <>
      <div className="auth">
        <div className="auth__img">
          <img src={authImg} alt="" />
        </div>
        <div className="auth__texts">
          <h1 className="h-300">Welcome!</h1>
          <p className="text-body">Let's keep our home clean!</p>
        </div>
        <div className="auth__btns">
          <button className="btn-pry-bg" onClick={showSignup}>
            Sign Up
          </button>
          <button className="btn-pry-bg-alt" onClick={showLogin}>
            Sign In
          </button>
        </div>
      </div>

      <div
        className={signup ? "signupModal active signup" : "signupModal signup"}
      >
        <h1 className="h-300">Sign Up</h1>
        <div className="signupModal__form">
          <Input id="fullname" placeholder="Full Name" type="text" />
          <Input id="email" placeholder="Email Address" type="email" />
          <Input id="phone" placeholder="Phone Number" type="text" />
          <Input id="password" placeholder="Enter Password" type="password" />
          <button className="btn-pry-bg">Sign Up</button>
        </div>

        <div className="signupModal__options">
          <p className="text-body">Or sign up with</p>
          <div className="options">
            <span className="option fb">
              <FaFacebookSquare />
            </span>
            <span className="option tw">
              <AiOutlineTwitter />
            </span>
            <span className="option gg">
              <FcGoogle />
            </span>
          </div>
        </div>

        <div className="signupModal__user">
          <p className="text-body">Already have an account?</p>
          <span
            className="text-bold"
            style={{ color: "var(--pry-clr)" }}
            onClick={showLogin}
          >
            Sign In
          </span>
        </div>
      </div>

      <div className={login ? "signupModal active login" : "signupModal login"}>
        <h1 className="h-300">Sign In</h1>
        <div className="signupModal__form">
          <Input id="email" placeholder="Email Address" type="email" />
          <Input id="password" placeholder="Enter Password" type="password" />
          <div className="forgot-pass">Forget Password?</div>
          <button className="btn-pry-bg">Sign In</button>
        </div>

        <div className="signupModal__options">
          <p className="text-body">Or sign in with</p>
          <div className="options">
            <span className="option fb">
              <FaFacebookSquare />
            </span>
            <span className="option tw">
              <AiOutlineTwitter />
            </span>
            <span className="option gg">
              <FcGoogle />
            </span>
          </div>
        </div>

        <div className="signupModal__user">
          <p className="text-body">Don't have an account?</p>
          <span
            className="text-bold"
            style={{ color: "var(--pry-clr)" }}
            onClick={showSignup}
          >
            Sign Up
          </span>
        </div>
      </div>
    </>
  );
}
