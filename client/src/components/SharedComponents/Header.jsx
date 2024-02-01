import styled from "styled-components"
import { Send } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

import { Link,  useLocation } from "react-router-dom";
import { useMyContext } from "../../pages/Layout";


const Header = () => {
  const {user}= useMyContext();
    const location = useLocation();
 
  return (
    <Wrapper>
      <a href="mailto:squadtechinnovations@gmail.com" className="email">
        <span>
          <Send />
        </span>
        <div className="emailDetails">
          <p>Email:</p>
          <span>info@treknest.com</span>
        </div>
      </a>
    <div className="bookNow">
    {user ? (
      <p>Welcome to TrekNest, <a  >{user.name}</a></p>
    ) : (
      <p>
        Get 20% Off Your Next Trip. Hurry Up for Your New Tour! {location.pathname === "/register" ? (
          <Link to="/login">Already have an account?</Link>
        ) : (
          <Link to="/register">Sign Up Now!</Link>
        )}
      </p>
    )}
  </div>
      <div className="social">
        <a target="_blank" href="https://www.instagram.com/squadtechinnovations?igsh=NTc4MTIwNjQ2YQ=="><FaInstagram/></a>
        <a target="_blank" href="https://wa.me/+918899080590"><FaWhatsapp/></a>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.header`
  background-color: #262626;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem 3rem;
  .email {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--primary-color1);
  }
  svg {
    width: 30px;
    height: 30px;
    margin-right: 0.4rem;
  }
  .emailDetails p {
    color: var(--white-color);
    font-size: 0.75rem;
  }
  .emailDetails span {
    font-size: 0.85rem;
    transition: 0.3s;
  }
  .emailDetails span:hover {
    color: var(--primary-color2);
  }
  .bookNow {
    font-size: 0.75rem;
  }
  .bookNow a {
    color: var(--primary-color1);
    text-decoration: underline;
    transition: 0.3s;
  }
  .bookNow a:hover {
    color: var(--primary-color2);
  }
  .social svg {
    color: var(--white-color);
    width: 20x;
    height: 20px;
    transition: 0.3s;
  }
  .social svg:hover {
    color: var(--primary-color2);
  }
  @media only screen and (max-width: 768px) {
    padding: 0.3rem 1rem;
   
    svg {
      width: 20px;
    }
    .emailDetails p {
      font-size: 0.65rem;
    }
    .emailDetails span {
      font-size: 0.75 rem;
    }
    .bookNow {
      display: none;
    }
  }
`;
export default Header
