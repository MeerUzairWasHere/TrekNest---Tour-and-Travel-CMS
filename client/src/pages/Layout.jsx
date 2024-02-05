import {
  Outlet,
  useLoaderData,
  useNavigation,
  ScrollRestoration, Navigate
} from "react-router-dom";
import customFetch from "../utils/customFetch";
import { createContext, useContext } from "react";
import { Footer, Header, Navbar } from "../components";

const myContext = createContext();

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/users/current-user");
    return data;
  } catch (error) {
    return error;
  }
};
const Layout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  const { user } = useLoaderData();

  return (
    <myContext.Provider value={{ user }}>
      <Header />
      <Navbar />
      <main>
        {isPageLoading ? <h4 className="mx-1">Loading...</h4> : <Outlet context={user} />}
        {user ? null : <Navigate to="/" />}

      </main>
      <Footer />
      <ScrollRestoration />
    </myContext.Provider>

  )
}
export default Layout


export const useMyContext = () => useContext(myContext);