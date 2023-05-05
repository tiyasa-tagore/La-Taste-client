import React from 'react';
import Chefone from '../../../assets/icons/Chef1.jpg'
import './HomeFirst.css'
import { Col, Container, Row } from 'react-bootstrap';

const HomeFirst = () => {
    return (
    <div >
        
        <Row className='mx-auto'>
        <Col sm={8}>
            <img src={Chefone} className="MainImage img-fluid mt-5" alt="" />
        </Col>
        <Col sm={4}>
        <div >
               <div  className='MainText text-center fs-1'> WELCOME to LA TASTE</div>
               <div className='text-center fs-5 mt-2'>
                 Experience a foodaholic journey.
                 <br />  Join us on our culinary journey,
                 <br />
                  we hope you find plenty of 
                 <br />
                 inspiration.
               </div>
            </div>
            </Col>
      </Row>

         
            
            </div>
            
           
    
    );
};

export default HomeFirst;