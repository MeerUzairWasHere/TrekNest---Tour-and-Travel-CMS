import styled from "styled-components"
import { Form, Link } from "react-router-dom"
import SubmitButton from "./SubmitButton"
const PackageCard = ({
    tourName,
    locationName,
    packageTitle,
    days,
    nights,
    startingPrice,
    mrpPrice,
    imgUrl,
    pageUrl, _id, availability, numberOfBookings
}) => {
    const getColor = (availability) => {
        switch (availability) {
            case 'limited':
                return 'green';
            case 'available':
                return 'black';
            case 'sold out':
                return 'red';
            default:
                return 'black';
        }
    };

    // Get the color based on the availability text
    const color = getColor(availability);
    return (
        <PackageCardWrapper>
            <div className="package-card">
                <div className="package-card-img-wrap">
                    <Link to={pageUrl} className="card-img"><img src={imgUrl} className="img" alt={tourName} /></Link>
                    <div className="batch">
                        <span className="date">{days} Days / {nights} Night</span>
                        <div className="location">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                <path d="M8.99939 0C5.40484 0 2.48047 2.92437 2.48047 6.51888C2.48047 10.9798 8.31426 17.5287 8.56264 17.8053C8.79594 18.0651 9.20326 18.0646 9.43613 17.8053C9.68451 17.5287 15.5183 10.9798 15.5183 6.51888C15.5182 2.92437 12.5939 0 8.99939 0ZM8.99939 9.79871C7.19088 9.79871 5.71959 8.32739 5.71959 6.51888C5.71959 4.71037 7.19091 3.23909 8.99939 3.23909C10.8079 3.23909 12.2791 4.71041 12.2791 6.51892C12.2791 8.32743 10.8079 9.79871 8.99939 9.79871Z"></path>
                            </svg>
                            <ul className="location-list">
                                <li><Link to={pageUrl}>{locationName}</Link></li>
                                <li><Link to={pageUrl}>{tourName}</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="package-card-content">

                    <div className="card-content-top">
                        <h5><Link to={pageUrl} >{packageTitle}</Link></h5>
                        <h5 className="availability" style={{ color }}>
                            {availability}
                        </h5>
                    </div>

                    <div className="card-content-bottom">
                        <div className="price-area">
                            <h6>Starting Form:</h6>
                            <span>₹{startingPrice?.toLocaleString()} <del>₹{mrpPrice?.toLocaleString()}</del></span>
                            <p style={{ fontSize: ".9rem" }}>Number of bookings: <strong>{numberOfBookings || "0"}</strong> </p>
                        </div>
                        <div className="action-buttons">
                            <Link to={`/admin-dashboard/manage-packages/edit/${_id}`} className="primary-btn2">Edit
                            </Link>
                            <Form method="post" action={`/admin-dashboard/manage-packages/delete/${_id}`}>
                                <SubmitButton text="Delete" loadingText="Deleting..." />
                            </Form>

                        </div>

                    </div>
                </div>
            </div>
        </PackageCardWrapper>
    )
}
export default PackageCard

