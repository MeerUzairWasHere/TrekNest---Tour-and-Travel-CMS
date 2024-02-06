import styled from "styled-components"
import SanistaText from "../SharedComponents/SanistaText"
import YellowBatch from "../SharedComponents/YellowBatch"

//images
import Srinagar from '../../assets/images/srinagar.jpg'
import DalLake from '../../assets/images/dal-lake.jpg'
import Gulmarg from '../../assets/images/gulmarg.jpg'
import Sonamarg from '../../assets/images/sonamarg.jpg'
import Pahalgam from '../../assets/images/pahalgam.jpg'
import bgGradient from '../../assets/images/destination-banner-bg.png'
import { Link } from "react-router-dom"

const DestinationsInfo = [
  {
    location: "Gulmarg",
    imageUrl: Gulmarg
  },
  {

    location: "Srinagar",
    imageUrl: Srinagar
  },

  {
    location: "Pahalgam",
    imageUrl: Pahalgam
  },
  {
    location: "Dal Lake",
    imageUrl: DalLake
  },
  {
    location: "Sonamarg",
    imageUrl: Sonamarg
  }
];

const HomeDestinations = () => {
  return (
    <HomeDestinationsWrapper>
      <SanistaText text="Journey to the" />
      <h2>Desired Vacation Spots</h2>
      <div className="destinaion-images">
        {DestinationsInfo.map((dest, index) => {
          return (<div key={dest.location} className={`image${index + 1}`}>
            <img src={dest.imageUrl} className="images" alt="destination image" />
            <div className="card-title">
              <h4>{dest.location}</h4>
            </div>
          </div>)
        })}

        <div className="image6">
          <img src={bgGradient} className="images" alt="destination image" />
          <div className="destination-banner">
            <div className="destination-banner-content">
              <YellowBatch text="Get 20% Off" />
              <h2>Of Our All Destination</h2>
              <Link className="primary-button">View All Destination</Link>
            </div>
          </div>
        </div>
      </div>
    </HomeDestinationsWrapper>
  )
}
export default HomeDestinations

const HomeDestinationsWrapper = styled.section`
margin-top: 5rem;
display: flex;
flex-direction: column;
align-items: center;
gap:2rem;

    h2 {
        color: var(--title-color);
    font-family: var(--font-rubik);
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.1;
    margin-bottom: 0
    }

    .destinaion-images {  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1.8fr 0.2fr 1fr 1fr 1fr;
  grid-template-rows: 300px 300px;
  gap: 16px 16px;
  grid-auto-flow: row;
  grid-template-areas:
    "image1 image1 image1 image2 image2 image2 image2 image2 image3 image3 image3 image3"
    "image4 image4 image4 image4 image4 image5 image5 image5 image6 image6 image6 image6";
}

.image1 { grid-area: image1;
  position: relative; 
  border-radius: 1rem;
  

  overflow: hidden;

   }

.image2 { grid-area: image2;
  position: relative; 
    transition: .5s;
    border-radius: 1rem;
  overflow: hidden;

   }

.image3 { grid-area: image3;
  position: relative; 
  overflow: hidden;
  border-radius: 1rem;

    transition: .5s;
   }

.image4 { grid-area: image4;
  position: relative; 
    transition: .5s;
    border-radius: 1rem;
  overflow: hidden;

   }

.image5 { grid-area: image5;
  position: relative; 
    transition: .5s;
  overflow: hidden;
  border-radius: 1rem;

   }

.image6 { grid-area: image6;
  position: relative; 
    transition: .5s;
  overflow: hidden;
  border-radius: 1rem;

   }

.images{
  object-fit: cover;
    width: 100%;
    height: 100%;
  transition: all ease-in-out .5s;

}

 .images:hover{
  transform: scale(1.1);
}


.card-title{
  position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    opacity: 1;
    width: 100%;
    transition: .5s;
}
.card-title h4{
  color: var(--white-color);
    font-family: var(--font-rubik);
    font-size: 27px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: .54px;
    margin-bottom: 0;
}
.destination-banner{
  padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-radius: 10px;
    height: 100%;
    position: absolute;
    inset: 0;
}
.destination-banner-content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.destination-banner-content h2{
  color: var(--title-color);
    font-family: var(--font-rubik);
    font-size: 40px;
    font-weight: 600;
    line-height: 1.1;
}
/* -------------- Media Query for Mobile --------------------------- */
@media only screen and (max-width: 768px) {
  margin-top: 2rem;
  gap:1rem;

    h1 {
    font-size: 2rem;
    }

    .destinaion-images {  display: flex;
      flex-direction: column;
}

 
.images{
  object-fit: cover;
    width: 100%;
    height: 100%;
  transition: all ease-in-out .5s;

}

 .images:hover{
  transform: scale(1.1);
}


.card-title{
  position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    opacity: 1;
    width: 100%;
    transition: .5s;
}
.card-title h4{
  color: var(--white-color);
    font-family: var(--font-rubik);
    font-size: 27px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: .54px;
    margin-bottom: 0;
}
.destination-banner{
  padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-radius: 10px;
    height: 100%;
    position: absolute;
    inset: 0;
}
.destination-banner-content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.destination-banner-content h2{
  color: var(--title-color);
    font-family: var(--font-rubik);
    font-size: 40px;
    font-weight: 600;
    line-height: 1.1;
}
}
`
