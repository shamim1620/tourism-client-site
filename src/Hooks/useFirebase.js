
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const singInUsingGoogle = () => {

        return signInWithPopup(auth, provider)


    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (signedInUser) => {
            if (signedInUser) {
                setUser(signedInUser);
            } else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, []);

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
        logOut,
        setUser,
        setError,
        loading
    }

}
export default useFirebase;