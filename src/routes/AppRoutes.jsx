import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Associates from "../pages/Associates";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Home Route */}
      <Route path="/" element={<Home />} />
      <Route path="associates" element={<Associates />} />

      {/* Future routes below */}
      {/* <Route path="/contact" element={<Contact />} /> */}
      {/* <Route path="/tracking" element={<TrackingPage />} /> */}
    </Routes>
  );
};

export default AppRoutes;
