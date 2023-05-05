import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import LoginImage from '../../assets/icons/Login.jpg'

const Login = () => {
    const [loginUser, setLoginUser] = useState(null)
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const { googleSignIn, githubLogin, user, loading, userLogin } = useContext(AuthContext);

     // Handle Login information;
     const handleLoginForm = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then(result => {
                const user = result.user;

            })
            .catch(error => {
                const errorMessage = 'Invalid Useremail/Password';
                setLoginError(errorMessage)
            })
    }
    // Cheking whether the user is correct or not
    // Getting the exact path;
    let from = location.state?.from?.pathname || "/";

    // Redirecting to other page;
    useEffect(() => {
        if (!loading && user) {
            navigate(from, { replace: true })
        }
    }, [user])

    return (
        <div className='login container mt-3 mt-md-0'>
        <div>
            <form onSubmit={handleLoginForm}>
                <h3>Please Login</h3>
                <p>{loginError ? <span className='text-danger fw-bold fs-5'>{loginError}</span> : ''}</p>
                <hr />
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" id="exampleInputPassword1" required />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>

            <hr />
            <div>
                <p>If you don't have account <Link to="/register" className='sublink'>Register Now</Link> </p>
            </div>
            <div className='text-center py-5'>
                <div className='google'><FaGoogle style={{fontSize: '2rem'}}></FaGoogle><span onClick={googleSignIn}>Sign in with Google</span></div>
                <div className='github'>
                    <FaGithub style={{fontSize: '2rem'}}></FaGithub><span onClick={githubLogin}>Sign in with Github</span></div>
            </div>
        </div>
        <div>
            <div className='login-image'>
                <img src={LoginImage} className='img-fluid' alt="" />
            </div>
        </div>
    </div>
    );
};

export default Login;