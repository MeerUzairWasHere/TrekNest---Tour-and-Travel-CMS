import {
  NavLink,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useMyContext } from "../Layout";
import styled from "styled-components";
const AdminDashboardLayoutPage = () => {
  const { user } = useMyContext()
  return (
    <Wrapper>
      <nav>
        <ul>
          <li>
            <NavLink end to="/admin-dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/admin-dashboard/manage-users">Manage Users</NavLink>
          </li>
          <li>
            <NavLink to="/admin-dashboard/manage-packages">Manage packages</NavLink>
          </li>
          <li>
            <NavLink to="/admin-dashboard/manage-bookings">Manage Bookings</NavLink>
          </li>
        </ul>
      </nav>
      {user?.role === 'admin' ? (
        <Outlet />
      ) : (
        <Navigate to={user ? '/' : '/login'} replace />
      )}


    </Wrapper>
  )
}
export default AdminDashboardLayoutPage

const Wrapper = styled.div`
/* Styles for the navigation menu */
  margin-bottom: 2rem;

nav {
  background-color: #333; /* Background color of the navigation bar */
  padding: 10px 20px; /* Padding around the navigation links */
  text-align: center;
  border-bottom: 1px solid white;
}

ul {
  list-style-type: none; /* Remove default bullet points */
  padding: 0;
  margin: 0;
}

li {
  display: inline; /* Display list items horizontally */
  margin-right: 20px; /* Add some space between list items */
}

/* Styles for the navigation links */
li a {
  color: #fff; /* Text color of the links */
  text-decoration: none; /* Remove underline from links */
  padding: 10px; /* Padding inside the links */
  transition: background-color 0.3s; /* Smooth transition for background color */
}

 

/* Media query for responsiveness */
@media screen and (max-width: 600px) {
  nav ul {
    text-align: center; /* Center-align the navigation links */
  }

  nav li {
    display: block; /* Display list items vertically */
    margin: 10px 0; /* Add some space between list items */
  }
}
`
