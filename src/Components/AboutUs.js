import React from 'react';
import { Breadcrumb, Button, Col, Container, Row } from 'react-bootstrap';
import aboutImg from './../img/About.webp';
import {FaShoppingBasket, FaRegCreditCard, FaShieldAlt} from 'react-icons/fa';
import { BiSupport } from "react-icons/bi";



const AboutUs = () => {
    return (
        <>
        <Container fluid className='bg-light'>
        <Container>
        <div className='pt-3 pb-2 breadcamb-font'>
            <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            
            <Breadcrumb.Item active>About</Breadcrumb.Item>
            </Breadcrumb>
        </div>
        </Container>
        </Container>
        <Container>
        
        



        <Row className="my-2">
                <Col md={6}>
                    <div className='my-3'>
                        <img src={aboutImg} className="img-fluid" alt="product-img" />
                    </div>
                </Col>
                <Col md={6}>
                    <div className='my-3'>
                        <h5 className='fw-bold'>We Ensure Best Quality... !!!</h5>
                        <p className='about-text text-secondary lh-lg'>Orisaz is a clothing brand based in Bangladesh. Where You Can Get Your Necesary Apparel. We fulfill the clothing needs with the best quality & trendy fashion at an affordable price. </p>
                        <br/>
                        <p className='about-text text-secondary lh-lg'>We are not just trying to sell clothes, we want to be part of your everyday lifestyle. With the help of top designers and fabric experts, we want every one of our products to bring out the best in you. Comfortable wear with a dashing look, we all are trying to achieve such in our daily lives.</p>
                        <p className='about-text text-secondary lh-lg'>Orisaz - Make You a Brand</p>
                        <Button className="responsive-btn btn btn-dark border-0 rounded-1 px-5"> See More Info</Button>
                    </div>
                </Col>
                
            </Row>
           
        </Container>

        <Container fluid className='bg-light'>
            <Container>    
            <Row className='py-5 '>
                <Col md={3} xs={6}>
                    <div className='d-flex align-items-center about-policy'>
                        <div className='me-2'><FaShoppingBasket className='fs-1 text-success'/></div>
                        <div>
                            <p className='fw-bold text-uppercase mb-1 fs-6'>Free Shipping</p>
                            <p className='text-muted small mb-0'>Shop more than 1000 taka.</p>
                        </div>
                    </div>
                </Col>
                <Col md={3} xs={6}>
                    <div className='d-flex align-items-center about-policy'>
                        <div className='me-2'><FaRegCreditCard className='fs-1 text-success'/></div>
                        <div>
                            <p className='fw-bold text-uppercase mb-1 fs-6'>Secure payment</p>
                            <p className='text-muted small mb-0'>4+ payment System for shopping.</p>
                        </div>
                    </div>
                </Col>
                <Col md={3} xs={6}>
                    <div className='d-flex align-items-center about-policy'>
                        <div className='me-2'><FaShieldAlt className='fs-1 text-success'/></div>
                        <div>
                            <p className='fw-bold text-uppercase mb-1 fs-6'>Return policy</p>
                            <p className='text-muted small mb-0'>With in a 3 days free change.</p>
                        </div>
                    </div>
                </Col>
                <Col md={3} xs={6}>
                    <div className='d-flex align-items-center about-policy'>
                        <div className='me-2'><BiSupport className='fs-1 text-success'/></div>
                        <div>
                            <p className='fw-bold text-uppercase mb-1 fs-6'>24/7 Support</p>
                            <p className='text-muted small mb-0'>Get Support on Facebook Chatbot.</p>
                        </div>
                    </div>
                </Col>
            </Row>  
            </Container>
        </Container>
            
        </>
    );
};

export default AboutUs;