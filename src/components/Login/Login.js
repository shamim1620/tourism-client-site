import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {

    const { allContext } = useAuth();
    const { singInUsingGoogle, setUser, user } = allContext;
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';

    const handleGoogleLogin = () => {
        singInUsingGoogle()
            .then(result => {
                setUser(result.user)
                history.push(redirect_uri);
            })
    }

    return (
        <div>
            <button onClick={handleGoogleLogin}>Google SignIn</button>

        </div>
    );
};

export default Login;