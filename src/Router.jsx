import { Routes, Route } from "react-router-dom";
import { HomePage, Movies } from "./components/pages";

export default function Router() {
  return (
    <Routes>
      <Route path="HomePage" element={<HomePage />} />
      <Route path="Movies" element={<Movies />} />
      <Route />
    </Routes>
  );
}
