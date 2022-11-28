import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Heading from './Heading';
import swal from 'sweetalert';



const Register = () => {

    const navigate = useNavigate();

    const [signInWithGoogle, User] = useSignInWithGoogle(auth);
   

   
    const [createUserWithEmailAndPassword, loading, error,] = useCreateUserWithEmailAndPassword(auth);

      const [updateProfile, updating, updateerror] = useUpdateProfile(auth);

      let signInError;

      if(error || updateerror){
        signInError = <p>{error?.message || updateerror?.message}</p>
      }

    const { register, handleSubmit, formState: { errors } } = useForm();

    

    if(loading || updating){
       return(
        <div className='text-center my-5'>
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
        </div>
        
       ) 
    }

  
    
        if(User){
            swal({
                title: "Registration SuccessFull",
                icon: "success",
                button: "Ok",
              });
            navigate('/')
        }
   

    const onSubmit = async data => {
        // console.log(data);
        if(data.password !== data.password2){
            return alert('password not matched');   
        }
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName : data.name});

        //send user to the database
        saveUser(data.email, data.name, data.phone, 'POST');

        swal({
            title: "registration SuccessFull",
            icon: "success",
            button: "Done",
          });
        navigate('/')
    }



    // saving user information 
    const saveUser = (email, displayName, phone, method) => {
        const user = { email, displayName, phone };
        fetch('https://backend.orisaz.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

   





    return (
        <>
            <Container fluid className='bg-light p-5'> 
        <Container className='log-reg-bg shadow px-0'>
        <Row>
            <Col md={6} className="px-0 d-none d-sm-none d-md-block">
                <img src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-5267.jpg?w=740&t=st=1666616926~exp=1666617526~hmac=016bb148f39cece9c213ff0aff6259214bd08faee3e81b8c95a7e58f4551c8e0" className="img-fluid" alt="login-img" />
            </Col>
            <Col md={6}  className="px-0" style={{backgroundColor: 'white'}}>
                <div className='p-0 text-center'>
                    <Heading bgText="Register" mainText="Register" />
                    <form className="login form" onSubmit={handleSubmit(onSubmit)}>
            {errors.name?.type === 'required' && "name is required"}

                    <div className='login-width mx-auto text-center'>
                    <input {...register("name", { required: true, maxLength: 15 })} className='form-control border-0 shadow rounded-0 p-2 my-4' type="text"  placeholder="Enter Name" required/>
                    {errors.email?.type === 'required' && "Email is required"}
                    <input  {...register("email", { required: true, maxLength: 20 })} className='form-control border-0 shadow rounded-0 p-2 my-4' type="email"  placeholder="Enter Email" required/>
                    <input  {...register("phone", { required: true, maxLength: 20 })} className='form-control border-0 shadow rounded-0 p-2 my-4' type="number"  placeholder="Enter Phone Number" required/>
                    {errors.password?.type === 'required' && "use more than 6"}
                    <input name="password" {...register("password", { required: true, minLength: 5 })} className='form-control border-0 shadow rounded-0 p-2 my-4' type="password"  placeholder="Enter Password" required/>
                    <input name="password2" {...register("password2", { required: true, minLength: 5 })} className='form-control border-0 shadow rounded-0 p-2 my-4' type="password"  placeholder="Confirm Password" required/>
                    <p>{signInError}</p>
                    <button className='btn btn-dark fw-bold w-100 p-2 rounded-0 mt-1' type='submit'>Register</button>
                    <span className='d-block fs-6 my-2 text-muted'>Or Register With</span>
                    <div>
                    <span  className='social-authentication' onClick={() => signInWithGoogle() } ><FcGoogle className='Social-links rounded-pill shadow mx-2 p-2' /></span>
                    <span  className='social-authentication'><FaFacebook className='Social-links rounded-pill shadow mx-2 p-2 text-primary' /></span>
                    <span  className='social-authentication'><FaLinkedin className='Social-links rounded-pill shadow mx-2 p-2 text-primary' /></span>
                    </div>
                    </div>
                    <p className='mt-3'>Already Registerd ? <Link to="/login" className='fw-bold text-success'>Login Hare</Link></p>
                    </form>
                </div>
            </Col>
        </Row>
        </Container>
        </Container>
            
        </>
    );
};

export default Register;