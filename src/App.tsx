import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/app-layout";
import Login from "./pages/login";

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
