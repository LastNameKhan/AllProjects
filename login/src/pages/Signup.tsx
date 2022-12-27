import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
const Signup = () => {
    const navigate = useNavigate();

    return (
        <>
            <h1 onClick={() => navigate('/')}>Signup</h1>
        </>
    )
}

export default Signup;
