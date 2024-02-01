import styled from "styled-components"
import SanistaText from "../SharedComponents/SanistaText"
import PackageCard from "../SharedComponents/PackageCard"
import Srinagar from '../../assets/images/srinagar.jpg'
import DalLake from '../../assets/images/dal-lake.jpg'
import Gulmarg from '../../assets/images/gulmarg.jpg'
import Sonamarg from '../../assets/images/sonamarg.jpg'
import Pahalgam from '../../assets/images/pahalgam.jpg'


const packages = [
  {
      tourName: "Kashmir Tour",
      locationName: "Srinagar",
      packageTitle: "Srinagar Serenity Escape",
      days: "4",
      nights: "3",
      startingPrice: "8,499",
      mrpPrice: "11,000",
      imgUrl: Srinagar,
      pageUrl:"/packages/srinagar"
  },
  {
      tourName: "Kashmir Tour",
      locationName: "Dal Lake",
      packageTitle: "Dal Lake Tranquility",
      days: "2",
      nights: "1",
      startingPrice: "4,999",
      mrpPrice: "6,500",
      imgUrl: DalLake,
      pageUrl:"/packages/dal-lake"
  },
  {
      tourName: "Kashmir Tour",
      locationName: "Sonamarg",
      packageTitle: "Sonamarg Mountain Expedition",
      days: "5",
      nights: "4",
      startingPrice: "10,999",
      mrpPrice: "13,500",
      imgUrl: Sonamarg,
      pageUrl:"/packages/sonamarg"
  },
  {
      tourName: "Kashmir Tour",
      locationName: "Pahalgam",
      packageTitle: "Pahalgam Bliss Retreat",
      days: "3",
      nights: "4",
      startingPrice: "7,999",
      mrpPrice: "10,000",
      imgUrl: Pahalgam,
      pageUrl:"/packages/pahalgam"
  },
  {
      tourName: "Kashmir Tour",
      locationName: "Gulmarg",
      packageTitle: "Gulmarg Alpine Adventure",
      days: "4",
      nights: "3",
      startingPrice: "9,999",
      mrpPrice: "12,000",
      imgUrl: Gulmarg,
      pageUrl:"/packages/gulmarg"
  }
];

const HomePackages = () => {
  return (
    <HomePackagesWrapper>
        <SanistaText text="Tour Package" />
        <h2>Affordable Vacation Bundles</h2>
        <div className="packages-container">
      {packages.map((pack,index)=>{
        return <PackageCard key={index} {...pack} />
      })}
        </div>    

    </HomePackagesWrapper>
  )
}
export default HomePackages

const HomePackagesWrapper = styled.div`
margin: 5rem 0;
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
width: 100%;
.primary-button{
  margin-top: 3rem;
  border-radius: 10rem;
}
h2{
    color: var(--title-color);
    font-family: var(--font-rubik);
    font-size: 48px;
    font-weight: 600;
    line-height: 1.1;
    margin-bottom: 0;
}

.packages-container{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 1rem;
}

/* -------------- Media Query for Mobile --------------------------- */
@media only screen and (max-width: 768px) {
  margin: 2rem 0;

h2{
    font-size: 1.2rem;
}

.packages-container{
    grid-template-columns: 1fr;
}
.primary-button{
  margin-top: 1rem;
}
}
`