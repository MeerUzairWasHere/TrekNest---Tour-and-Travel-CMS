import { Form, Navigate, redirect, useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { useMyContext } from "./Layout";
import styled from "styled-components";
import { useEffect, useState } from 'react'
//icons
import { TiTick } from "react-icons/ti";
import { SlCalender } from "react-icons/sl";
import { LuCheck } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import parse from 'html-react-parser';
import { PopularPackages, SubmitButton } from "../components";

export const loader = async ({ params }) => {
  try {
    const { data: { packageInfo } } = await customFetch.get("/packages/admin/" + params.id);
    const { data: { popularPackages } } = await customFetch.get("/packages/admin/popularPackages");
    return { packageInfo, popularPackages };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/");
  }
};



const PackageInfoPage = () => {
  const { user } = useMyContext()
  const { packageInfo, popularPackages } = useLoaderData()

  const [numberOfPeople, setNumberOfPeople] = useState(1)
  const [startingPrice, setStartingPrice] = useState(packageInfo?.startingPrice)
  const [totalPrice, setTotalPrice] = useState(packageInfo?.startingPrice)

  useEffect(() => {
    // Calculate the total price whenever numberOfPeople or startingPrice changes
    const total = numberOfPeople * startingPrice;
    setTotalPrice(total);
  }, [numberOfPeople, startingPrice]);


  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target);
    formData.append('packageId', packageInfo?._id); // Append ReactQuill data to formData
    formData.append('totalPrice', totalPrice); // Append ReactQuill data to formData
    formData.append('numberOfPersons', Number(numberOfPeople)); // Append ReactQuill data to formData
    const data = Object.fromEntries(formData);


    try {
      if (!user) {
        toast.error("Please, login!");
        return navigate("/login")
      }
      await customFetch.post(`/booking/admin`, { ...data });
      toast.success("Package booked successfully!");
      return navigate("/")
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      navigate("/login")
    }
  };


  return (
    <Wrapper className="container">
      <div className="hero-image">
        <img src={packageInfo?.imgUrl} alt={packageInfo?.packageTitle} />
      </div>

      <div className="page-container package-details-area">
        <div className="package-info-container">
          <h2 className="package-title">{packageInfo?.packageTitle}</h2>
          <div className="tour-price">
            <h3>₹{packageInfo?.startingPrice?.toLocaleString()}/</h3><span>per person</span>
          </div>

          <ul className="tour-info-metalist">

            <li className="capitalize">
              <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14C5.14348 14 3.36301 13.2625 2.05025 11.9497C0.737498 10.637 0 8.85652 0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0C8.85652 0 10.637 0.737498 11.9497 2.05025C13.2625 3.36301 14 5.14348 14 7ZM7 3.0625C7 2.94647 6.95391 2.83519 6.87186 2.75314C6.78981 2.67109 6.67853 2.625 6.5625 2.625C6.44647 2.625 6.33519 2.67109 6.25314 2.75314C6.17109 2.83519 6.125 2.94647 6.125 3.0625V7.875C6.12502 7.95212 6.14543 8.02785 6.18415 8.09454C6.22288 8.16123 6.27854 8.2165 6.3455 8.25475L9.408 10.0048C9.5085 10.0591 9.62626 10.0719 9.73611 10.0406C9.84596 10.0092 9.93919 9.93611 9.99587 9.83692C10.0525 9.73774 10.0682 9.62031 10.0394 9.50975C10.0107 9.39919 9.93982 9.30426 9.842 9.24525L7 7.62125V3.0625Z">
                </path>
              </svg>
              {packageInfo?.days} Days / {packageInfo?.nights} Night
            </li>
            <li className="capitalize">
              <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M14 0.43748C14 0.372778 13.9856 0.308889 13.9579 0.250418C13.9302 0.191947 13.8898 0.140348 13.8398 0.0993396C13.7897 0.0583312 13.7312 0.0289339 13.6684 0.0132656C13.6057 -0.00240264 13.5402 -0.00395173 13.4768 0.00872996L9.1875 0.86623L4.89825 0.00872996C4.84164 -0.00258444 4.78336 -0.00258444 4.72675 0.00872996L0.35175 0.88373C0.252608 0.903546 0.163389 0.957088 0.099263 1.03525C0.0351366 1.11342 6.10593e-05 1.21138 0 1.31248L0 13.5625C3.90711e-05 13.6272 0.0144289 13.6911 0.0421328 13.7495C0.0698367 13.808 0.110165 13.8596 0.160212 13.9006C0.210259 13.9416 0.268779 13.971 0.331556 13.9867C0.394332 14.0024 0.459803 14.0039 0.52325 13.9912L4.8125 13.1337L9.10175 13.9912C9.15836 14.0025 9.21664 14.0025 9.27325 13.9912L13.6482 13.1162C13.7474 13.0964 13.8366 13.0429 13.9007 12.9647C13.9649 12.8865 13.9999 12.7886 14 12.6875V0.43748ZM4.375 12.3287V0.97123L4.8125 0.88373L5.25 0.97123V12.3287L4.89825 12.2587C4.84165 12.2474 4.78335 12.2474 4.72675 12.2587L4.375 12.3287ZM8.75 13.0287V1.67123L9.10175 1.74123C9.15836 1.75254 9.21664 1.75254 9.27325 1.74123L9.625 1.67123V13.0287L9.1875 13.1162L8.75 13.0287Z">
                </path>
              </svg>
              {packageInfo?.locationName} &amp; {packageInfo?.tourName}.
            </li>
            <li className="capitalize" >
              <SlCalender />
              {packageInfo?.availability}
            </li>
          </ul>
          <p className="rich-text">{packageInfo?.description}</p>
          <h4 className="included-excluded-features">Included and Excluded</h4>
          <div className="includ-and-exclud-area mb-20">
            <ul>
              {packageInfo?.includedFeatures?.map((feature) => (
                <li key={feature}><TiTick />{feature}</li>
              ))}
            </ul>
            <ul className="exclud">
              {packageInfo?.excludedFeatures?.map((feature) => (
                <li key={feature}>< IoMdClose />{feature}</li>
              ))}
            </ul>
          </div>
          <h4 className="included-excluded-features mb">itinerary</h4>

          <div className="itinerary">
            {packageInfo?.itinerary && parse(packageInfo?.itinerary)}
          </div>

          <div className="tags">
            <h4>Tags:</h4>
            <ul >
              {packageInfo?.tags?.map((tag) => (
                <li className="capitalize li" key={tag}><span className="tag">#{tag}</span></li>
              ))}
            </ul>
          </div>

        </div>
        <div className="package-booking-form-container">
          <h4>Book Your Tour</h4>
          <p>Reserve your ideal trip early for a hassle-free trip; secure comfort and convenience!</p>

          <div className="booking-form">
            <Form method="post" onSubmit={handleSubmit} className="form">
              <label htmlFor="numberOfPersons">
                Number of Persons:
              </label>
              <input
                type="number"
                min={1}
                placeholder="Number of Persons"
                name="numberOfPersons"
                value={numberOfPeople}
                onChange={(e) => setNumberOfPeople(e.target.value)}
                id="numberOfPersons"
                required
              />
              <label htmlFor="startDate">
                Start Date:
              </label>
              <input
                type="date"
                name="startDate"
                id="startDate"
                required
              />

              <div className="total-price"><span>Total Price:</span> ₹{totalPrice?.toLocaleString()}</div>
              <SubmitButton loadingText="Please, wait..." text="Book Now" />
              <p>We are getting userinfo from your profile for booking this package.</p>
            </Form>
          </div>
        </div>
      </div>

      <div className="popular-packages-container">
        <PopularPackages popularPackages={popularPackages} />
      </div>


    </Wrapper>
  )
}
export default PackageInfoPage

