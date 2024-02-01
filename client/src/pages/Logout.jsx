import { redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async () => {
  try {
    await customFetch.delete("/auth/logout");
    toast.success("Logging out...");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return redirect("/");
};