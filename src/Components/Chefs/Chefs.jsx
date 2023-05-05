import React from 'react';
import ChefCard from './ChefCard/ChefCard';
import { useLoaderData } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Chefs = () => {
    const data = useLoaderData();
    return (
        <div>
            <h3 className='my-4 text-center display-4 fw-semibold'>The Chef's</h3>
            <hr />
        
         <Container>
         <div className="my-3 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {
                    data.map(chef => <ChefCard
                        key={chef.id}
                        chef={chef}
                    />)
                }
            </div>
            </Container>   
        </div>
    );
};

export default Chefs;