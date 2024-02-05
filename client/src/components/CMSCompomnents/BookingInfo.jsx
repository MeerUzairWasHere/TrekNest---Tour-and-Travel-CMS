import { styled } from 'styled-components'
import { Form, Link } from 'react-router-dom'
import dayjs from 'dayjs'
import { BOOKING_STATUS } from '../../utils/contants';
import SubmitButton from '../SharedComponents/SubmitButton';


const BookingInfo = ({ id, admin, bookingNumber, name, email, phoneNumber, packageTitle, startingPrice, totalPrice, bookingDate, startDate, numberOfPersons, bookingStatus, }) => {


    const formattedDatebookingDate = dayjs(bookingDate).format('DD - MM - YYYY');
    const formattedDateStartDate = dayjs(startDate).format('DD - MM - YYYY');

    const getStatusColor = (status) => {
        switch (status) {
            case BOOKING_STATUS.PENDING:
                return "orange";
            case BOOKING_STATUS.CONFIRMED:
                return "green";
            case BOOKING_STATUS.CANCELED:
                return "red";
            default:
                return "black";
        }
    };

    return (
        <Wrapper>
            <p>Booking Number: <span>{bookingNumber}</span></p>
            <p>Booking Date: <span>{formattedDatebookingDate}</span></p>
            <p>User Name: <span>{name}</span></p>
            <p>Email: <span>{email}</span></p>
            <p>Phone number: <span>{phoneNumber}</span></p>
            <p>Package: <span>{packageTitle}</span></p>
            <p>Package Price: <span>₹{startingPrice?.toLocaleString()}</span></p>
            <p>Total Price: <span>₹{totalPrice?.toLocaleString()}</span></p>
            <p>No. of Persons: <span>{numberOfPersons}</span></p>
            <p>Start Date: <span>{formattedDateStartDate}</span></p>
            <p>Booking Status: <span style={{ textTransform: "capitalize", color: getStatusColor(bookingStatus) }}>{bookingStatus}</span></p>
            {admin && <><div className="action-btns">
                <Link to={`edit/${id}`} >Update</Link>
                <Form method="post" action={`/admin-dashboard/manage-bookings/delete/${id}`}>
                    <SubmitButton text="Delete" loadingText="Deleting..." />
                </Form>
            </div>
            </>}

        </Wrapper>
    )
}
export default BookingInfo

const Wrapper = styled.div`
    display: grid;
    grid-template-columns:repeat(4,1fr);
    grid-template-rows:1fr 1fr 1fr;
    gap: .5rem;
     width: 100%;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    p{
        display: flex;
        align-items: center;
        gap: .2rem;
    }
.action-btns{
        align-items: center;
    display: flex;
    justify-content: start;
    gap: 1rem;
}
.action-btns button{
       padding-inline: 30px;
    background-color: red;
}
    
.action-btns a{
    display: flex;
        align-items: center;
        height: 100%;
    justify-content: center;
}

a{
    border: 0;
    outline: 0;
    color: white;
    background-color: rgb(84, 105, 212);
    box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 2%) 0px 1px 1px 0px, rgb(84 105 212) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 8%) 0px 2px 5px 0px;
    border-radius: 4px;
    font-size: 14px;
    width: 30%;
    font-weight: 500;
    padding: 4px 8px;
    text-align: center;
    display: inline-block;
    transition: background-color .24s,box-shadow .24s;
}

 
   span{
    font-weight: 600;
     
   }

@media only screen and (max-width: 768px) {

    grid-template-columns: 1fr;
    row-gap: 1rem;
}
`