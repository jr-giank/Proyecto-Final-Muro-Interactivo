import React from "react";
import "../styles/Login.css"

export const Login = () => {
    return(
        <div id="loginPage">
            <section id="log-in">
                <form action="">
                    <h2>Bienvenido</h2>
                    <div className="log-info">
                        <label htmlFor="email">Email</label>
                        <input type="email"/>
                    </div>
                    <div className="log-info">
                        <label htmlFor="">Password</label>
                        <input type="password" />
                    </div>
                    <button>Sign in</button>
                    <button>Sign in with Google</button>
                </form>
            </section>
            <section id="image">

            </section>
        </div>
    )
}