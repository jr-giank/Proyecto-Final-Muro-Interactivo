import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

export const Autentication = () => {

    // const [loginEmail, setLoginEmail] = useState('');
    // const [loginPassword, setLoginPassword] = useState('');

    const registerService = async(email, password, username, name, last_name) => {
        const details = {
            username: username,
            name: name,
            last_name: last_name
        }
        
        try{
            const user = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            
            const userDocument = await createUserDocument(user.user.uid, details);

            return "success"
        }catch (error){
            alert('Error registrando el usuario');
        }
    }

    const createUserDocument = async(user, details) => {

        try{
            const docRef = await setDoc(doc(firestore, "users", user), details);
        }catch (e){
            alert("Error agregando la información del usuario");
        }
    }

    const loginService = async(loginEmail, loginPassword) => {
        try{
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            
            // const userDocument = await createUserDocument(user.user.uid, details);

            return "success"
        }catch (error){
            alert('Error registrando el usuario');
        }
    }

    const logoutService = async() => {

    }

    return {
        registerService,
        loginService,
        logoutService
    }
}