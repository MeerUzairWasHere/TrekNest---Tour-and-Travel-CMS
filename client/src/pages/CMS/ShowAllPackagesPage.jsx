import { toast } from "react-toastify";
import customFetch from "../../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { AdminPackageCard } from "../../components";
import styled from "styled-components";


export const loader = async () => {
  try {
    const { data } = await customFetch.get("/packages/admin");
    return data
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
}


const ShowAllPackagesPage = () => {
  const { packages } = useLoaderData()
  return (
    <Wrapper>
      <p className="mx-1">Total Packages: <strong>{packages.length}</strong></p>
      <div className="packages-container">
        {
          packages.map(({
            tourName,
            locationName,
            packageTitle,
            days,
            nights,
            startingPrice,
            mrpPrice,
            imgUrl,
            availability,
            _id, 
            numberOfBookings
          }) => (
            <AdminPackageCard key={_id} tourName={tourName} locationName={locationName} packageTitle={packageTitle} days={days} nights={nights} startingPrice={startingPrice} mrpPrice={mrpPrice} imgUrl={imgUrl} _id={_id} availability={availability} numberOfBookings={numberOfBookings} />
          ))
        }
      </div>
    </Wrapper>
  )
}
export default ShowAllPackagesPage

const Wrapper = styled.div`
    
  .packages-container{
        width: 100%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 1rem;
  }
.mx-1{
  margin-block: 1rem;
}

@media only screen and (max-width: 768px) {
  
.packages-container{
    grid-template-columns: 1fr;
}}
`