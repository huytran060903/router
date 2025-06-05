import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from "./components/HomeLayout.jsx";
import Units from "./pages/Units.jsx";
import Inspections from "./pages/Inspections.jsx";
import WorkOrders from "./pages/WorkOrders.jsx";
import Tasks from "./pages/Tasks.jsx";
import Reports from "./pages/Reports.jsx";
import Notifications from "./pages/Notifications.jsx";
import Companies from "./pages/Companies.jsx";
import Regions from "./pages/Regions.jsx";
import Locations from "./pages/Locations.jsx";
import User from "./pages/User.jsx";
import PDFTemplates from "./pages/PDFTemplates.jsx";
import EmailTemplates from "./pages/EmailTemplates.jsx";
import ProtectedUser from "./components/ProtectedFromUser.jsx";
import ProtectedFromManager from "./components/ProtectedFromManager.jsx";

export const UserContext = createContext(null);

const router = createBrowserRouter([
  {
    element: <HomeLayout />,

    children: [
      {
        element: <ProtectedUser />,
        children: [
          {
            element: <ProtectedFromManager />,
            children: [
              {
                path: "reports",
                element: <Reports />,
              },
              {
                path: "companies",
                element: <Companies />,
              },
              {
                path: "regions",
                element: <Regions />,
              },
              {
                path: "locations",
                element: <Locations />,
              },
              {
                path: "pdftemplates",
                element: <PDFTemplates />,
              },
              {
                path: "emailtemplates",
                element: <EmailTemplates />,
              },
            ],
          },

          {
            path: "users",
            element: <User />,
          },
        ],
      },
      {
        path: "units",
        element: <Units />,
      },
      {
        path: "inspections",
        element: <Inspections />,
      },
      {
        path: "workorders",
        element: <WorkOrders />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },

      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "*",
        element: <Navigate to="/inspections" replace />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContext.Provider value={{ id: 1, name: "Huy", role: "admin" }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  </StrictMode>
);
