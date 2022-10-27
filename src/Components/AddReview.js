import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';
import Heading from './Heading';


const AddReview = () => {
    const [rating, setRating] = useState(0)

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
     ]

    return (
        <>
        <Container>
        <Heading bgText="User Review" mainText="Review Us" />
        <div className='w-75 mx-auto mt-5'>
        <input className='form-control my-4 p-3 border-0 shadow' type="text" placeholder='Your Name' />
        <textarea className="p-2 form-control my-4 p-3 border-0 shadow" placeholder='Add detail' />
        <span className='d-block my-3'>
        <Rating onClick={handleRating} tooltip={tooltip} allowHalfIcon showTooltip ratingValue={rating} />
        </span>
        <Button className="btn border-0 shadow btn-light px-5 my-2 fs-5" type="submit">Add Review</Button> 
        </div>
        </Container>
            
        </>
    );
};

export default AddReview;