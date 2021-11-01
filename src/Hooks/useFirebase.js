
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const singInUsingGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);

            }).catch((error) => {
                setError(error)
            });

    }

    const logOut = () => {
        signOut(auth)
            .then((res) => {
                setUser({});
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    return {
        user,
        error,
        singInUsingGoogle,
        logOut
    }

}
export default useFirebase;