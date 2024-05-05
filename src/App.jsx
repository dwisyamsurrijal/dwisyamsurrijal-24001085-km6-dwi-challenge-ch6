import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";


import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/profile";
import Protected from "./components/Protected";
import NonProtected from "./components/NonProtected";
import store from "./redux/store";
import CarsDetail from "./pages/cars/detail";
import AddCar from "./components/AddCar";
import UpdateCar from "./components/UpdateCar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Navbar />
        <Container className="mt-5">
          <Home />
        </Container>
      </Protected>
    ),
  },
  {
    path: "/login",
    element: (
      <NonProtected>
        <Navbar />
        <Container className="mt-5">
          <Login />
        </Container>
      </NonProtected>
    ),
  },
  {
    path: "/register",
    element: (
      <NonProtected>
        <Navbar />
        <Container className="mt-5">
          <Register />
        </Container>
      </NonProtected>
    ),
  },
  {
    path: "/profile",
    element: (
      <Protected roles={["admin", "superadmin"]}>
        <Navbar />
        <Container className="mt-5">
          <Profile />
        </Container>
      </Protected>
    ),
  },
  {
    path: "/cars/:id",
    element: (
      <Protected>
        <Navbar />
        <Container className="mt-5">
          <CarsDetail />
        </Container>
      </Protected>
    ),
  },
  {
    path: "/cars",
    element: (
      <Protected roles={["admin", "superadmin"]}>
        <Navbar />
        <Container className="mt-5">
          <AddCar />
        </Container>
      </Protected>
    ),
  },
  {
    path: "/cars/update/:id",
    element: (
      <Protected roles={["admin", "superAdmin"]}>
        <Navbar />
        <Container className="mt-5">
          <UpdateCar />
        </Container>
      </Protected>
    ),
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />

      <ToastContainer theme="colored" />
    </Provider>
  );
}

export default App;
