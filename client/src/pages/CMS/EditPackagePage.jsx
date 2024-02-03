import { Form, redirect, useLoaderData } from "react-router-dom"
import { SubmitButton } from "../../components"
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
 
export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get("/packages/admin/" + params.id);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/admin-dashboard/manage-packages");
  }
};

export const action = async ({ params, request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.patch(`/packages/admin/${params.id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    toast.success("Updated package successfully!");
    return redirect("/admin-dashboard/manage-packages");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/admin-dashboard/manage-packages");
  }
};

const EditPackagePage = () => {
  const {packageInfo} =useLoaderData()
 
  return (
    <div>
      <div className="card">
          <Form   method="post"
        encType="multipart/form-data" className="form">
          <input
          type="file"
          name="imgUrl"
          id="imgUrl"
          accept="image/*"
        />
          <input
            type="text"
            id="packageTitle"
            placeholder="Package Title"
            name="packageTitle"
            defaultValue={packageInfo.packageTitle}
            required
          />
          <input
  type="text"
  placeholder="Tour Name"
  name="tourName"
  id="tourName"
  defaultValue={packageInfo.tourName}
  required
/>
          <input
            type="text"
            placeholder="Location Name"
            name="locationName"
            id="locationName"
            defaultValue={packageInfo.locationName}
            required
          />
        

<input
  type="text"
  placeholder=" Number of days"
  name="days"
  id="days"
  defaultValue={packageInfo.days}
  required
/>

<input
  type="text"
  placeholder="Number of nights"
  name="nights"
  id="nights"
  defaultValue={packageInfo.nights}
  required
/>

<input
  type="text"
  placeholder="Package Starting Price"
  name="startingPrice"
  id="startingPrice"
  defaultValue={packageInfo.startingPrice}
  required
/>

<input
  type="text"
  placeholder="Package Actual Price"
  name="mrpPrice"
  id="mrpPrice"
  defaultValue={packageInfo.mrpPrice}
  required
/>

 
 
         <SubmitButton text="Submit" loadingText="Submitting..." />

        </Form>
        </div>
    </div>
  )
}
export default EditPackagePage