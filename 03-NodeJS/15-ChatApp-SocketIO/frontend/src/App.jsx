import { Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import AppLayout from "./layouts/AppLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const { token } = useAuth();
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route
          element={token ? <AppLayout /> : <Navigate to="/login" replace />}
        >
          <Route path="/" element={<Chat />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
