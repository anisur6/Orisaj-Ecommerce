import React from 'react';
import { AiFillDelete } from "react-icons/ai";
import { Container, Row, Table } from 'react-bootstrap';

const AllOrder = () => {
    return (
        <>
         <Container>
            <Row>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                    <th>Order Id</th>
                    <th>Customer Name </th>
                    <th>Email </th>
                    <th>Product Image</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td><p>anisur rahman</p></td>
                    <td><p>armunna223@gmail.com</p></td>
                    <td><img src="https://i.ibb.co/RGFgncT/p-1.jpg" style={{height:'40px'}} alt="demo" /></td>
                    <td><p>man's best quality product </p></td>
                    <td> <p><span>৳</span> 450</p></td>
                    <td><p className='text-primary'>panding</p> </td>
                    <td className='text-center'><AiFillDelete className='fs-4 p-1 bg-light rounded-pill shadow'/> </td>
                    </tr>
                    <tr>
                    <td>1</td>
                    <td><p>anisur rahman</p></td>
                    <td><p>armunna223@gmail.com</p></td>
                    <td><img src="https://i.ibb.co/RGFgncT/p-1.jpg" style={{height:'40px'}} alt="demo" /></td>
                    <td><p>man's best quality product </p></td>
                    <td> <p><span>৳</span> 450</p></td>
                    <td><p className='text-primary'>panding</p> </td>
                    <td className='text-center'><AiFillDelete className='fs-4 p-1 bg-light rounded-pill shadow'/> </td>
                    </tr>
                    <tr>
                    <td>1</td>
                    <td><p>anisur rahman</p></td>
                    <td><p>armunna223@gmail.com</p></td>
                    <td><img src="https://i.ibb.co/RGFgncT/p-1.jpg" style={{height:'40px'}} alt="demo" /></td>
                    <td><p>man's best quality product </p></td>
                    <td> <p><span>৳</span> 450</p></td>
                    <td><p className='text-primary'>panding</p> </td>
                    <td className='text-center'><AiFillDelete className='fs-4 p-1 bg-light rounded-pill shadow'/> </td>
                    </tr>
                    <tr>
                    <td>1</td>
                    <td><p>anisur rahman</p></td>
                    <td><p>armunna223@gmail.com</p></td>
                    <td><img src="https://i.ibb.co/RGFgncT/p-1.jpg" style={{height:'40px'}} alt="demo" /></td>
                    <td><p>man's best quality product </p></td>
                    <td> <p><span>৳</span> 450</p></td>
                    <td><p className='text-primary'>panding</p> </td>
                    <td className='text-center'><AiFillDelete className='fs-4 p-1 bg-light rounded-pill shadow'/> </td>
                    </tr>
                    <tr>
                    <td>1</td>
                    <td><p>anisur rahman</p></td>
                    <td><p>armunna223@gmail.com</p></td>
                    <td><img src="https://i.ibb.co/RGFgncT/p-1.jpg" style={{height:'40px'}} alt="demo" /></td>
                    <td><p>man's best quality product </p></td>
                    <td> <p><span>৳</span> 450</p></td>
                    <td><p className='text-primary'>panding</p> </td>
                    <td className='text-center'><AiFillDelete className='fs-4 p-1 bg-light rounded-pill shadow'/> </td>
                    </tr>
                </tbody>
                </Table>

            </Row>
            </Container>
            
        </>
    );
};

export default AllOrder;