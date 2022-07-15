import LoginForm from "components/_Login";
import { Helmet } from "react-helmet";

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
