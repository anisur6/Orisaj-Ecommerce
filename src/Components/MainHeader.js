import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import logo from './../img/Black-Orisaz.png'
import {FaAngleDown , FaSearch, FaRegUserCircle, FaShoppingCart} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { FaBars } from "react-icons/fa";


const MainHeader = () => {

    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
      };

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

                    
                    <Navbar.Toggle   className="border-0"  aria-controls="navbarScroll" />
                   
                    <Navbar.Collapse id="navbarScroll">

                        <Nav className="navigation-links me-auto my-2  me-3 my-lg-0"
                            navbarScroll>
                            <Link to="/" className='linkStyle'>Home</Link>
                            <Link to="/product" className='linkStyle'>Shop</Link>
                            <Link to="/product" className='linkStyle'>Catagory <FaAngleDown/></Link>
                            <Link to="/about" className='linkStyle'>About</Link>
                            <Link to="/productDetail" className='linkStyle'>singleProduct</Link>
                            <Link to="/dashboard" className='linkStyle'>Dashboard</Link>
                            
                            
                        </Nav>
                        <div className="flex-element d-flex">
                        <ul className="d-flex justify-content-between mb-0">
								<li className='mx-3 fs-6'>
									<FaSearch />
								</li>
                               

                                {
                                    user ?
                                    <li className='mx-3'>
                                        <p className='text-success'>{user.displayName}</p>
                                    </li>
                                    : 
                                    <li className='mx-3 fs-6'>
									<FaShoppingCart />
								    </li>
                                }

								<li className='mx-3 fs-6 d-none d-sm-none d-md-block'>
									<FaRegUserCircle />
								</li>
								
								
                                {
                                user ? 
                                <li>
                                    <Link onClick={logout} className='shadow px-3 py-1 linkStyle ms-2'>Sign Out</Link> 
                                </li>
                                  :  
                                <li>    
                                <Link to="/register" className='shadow px-3 py-1 linkStyle ms-2'>
                                        Login/Register
                                    </Link>
                                </li>
            }
                                
                                    
                              
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