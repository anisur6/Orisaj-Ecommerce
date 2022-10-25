import React from 'react';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import logo from './../img/Black-Orisaz.png'
import {FaAngleDown , FaSearch, FaRegUserCircle, FaShoppingCart} from 'react-icons/fa';
import { Link } from 'react-router-dom';



const MainHeader = () => {
    return (
        <>
      <Container fluid className='p-0'>
      <Navbar text="dark" expand="lg">
                <Container fluid>

                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            width="auto"
                            height="45"
                            className="d-inline-block align-top ms-2 me-5"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle className="border-0" aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                        <Nav className="me-auto my-2  me-3 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <Link to="/" className='linkStyle'>Home</Link>
                            <Link to="/product" className='linkStyle'>Shop</Link>
                            <Link to="/product" className='linkStyle'>Catagory <FaAngleDown/></Link>
                            <Link to="/about" className='linkStyle'>About</Link>
                            <Link to="/productDetail" className='linkStyle'>singleProduct</Link>
                            <Link to="/" className='linkStyle'>Dashboard</Link>
                            
                            
                        </Nav>
                        <div className="d-flex">
                        <ul className="d-flex justify-content-between mb-0">
								<li className='mx-3 fs-6'>
									<FaSearch />
								</li>
								<li className='mx-3 fs-6'>
									<FaRegUserCircle />
								</li>
								
								<li className='mx-3 fs-6'>
									<FaShoppingCart />
								</li>
                                <li>
                                <Link to="/register" className='shadow p-2 linkStyle ms-2'>
                                        Login/ Register
                                    </Link>
                                </li>
                                    
                              
							</ul>
                            
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
      </Container> 
        </>
    );
};

export default MainHeader;