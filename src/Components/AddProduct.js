import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Heading from './Heading';

const AddProduct = () => {
   

    return (
        <>
        <Container>
        <Heading bgText="ORISAZ" mainText="Add Product" />
        <div className='w-75 row mx-auto mt-5'>
        <div className='col-md-6'>
        <input className='form-control my-4 p-3 border-0 shadow' type="text" placeholder='Product Name' />
        </div>
        <div className='col-md-6'>
        <input className='form-control my-4 p-3 border-0 shadow' type="text" placeholder='Product Image URL' />
        </div>
        <div className='col-md-6'>
        <input className='form-control my-4 p-3 border-0 shadow' type="number" placeholder='Price' />
        </div>
        <div className='col-md-6'>
        <input className='form-control my-4 p-3 border-0 shadow' type="number" placeholder='Muted-price' />
        </div>
        <div className='col-md-6'>
        <input className='form-control my-4 p-3 border-0 shadow' type="text" placeholder='Catagory' />
        </div>
        <div className='col-md-6'>
        <input className='form-control my-4 p-3 border-0 shadow' type="text" placeholder='Product Code' />
        </div>
        <div className='col-md-6'>
        <input className='form-control my-4 p-3 border-0 shadow' type="number" placeholder='Add Rating' />
        </div>
        <div className='col-md-6'>
        <input className='form-control my-4 p-3 border-0 shadow' type="number" placeholder='Product Quantity' />
        </div>
        <div className='col-md-12'>
        <textarea className="p-2 form-control my-4 p-3 border-0 shadow" placeholder='Product Description' />
        <Button className="btn border-0 shadow btn-light px-5 my-2 fs-5" type="submit">Add Product</Button> 
        </div>
        
        </div>
        </Container>
            
        </>
    );
};

export default AddProduct;