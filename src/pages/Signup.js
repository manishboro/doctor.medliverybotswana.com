import { Helmet } from "react-helmet";

import DoctorSignup from "components/_Signup";

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
