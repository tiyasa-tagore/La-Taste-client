import React from 'react';
import { Card } from 'react-bootstrap';
import Chefone from '../../../assets/icons/Chef3.jpg'

const Homesecond = () => {
    return (
        <div>
            <Card className="bg-dark text-white">
      <Card.Img src={Chefone} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className='fs-2 p-2'>CHEF of the MONTH !!!!!</Card.Title>
        <Card.Text className='p-2'>
        A passionate, confident, and creative chef who can skilfully plan menus, prepare outstanding food,
        <br /> 
        manage budgets, and lead <br /> 
        a team of people to deliver
        
        <br /> quality of service.
        </Card.Text>
        
      </Card.ImgOverlay>
    </Card>

        </div>
    );
};

export default Homesecond;