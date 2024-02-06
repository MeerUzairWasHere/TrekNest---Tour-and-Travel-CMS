import { Link } from "react-router-dom";
import styled from "styled-components";

const AccountVerified = () => {

    return (
        <Wrapper>

            <h3>Account Verified :D</h3>
            <Link to='/' >Please login</Link>
        </Wrapper>
    );
}
export default AccountVerified

const Wrapper = styled.div`
text-align: center;
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
gap: 1rem;
color: green;

 
`