import React from 'react';
import { Container, Row, Table } from 'react-bootstrap';


const MyOrder = () => {
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
                    <tr>
                    <td>1</td>
                    <td><img src="https://i.ibb.co/VDqXGbC/p-2.jpg" style={{height: '40px'}} alt="demo" /></td>
                    <td><p>man's best quality product </p></td>
                    <td> <p><span>৳</span> 450</p></td>
                    <td><p className='text-primary'>panding</p></td>
                    </tr>
                    <tr>
                    <td>1</td>
                    <td><img src="https://i.ibb.co/VDqXGbC/p-2.jpg" style={{height: '40px'}} alt="demo" /></td>
                    <td><p>man's best quality product </p></td>
                    <td> <p><span>৳</span> 450</p></td>
                    <td><p className='text-primary'>panding</p></td>
                    </tr>
                    <tr>
                    <td>1</td>
                    <td><img src="https://i.ibb.co/VDqXGbC/p-2.jpg" style={{height: '40px'}} alt="demo" /></td>
                    <td><p>man's best quality product </p></td>
                    <td> <p><span>৳</span> 450</p></td>
                    <td><p className='text-primary'>panding</p></td>
                    </tr>
                </tbody>
                </Table>

            </Row>
            </Container>
        </>
    );
};

export default MyOrder;