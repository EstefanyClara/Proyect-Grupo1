import { React, useState } from "react";
import { Routes, Link } from "react-router-dom";
import { ThemeContext } from "../../Components/Context/Context";
import MyInput from "../../Components/MyInput/MyInput";
import Button from "../../Components/Buttons/Button"
import "./Home.css";
import Navbarra from "../../Components/Navbarra/Navbarra";

const Home = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <Navbarra isPlain={true} />
      <div className="main-container">
        <div className="login-container">
        <h2>Welcome! Log in or register</h2>
        <p>Log in to find the games you're looking for</p>
        <form>
          <input type="email" placeholder="Email" required/>
          <input type="password" placeholder="Password" required/>
          <div className="remember-me">
            <input type="checkbox" id="remember-me"/>
            <label htmlFor="remember-me">Remember me</label>
            <a href="#" className="forgot-password">Forgot password?</a>
            </div>
            <Button type="submit" estilo={"custom-button-ligth"}>Login</Button>
            <p className="register-now">Not registered yet?  <a className="register-but" href="#">Register now</a></p>
        </form> 

        <div className="separator">
            <span>or</span>
        </div>
        <div className="social-media-buttons">
        <Button iconName="facebook" iconColor="#f09" iconSize="24">Login with Facebook{" "}</Button>
        <Button estilo={"social-media-style-button-ligth"} iconName="twitter" iconColor="#f09" iconSize="24"> Login with Twitter{" "}</Button>
        <Button estilo={"social-media-style-button-ligth"} iconName="google" iconColor="#f09" iconSize="24" > Login with Google{" "} </Button>
        </div>
      </div>
    </div>
    </div>
  );
};


export default Home;
