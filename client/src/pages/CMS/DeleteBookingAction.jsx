import { redirect } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ params }) => {
    try {
        await customFetch.delete(`/booking/admin/${params.id}`);
        toast.success("Booking deleted successfully!");
    } catch (error) {
        toast.error(error?.response?.data?.msg);
    }
    return redirect("/admin-dashboard/manage-bookings");
};