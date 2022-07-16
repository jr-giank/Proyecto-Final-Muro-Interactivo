import { React, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import "../styles/Home.css";

export const Home = () => {
    const [user, setUser] = useState({});
    const [userDetails, setUserDetails] = useState([]);

    const getDetails = async() => {
        try {
            const query = await getDocs(collection(firestore, 'users'));
            const data = [];

            query.forEach((doc) => {
                if(doc.id === user.uid){
                    data.push({...doc.data(), id:doc.id})
                }
                // data.push({...doc.data(), id:doc.id})
            })

            setUserDetails(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

    }, [setUserDetails])

    getDetails();

    // console.log(user.uid);
    return(
        <div id="HomePage">
            <section id="profile">
                <h2>Profile</h2>
                <div>
                    {
                        userDetails.map((user) => (
                            <div key={user.id}>
                                <p>{user.name} {user.last_name}</p>
                                <p>{user.username}</p>
                            </div>
                        ))
                    }
                </div>
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