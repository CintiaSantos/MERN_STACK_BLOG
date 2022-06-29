import BlogList from "./BlogList";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const token = localStorage.getItem("jwtToken");
  console.log("token", token);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:4000/api/posts", {
        headers: {
          "JWT-Token": localStorage.jwtToken,
        },
      });
      console.log(response);
      // seBlogs(response.data.taskLists)
      setBlogs(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="home">
      {blogs.length === 0 && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
