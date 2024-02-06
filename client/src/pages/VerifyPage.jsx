import React, { useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const VerifyPage = () => {
    const query = useQuery();
    const goto = useNavigate()
    const verifyToken = async () => {
        try {
            const { data } = await customFetch.post('/auth/verify-email', {
                verificationToken: query.get('token'),
                email: query.get('email'),
            });
            goto("/account-verified")
        } catch (error) {
            console.log(error.response);
            goto("/account-not-verified")
        }
    };


    useEffect(() => {
        verifyToken();
    }, []);

    return (
        <Wrapper className='page'>
            <h2>Account Confirmed :D</h2>
            <Link to='/login' className='btn'>
                Please login
            </Link>
        </Wrapper>
    );
};

const Wrapper = styled.section``;

export default VerifyPage;