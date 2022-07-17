import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { listAll, ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebase";
import { Autentication } from "../services/Autentication";
import "../styles/Home.css";

export const Home = () => {
    const [user, setUser] = useState({});
    const [userDetails, setUserDetails] = useState([]);
    const [profilePhoto, setProfilePhoto] = useState('');
    
    const { logoutService } = Autentication();
    const profilesPhotoRef = ref(storage, 'profiles/');
    const navigate = useNavigate();

    const handleLogout = (auth) => {
        logoutService(auth);

        navigate('/login');
    }
    
    const getDetails = async() => {
        try {
            const query = await getDocs(collection(firestore, 'users'));
            const data = [];

            query.forEach((doc) => {
                if(doc.id === user.uid){
                    data.push({...doc.data(), id:doc.id})
                }
            })

            setUserDetails(data);
        } catch (error) {
            console.log(error);
        }

        listAll(profilesPhotoRef).then((response) => {
            response.items.forEach((item) => {
                if(item._location.path === `profiles/${user.uid}`){
                    getDownloadURL(item).then((photo) => {
                        setProfilePhoto(photo);
                    })
                }
            })
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, [setUser])

    getDetails()

    return(        
        user ? 
            <div id="HomePage">
                    
                <section id="profile">
                    {
                        <img src={profilePhoto} alt="Photo"/>
                    }
                    
                    {
                        userDetails.map((user) => (
                            <div key={user.id}>
                                <p><strong>{user.name} {user.last_name}</strong></p>
                                <p>{user.username}</p>
                            </div>
                        ))  
                    }
                    
                    <div id="buttons">
                        <button id="new_post" onClick={() => {navigate('/new/post')}}>New post</button>
                        <button id="logout" onClick={() => {handleLogout(auth)}}>Logout</button>
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
        : 
            <div id="HomePage">
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