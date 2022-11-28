import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { swal } from 'sweetalert';
import Heading from './Heading';

const ManageReview = () => {

    const [allreviews, setAllreview] = useState([]);

    useEffect(() => {
        fetch('https://backend.orisaz.com/ratings')
            .then(res => res.json())
            .then(data => setAllreview(data));
    }, []);



    const handleDeleteReview = id => {
        const url = `https://backend.orisaz.com/ratings/${id}`
        fetch(url, {
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                const remainingReview = allreviews.filter(order => order._id !== id)
                setAllreview(remainingReview);
                swal("User Review Deleted!", "success");
            }
        })
    }






    return (

        <>
           
         <Container>

                <div className='text-center pb-2'>
                    <Heading mainText="Manage users Reviews" />
                </div>

            <Row>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                    <th>Reviewer Id</th>
                    <th>Reviewer Name </th>
                    <th>Reviewer Email </th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allreviews.map(review => { 
                            // const {_id, name, email, description} = review;
                            return(
                                <>
                                <tr key={review._id}>
                                <td>{review._id}</td>
                                <td><p>{review.name}</p></td>
                                <td><p>{review.email}</p></td>
                                <td><p>{review.description}</p></td>
                                <td><p className='text-success'>Published</p> </td>
                                <td className='text-center'><AiFillDelete onClick={() => handleDeleteReview(review._id)} className='fs-4 p-1 bg-light rounded-pill shadow'/> </td>
                                </tr>
                                </>
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

export default ManageReview;