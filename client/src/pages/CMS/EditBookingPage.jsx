import { toast } from "react-toastify";
import customFetch from "../../utils/customFetch";
import { Form, redirect, useLoaderData } from "react-router-dom";
import { SubmitButton } from "../../components";
import dayjs from "dayjs";
import FormRowSelect from "../../components/SharedComponents/FormSelect";
import { BOOKING_STATUS } from "../../utils/contants";


export const loader = async ({ params }) => {
    try {
        const { data } = await customFetch.get("/booking/admin/" + params.id);
        return data;
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return redirect("/admin-dashboard/manage-bookings");
    }
};

export const action = async ({ request,params }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
        await customFetch.patch(`/booking/admin/${params.id}`, data);
        toast.success("Booking updated successfully!");
        return redirect("/admin-dashboard/manage-bookings");
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return error;
    }
};


const EditBookingPage = () => {
    const { booking } = useLoaderData()
    const formattedDateStartDate = dayjs(booking?.startDate).format('YYYY-MM-DD');

    return (
        <div>
            <div className="container">
                <div className="card">
                    <Form method="post" className="form">
                      
                        <input
                            type="text"
                            name="packageId"
                            id="packageId"
                            required
                            style={{ display: "none" }}
                            defaultValue={booking?.packageId}
                        />
                        <input
                            type="date"
                            placeholder="start date"
                            name="startDate"
                            defaultValue={formattedDateStartDate}
                            id="startDate"
                            required
                        />
                        <input
                            type="number"
                            placeholder="Number of persons"
                            name="numberOfPersons"
                            defaultValue={booking?.numberOfPersons}
                            id="numberOfPersons"
                            required
                        />
                        <input
                            type="number"
                            placeholder="Total Price"
                            name="totalPrice"
                            defaultValue={booking?.totalPrice}
                            id="totalPrice"
                            required
                        />
                        <FormRowSelect
                            name="bookingStatus"
                            list={Object.values(BOOKING_STATUS)}
                            defaultValue={booking?.bookingStatus}
                        />

                        <SubmitButton text="Submit" loadingText="Please wait..." />
                    </Form>
                </div>
            </div>
        </div>
    )
}
export default EditBookingPage