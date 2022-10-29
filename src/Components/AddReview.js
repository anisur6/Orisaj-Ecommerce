import axios from 'axios';
import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import swal from 'sweetalert';
import auth from '../firebase.init';
import Heading from './Heading';


const AddReview = () => {

    const [User] = useAuthState(auth);


    const navigate = useNavigate();

    const [rating, setRating] = useState(0)

    const { register, handleSubmit, reset } = useForm();

    const handleRating = (rate) => {
        setRating(rate)
      }

      const tooltip = [
        'Terrible',
        'Terrible+',
        'Bad',
        'Bad+',
        'Average',
        'Average+',
        'Great',
        'Great+',
        'Awesome',
        'Awesome+'
     ];

    
     const onSubmit = data => {
        data.ratings = rating;
         axios.post('http://localhost:5000/ratings', data)
             .then(res => {
                 if (res.data.insertedId) {
                     window.alert('Are you Sure to Add Review ?');
                     reset();
                     swal("SuccessFul!", "You Review will added soon!", "success");
                    navigate("/");
                 }
             })
     };

    return (
        <>
        <Container>
        <Heading bgText="User Review" mainText="Review Us" />
        <div className='w-75 mx-auto mt-5'>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input className='form-control my-4 p-3 border-0 shadow' type="text" placeholder='Your Name' {...register("name")} value={User.displayName} />
        <input className='form-control my-4 p-3 border-0 shadow' type="email" placeholder='Your Email' {...register("email")} value={User.email} />
        <textarea className="p-2 form-control my-4 p-3 border-0 shadow" placeholder='Add detail' {...register("description")} />
        <span className='d-block my-3'>
        <Rating onClick={handleRating} tooltip={tooltip} allowHalfIcon showTooltip  ratingValue={rating} />
        </span>
        <Button className="btn border-0 shadow btn-light px-5 my-2 fs-5" type="submit">Add Review</Button> 
        </form>
        </div>
        </Container>
            
        </>
    );
};

export default AddReview;