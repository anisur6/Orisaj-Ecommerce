import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Heading from './Heading';
import { useForm } from "react-hook-form";
import {FaFacebook, FaLinkedin} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import swal from 'sweetalert';


const Login = () => {

    const navigate = useNavigate();
    const [signInWithGoogle, User ] = useSignInWithGoogle(auth);

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

      let signInError;

      if(error){
        signInError = <p>{error.message}</p>
      }

    const { register, handleSubmit, formState: { errors } } = useForm();

    if(User){
        swal({
            title: "Login SuccessFull",
            icon: "success",
            button: "Done",
          });
        navigate('/')
    }

    if(loading){
       return(
        <div className='text-center my-5'>
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
        </div>
       ) 
    }

    const onSubmit = data => {
        // console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
        swal({
            title: "Login SuccessFull",
            icon: "success",
            button: "Done",
          });
        navigate('/');
    }


    return (
        <>

        <Container fluid className='bg-light p-5'> 
        <Container className='log-reg-bg  shadow px-0'>
        <Row>
            <Col md={6} className="d-none d-sm-none d-md-block">
                <img src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7862.jpg?w=740&t=st=1666616783~exp=1666617383~hmac=3a0ac3ead9a5428994e2db6d60fb91e363f2141ab75f5920f1e40c8d59b11842" className="" alt="login-img" />
            </Col>
            <Col md={6}  className="px-0" style={{backgroundColor: 'white'}}>
                <div className=' text-center'>
                    <Heading bgText="User Login" mainText="Login" />

                    <div className='login-width mx-auto text-center'>
                    <form className="login form" onSubmit={handleSubmit(onSubmit)}>
                        {errors.email?.type === 'required' && "Email is required"}
                    <input {...register("email", { required: true, maxLength: 20 })}  className='form-control border-0 shadow rounded-0 p-3 my-4' type="email"  placeholder="Enter Email" required/>
                    <input {...register("password", { required: true, minLength: 5 })} className='form-control border-0 shadow rounded-0 p-3 my-4' type="password"  placeholder="Enter Password" required/>
                    <p> {signInError}</p>
                    <button className='btn btn-dark fw-bold w-100 p-3 rounded-0 mt-1' type='submit'>Login</button>
                    </form>
                    <span className='d-block fs-6 my-2 text-muted'>or continue with</span>
                    <div>
                    <span className='social-authentication' onClick={() => signInWithGoogle() }><FcGoogle className='Social-links  rounded-pill shadow mx-2 p-2' /></span>
                    <span className='social-authentication'><FaFacebook className='Social-links  rounded-pill shadow mx-2 p-2 text-primary' /></span>
                    <span className='social-authentication'><FaLinkedin className='Social-links  rounded-pill shadow mx-2 p-2 text-primary' /></span>
                    </div>
                    </div>
                    <p className='mt-3'>New User ? <Link to="/register" className='fw-bold text-success'>Register Hare</Link></p>


                </div>
            </Col>
        </Row>
        </Container>
        </Container>
            
        </>
    );
};

export default Login;