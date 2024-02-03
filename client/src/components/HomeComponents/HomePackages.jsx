import styled from "styled-components"
import SanistaText from "../SharedComponents/SanistaText"
import PackageCard from "../SharedComponents/PackageCard"
import customFetch from "../../utils/customFetch"
import { toast } from "react-toastify"
import { useLoaderData } from "react-router-dom"

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/packages/admin");
    return data
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
}


const HomePackages = () => {
  const { packages } = useLoaderData()
  return (
    <HomePackagesWrapper>
      <SanistaText text="Tour Package" />
      <h2>Affordable Vacation Bundles</h2>
      <div className="packages-container">
        {packages.map((pack, index) => {
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