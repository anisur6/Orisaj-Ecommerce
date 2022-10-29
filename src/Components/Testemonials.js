import React, { useEffect, useState } from 'react';
import { Container, Carousel } from 'react-bootstrap';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import Heading from './Heading';

const Testemonials = () => {

    
    const [rating, setRating] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/ratings')
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
                            <img className="rounded-pill testemonial-img" src='https://themezhub.net/kumo-demo-2/kumo/assets/img/team-1.jpg' alt="First Review" />
                            <span className='d-block'>
                            <FaStar className='text-warning me-1'/>
                            <FaStar className='text-warning me-1'/>
                            <FaStar className='text-warning me-1'/>
                            <FaStar className='text-warning me-1'/>
                            <FaStarHalf className='text-warning me-1'/>
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