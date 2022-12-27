import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import { baseURL, endPoint } from '../config';

const Login = () => {
    const [empId, setEmpId] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string | null>(null)
    const navigate = useNavigate();

    // useEffect(() => {
    //     const token = sessionStorage.getItem('token')
    //     console.log('token', token)
    //     if(token) {
    //         navigate('/Dashboard')
    //     }
    // }, [])

    const handlerLogin = async() => {
        try {
            const body = {
                "emp_id": parseInt(empId),
                "password":password
            }
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            }
    
            const res = await fetch(`${baseURL}${endPoint.login}`, options)
            const resJson = await res.json();
            if(res.status === 200) {
                if(resJson?.token) {
                    console.log(resJson);
                    sessionStorage.setItem('token', resJson.token)
                    sessionStorage.setItem('user', JSON.stringify(resJson.user))
                    //navigate('/')
                    
                    window.location.reload();
                }
                
            } else {
                setError(resJson.message);
            }
        } catch(e) {
            console.log(e)
            setError('Something went wrong try again!');
        }
        
    }

    return (
        <Container>
            <Grid container>
                <Grid item sm={7} style={{display: 'flex', flexDirection: 'column',justifyContent: 'center'}}>
                    <Typography variant='h3'>Sign in to</Typography>
                    <Typography variant='h5' >Lorem imsum text .........</Typography>
                    <Typography variant='h6' sx={{mt: 5}}>If you don’t have an account register</Typography>
                    <Typography variant='h6' onClick={() => navigate('signup')}>Register now</Typography>
                    
                </Grid>

                <Grid item sm={5}>
                    <Typography variant='h4' sx={{mt: 15}}>Sign in</Typography>

                    <TextField
                        variant='filled'
                        placeholder='emp id'
                        value={empId}
                        onChange={(e) => setEmpId(e.target.value)}
                        fullWidth
                        sx={{mt: 3}}
                    />
                    
                    <TextField
                        variant='filled'
                        placeholder='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        sx={{mt: 3}}
                    />
                    <Typography  sx={{mt: 3, textAlign: 'right'}}>Forgot Password</Typography>
                    {error && <Typography  sx={{mt: 3, color: 'red'}}>{error}</Typography>}

                    <Button
                        variant='contained'
                        color='primary'
                        onClick={handlerLogin}
                        size="large"
                        fullWidth
                        sx={{mt: 3, mb: 20}}
                    >Login</Button>
                </Grid>

            </Grid>
        </Container>
    )
}

export default Login;
