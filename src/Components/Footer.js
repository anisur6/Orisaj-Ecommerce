import React from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import {FaFacebookSquare, FaInstagram, FaTwitterSquare, FaLinkedin, FaYoutube} from 'react-icons/fa';
import footerLogo from './../img/Black-Orisaz2.png'


const Footer = () => {
    return (
        <>
        <Container fluid className='footer py-1'>
            <Container>
                <Row>
                    <Col md={3}>
                    <div class="footer_widget">
						<img src={footerLogo} class="img-footer mb-2" alt="" />
									
									<div class="address mt-3">
										Mirpur 12, Pallabi, <br/>Dhaka, Bangladesh.	
									</div>
									<div class="address mt-3">
										+08801631009854<br/>help@orisaj.com
									</div>
									<div class="address mt-3">
										<ul class="list-inline">
											<li class="list-inline-item"><FaFacebookSquare/></li>
											<li class="list-inline-item"><FaInstagram/></li>
											<li class="list-inline-item"><FaTwitterSquare/></li>
											<li class="list-inline-item"><FaLinkedin/></li>
											<li class="list-inline-item"><FaYoutube/></li>
										</ul>
									</div>
								</div>
                    </Col>
                    <Col md={3}>
                    <div class="footer_widget mt-3">
                        <h4 class="widget_title">Shop</h4>
                        <ul class="footer-menu">
                            <li>Mans's Shopping</li>
                            <li>Women's Shopping</li>
                            <li>Kid's Shopping</li>
                            <li>Sneakers</li>
                            <li>Accaseores</li>
                        </ul>
                    </div>
                    </Col>
                    <Col md={3}>
                    <div class="footer_widget mt-3">
                        <h4 class="widget_title">Company</h4>
                        <ul class="footer-menu">
                            <li>Contact Us</li>
                            <li>About Page</li>
                            <li>Shipping &amp; Returns</li>
                            <li>FAQ's Page</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                    </Col>
                    <Col md={3}>
                    <div class="footer_widget mt-3">
									<h4 class="widget_title">Subscribe</h4>
									<p>Receive updates, hot deals, discounts sent straignt in your inbox daily</p>
									<div class="foot-news-last">
										
                                        <InputGroup className="mb-3">
                                            <Form.Control
                                            placeholder="Recipient's username"
                                            aria-label="Recipient's username"
                                            aria-describedby="basic-addon2"
                                            />
                                            <Button variant="outline-secondary" id="button-addon2">
                                            Subscribe
                                            </Button>
                                        </InputGroup>
									</div>
									<div class="address mt-3">
										<h5 class="fs-sm text-light">Secure Payments</h5>
										<div class="scr_payment"><img src="https://themezhub.net/kumo-demo-2/kumo/assets/img/card.png" class="img-fluid" alt="" /></div>
									</div>
								</div>
                    </Col>
                </Row>

                <hr/>

                
					<div class="container">
						<div class="row align-items-center">
							<div class="col-lg-12 col-md-12 text-center">
								<p class="mb-0">©Copyright Reserve 2023 Orisaz. Designd & Developed By <a href="https://themezhub.com">Anisur Rahman</a>.</p>
							</div>
						</div>
					</div>
			

            </Container>
        </Container>
            
        </>
    );
};

export default Footer;