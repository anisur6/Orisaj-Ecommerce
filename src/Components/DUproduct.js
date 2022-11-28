import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import Heading from './Heading';

const DUproduct = () => {

    const [duproduct, setDuproduct] = useState([]);

    useEffect( () => {
        fetch('https://backend.orisaz.com/allproducts')
        .then(res => res.json())
        .then(data => setDuproduct(data))
    }, [])


    return (
        <>
            <Container>
            <Row>
                <div className='text-center pb-2'>
                    <Heading mainText="Edit & Delete Product" />
                </div>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                    <th>Product Id</th>
                    <th>Product Name</th>
                    <th>Product Image</th>
                    <th>Price</th>
                    <th>Catagory</th>
                    <th>Size</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                    <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                {
                duproduct.map(product => {
                   const {_id, id, productName, productImage, price, catagory, code, quantity} = product;
                    return(
                    
                                <tr key={_id}>
                                <td>{id}</td>
                                <td><p>{productName}</p></td>
                                <td><img src={productImage} style={{height:'40px'}} alt="demo" /></td>
                                <td><p><span>৳</span> {price}</p></td>
                                <td><p>{catagory}</p></td>
                                <td><p>{code}</p></td>
                                <td><p>{quantity}</p></td>
                                <td className='text-center'><AiFillDelete className='fs-4 p-1 bg-light rounded-pill shadow'/> </td>
                                <td className='text-center'><FaEdit className='fs-4 p-1 bg-light rounded-pill shadow'/> </td>
                                </tr>
                          );
                        })
                    }
        
                    
                    
                </tbody>
                </Table>

            </Row>
            </Container>
           
        </>
    );
};

export default DUproduct;