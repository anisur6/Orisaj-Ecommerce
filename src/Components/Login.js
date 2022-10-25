import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from './Heading';
import {FaFacebook, FaLinkedin} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>

        <Container fluid className='bg-light p-5'> 
        <Container className='log-reg-bg  shadow px-0'>
        <Row>
            <Col md={6} className="">
                <img src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7862.jpg?w=740&t=st=1666616783~exp=1666617383~hmac=3a0ac3ead9a5428994e2db6d60fb91e363f2141ab75f5920f1e40c8d59b11842" className="" alt="login-img" />
            </Col>
            <Col md={6}  className="px-0" style={{backgroundColor: 'white'}}>
                <div className='p-2 text-center'>
                    <Heading bgText="User Login" mainText="Login" />
                    <div className='w-75 mx-auto text-center'>
                    <input className='form-control border-0 shadow rounded-0 p-3 my-4' type="email"  placeholder="Enter Email" required/>
                    <input className='form-control border-0 shadow rounded-0 p-3 my-4' type="password"  placeholder="Enter Password" required/>
                    <button className='btn btn-dark fw-bold w-100 p-3 rounded-0 mt-1'>Login</button>
                    <span className='d-block fs-6 my-2 text-muted'>Or Login With</span>
                    <div>
                    <span><FcGoogle className='fs-1 rounded-pill shadow mx-2 p-2' /></span>
                    <span><FaFacebook className='fs-1 rounded-pill shadow mx-2 p-2 text-primary' /></span>
                    <span><FaLinkedin className='fs-1 rounded-pill shadow mx-2 p-2 text-primary' /></span>
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