import React from 'react';
import { useRef } from 'react';
import { Container } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';
import ReactToPdf from "react-to-pdf";

const Blog = () =>  {
    const ref = useRef();
    const options = {
        orientation: "landscape",
        unit: "in",
        format: [17,11],
    }
    
    return (
        

       
    <div className="mx-auto mb-16">
        <div className="mt-6 text-end mr-6">
                <ReactToPdf targetRef={ref} options={options} filename="blog.pdf">
                    {({ toPdf }) => (
                        <button className="btn bg-warning " onClick={toPdf}>
                          <FaDownload></FaDownload>    Download Pdf
                        </button>
                    )}
                </ReactToPdf>
        </div>

         <div ref={ref}>


            <h3 className='text-center my-3 '>Question & Answers</h3>
                <hr />
            <Container>
                <div>
                <h4>1.Tell us the differences between uncontrolled and controlled components?</h4>
                    <h5 >Ans:  </h5>
                    <p></p>
                    Controlled:
                    
                        It is managed by React state,data flows from parent component to component,
                        easier to debug.
                    <br />
                    Uncontrolled:
                
                     
                    It is managed by component's own internal state,component updates own internal state on user interaction,data flows within the component.
                </div>

                <div>
                    <h4>2. How to validate React props using PropTypes?</h4>
                    <h5>Ans:</h5>
                    <p>
                        To validate React props using PropTypes, We need to import the PropTypes library from the 'prop-types' package in our component file, and then define the expected data type for each prop that our component is expecting to receive.
                        Here's an example of how to use PropTypes to validate a prop. <br />
                    </p>
                    
                </div>

                <div>
                    <h4>3.Tell us the difference between nodejs and express js.</h4>
                    <h5>Ans:</h5>
                    <p><h6>Node.js</h6> is a JavaScript runtime environment that allows you to run JavaScript code outside of a web browser. It provides a platform for building server-side applications using JavaScript. Node.js comes with built-in modules such as HTTP, file system, and buffer, which makes it easy to build web applications. <br />
                        <h6>Express.js</h6> is a web application framework built on top of Node.js. It provides a set of features to build web applications and APIs quickly and easily. Express.js provides an HTTP server and routing capabilities, as well as support for middleware that allows you to add functionality to your application.</p>
                </div>

                {/* 4th Questions */}
                <div>
                    <h4>4.What is a custom hook, and why will you create a custom hook?</h4>
                    <h5>Ans:</h5>
                    <p>A custom hook is a reusable function in React that encapsulates a specific behavior or logic and can be shared across different components.
                        
                        Custom hooks can be used to abstract away complex or repetitive code.

                        By creating custom hooks, we can also make our code more testable and easier to refactor, as we can isolate the logic we want to test or modify.</p>
                </div>
                <hr />
                </Container>
               </div>
        </div>  
    
     
    );
};

export default Blog;