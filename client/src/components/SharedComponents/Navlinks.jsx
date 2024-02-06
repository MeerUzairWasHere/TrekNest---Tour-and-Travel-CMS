import { Form, NavLink } from "react-router-dom";
import { links } from "../../utils/links"
import { useMyContext } from "../../pages/Layout";

const Navlinks = ({ toggle }) => {
  const { user } = useMyContext();

  // Filter links based on user's role and authentication status
  const filteredLinks = links.filter(link => {
    if (!user) {
      return link.text !== "Logout" && link.text !== "Admin Dashboard" && link.text !== "My Bookings" && link.text && link.text !== "My Profile"
    } else if (user.role === "admin") {
      return link.text !== "Login" && link.text !== "Register"
    } else if (user.role === "user") {
      return link.text !== "Login" && link.text !== "Register" && link.text !== "Admin Dashboard" && link.text
    }
    return true;
  });

  return (
    <>
      {filteredLinks.map((link) => {
        const { text, path } = link;
        return (
          <li key={text}>
            <NavLink to={path} onClick={toggle}>
              {text}
            </NavLink>
          </li>
        );
      })}
      {/* Render Logout button if user is logged in */}
      {user && (
        <li className="reset-css">
          <Form method="post" action={`/logout`} >
            <button type="submit">Logout</button>
          </Form>
        </li>
      )}
    </>
  );
}

export default Navlinks;
