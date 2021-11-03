import React, { createContext } from 'react';
import useCart from '../Hooks/useCart';
import useFirebase from '../Hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    const { pakages, setPakages, addToCart, deleteSingleOrder } = useCart();
    const data = { allContext, pakages, setPakages, addToCart, deleteSingleOrder }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
