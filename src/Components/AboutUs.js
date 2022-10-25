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
        <div className='pt-3 pb-2 fs-5'>
            <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            
            <Breadcrumb.Item active>About</Breadcrumb.Item>
            </Breadcrumb>
        </div>
        </Container>
        </Container>
        <Container>
        
        



        <Row className="my-5">
                <Col md={6}>
                    <div>
                        <h4 className='fw-bold'>We Have Everything You Need ?</h4>
                        <p className='text-secondary fs-6 lh-lg'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                        <br/>
                        <p className='text-secondary fs-6 lh-lg'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                        <Button className="btn btn-dark border-0 rounded-1 px-5"> See More Info</Button>
                    </div>
                </Col>
                <Col md={6}>
                    <div className=''>
                        <img src={aboutImg} className="img-fluid" alt="product-img" />
                    </div>
                </Col>
            </Row>
           
        </Container>

        <Container fluid className='bg-light'>
            <Container>    
            <Row className='py-5'>
                <Col md={3}>
                    <div className='d-flex align-items-center'>
                        <div className='me-2'><FaShoppingBasket className='fs-1 text-success'/></div>
                        <div>
                            <p className='fw-bold text-uppercase mb-1 fs-6'>Free Shipping</p>
                            <p className='text-muted mb-0'>Shop more than 1000 taka.</p>
                        </div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className='d-flex align-items-center'>
                        <div className='me-2'><FaRegCreditCard className='fs-1 text-success'/></div>
                        <div>
                            <p className='fw-bold text-uppercase mb-1 fs-6'>Secure payment</p>
                            <p className='text-muted mb-0'>4+ payment System for shopping.</p>
                        </div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className='d-flex align-items-center'>
                        <div className='me-2'><FaShieldAlt className='fs-1 text-success'/></div>
                        <div>
                            <p className='fw-bold text-uppercase mb-1 fs-6'>Return policy</p>
                            <p className='text-muted mb-0'>With in a 3 days free change.</p>
                        </div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className='d-flex align-items-center'>
                        <div className='me-2'><BiSupport className='fs-1 text-success'/></div>
                        <div>
                            <p className='fw-bold text-uppercase mb-1 fs-6'>24/7 Support</p>
                            <p className='text-muted mb-0'>Get Support on Facebook Chatbot.</p>
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