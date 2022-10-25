import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import Heading from './Heading';


const Register = () => {
    return (
        <>
            <Container fluid className='bg-light p-5'> 
        <Container className='log-reg-bg shadow px-0'>
        <Row>
            <Col md={6} className="px-0">
                <img src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-5267.jpg?w=740&t=st=1666616926~exp=1666617526~hmac=016bb148f39cece9c213ff0aff6259214bd08faee3e81b8c95a7e58f4551c8e0" className="img-fluid" alt="login-img" />
            </Col>
            <Col md={6}  className="px-0" style={{backgroundColor: 'white'}}>
                <div className='p-0 text-center'>
                    <Heading bgText="Register" mainText="Register" />
                    <div className='w-75 mx-auto text-center'>
                    <input className='form-control border-0 shadow rounded-0 p-2 my-4' type="text"  placeholder="Enter Name" required/>
                    <input className='form-control border-0 shadow rounded-0 p-2 my-4' type="email"  placeholder="Enter Email" required/>
                    <input className='form-control border-0 shadow rounded-0 p-2 my-4' type="password"  placeholder="Enter Password" required/>
                    <input className='form-control border-0 shadow rounded-0 p-2 my-4' type="password"  placeholder="Confirm Password" required/>
                    <button className='btn btn-dark fw-bold w-100 p-2 rounded-0 mt-1'>Register</button>
                    <span className='d-block fs-6 my-2 text-muted'>Or Register With</span>
                    <div>
                    <span><FcGoogle className='fs-1 rounded-pill shadow mx-2 p-2' /></span>
                    <span><FaFacebook className='fs-1 rounded-pill shadow mx-2 p-2 text-primary' /></span>
                    <span><FaLinkedin className='fs-1 rounded-pill shadow mx-2 p-2 text-primary' /></span>
                    </div>
                    </div>
                    <p className='mt-3'>Already Registerd ? <Link to="/login" className='fw-bold text-success'>Login Hare</Link></p>

                </div>
            </Col>
        </Row>
        </Container>
        </Container>
            
        </>
    );
};

export default Register;