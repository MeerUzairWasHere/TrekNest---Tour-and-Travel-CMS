import { createBrowserRouter, RouterProvider } from "react-router-dom";

// importing pages
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MyBookingPage from "./pages/MyBookingPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";

//loaders
import { loader as LayoutLoader } from "./pages/Layout";

//actions
import { action as LoginAction } from "./pages/LoginPage";
import { action as LogoutAction } from "./pages/Logout";
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
    },{
      path:"/admin-dashboard",
      element:<AdminDashboardPage/>
    }, 
    { path: "/logout", action: LogoutAction },  ]

  },

]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;