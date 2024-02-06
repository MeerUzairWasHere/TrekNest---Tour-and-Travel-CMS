import { Form, redirect } from "react-router-dom"
import { SubmitButton } from "../components"
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";


export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
        await customFetch.patch(`/users/updateUserPassword`, data);
        toast.success("Password changed successfully!");
        return redirect("/profile");
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return error;
    }
};


const UpdatePasswordPage = () => {
    return (
        <div className="card">
            <h2>Change password</h2>
            <Form method="post" className="form">
                <input
                    type="password"
                    placeholder="Type your old password"
                    name="oldPassword"
                    autoComplete="true"
                    id="oldPassword"
                    required
                />
                <input
                    type="password"
                    placeholder="Type your new password"
                    name="newPassword"
                    id="newPassword"
                    autoComplete="true"
                    required
                />

                <SubmitButton text="Change Password" loadingText="Please wait..." />
            </Form>
        </div>
    )
}
export default UpdatePasswordPage