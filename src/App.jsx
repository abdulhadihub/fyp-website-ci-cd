import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";

import AdminDashboard from "./layout/AdminDashboard";
import PatientList from "./pages/PatientList";
import MainDashbord from "./pages/EnrollmentJourny/MainDashbord";
import PatientRecord from "./pages/PatientRecord";
import AddPatient from "./pages/AddPatient";
import PredictedDocuments from "./pages/DocumentLibrary/PredictedDocument";
import NormalDocuments from "./pages/DocumentLibrary/NormalDocuments";

const App = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/" element={<AdminDashboard />}>
        <Route index element={<MainDashbord />} />
        <Route path="dashboard" element={<MainDashbord />} />
        <Route path="predicted-documents" element={<PredictedDocuments />} />
        <Route path="other-documents" element={<NormalDocuments />} />
        <Route path="patient-list" element={<PatientList />} />
        <Route path="add-patient" element={<AddPatient />} />
        <Route path="patient/:id" element={<PatientRecord />} />
      </Route>
    </Routes>
  );
};

export default App;
