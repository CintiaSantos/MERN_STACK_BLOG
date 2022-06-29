import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BlogDetails from "./components/BlogDetails";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NewBlog from "./components/NewBlog";
import Logout from "./components/Logout";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/new" element={<NewBlog />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
