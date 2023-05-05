import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Food from '../../../assets/icons/food.jpg'
import { FaHeart } from 'react-icons/fa';

const HomeThird = () => {
    return (
        <div className='p-2 mt-4 mb-4'>
            <h1 className='text-center'>Recipe of the MONTH!!!!</h1>
            <Row xs={1} md={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={Food} />
            <Card.Body  className='bg-success bg-opacity-50'>
              <Card.Title className='fs-2 text-center'>Yakitori Udon-  <FaHeart ></FaHeart></Card.Title>
              <Card.Text>
                <h3>Recipe: </h3> <p> In a large skillet, heat olive oil. Sauté onion, cabbage, salt, pepper, and ginger together until tender.Toss together with cooked noodles, sugar, garlic, soy sauce, and sesame oil until heated through. Serve hot!Any leftover Chow Mein can be stored in the fridge, in an airtight container, for up to 3 days. After that, things start to get a little too mushy!

</p>
               
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
        </div>
    );
};

export default HomeThird;