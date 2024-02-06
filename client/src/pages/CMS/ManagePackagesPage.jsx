import { NavLink, Outlet, Navigate } from "react-router-dom"
import styled from "styled-components"


const ManagePackagesPage = () => {

  return (
    <Wrapper>
      <nav>
        <ul>
          <li>
            <NavLink end to="/admin-dashboard/manage-packages">All Packages</NavLink>
          </li>
          <li>
            <NavLink to="/admin-dashboard/manage-packages/add">Add Package</NavLink>
          </li>

        </ul>
      </nav>
      <div className="container">
        <Outlet />
      </div>
    </Wrapper>
  )
}
export default ManagePackagesPage

const Wrapper = styled.div`
/* Styles for the navigation menu */
  margin-bottom: 2rem;

nav {
  background-color: #333; /* Background color of the navigation bar */
  padding: 10px 20px; /* Padding around the navigation links */
  text-align: center;
  margin-bottom: 2rem;
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
