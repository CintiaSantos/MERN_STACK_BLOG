import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Full Stack</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/sign-up"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          Register
        </Link>
        <Link
          to="/sign-in"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          Sign in
        </Link>
        <Link
          to="/sign-in"
          onClick={() => localStorage.removeItem("jwtToken")}
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          Logout
        </Link>
        <Link
          to="/new"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
