import { Form, Navigate, redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import styled from "styled-components";
import { SubmitButton } from "../components";
import { useMyContext } from "./Layout";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/auth/login", data);
    toast.success("Login successful");
    return redirect("/");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
const LoginPage = () => {
  const { user } = useMyContext()

  return (
    <Wrapper>
      {user && <Navigate to="/" replace />}
      <div className="container">
        <div className="card">
          <h2>Login</h2>
          <Form method="post" className="form">
            <input
              type="email"
              placeholder="Type your email"
              name="email"
              id="email"
              required
            />
            <input
              type="password"
              autoComplete="true"
              id="password"
              placeholder="Type your password"
              name="password"
              required
            />
            <SubmitButton text="Login" loadingText="Please wait..." />
          </Form>
        </div>
      </div>

    </Wrapper>
  )
}
export default LoginPage
const Wrapper = styled.div`
  
 form {
  grid-template-columns:1fr ;
}
`;