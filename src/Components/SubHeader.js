import React from 'react';
import { Container } from 'react-bootstrap';
import {FaAngleDown} from 'react-icons/fa';

const SubHeader = () => {
    return (
        <>
        <Container fluid className='bg-dark p-2 px-4 d-none d-sm-none d-md-block'>
         
            
          <div className='d-flex justify-content-between text-light'>
          <div><p className='sh-text mb-0'>+00801631009871</p></div>
          <div><p className='sh-text mb-0'>Get Free Delivary at $ 100</p></div>
  
          <div className='d-flex flex-end '>
            
            <a href="google.com" target='-blank' className='text-decoration-none text-light me-3'>My Account</a>
            <a href="google.com" target='-blank' className='text-decoration-none text-light me-3'>WishList</a>
            <a href="google.com" target='-blank' className='text-decoration-none text-light'>English <FaAngleDown/> </a>
          </div>
          </div>
          
        </Container>
        </>
    );
};

export default SubHeader;