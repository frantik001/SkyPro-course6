import { Routes, Route } from "react-router-dom";
import { Main } from "./screens/main/main.jsx";
import { Yoga } from "./screens/yoga/yoga.jsx";
import { NotFound } from "./screens/notFound/notFound.jsx";
import { Login } from "./screens/login/login.jsx";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="yoga" element={<Yoga />} />
      <Route path="login" element={<Login />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
