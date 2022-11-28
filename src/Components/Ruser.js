import React from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import Heading from './Heading';

const Ruser = () => {
    return (
        <>
           <Container>
                <div className='text-center pb-2'>
                    <Heading mainText="All Registred User List" />
                </div>
            <Row>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                    <th>user No</th>
                    <th>Customer Name </th>
                    <th>Email </th>
                    <th>Phone Number </th>
                    <th className='text-center'>Delete Account</th>
                    </tr>
                </thead>
                <tbody>
                  
                                <tr>
                                <td>1</td>
                                <td><p>Rafi Khan</p></td>
                                <td><p>rafi@gmail.com</p></td>
                                <td><p>0181892345</p></td>
                                <td className='text-center'><AiFillDelete className='fs-4 p-1 bg-light rounded-pill shadow'/> </td>
                                </tr>
                                <tr>
                                <td>1</td>
                                <td><p>Rafi Khan</p></td>
                                <td><p>rafi@gmail.com</p></td>
                                <td><p>0181892345</p></td>
                                <td className='text-center'><AiFillDelete className='fs-4 p-1 bg-light rounded-pill shadow'/> </td>
                                </tr>
                                <tr>
                                <td>1</td>
                                <td><p>Rafi Khan</p></td>
                                <td><p>rafi@gmail.com</p></td>
                                <td><p>0181892345</p></td>
                                <td className='text-center'><AiFillDelete className='fs-4 p-1 bg-light rounded-pill shadow'/> </td>
                                </tr>
                                <tr>
                                <td>1</td>
                                <td><p>Rafi Khan</p></td>
                                <td><p>rafi@gmail.com</p></td>
                                <td><p>0181892345</p></td>
                                <td className='text-center'><AiFillDelete className='fs-4 p-1 bg-light rounded-pill shadow'/> </td>
                                </tr>
                                <tr>
                                <td>1</td>
                                <td><p>Rafi Khan</p></td>
                                <td><p>rafi@gmail.com</p></td>
                                <td><p>0181892345</p></td>
                                <td className='text-center'><AiFillDelete className='fs-4 p-1 bg-light rounded-pill shadow'/> </td>
                                </tr>
                                <tr>
                                <td>1</td>
                                <td><p>Rafi Khan</p></td>
                                <td><p>rafi@gmail.com</p></td>
                                <td><p>0181892345</p></td>
                                <td className='text-center'><AiFillDelete className='fs-4 p-1 bg-light rounded-pill shadow'/> </td>
                                </tr>
                                <tr>
                                <td>1</td>
                                <td><p>Rafi Khan</p></td>
                                <td><p>rafi@gmail.com</p></td>
                                <td><p>0181892345</p></td>
                                <td className='text-center'><AiFillDelete className='fs-4 p-1 bg-light rounded-pill shadow'/> </td>
                                </tr>
                                <tr>
                                <td>1</td>
                                <td><p>Rafi Khan</p></td>
                                <td><p>rafi@gmail.com</p></td>
                                <td><p>0181892345</p></td>
                                <td className='text-center'><AiFillDelete className='fs-4 p-1 bg-light rounded-pill shadow'/> </td>
                                </tr>
                                <tr>
                                <td>1</td>
                                <td><p>Rafi Khan</p></td>
                                <td><p>rafi@gmail.com</p></td>
                                <td><p>0181892345</p></td>
                                <td className='text-center'><AiFillDelete className='fs-4 p-1 bg-light rounded-pill shadow'/> </td>
                                </tr>
                                <tr>
                                <td>1</td>
                                <td><p>Rafi Khan</p></td>
                                <td><p>rafi@gmail.com</p></td>
                                <td><p>0181892345</p></td>
                                <td className='text-center'><AiFillDelete className='fs-4 p-1 bg-light rounded-pill shadow'/> </td>
                                </tr>
                                <tr>
                                <td>1</td>
                                <td><p>kabila kanam</p></td>
                                <td><p>rafi@gmail.com</p></td>
                                <td><p>0181892345</p></td>
                                <td className='text-center'><AiFillDelete className='fs-4 p-1 bg-light rounded-pill shadow'/> </td>
                                </tr>
                                <tr>
                                <td>1</td>
                                <td><p>Rafi Khan</p></td>
                                <td><p>rafi@gmail.com</p></td>
                                <td><p>0181892345</p></td>
                                <td className='text-center'><AiFillDelete className='fs-4 p-1 bg-light rounded-pill shadow'/> </td>
                                </tr>
                                <tr>
                                <td>1</td>
                                <td><p>Rafi Khan</p></td>
                                <td><p>rafi@gmail.com</p></td>
                                <td><p>0181892345</p></td>
                                <td className='text-center'><AiFillDelete className='fs-4 p-1 bg-light rounded-pill shadow'/> </td>
                                </tr>
                  
                </tbody>
                </Table>

            </Row>
            </Container>
             
        </>
    );
};

export default Ruser;