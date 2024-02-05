import { createBrowserRouter, RouterProvider } from "react-router-dom";

// importing pages
import Home from "./pages/Home";
import PackageInfoPage from "./pages/PackageInfoPage";
import Layout from "./pages/Layout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MyBookingPage from "./pages/MyBookingPage";
import ShowAllPackagesPage from "./pages/CMS/ShowAllPackagesPage";
import AddNewPackagePage from "./pages/CMS/AddNewPackagePage";
import EditPackagePage from "./pages/CMS/EditPackagePage";
import ErrorPage from "./pages/ErrorPage";

import { AdminDashboardLayoutPage, AdminDashboardPage, ManageBookingsPage, ManagePackagesPage, ManageUsersPage } from "./pages/CMS";

//cms loaders
import { loader as ManageUsersLoader } from "./pages/CMS/ManageUsersPage";
import { loader as ShowAllPackagesLoader } from "./pages/CMS/ShowAllPackagesPage";
import { loader as EditPackageLoader } from "./pages/CMS/EditPackagePage";
import { loader as GetAllBookingsLoader } from "./pages/CMS/ManageBookingsPage";
import { loader as AdminDashboardLoader } from "./pages/CMS/AdminDashboardPage";
import { loader as EditBookingLoader } from "./pages/CMS/EditBookingPage";

// cms action
import { action as DeleteUserAction } from "./pages/CMS/DeleteUserPage";
import { action as DeletePackageAction } from "./pages/CMS/DeletePackagePage";
import { action as AddNewPackageAction } from "./pages/CMS/AddNewPackagePage";
import { action as EditBookingAction } from "./pages/CMS/EditBookingPage";


//loaders
import { loader as LayoutLoader } from "./pages/Layout";
import { loader as PackagesLoader } from "./components/HomeComponents/HomePackages";
import { loader as MyBookingsLoader } from "./pages/MyBookingPage";
import { loader as PackageInfoLoader } from "./pages/PackageInfoPage";



//actions
import { action as LogoutAction } from "./pages/Logout";
import { action as LoginAction } from "./pages/LoginPage";
import { action as RegisterAction } from "./pages/RegisterPage";
import EditBookingPage from "./pages/CMS/EditBookingPage";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: LayoutLoader,
    errorElement: <ErrorPage />,
    children: [{
      index: true,
      element: <Home />,
      loader: PackagesLoader,
    },
    {
      path: "/packages/:id",
      element: <PackageInfoPage />,
      loader: PackageInfoLoader,
    },
    {
      path: "/login",
      element: <LoginPage />,
      action: LoginAction
    }, {
      path: "/register",
      element: <RegisterPage />,
      action: RegisterAction
    }, {
      path: "/bookings",
      element: <MyBookingPage />,
      errorElement: <ErrorPage />,
      loader: MyBookingsLoader,
    },
    { path: "/logout", action: LogoutAction },
    {
      path: "/admin-dashboard",
      element: <AdminDashboardLayoutPage />,
      children: [
        {
          index: true,
          element: <AdminDashboardPage />,
          loader: AdminDashboardLoader
        },
        {
          path: "/admin-dashboard/manage-users",
          element: <ManageUsersPage />,
          loader: ManageUsersLoader
        },
        {
          path: "/admin-dashboard/delete-user/:id",
          action: DeleteUserAction
        },
        {
          path: "/admin-dashboard/manage-bookings",
          element: <ManageBookingsPage />,
          loader: GetAllBookingsLoader
        },
        {
          path: "/admin-dashboard/manage-bookings/edit/:id",
          element: <EditBookingPage />,
          loader: EditBookingLoader,
          action: EditBookingAction
        },
        {
          path: "/admin-dashboard/manage-packages",
          element: <ManagePackagesPage />,
          children: [{
            index: true,
            element: <ShowAllPackagesPage />,
            loader: ShowAllPackagesLoader
          }, {
            path: "/admin-dashboard/manage-packages/add",
            element: <AddNewPackagePage />,
            action: AddNewPackageAction
          }, {
            path: "/admin-dashboard/manage-packages/edit/:id",
            element: <EditPackagePage />,
            loader: EditPackageLoader,
          }, {
            path: "/admin-dashboard/manage-packages/delete/:id",
            action: DeletePackageAction
          }]
        },

      ]
    },]

  },

]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;