import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import Heading from './Heading';

const Testemonials = () => {
    return (
        <>
        <Container fluid className='testemonial py-5 bg-light'>
            <Heading bgText="Testemonials" mainText="Customer Review" />


            <Carousel variant='dark'>
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
                <p className='Review-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At eius magnam neque? Nemo ipsa, incidunt, assumenda sit corrupti ut quam tempore numquam officiis nulla odio deserunt. Eum, quos tenetur delectus maxime aliquid amet quod aliquam maiores rem. Atque, harum doloribus.</p>
                
                <h3>Makik Star</h3>
                <p className='Review-text'>Registered Customer</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='testemonial-container text-center'>
                <img className="rounded-pill testemonial-img" src='https://themezhub.net/kumo-demo-2/kumo/assets/img/team-1.jpg' alt="Second Review" />
                <span className='d-block'>
                <FaStar className='text-warning me-1'/>
                <FaStar className='text-warning me-1'/>
                <FaStar className='text-warning me-1'/>
                <FaStar className='text-warning me-1'/>
                <FaStarHalf className='text-warning me-1'/>
                </span>
                <p className='Review-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At eius magnam neque? Nemo ipsa, incidunt, assumenda sit corrupti ut quam tempore numquam officiis nulla odio deserunt. Eum, quos tenetur delectus maxime aliquid amet quod aliquam maiores rem. Atque, harum doloribus.</p>
                <h3>Makik Star</h3>
                <p className='Review-text'>Registered Customer</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='testemonial-container text-center'>
                <img className="rounded-pill testemonial-img" src='https://themezhub.net/kumo-demo-2/kumo/assets/img/team-1.jpg' alt="third Review" />
                <span className='d-block'>
                <FaStar className='text-warning me-1'/>
                <FaStar className='text-warning me-1'/>
                <FaStar className='text-warning me-1'/>
                <FaStar className='text-warning me-1'/>
                <FaStarHalf className='text-warning me-1'/>
                </span>
                <p className='Review-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At eius magnam neque? Nemo ipsa, incidunt, assumenda sit corrupti ut quam tempore numquam officiis nulla odio deserunt. Eum, quos tenetur delectus maxime aliquid amet quod aliquam maiores rem. Atque, harum doloribus.</p>
                <h3>Makik Star</h3>
                <p className='Review-text'>Registered Customer</p>
                </div>
            </Carousel.Item>
            </Carousel>
        </Container>
            
        </>
    );
};

export default Testemonials;