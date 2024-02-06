import styled from "styled-components"
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { useLoaderData } from "react-router-dom";
import logo from '../assets/images/favicon.svg'


export const loader = async () => {
  try {
    const { data } = await customFetch.get("/users/admin/getUserDetail");
    return data
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
}



const ProfilePage = () => {
  const { user: {
    name,
    email,
    phoneNumber,
    street,
    postalCode,
    city,
    state,
    country } } = useLoaderData()


  return (
    <Wrapper className="">
      <div className="profile-header">
        <div className="profile-picture">
          <img src={logo} alt="Profile Picture" />
        </div>
        <div className="profile-name">{name}</div>
        <div className="profile-bio">User Details</div>
      </div>

      <div className="profile-details">
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone Number:</strong> {phoneNumber}</p>
        <p><strong>Location:</strong> {street}, {city}, {state}, {postalCode}, {country}</p>
      </div>
    </Wrapper>
  )
}
export default ProfilePage

const Wrapper = styled.div`
   
 
   .profile-header {
          display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
      margin-bottom: 20px;
    }

    .profile-picture {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      overflow: hidden;
      
      margin-bottom: 10px;
      display: flex;
    }

    .profile-picture img {
      width: 100%;
      height: auto;
    }

    .profile-name {
      font-size: 24px;
      color: #333;
    }

    .profile-bio {
      font-size: 16px;
      color: #666;
      margin-bottom: 20px;
    }

    .profile-details {
      border-top: 1px solid #ddd;
      padding-top: 20px;
    }

    .profile-details p {
      font-size: 16px;
      color: #666;
      margin-bottom: 10px;
    }
 
`