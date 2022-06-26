import React from "react";
import "../styles/Home.css";

export const Home = () => {

    return(
        <div id="HomePage">
            <section id="profile">
                <h2>Profile</h2>
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