import React, { useEffect, useState } from 'react';
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import { FaHome, FaRegUser, FaShoppingBasket, FaUserCircle, FaProductHunt } from 'react-icons/fa';
import { MdOutlinePreview, MdRateReview } from "react-icons/md";
import { GrAddCircle } from "react-icons/gr";
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { FiCreditCard, FiLogOut } from 'react-icons/fi';
import AddReview from './AddReview';
import AboutUs from './AboutUs';
import MyOrder from './MyOrder';
import AllOrder from './AllOrder';
import UserProfile from './UserProfile';
import AddProduct from './AddProduct';
import auth from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import ManageReview from './ManageReview';
import Payment from './Payment';
import Ruser from './Ruser';
import DUproduct from './DUproduct';


const Dashboard = () => {

    const [admin, setAdmin] = useState();


    const [user] = useAuthState(auth);
    const navigate = useNavigate()












    const logout = () => {
        signOut(auth);
      };

      if(!user){
        navigate('/');
      }






      useEffect(() => {
        const url = `https://backend.orisaz.com/users/${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])



      

      

   

 


    return (
        <>
        <Container fluid>
      
            <Breadcrumb className='p-3 breadcamb-font bg-light'>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            
            <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
      
        <Row className='my-5'>
            <Col md={3}>
            {/* dashboard nav style start */}
            <div class="d-block shadow">
                        <div class="px-2 py-3 text-center">
                            <div class="rounded-pill p-1 border d-inline-flex mx-auto mb-2">
                                {/* <img src="https://themezhub.net/kumo-demo-2/kumo/assets/img/team-1.jpg" class="img-fluid rounded-pill" width="100" alt="" /> */}
                                <img src="https://cdn-icons-png.flaticon.com/512/1144/1144709.png" class="img-fluid rounded-pill" width="100" alt="" />
                            </div>
                            <div class="dash_caption">
                                <h4 class="fs-md ft-medium mb-0 lh-1">{user.displayName}</h4>
                                <span class="text-muted small">{user.email}</span>
                            </div>
                        </div>
                        <div class="dashboard_author pb-3">
                            <h6 class="px-3 py-3 mb-0 bg-light text-muted text-uppercase text-left">Manage Account</h6>
                            <ul class="dahs_navbar">
                                {
                                    admin ?
                                    <li>
                                <Link className='linkStyle' to="allorder"><span><FaHome className='mb-1'/></span> Manage All Order</Link>
                                </li>
                                : ''

                                }
                                
                                <li>
                                <Link className='linkStyle ' to="myorder"><FaShoppingBasket className='mb-1'/> My Order</Link>
                                </li>
                                {
                                    admin ?
                                    <>
                                <li>
                                <Link className='linkStyle ' to="addproduct"><GrAddCircle className='mb-1'/> Add Product</Link>
                                </li> 
                                <li>
                                <Link className='linkStyle ' to="duproduct"><FaProductHunt className='mb-1'/> Manage Product</Link>
                                </li> 
                                 <li>
                                <Link className='linkStyle' to="manageReview"> <MdOutlinePreview className='mb-1'/>   Manage Review</Link>
                                </li> 
                                <li>
                                <Link className='linkStyle' to="ruser"> <FaUserCircle className='mb-1' /> Register User</Link>
                                </li>
                                <li>
                                <Link className='linkStyle' to="profile"><FaRegUser className='mb-1'/> Profile Info</Link>
                                </li>
                                </>
                                : ''

                                }

                                <li>
                                <Link className='linkStyle' to="payment"><FiCreditCard className='mb-1'/> Payment Method</Link>
                                </li>
                               
                                <li>
                                <Link className='linkStyle' to="addreview"><MdRateReview className='mb-1'/> Add Review</Link>
                                </li>
                                <li>
                                <Link className='linkStyle' onClick={logout} ><FiLogOut className='mb-1'/> Log Out</Link>
                                </li>
                        
                            </ul>
                        </div>
                        
                    </div>
            {/* dashboard nav style end */}
            </Col>

            <Col md={9}>
                 
        <Routes>
       
        <Route path="/" element={<AboutUs />} />
        <Route path="addreview"  element={<AddReview />} />
        <Route path="myorder"  element={<MyOrder />} />
        <Route path="allorder"  element={<AllOrder />} />
        <Route path="payment"  element={<Payment />} />
        <Route path="profile"  element={<UserProfile />} />
        <Route path="ruser"  element={<Ruser />} />
        <Route path="addproduct"  element={<AddProduct />} />
        <Route path="duproduct"  element={<DUproduct />} />
        <Route path="manageReview"  element={<ManageReview />} />
        
      </Routes>

   

            </Col>

        </Row>
        </Container>
        </>
    );
};

export default Dashboard;