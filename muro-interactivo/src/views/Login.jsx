import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { Autentication } from "../services/Autentication";
import "../styles/Login.css";

export const Login = () => {

    const navigate = useNavigate();

    const { loginService } = Autentication();

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const handleSubmitLogin = async(e, email, password) => {
        e.preventDefault();
        
        await loginService(email, password).then((message) => {
            if(message === 'success'){
                navigate('/');
            }
        })
    }

    return(
        <div id="loginPage">
            <section id="log-in">
                <form onSubmit={(e) => handleSubmitLogin(e, loginEmail, loginPassword)}>
                    <h2>Bienvenido</h2>
                    <h4>¡Por favor completa la información!</h4>
                    <div className="log-info">
                        <label htmlFor="email" id="first-one">Email</label>
                        <input type="text" name="email" onChange={(event) => setLoginEmail(event.target.value)}/>
                    </div>
                    <div className="log-info">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" onChange={(event) => setLoginPassword(event.target.value)}/>
                    </div>
                    <button id="sign-in-btn">Lon-In</button>
                    <button id="google-btn"><img alt="Google" src="https://img.icons8.com/color/22/000000/google-logo.png"/>Sign in with Google</button>
                    <p>¿No tienes una cuenta aún?<Link to='/register' id="link-registro"> Registrarse</Link></p>
                </form>
            </section>
            <section id="image">
                <div id="circle"></div>
                <div id="top">
                    <div id="top-circle"></div>
                </div>
                <div id="bottom">
                    <div id="bottom-circle"></div>
                </div>
            </section>
        </div>
    )
}