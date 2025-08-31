import React from "react";
import { Routes, Route } from "react-router-dom";

import LayoutQR from "../../Pages/LayoutQR";
import Home from "../../Pages/Home";
import ManageQR from "../../Pages/ManageQR";
import History from "../../Pages/History";
import ProfileCard from "../../Pages/Profile";
import QRRequest from "../../Pages/QRRequest";
import Settlement from "../../Pages/Settlement";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LayoutQR />}>
        <Route index element={<Home />} />
        <Route path="manage" element={<ManageQR />} />
        <Route path="history" element={<History />} />
        <Route path="profile" element={<ProfileCard />} />
        <Route path="QRRequest" element={<QRRequest />} />
        <Route path="settlement" element={<Settlement />} />
      </Route>
    </Routes>
  );
}
