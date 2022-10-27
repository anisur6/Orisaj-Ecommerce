import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import swal from 'sweetalert';


const PrivateRoute = ({children}) => {
    const [user, loading, error] = useAuthState(auth);

    const location  = useLocation();

    if(loading){
        return (
            <div className='text-center my-5'>
                <Spinner animation="grow" />
            </div>
            ) 
    }
   
    

    if(!user){
        return  <Navigate to="/login" state={{from : location}} replace />   
    }

    return children;
};

export default PrivateRoute;