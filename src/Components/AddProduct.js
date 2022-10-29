import React from 'react';
import axios from 'axios';
import { Button, Container } from 'react-bootstrap';
import Heading from './Heading';
import { useForm } from 'react-hook-form';

const AddProduct = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/allproducts', data)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    window.alert('Are you Sure to Add ?');
                    reset();
                }
            })
    };

   

    return (
        <>
        <Container>
        <Heading bgText="ORISAZ" mainText="Add Product" />
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='w-75 row mx-auto mt-5'>
        <div className='col-md-6'>
        <input className='form-control my-4 p-3 border-0 shadow'  {...register("productName")} type="text" placeholder='Product Name' />
        </div>
        <div className='col-md-6'>
        <input className='form-control my-4 p-3 border-0 shadow'  {...register("color")} type="text" placeholder='Product Color' />
        </div>
        <div className='col-md-6'>
        <input className='form-control my-4 p-3 border-0 shadow'  {...register("size")} type="text" placeholder='Product Size' />
        </div>
        <div className='col-md-6'>
        <input className='form-control my-4 p-3 border-0 shadow'  {...register("productImage")} type="text" placeholder='Product Image URL' />
        </div>
        <div className='col-md-6'>
        <input className='form-control my-4 p-3 border-0 shadow'  {...register("price")} type="number" placeholder='Price' />
        </div>
        <div className='col-md-6'>
        <input className='form-control my-4 p-3 border-0 shadow'  {...register("mutedprice")} type="number" placeholder='Muted-price' />
        </div>
        <div className='col-md-6'>
        <input className='form-control my-4 p-3 border-0 shadow'  {...register("catagory")} type="text" placeholder='Catagory' />
        </div>
        <div className='col-md-6'>
        <input className='form-control my-4 p-3 border-0 shadow'  {...register("code")} type="text" placeholder='Product Code' />
        </div>
        <div className='col-md-6'>
        <input className='form-control my-4 p-3 border-0 shadow'  {...register("rating")} type="number" placeholder='Add Rating' />
        </div>
        <div className='col-md-6'>
        <input className='form-control my-4 p-3 border-0 shadow'  {...register("quantity")} type="number" placeholder='Product Quantity' />
        </div>
        <div className='col-md-12'>
        <textarea className="p-2 form-control my-4 p-3 border-0 shadow" {...register("description")} placeholder='Product Description' />
        <Button className="btn border-0 shadow btn-light px-5 my-2 fs-5" type="submit">Add Product</Button> 
        </div>


        </div>
        </form>
        </Container>
            
        </>
    );
};

export default AddProduct;