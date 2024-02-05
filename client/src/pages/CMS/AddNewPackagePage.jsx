import { Form, redirect } from "react-router-dom"
import { SubmitButton } from "../../components"
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/packages/admin", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    toast.success("Package added successfully!");
    return redirect("/admin-dashboard/manage-packages");

  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AddNewPackagePage = () => {

  return (
    <div>
      <div className="card">
        <Form method="post"
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
            required
          />
          <input
            type="text"
            placeholder="Tour Name"
            name="tourName"
            id="tourName"
            required
          />
          <input
            type="text"
            placeholder="Location Name"
            name="locationName"
            id="locationName"
            required
          />


          <input
            type="text"
            placeholder="Number of days"
            name="days"
            id="days"
            required
          />

          <input
            type="text"
            placeholder="Number of nights"
            name="nights"
            id="nights"
            required
          />

          <input
            type="text"
            placeholder="Package Starting Price"
            name="startingPrice"
            id="startingPrice"
            required
          />

          <input
            type="text"
            placeholder="Package Actual Price"
            name="mrpPrice"
            id="mrpPrice"
            required
          />


          <input
            type="text"
            placeholder="Included Features, separate by ( , )"
            name="includedFeatures"
            id="includedFeatures"
            required
          />
          <input
            type="text"
            placeholder="Excluded Features, separate by ( , )"
            name="excludedFeatures"
            id="excludedFeatures"
            required
          />
          <input
            type="text"
            placeholder="Tags, separate by ( , )"
            name="tags"
            id="tags"
            required
          />

          <input
            type="text"
            placeholder="Package Description"
            name="description"
            id="description"
            required
          />

          <input
            type="text"
            placeholder="Package itinerary"
            name="itinerary"
            id="itinerary"
            defaultValue="<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, eveniet!</p>"
            required
          />


          <SubmitButton text="Submit" loadingText="Submitting..." />

        </Form>
      </div>
      
    </div>
  )
}
export default AddNewPackagePage


