import { Form } from "react-router-dom";
import SubmitButton from '../SharedComponents/SubmitButton'
import styled from "styled-components";

const UserInfo = ({
  _id,
  name,
  email,
  phoneNumber,
  street,
  postalCode,
  city,
  state,
  country
}) => {
  return (
    <Wrapper >
      <div className="info-card">
      <div className="info-item">
        <strong>User Name:</strong> {name}
      </div>
      <div className="info-item">
        <strong>User Email:</strong> {email}
      </div>
      <div className="info-item">
        <strong>User Phone Number:</strong> {phoneNumber}
      </div>
      <div className="info-item">
        <strong>User Address:</strong> {street}, {city}, {state}, {postalCode}, {country}
      </div>

      <Form method="post" action={`/admin-dashboard/delete-user/${_id}`}>
        <SubmitButton text="Delete" loadingText="Deleting..." />
      </Form>
      
    </div>
    </Wrapper>
  );
};

export default UserInfo;

const Wrapper = styled.div`
 

.info-card {
  width: 100%;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;

}

.info-card h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.info-item {
  margin-bottom: 10px;
  color: #555;
  line-height: 1.2;
}

.info-item strong {
  color: #333;
}

`