const Wrapper = styled.div`
   
 

  margin-block:2rem;
  padding-inline:2rem;

  .hero-image{
    width: 100%;
    height: 400px;
    box-shadow: 5px 5px 15px 5px rgba(230, 230, 250, 1);
  }
  .hero-image img{
    width: 100%;
    border-radius: 1rem;
    height: 100%;
    object-fit: cover;
  }
.page-container{
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;

}
.package-info-container{
  /* background-color: red;  //change later */
  /* height:700px  //change later */
}
.package-booking-form-container{
      background: linear-gradient(125deg,rgba(99,171,69,0.1) 0%,rgba(251,176,59,0.1) 100%);
    border-radius: 5px;
    padding: 25px;
}
.capitalize{
text-transform: capitalize;
}
.package-title{
   color: var(--title-color);
    font-family: var(--font-rubik);
    font-size: 3rem;
    line-height: 1.25;
    font-weight: 500;
    text-align: start;
    letter-spacing: .75px;
    margin-bottom: 20px
}

.package-details-area .tour-price {
    display: flex;
    align-items: baseline;
    margin-bottom: 15px;
}

.package-details-area .tour-price h3 {
    font-size: 2rem;
    font-family: var(--font-jost);
    color: var(--primary-color1);
    line-height: 1.25;
    font-weight: bolder;
    letter-spacing: .75px;
    margin-bottom: 0;
}

.package-details-area .tour-price span {
    font-family: var(--font-jost);
    color:black;
    font-size: 1.2rem;
    line-height: 1.25;
    font-weight: 400;
}

.package-details-area .tour-info-metalist {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 15px;
    gap: 1rem;
    
}

.package-details-area .tour-info-metalist li {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-right: 40px;
    font-size: 1rem;
    font-weight: 500;
    color: var(--title-color);
    font-family: var(--font-rubik);
}
.package-details-area .tour-info-metalist li svg {
    fill: var(--primary-color1);
    font-size: 1.1rem;

}
 
.package-details-area p {
    color: var(--text-color);
    font-family: var(--font-jost);
    font-size: 1rem;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: .54px;
    margin-bottom: 16px;
}
.package-details-area h4 {
    color: var(--title-color);
    font-family: var(--font-rubik);
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: .75px;
    margin-bottom: 1.5rem;
    padding-top: 10px;
}
.package-details-area .includ-and-exclud-area {
    display: flex;
    justify-content: space-between;
    gap: 30px;
}

.mb-20 {
    margin-bottom: 20px;
}

.package-details-area .includ-and-exclud-area ul {
    width: 50%;
}
.package-details-area .includ-and-exclud-area ul li {
    color: var(--text-color);
    font-family: var(--font-jost);
    font-size: 16px;
    font-weight: 400;
    text-transform: capitalize;
    display: flex;
    gap: 8px;
    padding-top: 10px;
}
.package-details-area .includ-and-exclud-area ul li svg {
    color: var(--primary-color1);
    font-weight: 400;
    font-size: 13px;
}

.package-details-area .includ-and-exclud-area ul.exclud li svg {
    color: red;
}
.itinerary>p{
  color: var(--black-color);
}
.tags ul {
    display: flex;
    align-items: baseline;
    margin-bottom: 15px;
    flex-wrap: wrap;
    gap: 1rem;
}
 .tag{
  background: var(--primary-color1);
  padding: 5px 10px;
  color:#fff;
  border-radius: 10px;
 }
 
.form{
    grid-template-columns: 1fr;
}
 .package-booking-form-container h4 {
      color: var(--title-color);
    font-family: var(--font-rubik);
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: .75px;
    margin-bottom: 10px;
    padding-top: 10px;
    text-align: center;
    text-transform: capitalize;
 }
   .package-booking-form-container p {
    color: var(--text-color);
    text-align: center;
    font-family: var(--font-jost);
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    margin-bottom: 0;
    border-bottom: 1px solid #ddd;
    padding-bottom: 30px;
    margin-bottom: 35px;
}
.package-booking-form-container .total-price {
    color: var(--title-color);
    text-align: center;
    font-family: var(--font-jost);
    font-size: 28px;
    font-weight: 700;
    border-top: 1px solid #ddd;
    padding-top: 30px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
}

/* -------------- Media Query for Mobile --------------------------- */

@media only screen and (max-width: 768px) {
  margin-block: 1rem;
    padding-inline: 1rem;
  .hero-image{
    height: 100%;
  }

  .page-container{
  margin-top: 1.5rem;
  grid-template-columns:1fr;
}

.package-title{
    font-size: 2rem;
}
.package-details-area .includ-and-exclud-area {
    display: block;
}
.package-details-area .includ-and-exclud-area ul {
    display: block;
    width: 100%;
}
  .package-details-area .tour-info-metalist {
    flex-direction:column;
    align-items: start;
}

.itinerary>p{
  color: var(--black-color);
  font-size: 1rem;
    line-height: 1.3rem;
    margin-bottom: 16px;
}
.package-details-area h4 {
    font-size: 1rem;
}
}

`