import styled from "styled-components"

import { Link } from "react-router-dom";
import Navlinks from "./Navlinks";

import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";




const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="bio">
          <Link to="/" className="main-logo">
            TrekNest
          </Link>


        </div>
        <div className="links">
          <h5>Quick Links</h5>
          <Navlinks />
        </div>

        <div className="address">
          <div className="adressItem">
            <h5>
              <FaPhoneVolume />
              For Further Inquiry
            </h5>
            <a href="tel:+918899080590">+91 8899080590</a>

          </div>
          <div className="adressItem">
            <h5>
              <FaPaperPlane />
              Send Mail
            </h5>
            <a href="mailto:squadtechinnovations@gmail.com">info@treknest.com</a>
          </div>
          <div className="adressItem">
            <h5>
              <FaLocationDot />
              Address
            </h5>
            <a>191121, Harwan, Srinagr, J&K</a>
          </div>
        </div>
        <div className="social">
          <h5>We Are Here</h5>
          <p>
            Engage with us for updates, stories, offers, and inspiration.
          </p>
          <div className="icons">
            <a target="_blank" href="https://www.instagram.com/squadtechinnovations?igsh=NTc4MTIwNjQ2YQ=="><FaInstagram /></a>
            <a target="_blank" href="https://wa.me/+918899080590"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <p className="sub-footer">
        © Copyright {new Date().getFullYear()} <a className="p-to-p" href="/">Trek Nest</a> | Designed & Developed By
        <a className="squadteck" href="mailto:squadtechinnovations@gmail.com"> SquadTech Innovations</a>
      </p>
    </Wrapper>
  );
}
const Wrapper = styled.footer`
margin-top: auto;
  background-image: linear-gradient(180deg, #1d231f 0%, #1d231f 100%);
  color: var(--white-color);
  list-style: none;
  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 3rem;
    padding-top: 5rem;
  }
  img {
    width: 80%;
  }
  h4 {
    font-weight: 500;
    margin: 1.1rem 0;
  }
  .primary-button {
    z-index: 1;
    color: var(--white-color);
  }
  .links,
  .social,
  .address {
    display: grid;
    gap: 1rem;
  }
  a,
  p {
    color: var(--text-color);
    transition: 0.3s;
  }
  a:hover {
    color: var(--primary-color1);
  }
  .social p {
    font-size: 0.9rem;
    line-height: 1.5;
    text-align: justify;
  }
  .address h5 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  .address svg {
    color: var(--primary-color2);
    margin-right: 0.4rem;
  }
  .address a {
    font-size: 0.9rem;
  }
  .icons {
    display: flex;
    column-gap: 0.6rem;
    font-size: 1.6rem;
  }
  .icons svg {
    color: var(--primary-color2);
    transition: 0.3s;
  }
  .icons svg:hover {
    color: var(--primary-color1);
  }
  .line {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    width: 80%;
    margin: 0 auto;
  }
  p {
    text-align: center;
    font-size: 0.85rem;
  }
  p > a {
    font-weight: 600;
    color: var(--primary-color1);
  }
  .squadteck {
    color: var(--primary-color2);
  }
  .p-to-p:hover {
    color: var(--primary-color2);
  }  .main-logo{
font-size: 2rem;
color: black;
font-weight: 700;
background-color: yellow;
padding: .5rem 1rem;
  }
  .sub-footer{
    padding: 1rem;
    
  }
  .reset-css{
    display: none;
  }
  
  @media only screen and (max-width: 768px) {
   .container {
      display: none;
    }
     /* 
.bio{
  text-align: center;
}
    .address, .links{
      display: none;
    }
    .social p {
  display: none;
    }
    .social h5 {
      display: none;
    }
    .address svg {
      color: var(--primary-color2);
      margin-right: 0.4rem;
    }
    .address a {
      font-size: 0.9rem;
    }
    
   */
     p {
      font-size: 0.75rem;
      line-height: 1.5;
    }
    p > a {
      font-weight: 500;
    } 
  }
`;
export default Footer