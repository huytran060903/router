/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import Reports from "../pages/Reports";
import Units from "../pages/Units";
import Inspections from "../pages/Inspections";
import WorkOrders from "../pages/WorkOrders";
import Tasks from "../pages/Tasks";
import Notifications from "../pages/Notifications";
import User from "../pages/User";

import ProtectedUser from "../components/ProtectedFromUser";
import ProtectedFromManager from "../components/ProtectedFromManager";

import UserContextProvider from "../context/UserContext";
import HomeLayout from "../components/HomeLayout";

const renderWithRouter = (ui, { route = "/" } = {}) => {
  return render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>);
};

const renderAppWithRole = (role, path) => {
  return renderWithRouter(
    <UserContextProvider value={{ id: 1, name: "Test", role }}>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/units" element={<Units />} />
          <Route path="/inspections" element={<Inspections />} />
          <Route path="/work-orders" element={<WorkOrders />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route element={<ProtectedUser />}>
            <Route path="/users" element={<User />} />
            <Route element={<ProtectedFromManager />}>
              <Route path="/reports" element={<Reports />} />
            </Route>
          </Route>
          <Route path="*" element={<Inspections />} />
        </Route>
      </Routes>
    </UserContextProvider>,
    { route: path }
  );
};

describe("RBAC - Role Based Access Control", () => {
  it("Admin can access all pages", () => {
    renderAppWithRole("admin", "/reports");
    expect(screen.getByText(/reports page/i)).toBeInTheDocument();
  });

  it("Manager can access /users but NOT /reports", () => {
    renderAppWithRole("manager", "/users");
    expect(screen.getByText(/User Page/i)).toBeInTheDocument();

    renderAppWithRole("manager", "/reports");
    expect(screen.getByText(/inspections page/i)).toBeInTheDocument();
  });

  it("User cannot access /users", () => {
    renderAppWithRole("user", "/users");
    expect(screen.getByText(/Inspections Page/i)).toBeInTheDocument();
  });

  it("User can access /units", () => {
    renderAppWithRole("user", "/units");
    expect(screen.getByText(/units page/i)).toBeInTheDocument();
  });

  it("Redirect to /inspections on invalid route", () => {
    renderAppWithRole("user", "/some-invalid-page");
    expect(screen.getByText(/Inspections Page/i)).toBeInTheDocument();
  });
});
