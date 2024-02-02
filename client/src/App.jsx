import { createBrowserRouter, RouterProvider } from "react-router-dom";

// importing pages
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MyBookingPage from "./pages/MyBookingPage";
import { AdminDashboardLayoutPage,AdminDashboardPage,ManageBookingsPage,ManagePackagesPage,ManageUsersPage } from "./pages/CMS";
 
//cms loaders
import { loader as ManageUsersLoader } from "./pages/CMS/ManageUsersPage";

// cms action
import { action as DeleteUserAction } from "./pages/CMS/DeleteUserPage";


//loaders
import { loader as LayoutLoader } from "./pages/Layout";



//actions
import { action as LogoutAction } from "./pages/Logout";
import { action as LoginAction } from "./pages/LoginPage";
import { action as RegisterAction } from "./pages/RegisterPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    loader:LayoutLoader,
    children:[{
      index:true,
      element:<Home/>
    },{
      path:"/login",
      element:<LoginPage/>,
      action:LoginAction
    },{
      path:"/register",
      element:<RegisterPage/>,
      action:RegisterAction
    },{
      path:"/bookings",
      element:<MyBookingPage/>
    }, 
    { path: "/logout", action: LogoutAction },
  {
      path:"/admin-dashboard",
      element:<AdminDashboardLayoutPage />,
      children:[
        {
        index:true,
        element:<AdminDashboardPage />
      },
        {
        path:"/admin-dashboard/manage-users",
        element:<ManageUsersPage />,
        loader:ManageUsersLoader
      },
      {
        path:"/admin-dashboard/delete-user/:id",
        action: DeleteUserAction
      },
        {
        path:"/admin-dashboard/manage-bookings",
        element:<ManageBookingsPage />
      },
        {
        path:"/admin-dashboard/manage-packages",
        element:<ManagePackagesPage />
      },
    
    ]
    },  ]

  },

]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;