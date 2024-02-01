import styled from "styled-components"
import SanistaText from "../SharedComponents/SanistaText"
import YellowBatch from "../SharedComponents/YellowBatch";

import { Activities } from "../../utils/Activities";

import { MdOutlineParagliding } from "react-icons/md";
import { MdOutlineDownhillSkiing } from "react-icons/md";
import { GiHiking } from "react-icons/gi";
import { LuSailboat } from "react-icons/lu";
import { GiCampingTent } from "react-icons/gi";
import { GiHorseHead } from "react-icons/gi";
import { useState } from "react";

const HomeActivities = () => {
    const [ative, SetActive] = useState(1)
    const box = Activities.find((item) => item.id === ative);
    const {title, heading, para,list, image  } = box

    const toggle = (num)=>{
       SetActive(() => {
         return num;
       });
    }
  return (
    <Wrapper>
      <SanistaText text="Are you ready to travel" />
      <h1>Explore Your Activities</h1>
      <div className="container_">
        <div className="activties">
          <div
            className="activity"
            onClick={() => {
              toggle(1);
            }}
          >
            <MdOutlineParagliding />
            <span>Paragliding</span>
          </div>
          <div
            className="activity"
            onClick={() => {
              toggle(2);
            }}
          >
            <MdOutlineDownhillSkiing />
            <span>Ski touring</span>
          </div>
          <div
            className="activity"
            onClick={() => {
              toggle(3);
            }}
          >
            <GiHiking />
            <span>Hiking</span>
          </div>
          <div
            className="activity"
            onClick={() => {
              toggle(4);
            }}
          >
            <LuSailboat />
            <span>Shikara Riding</span>
          </div>

          <div
            className="activity"
            onClick={() => {
              toggle(5);
            }}
          >
            <GiCampingTent />
            <span>Camping</span>
          </div>
          <div
            className="activity"
            onClick={() => {
              toggle(6);
            }}
          >
            <GiHorseHead />
            <span>Horse Riding</span>
          </div>
        </div>
        <div className="details">
          <div className="wrapper_">
            <YellowBatch text={title} />
            <h2>{heading}</h2>
            <p>{para}</p>
            <ul>
              {list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="images">
            <img src={image[0]} alt={title} />
            <img src={image[1]} alt={title} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  h1 {
    color: var(--title-color);
    font-family: var(--font-rubik);
    font-size: 48px;
    font-weight: 600;
    line-height: 1.1;
    margin-bottom: 0;
  }
  .container_ {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
    width: 100%;
  }
  .activties {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 140px;
    grid-auto-rows: 140px;
    gap: 1rem;
  }
  .activity {
    font-size: 3rem;
    display: grid;
    place-items: center;
    background-color: rgba(var(--primary-color1-opc), 0.1);
    border-radius: 10px;
    color: var(--black-color);
    padding: 1rem;
    transition: background-color .6s;
    cursor: pointer;
  }
  .activity:hover {
    background-color: var(--primary-color2);
    color: var(--white-color);
  }
  span {
    font-size: 0.85rem;
    font-weight: 600;
  }
  .details {
    display: flex;
    transition: 1s;
    margin-top: 2rem;
    column-gap: 2rem;
  }
  h2 {
    margin: 1rem 0;
    font-size: 1.8rem;
    color: var(--black-color);
  }
  p {
    margin-bottom: 1rem;
    line-height: 1.4;
  }
  ul {
    display: flex;
    align-items: center;
    gap: 1rem 2rem;
    flex-wrap: wrap;
    margin: 0 1rem;
  }
  li {
    color: var(--black-color);
    list-style: disc;
    font-size: 0.9rem;
  }
  li::marker {
    color: var(--primary-color1);
    font-size: 1.3rem;
  }

  .images img {
    width: 200px;
    height: 150px;
    margin: 0.5rem 0;
    object-fit: cover;
  }
`;
export default HomeActivities