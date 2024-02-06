import { toast } from "react-toastify";
import { HomeAboutUs, HomeDestinations, PopularPackages, HomePackages } from "../components"
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  try {
    const { data: { packages } } = await customFetch.get("/packages/admin");
    const { data: { popularPackages } } = await customFetch.get("/packages/admin/popularPackages");

    return { packages, popularPackages };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
}


const Home = () => {
  const { packages, popularPackages } = useLoaderData()
  return (
    <section className="container">
      <HomeAboutUs />
      <HomePackages packages={packages} />
      <HomeDestinations />
      <PopularPackages popularPackages={popularPackages} />
    </section>
  )
}
export default Home