import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { Container } from 'react-bootstrap';

const UserProfile = () => {
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <span></span>
    }
    return (
        <div>
        <h3 className='display-5 fw-bold text-center text-dark my-3'>Hello, {user?.displayName} !!!</h3>
        <div>
            <Container>
                <div className='fw-bold text-center fs-4' > Information</div>
                <hr />
                <div className='text-center mb-4'>
                    <img className='userimage' src={user.photoURL ? user.photoURL : 'Photo Not Found'} height={200} alt="" />
                </div>
                <div className='mt-3'>
                    <p>Name: {user.displayName}</p>
                    <p>Email: {user?.email} <span>{user.emailVerified ? <>
                    </> :
                     <><span className='fw-bold'>Not Found</span></>}</span></p>
                    <p>Phone: {user.phoneNumber ? user.phoneNumber : 'Not Found'}</p>
                </div>
            </Container>
        </div>
    </div>
    );
};

export default UserProfile;