import { Helmet } from "react-helmet";

import LoginForm from "components/_Login";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Medlivery Doctor | Login</title>
      </Helmet>

      <LoginForm />
    </>
  );
};

export default Login;
