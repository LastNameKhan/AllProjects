import { Box } from '@mui/material';
import React from 'react';

const Header = () => {
    console.log('render  header')
    return (
        <Box style={{borderBottom: '1px solid #ccc'}}>
            <img
                src={require('../assets/logo.png')}
                alt="Main Logo"
                style={{height: 60}}
            />
        </Box>
    )
}

export default Header;