const PackageCardWrapper = styled.div`
     
    .action-buttons{
        height: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 1rem;
    }
    .img{
        height: 250px;
    }

    .package-card{
    height: 100%;
    padding: 20px;
    border-radius: 10px;
    background-color: var(--white-color);
    box-shadow: 0 0 10px 0 rgba(0,0,0,.08);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    }
    .package-card:hover .package-card-img-wrap .card-img img {
    transform: scale(1.1);
}
    .package-card .package-card-img-wrap {
    position: relative;
    transition: all .5s ease-out
}
.package-card .package-card-img-wrap .card-img {
    position: relative;
    overflow: hidden;
    display: block;
    border-radius: 10px
}

.package-card .package-card-img-wrap .card-img img {
    border-radius: 10px;
    transition: all .5s ease-out
}

.package-card .package-card-img-wrap .card-img::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(1deg,rgba(21,47,0,0.56) 1.03%,rgba(21,47,0,0) 90.67%);
    border-radius: 10px;
    z-index: 1
}
.package-card:hover .package-card-img-wrap .card-img::after {
    height: 250%;
    transition: all 600ms linear;
    background-color: transparent;
}
.package-card .package-card-content .card-content-top {
    padding-top: 20px;  
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.package-card .package-card-content .card-content-top .availability {
  font-size: .9rem;
  background: yellow;
  padding: 5px 10px;
  border-radius: 10px;
}
.package-card .package-card-content .card-content-top h5 {
    margin-bottom: 15px;
    transition: .5s;
}
h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-rubik);
    font-weight: 600;
    line-height: 1.4;
    color: var(--title-color);
}
.package-card .package-card-content .card-content-top h5 a {
    color: var(--title-color);
    font-family: var(--font-rubik);
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.4;
    text-transform: capitalize;
    transition: .5s;
}
 
.package-card .package-card-img-wrap .card-img::after {
    position: absolute;
    width: 200%;
    height: 0%;
    left: 50%;
    top: 50%;
    background-color: rgba(255,255,255,.3);
    transform: translate(-50%,-50%) rotate(-45deg);
    content: "";
    z-index: 1
}
.package-card .batch {
    position: absolute;
    top: 5px;
    left: -20px;
    z-index: 1
}
.package-card .batch .date {
    color: var(--white-color);
    font-family: var(--font-rubik);
    font-size: 12px;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: .6px;
    text-transform: uppercase;
    display: inline-flex;
    padding: 8px 10px;
    background-color: var(--title-color);
}

.package-card .batch .location {
    background-color: var(--white-color);
    border: 1px solid rgba(99,171,69,.5);
    padding: 6px 10px;
    display: flex;
    align-items: center;
    gap: 7px;
}
.package-card .batch .location svg {
    fill: var(--primary-color1);
}
.package-card .batch .location .location-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
} 
 

.package-card .batch .location .location-list li a {
    color: var(--title-color);
    font-family: var(--font-rubik);
    font-size: 12px;
    font-weight: 400;
    line-height: 1;
    letter-spacing: .6px;
    text-transform: uppercase;
}
.package-card .package-card-content .card-content-top h5:hover a {
    color: var(--primary-color1);
}

.package-card .package-card-content .card-content-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(16,12,8,.2);
}
.package-card .package-card-content .card-content-bottom .price-area {
    line-height: 1;
}
.package-card .package-card-content .card-content-bottom .price-area h6 {
    color: #333;
    font-family: var(--font-rubik);
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: .24px;
    text-transform: capitalize;
    margin-bottom: 0;
}
.package-card .package-card-content .card-content-bottom .price-area span {
    font-size: 22px;
}
.package-card .package-card-content .card-content-bottom .price-area span {
    color: var(--primary-color1);
    font-family: var(--font-rubik);
    font-size: 26px;
    font-weight: bold;
    line-height: 1;
    display: inline-block;
    text-transform: capitalize;
}
.package-card .package-card-content .card-content-bottom .price-area span del {
    color: rgba(16,12,8,.5);
    font-size: 1rem;
    font-weight: 500;
}
.package-card .package-card-content .card-content-bottom .price-area p {
    color: var(--text-color);
    font-family: var(--font-rubik);
    font-size: 10px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: .2px;
    text-transform: capitalize;
    margin-bottom: 0;
}
.primary-btn2 {
    border-radius: 5px;
    background-color: var(--primary-color1);
    font-family: var(--font-rubik);
    font-weight: bold;
    font-size: 14px;
    color: var(--white-color);
    letter-spacing: .48px;
    text-transform: capitalize;
    line-height: 1;
    padding: 11px 16px;
    display: inline-flex;
    align-items: center;
    gap: 7px;
    transition: .5s;
    position: relative;
    overflow: hidden;
    z-index: 1;
    white-space: nowrap;
}
.primary-btn2 svg {
    fill: var(--white-color);
    transition: .5s;
}.primary-btn2:hover {
    color: var(--white-color);
}
.primary-btn2:hover svg {
    fill: var(--white-color);
}
.primary-btn2:hover::after {
    transform: skewX(45deg) scale(1,1);
}
.primary-btn2::after {
    position: absolute;
    content: "";
    display: block;
    left: 15%;
    right: -20%;
    top: -4%;
    height: 150%;
    width: 150%;
    bottom: 0;
    border-radius: 2px;
    background-color: #0a1019;
    transform: skewX(45deg) scale(0,1);
    z-index: -1;
    transition: all .5s ease-out 0s;
}

`