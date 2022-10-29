import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';


const MyOrder = () => {

    const [user, loading, error] = useAuthState(auth);

    
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/bookings?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])


    return (
        <>
            <Container>
            <Row>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                    <th>Order Id</th>
                    <th>Product Image</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => {
                            // const { _id, img, name, price } = order;

                            return(
                                <tr key={order.bookedProduct._id}>
                                <td>{order.bookedProduct._id}</td>
                                <td><img src={order.bookedProduct.productImage} style={{height: '40px'}} alt="demo" /></td>
                                <td><p>{order.bookedProduct.productName}</p></td>
                                <td> <p><span>৳</span> {order.bookedProduct.price}</p></td>
                                <td><p className='text-primary'>panding</p></td>
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

export default MyOrder;