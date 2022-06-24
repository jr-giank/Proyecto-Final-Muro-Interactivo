import React from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

export const Login = () => {
    return(
        <div id="loginPage">
            <section id="log-in">
                <form action="">
                    <h2>Bienvenido</h2>
                    <h4>¡Por favor completa la información!</h4>
                    <div className="log-info">
                        <label htmlFor="username" id="first-one">Email</label>
                        <input type="text" name="username"/>
                    </div>
                    <div className="log-info">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password"/>
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