import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner2 from './../img/banner-2.png'
import banner3 from './../img/banner-3.png'

const Caurosel = () => {
    return (
        <>
            <Carousel variant="dark">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={banner3}
                alt="First slide"
                />
                <Carousel.Caption>
                    <div className='text-start'>
                    <span className='text-danger text-uppercase d-block'>Summer Collection</span>
                    <h1>2022 new <br /> Summer collection</h1>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <button type='button' className='btn btn-outline-secondary mt-3 px-5'>Shop Now</button>

                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={banner2}
                alt="Second slide"
                />
                <Carousel.Caption>
                    <div className='text-start'>
                    <span className='text-danger text-uppercase d-block'>Summer Collection</span>
                    <h1>2022 new <br /> Summer collection</h1>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <button type='button' className='btn btn-outline-secondary mt-3 px-5'>Shop Now</button>

                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={banner3}
                alt="First slide"
                />
                <Carousel.Caption>
                    <div className='text-start'>
                    <span className='text-danger text-uppercase d-block'>Summer Collection</span>
                    <h1>2022 new <br /> Summer collection</h1>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <button type='button' className='btn btn-outline-secondary mt-3 px-5'>Shop Now</button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Caurosel;