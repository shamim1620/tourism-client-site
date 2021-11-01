import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { singInUsingGoogle } = useAuth();

    return (
        <div>
            <button onClick={singInUsingGoogle}>Google SignIn</button>

        </div>
    );
};

export default Login;