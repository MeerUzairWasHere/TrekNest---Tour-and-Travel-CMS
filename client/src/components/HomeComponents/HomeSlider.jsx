import Srinagar from '../../assets/images/srinagar.jpg'
import DalLake from '../../assets/images/dal-lake.jpg'
import Gulmarg from '../../assets/images/gulmarg.jpg'
import Sonamarg from '../../assets/images/sonamarg.jpg'
import Pahalgam from '../../assets/images/pahalgam.jpg'
 
  const travelInfo = [
    {
      location: "Gulmarg",
      title: "Discover the Beauty of Gulmarg.",
      subtitle: "Experience the charm of Gulmarg, where every season unfolds a different story. Explore adventure, tranquility, and natural beauty in one place.",
      imageUrl:Gulmarg
  },
    {   
      
        location: "Srinagar",
        title: "Experience the Magic of Srinagar.",
        subtitle: "Indulge in the timeless beauty of Srinagar, where every corner tells a story of tradition, culture, and warmth. Discover its enchanting gardens, serene lakes, and vibrant markets.",
        imageUrl:Srinagar
    },
    
    {
        location: "Pahalgam",
        title: "Embrace Nature's Serenity in Pahalgam.",
        subtitle: "Nestled amidst breathtaking landscapes, Pahalgam invites you to immerse yourself in the tranquility of nature. Explore its lush green valleys and pristine rivers.",
        imageUrl:Pahalgam
    },
    {
        location: "Dal Lake",
        title: "Experience Tranquility on Dal Lake.",
        subtitle: "Sail across the tranquil waters of Dal Lake and witness the enchanting beauty of Srinagar's iconic houseboats and floating gardens.",
        imageUrl:DalLake
    },
    {
        location: "Sonamarg",
        title: "Embark on an Adventure in Sonamarg.",
        subtitle: "Sonamarg, the 'Meadow of Gold', awaits your exploration. Trek through its majestic mountains and experience the thrill of adventure amidst scenic landscapes.",
        imageUrl:Sonamarg
    }
  ];


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
 

// import required modules
import styled from 'styled-components';
import { EffectFade,Autoplay, Navigation, Pagination } from 'swiper/modules';
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import YellowBatch from "../SharedComponents/YellowBatch"
 


const HomeSlider = () => {
  return (
    <SliderWrapper>
  <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        loop={true}
        autoplay={{
            delay: 15000,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
    {travelInfo.map((obj)=>{
      return   <SwiperSlide key={obj.title} className='home-slider'>
      <img  className="img" src={obj.imageUrl} />
      <div className="home-slider-content">
      
        <YellowBatch text={obj.location}  icon={<MapPin/>} />
        <h1>{obj.title}</h1>
        <p>{obj.subtitle}</p>
      </div>
    </SwiperSlide>
    })}
      </Swiper>
  </SliderWrapper>
  ) 
}
export default HomeSlider

const SliderWrapper = styled.div`
    height:700px;
    /* padding: 1rem 2rem; */

    .mySwiper{
        height: 100%;
        border-radius: 2rem;
    }

    .home-slider{
        position: relative;
    }
    .home-slider-content{
        position: absolute;
        inset: 0;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
    .location-banner{
      position: relative;
    }
    .location-banner span{
      display: inline-flex;
    align-items: center;
    gap:5px;
    color: var(--white-color);
    font-family: var(--font-jost);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    letter-spacing: .4px;
    position: absolute;
   left: 30px;
   top:5px
    }

    .home-slider-content h1{
      color: var(--white-color);
    font-family: var(--font-rubik);
    font-size: 65px;
    font-weight: 800;
    line-height: 1.1;
    width: 70%;
    text-align: center;
    letter-spacing: 2px;
    }

    .home-slider-content p{
      color: var(--white-color);
    font-family: var(--font-jost);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.9;
    letter-spacing: .48px;width: 70%;
    text-align: center;
    text-transform: capitalize;
    }
    
/* -------------- Media Query for Mobile --------------------------- */
    @media only screen and (max-width: 768px) {
      display: none;
    }

    
`