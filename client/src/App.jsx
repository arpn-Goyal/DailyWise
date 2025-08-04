import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import TopicsSelectionPage from "./pages/TopicsSelectionPage";
import PreferencesPage from "./pages/PreferencesPage";
import DashboardPage from "./pages/DashboardPage";
import EditTopicsPage from "./pages/EditTopicsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/signup",
      element: <SignupPage />,
    },
    {
      path: "/topics",
      element: <TopicsSelectionPage />,
    },
    {
      path: "/preferences",
      element: <PreferencesPage />,
    },
    {
      path: '/dashboard',
      element: <DashboardPage/>
    },
    {
      path: '/edit-topics',
      element: <EditTopicsPage/>
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
