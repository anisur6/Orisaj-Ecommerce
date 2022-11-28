import React, { useEffect, useState } from 'react';
import { Container, Carousel } from 'react-bootstrap';
import Heading from './Heading';
import { Rating } from 'react-simple-star-rating';

const Testemonials = () => {

    
    const [rating, setRating] = useState([]);

    useEffect(() => {
        fetch('https://backend.orisaz.com/ratings')
            .then(res => res.json())
            .then(data => setRating(data));
    }, [])


    return (
        <>
        <Container fluid className='testemonial py-5 bg-light'>
            <Heading bgText="Testemonials" mainText="Customer Review" />


            <Carousel variant='dark'>
                {
                    rating.map(singlerating => {
                        const {name, email, description, ratings} = singlerating;
                        return(
                           
                            <Carousel.Item>
                            <div className='testemonial-container text-center'>
                            <img className="rounded-pill testemonial-img" src='https://cdn-icons-png.flaticon.com/512/64/64572.png' alt="First Review" />
                            <span className='d-block'>
                            <Rating readonly size={30} ratingValue={ratings} />

                            </span>
                            <p className='Review-text'>{description}</p>
                            
                            <h3>{name}</h3>
                            <p className='review-text mb-1'>{email}</p>
                            <p className='Review-text small'>Registered Customer</p>
                            </div>
                            </Carousel.Item>
                          
                        );
                    })
                }
            
            
                </Carousel>
            
        </Container>
            
        </>
    );
};

export default Testemonials;