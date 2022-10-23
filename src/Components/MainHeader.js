import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import logo from './../img/Black-Orisaz.png'
import {FaAngleDown , FaSearch, FaRegUserCircle, FaRegHeart, FaShoppingCart} from 'react-icons/fa';



const MainHeader = () => {
    return (
        <>
      <Container fluid className='p-0'>
      <Navbar text="dark" expand="lg">
                <Container fluid>

                    <Navbar.Brand href="#home">
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
                            <a href='#' className="linkStyle" to="/home">Home</a>
                            <a href='#' className="linkStyle" to="/home">Shop</a>
                            <a href='#' className="linkStyle" to="/about">Catagory <FaAngleDown/></a>
                            <a href='#' className="linkStyle" to="/products">About</a>
                            <a href='#' className="linkStyle" to="/dashboard">DashBoard</a> 
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
									<FaRegHeart />
								</li>
								<li className='mx-3 fs-6'>
									<FaShoppingCart />
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