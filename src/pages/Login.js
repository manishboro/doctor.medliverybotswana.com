import { Helmet } from "react-helmet";

import LoginForm from "components/_Login";
import Layout from "components/Reuseable/Layout";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Medlivery Doctor | Login</title>
      </Helmet>

      <Layout>
        <LoginForm />
      </Layout>
    </>
  );
};

export default Login;
