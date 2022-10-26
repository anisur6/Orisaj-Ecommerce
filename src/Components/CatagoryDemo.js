import React from 'react';
import {Container} from 'react-bootstrap';
import Heading from './Heading';

const CatagoryDemo = () => {
    return (
        <Container>
              <Heading bgText="Popular Catagories" mainText="Tranding Catagories" />
            <div className='catagories my-5 d-flex'>
                
                    <div className='catagory-alignment'>
                        <img src="https://cdn-icons-png.flaticon.com/128/2523/2523707.png" alt='catagory-1' className='catagory-img border'  />
                        <p className='text-dark fw-bold mt-3'>Men's Tshirt</p>
                    </div>
             
                    <div className='catagory-alignment'>
                        <img src="https://cdn-icons-png.flaticon.com/128/8761/8761249.png" alt='catagory-1' className='catagory-img border'  />
                        <p className='text-dark fw-bold mt-3'>Kids's Tshirt</p>
                    </div>
                
                    <div className='catagory-alignment'>
                        <img src="https://cdn-icons-png.flaticon.com/128/2912/2912537.png" alt='catagory-1' className='catagory-img border'  />
                        <p className='text-dark fw-bold mt-3'>Men's Pants</p>
                    </div>
               
                    <div className='catagory-alignment'>
                        <img src="https://cdn-icons-png.flaticon.com/128/2741/2741333.png" alt='catagory-1' className='catagory-img border'  />
                        <p className='text-dark fw-bold mt-3'>Sneakers</p>
                    </div>
             
            
                    <div className='catagory-alignment'>
                        <img src="https://cdn-icons-png.flaticon.com/128/3845/3845840.png" alt='catagory-1' className='catagory-img border'  />
                        <p className='text-dark fw-bold mt-3'>Accessories</p>
                    </div>

            </div>


        </Container>
    );
};

export default CatagoryDemo;