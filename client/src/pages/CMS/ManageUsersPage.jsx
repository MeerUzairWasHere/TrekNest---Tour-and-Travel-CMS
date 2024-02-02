import { toast } from 'react-toastify';
import  customFetch  from '../../utils/customFetch'
import {  useLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import UserInfo from '../../components/CMSCompomnents/UserInfo';

export const loader = async () =>{
   try {
    const {data} =await customFetch.get("/users/admin");
    return data
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
}

const ManageUsersPage = () => {
  const data  =  useLoaderData()
   const {users}= data
  return (
    <Wrapper className='container'>
      <div className="users-count">
        <p>Total Users: <strong>{users.length}</strong></p>
      </div>
      <div className="users-list">
      {users.map((user)=>{
        return (<UserInfo key={user?._id} {...user} />)
      })}
      </div>
    </Wrapper>
  )
}
export default ManageUsersPage

const Wrapper = styled.div`
.users-count{
  margin-block: 1rem;

}

.users-list{
  
     display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  margin-block: 1rem;
}

@media only screen and (max-width: 768px) {
.users-list{
  grid-template-columns: 1fr;
}
}
`