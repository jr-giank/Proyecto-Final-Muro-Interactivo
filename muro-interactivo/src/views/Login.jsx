import React from "react";
import "../styles/Login.css"

export const Login = () => {
    return(
        <div id="loginPage">
            <section id="log-in">
                <form action="">
                    <h2>Bienvenido</h2>
                    <h4>¡Por favor completa la información!</h4>
                    <div className="log-info">
                        <label htmlFor="email" id="first-one">Email</label>
                        <input type="email"/>
                    </div>
                    <div className="log-info">
                        <label htmlFor="">Password</label>
                        <input type="password" />
                    </div>
                    <button id="sign-in-btn">Sign in</button>
                    <button id="google-btn"><img alt="Google" src="https://img.icons8.com/color/22/000000/google-logo.png"/>Sign in with Google</button>
                </form>
            </section>
            <section id="image">

            </section>
        </div>
    )
}