import { AppLayout } from "components/Layout";
import { Trip, Home, SignIn, SignUp, Maps } from "pages";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginState } from "recoils";

export const AppRoutes: React.FC = () => {
  const isLoggedIn = useRecoilValue(loginState);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route
            path="/"
            element={isLoggedIn ? <Home /> : <Navigate to="/signin" />}
          />
          <Route path="/trip/:id" element={<Trip />} />
          <Route path="/trip/:id/map" element={<Maps />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};
