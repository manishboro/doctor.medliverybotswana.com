import { Helmet } from "react-helmet";

import DoctorSignup from "components/_Signup";
import Layout from "components/Reuseable/Layout";

const Signup = () => {
  return (
    <>
      <Helmet>
        <title>Medlivery Doctor | Signup</title>
      </Helmet>

      <Layout>
        <DoctorSignup />
      </Layout>
    </>
  );
};

export default Signup;
