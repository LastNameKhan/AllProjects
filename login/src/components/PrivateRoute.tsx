import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Dashboard from '../pages/Dashboard';

const PrivateRoute = ({children}: any) => {
    const navigate = useNavigate();

    // useEffect(() => {
    //     const token = sessionStorage.getItem('token')
    //     console.log('token', token)
    //     if(!token) {
    //         navigate('/')
    //     }
    // }, [])

    
    return children
}

export default PrivateRoute;
