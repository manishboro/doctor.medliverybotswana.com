import DoctorSignup from "components/_Signup";
import { Helmet } from "react-helmet";

const Signup = () => {
  return (
    <>
      <Helmet>
        <title>Medlivery Doctor | Signup</title>
      </Helmet>

      <DoctorSignup />
    </>
  );
};

export default Signup;
