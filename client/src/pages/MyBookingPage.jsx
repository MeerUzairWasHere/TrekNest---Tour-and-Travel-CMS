import styled from 'styled-components'
import BookingInfo from '../components/CMSCompomnents/BookingInfo'
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch'
import { useLoaderData } from 'react-router-dom';



export const loader = async () => {
  try {
    const { data } = await customFetch.get("/booking/admin");
    return data
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
}

const MyBookingPage = () => {
  const { totalBookings, bookings } = useLoaderData()

  return (
    <Wrapper className='container'>
      <p className="mx-1">My Bookings: <strong>{totalBookings}</strong></p>
      {bookings.map((booking) => (
        <BookingInfo
          {...booking}
          key={booking._id}
          id={booking._id}
          bookingDate={booking.createdAt}
          name={booking?.userId?.name}
          email={booking?.userId?.email}
          phoneNumber={booking?.userId?.phoneNumber}
          packageTitle={booking?.packageId?.packageTitle}
          startingPrice={booking?.packageId?.startingPrice}
        />

      ))}


    </Wrapper>
  )
}
export default MyBookingPage

const Wrapper = styled.div`
margin-block: 2rem;
display: grid;
gap: 1rem;
`