import React from "react";
import "../styles/Register.css";

export const Register = () => {
    return(
        <div id="registerPage">
            <form id="register-form" action="">
                <h2>Registrate</h2>
                {/* <h4>¡Por favor completa la información!</h4> */}
                <div className="register-info">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="name"/>
                </div>
                <div className="register-info">
                    <label htmlFor="last_name" >Apellido</label>
                    <input type="text" name="last_name"/>
                </div>
                <div className="register-info">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username"/>
                </div>
                <div className="register-info">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"/>
                </div>
                <button id="register-btn">Registrarse</button>
            </form> 
        </div>
    )
}