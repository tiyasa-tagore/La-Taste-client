import React from 'react';
import { FaHandPointRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ChefCard = ({chef}) => {
    const { id, name, picture, likes, recipes, year_of_experience } = chef;
    return (
        
        <div className="col">
            <div className="card h-100">
                <img src={picture} className=" img-fluid" alt="..." />
                <div className="bg-light-subtle  p-3">
                    <h5 className="fs-3 ">{name}</h5>
                    <p className="fs-6 ">Number of recipes: {recipes.length}</p>
                    <div className='chef-priority'>
                        <div>
                            <p>Expericence: {year_of_experience} year's</p>
                        </div>
                        <div className='d-flex align-items-center gap-2 '>
                            
                        <FaHandPointRight></FaHandPointRight>  {likes}
                        </div>
                    </div>
                    {/* View Chef */}
                    <div>
                        <Link to={`/chefrecipe/${id}`}><button className='btn btn-warning mt-2'>View Recipes</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;