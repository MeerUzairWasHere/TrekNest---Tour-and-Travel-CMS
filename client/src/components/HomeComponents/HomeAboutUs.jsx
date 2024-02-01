import styled from "styled-components"
import collageImg from '../../assets/images/AboutUsCollage.jpg'
import  SanistaText  from "../SharedComponents/SanistaText"
import { useState } from "react"
import mission from '../../assets/images/Mission.svg'
import customer from '../../assets/images/Customer.svg'
import { Link } from "react-router-dom"
const HomeAboutUs = () => {
  const [tabs,setTabs]=useState(true)
  return (
    <HomeAboutUsWrapper>
    <div className="about-us-section">
      <div className="about-us-content">
      <SanistaText text="About Us" />
      <h1>Let’s know about our journey For Plane to Paradise.</h1>
      <div className="about-us-tabs">
        <div className="tabs-trigger">
        <button  className={tabs ?"active-tabs":"" } onClick={()=>setTabs(!tabs)}><img src={mission} alt="mission svg" /> Mission & Vision</button>
        <button className={tabs ?"":"active-tabs" } onClick={()=>setTabs(!tabs)}><img src={customer} alt="customer svg" /> Focus On Customer</button>
        </div>
        <div className="tabs-content">
        {tabs ? <p>At Plane to Paradise Tour and Travel, we aspire to redefine the travel experience by offering unparalleled service, personalized attention, and unforgettable journeys. Our vision is to emerge as the foremost provider of exceptional travel experiences, where every voyage is an adventure, each destination is a dream fulfilled, and every customer is embraced as a cherished member of our family.</p>:<p>At Plane to Paradise Tour and Travel, our unwavering commitment is to our customers. We prioritize their needs, preferences, and satisfaction above all else. Our focus on customer-centricity drives every aspect of our operations, ensuring that each traveler receives the highest standard of service, attention to detail, and support throughout their journey. From personalized itinerary planning to round-the-clock assistance, we are dedicated to exceeding expectations and creating memorable moments that last a lifetime.</p> }
        </div>
      </div>
      </div>
      <div className="about-us-image">
      <img src={collageImg} className="img"  alt="collage image" />
      </div>
    </div>        
    </HomeAboutUsWrapper>
  )
}
export default HomeAboutUs

const HomeAboutUsWrapper = styled.div`
  margin-top: 5rem;
 
  .about-us-section{
    display: flex;
    justify-content: space-between;
  }
  .about-us-content{
    flex: 2 0 60%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: start;
    align-items: start;
  }
  
  .about-us-content h1{
    color: var(--title-color);
    font-family: var(--font-rubik);
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 1.1;
    margin-bottom: 0;
 
  }

  .about-us-image{
    flex:1 0 40%
  }
  .tabs-trigger{
    display: flex;
    gap: 2rem;
    margin: 1.5rem 0;
  }
  .tabs-trigger button{
    background-color: transparent;
    padding: 0;
    color: var(--text-color);
    font-family: var(--font-rubik);
    font-size: 17px;
    font-weight: bold;
    line-height: 1;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    border:none;
} 
 .tabs-trigger  .active-tabs{
  color: var(--primary-color1);
 }
 .tabs-content p {
  color: var(--text-color);
    font-family: var(--font-jost);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.9;
    letter-spacing: .51px;
    width:90%;
 }
/* -------------- Media Query for Mobile --------------------------- */
@media only screen and (max-width: 768px) {
  margin-top: 2rem;
 
 .about-us-content h1{
   font-size: 1.5rem;

 }

 .about-us-image{
display: none;
 }

 .tabs-trigger{
   display: flex;
   gap: 1rem;
   margin: 1rem 0;
 }
 .tabs-trigger button{
   font-size: .8rem;
} 
 
.tabs-content p {
   font-size: 1rem;
   line-height: 1.3;
   width:100%;
}
}
`