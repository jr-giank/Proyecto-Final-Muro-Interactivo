import { React, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import "../styles/Nav.css"

export const Nav = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, [user])

    return(
        <div id="nav">
            <nav>  
                <div>
                    <h1>Giank's Muro</h1>
                </div>          
                {
                    user ? 
                        <h2>Enjoy</h2>
                    :
                        <button><a href="/register">Registrate</a></button>
                }        
            </nav>
        </div>
    )
}