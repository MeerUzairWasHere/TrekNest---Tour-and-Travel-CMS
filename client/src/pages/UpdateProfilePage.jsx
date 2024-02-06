import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { Form, redirect, useLoaderData } from "react-router-dom";
import { SubmitButton } from "../components";

export const loader = async () => {
    try {
        const { data } = await customFetch.get("/users/admin/getUserDetail");
        return data
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return error;
    }
}

export const action = async ({ request, params }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
        await customFetch.patch(`/users/updateUser`, data);
        toast.success("Profile updated successfully!");
        return redirect("/profile");
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return error;
    }
};


const UpdateProfilePage = () => {
    const { user: {
        name,
        email,
        phoneNumber,
        street,
        postalCode,
        city,
        state,
        country } } = useLoaderData()
    return (
        <div className="card">
            <h2>Update details</h2>
            <Form method="post" className="form">
                <input
                    type="text"
                    placeholder="Your name"
                    name="name"
                    id="name"
                    defaultValue={name}
                    required
                />
                <input
                    type="email"
                    placeholder="Type your email"
                    name="email"
                    defaultValue={email}
                    id="email"
                    required
                />

                <input
                    type="tel"
                    placeholder="Your phone number"
                    name="phoneNumber"
                    id="phoneNumber"

                    defaultValue={phoneNumber}
                    required
                />

                <input
                    type="text"
                    placeholder="Your street address"
                    name="street"
                    id="street"
                    defaultValue={street}
                    required
                />

                <input
                    type="text"
                    placeholder="Your postal code"
                    name="postalCode"
                    id="postalCode"
                    defaultValue={postalCode}
                    required
                />

                <input
                    type="text"
                    placeholder="Your city"
                    name="city"
                    defaultValue={city}
                    id="city"
                    required
                />

                <input
                    type="text"
                    placeholder="Your state"
                    name="state"
                    id="state"
                    defaultValue={state}
                    required
                />

                <input
                    type="text"
                    placeholder="Your country"
                    name="country"
                    defaultValue={country}
                    id="country"
                    required
                />
                <SubmitButton text="Update" loadingText="Please wait..." />
            </Form>
        </div>
    )
}
export default UpdateProfilePage