import { toast } from 'react-toastify';
import customFetch from '../../utils/customFetch'
import { useLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import StatItem from '../../components/CMSCompomnents/StatItem';

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/dashboard/stats");
    return data
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
}
const AdminDashboardPage = () => {
  const { stats } = useLoaderData()
  return (
    <Wrapper className='container'>
      <p className='mx-1 b'>Admin Dashboard</p>
      <div className="mx-1 stats-container">
        {
          stats.map((stat, index) => (
            <StatItem key={index + 1} text={stat.statName} count={stat.statCount} />
          ))
        }
      </div>
    </Wrapper>
  )
}
export default AdminDashboardPage

const Wrapper = styled.div`
.b{
  font-weight: bold;
}
  .stats-container{
    display: grid;
    grid-template-columns: repeat(5,1fr);
    gap: 1rem;
  }
@media only screen and (max-width: 768px) {
  .stats-container{
    grid-template-columns: 1fr
  } 
}

`