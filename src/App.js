import { Routes, Route } from "react-router-dom";

import Error from "./pages/NotFound";
import ErrorBoundary from "./components/Reuseable/ReactErrorBoundary";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/login" element={<Login />} exact />
        <Route path="/signup" element={<Signup />} exact />

        <Route path="*" element={<Error />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
