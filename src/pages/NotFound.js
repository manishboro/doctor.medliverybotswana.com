import { NavLink } from "react-router-dom";
import CustomButton from "../components/Reuseable/Button";

export default function Error() {
  return (
    <section id="notfound">
      <div className="notfound">
        <h2 style={{ padding: "1rem" }}>We are sorry, but the page you requested was not found!</h2>

        <NavLink
          to="/login"
          style={{
            width: "max-content",
            textDecoration: "none",
            display: "block",
            margin: "auto",
          }}
        >
          <CustomButton text="Go Back to Homepage" />
        </NavLink>
      </div>
    </section>
  );
}
