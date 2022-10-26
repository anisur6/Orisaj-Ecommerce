import React from 'react';
import { Badge, Breadcrumb, Button, Col, Container, Row, Tab, Nav } from 'react-bootstrap';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import demoImg from './../img/p-2.jpg'
import {FiShoppingCart, FiShoppingBag} from 'react-icons/fi';
// import {FaShoppingBasket} from 'react-icons/fa';

const ProductDetail = () => {
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
                    <div className='my-2'>
                        <img src={demoImg} className="img-fluid" alt="product-img" />
                    </div>
                </Col>
                <Col md={6}>
                    <div className='my-2'>
                        <Badge bg="info" pill className='p-2' >Hot Sale</Badge>
                        <h4 className='fw-bold mt-2'>Man's High Quality T-Shirt</h4>
                        <span>
                        <FaStar className='text-warning me-1'/>
                        <FaStar className='text-warning me-1'/>
                        <FaStar className='text-warning me-1'/>
                        <FaStar className='text-warning me-1'/>
                        <FaStarHalf className='text-warning me-1'/>
                        (5 Reviews)
                        </span>
                        <div class="my-2 fs-6"><span class="text-muted small me-2 text-decoration-line-through">&#2547; 599</span><span class="fw-bold theme-cl fs-lg">&#2547; 400</span></div>
                        <p className='text-secondary lh-lg'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                        <div className='my-3'>
                        <p className='text-muted'>Catagory : <span className='text-dark fs-6'>Man's T-shirt</span></p>
                        <p className='text-muted'>SKU : <span className='text-dark fs-6'>DHFKJS232</span></p>
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
                            <Button className="btn btn-warning border-0 rounded-1 px-5 me-2 parcase-btn d-block">Buy Now <FiShoppingBag className="ms-1 product-icon" /></Button>
                            <Button className="btn btn-dark border-0 rounded-1 px-5 parcase-btn"> Add To Cart <FiShoppingCart className='ms-1 product-icon' /></Button>
                        </div>

                    </div>
                </Col>
            </Row>


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
              <p className='product-text text-muted '>Lorem ipsum dolor sit amet consectetur adipisicing elit. At labore nulla id saepe repellat quae nostrum numquam non ratione, nderit cum odit natus nemo et quis adipisci est illum. Itaque nobis alias ad earum ea excepturi ullam ipsum similique, necessitatibus debitis voluptate.</p>
              <p className='product-text text-muted '>Lorem ipsum dolor sitnimi nihil corporis veritatis reprehenderit cum odit natus nemo et quis adipisci est illum. Itaque nobis alias ad earum ea excepturi ullam ipsum similique, necessitatibus debitis voluptate.</p>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <p className='product-text text-muted'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam nemo temporibus alias vero nulla ex odit delectus sit dolor maxime.</p>
              <p className='product-text text-muted'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam nemo temporibus alias vero nulla ex odit delectus sit dolor maxime.</p>
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