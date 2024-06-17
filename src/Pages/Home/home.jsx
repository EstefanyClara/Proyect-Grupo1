import { React, useState } from "react";
import { Routes, Link } from "react-router-dom";
import { ThemeContext } from "../../ComponentsS/Context/Context";
import MyInput from "../../ComponentsS/MyInput/MyInput";
import Button from "../../ComponentsS/Buttons/Button"
import Switch from "../../ComponentsS/Switch/Switch";
import MyModal from "../../ComponentsS/Modal/MyModal";

const Home = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <Switch></Switch>
      <h1>Game Finder</h1>
      <MyInput></MyInput>
      <MyInput></MyInput>
      <Button estilo={"custom-button-ligth"}>Login</Button>
      <Button iconName="facebook" iconColor="#f09" iconSize="24">
        Login with Facebook{" "}
      </Button>
      <Button
        estilo={"social-media-style-button-ligth"}
        iconName="twitter"
        iconColor="#f09"
        iconSize="24"
      >
        Login with Twitter{" "}
      </Button>
      <Button
        estilo={"social-media-style-button-ligth"}
        iconName="google"
        iconColor="#f09"
        iconSize="24"
      >
        Login with Google{" "}
      </Button>
      <Link to="/gamedetails">
        <Button estilo={"custom-button-ligth"}>Game Details</Button>
      </Link>
      <Link to="/dashboard">
        <Button estilo={"custom-button-ligth"}>Dashboard</Button>
      </Link>

      <div>
        <h1>Game Finder</h1>
        <button onClick={() => setShow(true)}>Custom Width Modal</button>
      </div>
    </div>
  );
};

export default Home;
