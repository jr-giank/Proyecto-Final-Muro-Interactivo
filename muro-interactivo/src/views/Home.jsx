import { React, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import "../styles/Home.css";

export const Home = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
    })
    
    return(
        <div id="HomePage">
            <section id="profile">
                <h2>Profile</h2>
                <h1>{user?.email}</h1>
            </section>
            <section id="posts">
                <div>
                    <div id="profile-post">
                        <p>foto</p>
                        <p>Nombre Persona</p>
                    </div>
                    <div id="post">
                        {/* <img id="foto_preview" name='foto_preview' src={preview} alt="" /> */}
                        <p id="foto_preview">Aqui va la foto</p>
                        <p>textto</p>
                    </div>
                </div>
            </section>
        </div>
    )
}