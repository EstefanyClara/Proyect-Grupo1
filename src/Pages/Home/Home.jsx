import { useState, useContext } from "react";
import { ThemeContext } from "../../Components/Context/Context";
import Button from "../../Components/Buttons/Button"
import "./Home.css";
import Navbarra from "../../Components/Navbarra/Navbarra";
//imports de firebase
import appFirebase from "../../credenciales";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
const auth = getAuth(appFirebase);


const Home = () => {
  //const [show, setShow] = useState(true);
  const themeSettings = useContext(ThemeContext);
  //firebase
  const [registrando, setRegistrando] = useState(false);
  const functAutentication = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;
    if(registrando){
      try{
        await createUserWithEmailAndPassword(auth, correo, contraseña);
        alert("Usuario registrado correctamente");
      }catch (error){
        alert("Asegurese de que el correo sea valido y la contraseña tenga al menos 6 caracteres");
      }
    }else{
      try{
        await signInWithEmailAndPassword(auth, correo, contraseña);
      }catch (error){
        alert("Usuario o contraseña incorrectos");
      }
    }
  }

  return (
    <div className={"container-" + themeSettings.mode}>
      <Navbarra isPlain={true}/>
        <div className="main-container">
          <div className={"login-container-"+ themeSettings.mode }>
            <h2>Welcome! Log in or register</h2>
            <p>Log in to find the games you are looking for</p>
              <form onSubmit={functAutentication}> 
                <input type="email" placeholder="Email" required id="email"/>
                <input type="password" placeholder="Password" required id="password"/>
                    <Button type="submit" estilo={"custom-button-ligth"}>{registrando ? "Registrate": "Inicia sesion"}</Button>
              </form> 
              <h5 className={"texto-"+ themeSettings.mode }>{registrando ? "Si ya tienes cuenta" : "Si no tienes cuenta"}<button className="btnRegistrarse" onClick={()=> setRegistrando(!registrando)}>{registrando ? "Inicia sesion" : "Registrate" }</button></h5>
                <div className="separator">
                  <span className={"separador-"+themeSettings.mode} >or</span>
                </div>
                <div className={"social-media-buttons-"+ themeSettings.mode}>
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


/*
                  <div className="remember-me">
                    <input type="checkbox" id="remember-me"/>
                    <label htmlFor="remember-me">Remember me</label>
                    <a href="#" className="forgot-password">Forgot password?</a>
                  </div>



                  <p className="register-now">Not registered yet?  <a className="register-but" href="#">Register now</a></p>
                  */