import React, { useEffect, useState } from 'react';
import { Badge, Breadcrumb, Button, Col, Container, Row, Tab, Nav, Modal } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import {FiShoppingCart, FiShoppingBag} from 'react-icons/fi';
import {useNavigate, useParams } from 'react-router-dom';
import auth from '../firebase.init';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';

// import {FaShoppingBasket} from 'react-icons/fa';

const ProductDetail = () => {
  const {id} = useParams();

  const [user] = useAuthState(auth);

  const { register, handleSubmit, reset } = useForm();

  const [product, setProduct] = useState({})


  useEffect(() => {
    const url = `https://backend.orisaz.com/allproducts/${id}`;
      fetch(url)
          .then(res => res.json())
          .then(data => setProduct(data));
  }, [id])


  const navigate = useNavigate();


  // modal controls 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  // sending product data + user info to DB 
  const onSubmit = data => {
    data.bookedProduct = product;
    fetch('https://backend.orisaz.com/bookings', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(result => {
            if (result.insertedId) {
                window.alert('Are you sure to book this ?')
                reset();
                swal("Order Confirmed!", "You will get response Soon!", "success");
                navigate("/");
            }
        })

};






    return (
        <>
        <Container className='py-5 '>
            <div className='pt-3 pb-2 breadcamb-font'>
            <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Products
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Men's T-shirt-2016</Breadcrumb.Item>
            </Breadcrumb>
            </div>

              
                  <Row>
                <Col md={6}>
                    <div className='my-3'>
                        <img src={product.productImage} className="img-fluid" alt="product-img" />
                    </div>
                </Col>
                <Col md={6}>
                    <div className='my-3'>
                        <Badge bg="info" pill className='p-2' >Hot Sale</Badge>
                        <h4 className='fw-bold mt-2'>{product.productName}</h4>
                        <span>
                        <FaStar className='text-warning me-1'/>
                        <FaStar className='text-warning me-1'/>
                        <FaStar className='text-warning me-1'/>
                        <FaStar className='text-warning me-1'/>
                        <FaStarHalf className='text-warning me-1'/>
                        ({product.rating}) Rating
                        </span>
                        <div class="my-2 fs-6"><span class="text-muted small me-2 text-decoration-line-through">&#2547; {product.mutedprice}</span><span class="fw-bold theme-cl fs-lg">&#2547; {product.price}</span></div>
                        <p className='text-secondary lh-lg'>{product.description}</p>
                        <div className='my-3'>
                        <p className='text-muted'>Catagory : <span className='text-dark fs-6'>{product.catagory}</span></p>
                        <p className='text-muted'>SKU : <span className='text-dark fs-6'>{product.code}</span></p>
                        <p className='text-muted'>Color : <span className='text-dark fs-6'>{product.color}</span></p>
                        <p className='text-muted'>Size : <span className='text-dark fs-6'>{product.size}</span></p>
                        </div>

                        <div className='d-flex align-items-center'>
                            <span className='fs-5 me-2'>Select Quantity</span>
                        <select class="form-select rounded-0 border-0 w-25" aria-label="Default select example">
                            <option selected>1</option>
                            <option value="1">2</option>
                            <option value="2">3</option>
                            <option value="3">4</option>
                            </select>
                        </div>
                        <div className='d-flex my-4'>
                       {
                        user ?
                        <>
                            <Button onClick={handleShow} className="btn btn-warning border-0 rounded-1 px-5 me-2 parcase-btn d-block">Buy Now <FiShoppingBag className="ms-1 product-icon" /></Button>
                            <Button className="btn btn-dark border-0 rounded-1 px-5 parcase-btn"> Add To Cart <FiShoppingCart className='ms-1 product-icon' /></Button>
                        </>
                        :
                        <Button className="btn btn-dark border-0 rounded-1 px-5 parcase-btn"> Add To Cart <FiShoppingCart className='ms-1 product-icon' /></Button>
                      
                       }
                        
                        </div>

                    </div>
                </Col>
            </Row>



            {/* user booking modal */}
            <Modal
            size="lg"
            centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add User Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
              <Row>
              <form onSubmit={handleSubmit(onSubmit)}>
                                <input className="form-control mt-3 border-0 shadow p-2" {...register("name")} value={user.displayName} />
                                <input className="form-control mt-3 border-0 shadow p-2" {...register("email")} value={user.email} />
                                <input className="form-control mt-3 border-0 shadow p-2" placeholder="Phone Number" type="number" {...register("phone")} required />
                                <textarea className="form-control mt-3 border-0 shadow p-2" placeholder="Your Full Address" {...register("address")} required />
                                {/* <input className="mt-3 btn btn-success w-50 me-1 border-0 p-2" type="submit" /> */}
                                <Button className="btn border-0 shadow btn-light px-5 my-3 fs-6" type="submit">Confirm Order</Button> 
                </form>
                       
              </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          
        </Modal.Footer>
      </Modal>
            {/* user booking modal */}
              
               


            {/* ///droduct details */}

            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row  className="mt-5 mb-3 align-items-center">
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first" className='linkStyle text-center'>Description</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className='linkStyle text-center' >Additional Info</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9} className="border-start border-2">
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <p className='product-text text-muted '>{product.description}</p>
              <p className='product-text text-muted '>{product.description}</p>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <p className='product-text text-muted'>{product.additionalInfo}</p>
              <p className='product-text text-muted'>{product.additionalInfo}</p>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>


        </Container>
            
        </>
    );
};

export default ProductDetail;