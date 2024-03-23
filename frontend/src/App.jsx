import Header from "./components/Header";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/main.scss";

const App = () => {
  const path = useLocation().pathname;
  return (
    <>
      {path === "/login" ? (
        <>
          <ToastContainer />
          <Outlet />
        </>
      ) : (
        <>
          <Header />
          <ToastContainer />
          <Outlet />
        </>
      )}
    </>
  );
};

export default App;
