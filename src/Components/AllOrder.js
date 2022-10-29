import React, { useEffect, useState } from 'react';
import { AiFillDelete } from "react-icons/ai";
import { Container, Row, Table } from 'react-bootstrap';
import swal from 'sweetalert';

const AllOrder = () => {

    const [allOrder, setAllOrder] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => setAllOrder(data));
    }, []);

    const handleDeleteOrder = id => {
        const url = `http://localhost:5000/bookings/${id}`
        fetch(url, {
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                swal("User Order Deleted!", "success");
                const remainingOrder = allOrder.filter(order => order._id !== id)
                setAllOrder(remainingOrder);
            }
        })
    }


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
                    {
                        allOrder.map(order => {

                            return(
                                <tr key={order._id}>
                                <td>{order._id}</td>
                                <td><p>{order.name}</p></td>
                                <td><p>{order.email}</p></td>
                                <td><img src={order.bookedProduct.productImage} style={{height:'40px'}} alt="demo" /></td>
                                <td><p>{order.bookedProduct.productName}</p></td>
                                <td> <p><span>৳</span> {order.bookedProduct.price}</p></td>
                                <td><p className='text-primary'>panding</p> </td>
                                <td className='text-center'><AiFillDelete onClick={() => handleDeleteOrder(order._id)} className='fs-4 p-1 bg-light rounded-pill shadow'/> </td>
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

export default AllOrder;