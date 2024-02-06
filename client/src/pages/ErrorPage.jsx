import { Link, useRouteError } from "react-router-dom";
import styled from "styled-components";

const ErrorPage = () => {
    const error = useRouteError();
    if (error.status === 404) {
        return (
            <Wrapper>

                <h3>Ohh! page not found :(</h3>
                <p>we can't seem to find the page you are looking for</p>
                <Link to='/'>Back to Home</Link>

            </Wrapper>
        );
    }
    return (
        <Wrapper>

            <h3>:( something went wrong...</h3>

        </Wrapper>
    );
}
export default ErrorPage

const Wrapper = styled.div`
text-align: center;
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
gap: 1rem;
 
`