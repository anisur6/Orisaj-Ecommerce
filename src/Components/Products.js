import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from './Heading';
import {FaStar, FaStarHalf} from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('https://backend.orisaz.com/allproducts')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])


    return (
        <>
        <Heading bgText="Orisaj Products" mainText="Sample Products" />

        <Container className='mb-5 shop-product'>
        
        <Row>
            {
                products.map(product => {
                   const {_id, productName, productImage, price, rating} = product;
                    return(
                        <>
                        
                        <Col key={_id} md={3} xs={6} className='text-center my-4'>
                        <Link to={`/productDetail/${_id}`} className="text-decoration-none text-dark">
                        <div class="card border-0 rounded-0">
                        <div class="badge bg-info text-white position-absolute ft-regular ab-left text-upper">Sale</div>
                        <div class="card-body p-0">
                            <div class="shop_thumb position-relative">
                                <img class="card-img-top" src={productImage} alt="..." />
                            
                            </div>
                        </div>
                        <div class="card-footer p-0 pt-2 bg-white d-flex align-items-start justify-content-between">
                            <div class="text-start">
                                <div class="card-body-contant text-start">
                                    <div class="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
                                        <FaStar className='text-warning me-1'/>
                                        <FaStar className='text-warning me-1'/>
                                        <FaStar className='text-warning me-1'/>
                                        <FaStar className='text-warning me-1'/>
                                        <FaStarHalf className='text-warning me-1'/>
                                        <span class="small">{rating} Reviews</span>
                                    </div>
                                    <h6 class="fs-5">{productName}</h6>
                                    <span class="fw-bold text-dark small d-block"> ৳ {price}</span>
                                </div>
                            </div>
                        </div>
                        </div>
                        </Link>
                        </Col>
                        </>
                    );
                })
            }

            
  
        </Row>
    
        </Container>
            
        </>
    );
};

export default Products;