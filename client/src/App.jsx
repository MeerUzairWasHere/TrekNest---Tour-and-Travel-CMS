import { createBrowserRouter, RouterProvider } from "react-router-dom";

// importing pages
import Home from "./pages/Home";
import PackageInfoPage from "./pages/PackageInfoPage";
import Layout from "./pages/Layout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePageLayout from "./pages/ProfilePageLayout";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import MyBookingPage from "./pages/MyBookingPage";
import ProfilePage from "./pages/ProfilePage";
import UpdatePasswordPage from "./pages/UpdatePasswordPage";
import ErrorPage from "./pages/ErrorPage";

import ShowAllPackagesPage from "./pages/CMS/ShowAllPackagesPage";
import AddNewPackagePage from "./pages/CMS/AddNewPackagePage";
import EditPackagePage from "./pages/CMS/EditPackagePage";
import EditBookingPage from "./pages/CMS/EditBookingPage";

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
import { action as DeleteBookingAction } from "./pages/CMS/DeleteBookingAction";
import { action as DeletePackageAction } from "./pages/CMS/DeletePackagePage";
import { action as AddNewPackageAction } from "./pages/CMS/AddNewPackagePage";
import { action as EditBookingAction } from "./pages/CMS/EditBookingPage";


//loaders
import { loader as LayoutLoader } from "./pages/Layout";
import { loader as HomeLoader } from "./pages/Home";
import { loader as MyBookingsLoader } from "./pages/MyBookingPage";
import { loader as PackageInfoLoader } from "./pages/PackageInfoPage";
import { loader as ProfilePageLoader } from "./pages/ProfilePage";
import { loader as UpdateProfileLoader } from "./pages/UpdateProfilePage";



//actions
import { action as LogoutAction } from "./pages/Logout";
import { action as LoginAction } from "./pages/LoginPage";
import { action as RegisterAction } from "./pages/RegisterPage";
import { action as UpdateUserAction } from "./pages/UpdateProfilePage";
import { action as UpdatePasswordAction } from "./pages/UpdatePasswordPage";
import VerifyPage from "./pages/VerifyPage";
import AccountVerified from "./pages/AccountVerified";
import AccountNotVerified from "./pages/AccountNotVerified";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: LayoutLoader,
    errorElement: <ErrorPage />,
    children: [{
      index: true,
      element: <Home />,
      loader: HomeLoader,
    },
    {
      path: "/packages/:id",
      element: <PackageInfoPage />,
      loader: PackageInfoLoader,
    },
    {
      path: "/user/verify-email?",
      element: <VerifyPage />
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
    }, {
      path: "/profile",
      element: <ProfilePageLayout />, //hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
      children: [{
        index: true,
        element: <ProfilePage />,
        loader: ProfilePageLoader,
      }, {
        path: "update-details",
        element: <UpdateProfilePage />,
        loader: UpdateProfileLoader,
        action: UpdateUserAction
      },
      {
        path: "update-password",
        element: <UpdatePasswordPage />,
        action: UpdatePasswordAction
      }]
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
          path: "/admin-dashboard/manage-bookings/delete/:id",
          action: DeleteBookingAction
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
  {
    path: "/account-verified",
    element: <AccountVerified />
  },
  {
    path: "/account-not-verified",
    element: <AccountNotVerified />
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;