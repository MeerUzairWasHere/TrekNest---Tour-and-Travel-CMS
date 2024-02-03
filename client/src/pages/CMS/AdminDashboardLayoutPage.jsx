import {
  Navigate,
  Outlet,
} from "react-router-dom";
import { useMyContext } from "../Layout";
const AdminDashboardLayoutPage = () => {
  const {user }= useMyContext()
  return (
    <>
      {user?.role === 'admin' ? (
        <Outlet />
      ) : (
        <Navigate to={user ? '/' : '/login'} replace />
      )}
    </>
  )
}
export default AdminDashboardLayoutPage