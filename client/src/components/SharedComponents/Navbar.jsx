import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

//icons 
import { AlignRight,PhoneOutgoing,X } from "lucide-react";  
import Navlinks from "./Navlinks";
import { useMyContext } from "../../pages/Layout";


const Navbar = () => {
  const {user}= useMyContext();
 const [isOn, setIsOn] = useState(false)

  const toggle = ()=>{
       setIsOn((prev)=>{return !prev})
       console.log("cicked")
  }
  return (
    <Wrapper>
      <Link to="/" className="main-logo">
        TrekNest
      </Link>
      {/*  //for > 768px // */}
      <ul className="hide">
        <Navlinks/>
      </ul>
      <div id="contact" className="contact">
        <span>
          <PhoneOutgoing />
        </span>
        <div className="contactInfo">
          <span>For Further Inquiry</span>
          <a href="tel:+918899080590">+91 8899080590</a>
        </div>
      </div>
      {/*  //for < 768px // */}
      <div className={isOn ? "hide-for-mb showOn" : "hide-for-mb showOff"}>
        <div className="head">
           <Link to="/" className="main-logo">
        TrekNest
      </Link>
          <span className="close-btn" onClick={toggle}>
            <X />
          </span>
        </div>
        <ul>
         <Navlinks toggle={toggle}/>
        </ul>
        <div className="contact">
          <span>
            <PhoneOutgoing />
          </span>
          <div className="contactInfo">
            <span>To more inquiry</span>
    <a href="tel:+918899080590">+91 8899080590</a>
          </div>
        </div>
      </div>

      <span className="openNav" onClick={toggle}>
        <AlignRight />
      </span>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white-color);
  box-shadow: 0 1px 10px #00000020;
  height: 90px;
  padding: 0 3rem;
  .main-logo{
font-size: 2rem;
color: black;
font-weight: 700;
background-color: yellow;
padding: .5rem 1rem;
  }
  img {
    max-width: 300px;
    height: 100%;
  }

  .hide {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    column-gap: 1.5rem;
    height: 100%;
  }

  button{
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--black-color);
    display: block;
    margin-bottom: 1.1rem;
    font-size: 1rem;
 
  }
  li {
    height: 100%;
  }
  .hide a{
    color: var(--black-color);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.25s;
    font-size: 0.9rem;
    height: 100%;
  }
  .hide form{
    height: 100%;
  }
  .hide form button{
    color: var(--black-color);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.25s;
    font-family: var(--font-rubik);
    font-size: 0.9rem;
    height: 100%;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  
  .active {
    color: var(--primary-color1);
  }
  a:hover,.hide form button:hover {
    color: var(--primary-color1);
  }
  .openNav,
  .hide-for-mb {
    display: none;
  }
  .contact {
    display: flex;
    align-items: center;
    column-gap: 1rem;
    /* box-shadow: 0px -1px 1px #00000020; */
  }
  .contact a {
    color: var(--primary-color1);
    font-weight: 600;
    font-size: 0.9rem;
  }
  .contact svg {
    width: 30px;
    height: 30px;
    color: var(--primary-color1);
  }
  .contactInfo {
    display: grid;
    gap: 0.5rem;
  }
  .contactInfo span {
    font-size: 0.8rem;
  }

  /* -----------------------MEDIA QUERIES--------------------------- */

  @media only screen and (max-width: 768px) {
    padding: 0 1rem;
    justify-content: space-between;
    .hide {
      display: none;
    }
    img {
      width: 200px;
    }
    .openNav {
      display: block;
    }
    svg {
      width: 35px;
      height: 35px;
    }
    .hide-for-mb {
      background-color: var(--white-color);
      position: fixed;
      top: 0;
      width: 80%;
      height: 100%;
      display: block;
      z-index: 99;
      padding: 2rem 1rem;
      left: 0%;
      transition: 0.8s;
      box-shadow: 1px 0px 10px #00000020;
    }
    .showOn {
      left: 0;
    }
    .showOff {
      left: -100%;
    }

    .head {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
    }
    a {
      color: var(--black-color);
      display: block;
      font-size: 1rem;
    }
    svg {
      width: 22px;
      height: 22px;
    }
    .close-btn svg {
      width: 30px;
      height: 30px;
      color: var(--black-color);
    }
    #contact {
      display: none;
    }
    .contact {
      margin-top: 2rem;
      box-shadow: 0px -1px #00000020;
      padding: 1rem 0.2rem 0 0.2rem;
    }
  }
`;

export default Navbar