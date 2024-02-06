import { Link } from "react-router-dom";
import styled from "styled-components";

const AccountNotVerified = () => {

    return (
        <Wrapper>

            <h3>Account Not Verified :(</h3>
            <p>There was an error, please double check your verification link</p>
            <Link to='/'>Back to Home</Link>

        </Wrapper>
    );
}
export default AccountNotVerified

const Wrapper = styled.div`
text-align: center;
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
gap: 1rem;
color: red;
 
`