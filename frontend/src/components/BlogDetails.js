import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BlogDetails = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const token = localStorage.getItem("jwtToken");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:4000/api/posts/${id}`,
        config
      );
      console.log(config);
      // seBlogs(response.data.taskLists)
      setBlog(response.data);
    };
    fetchData();
  }, []);

  const handleDelete = async () => {
    await axios.delete(`http://localhost:4000/api/posts/${id}`, config);
    navigate("/");
  };

  return (
    <div className="content">
      <div className="blog-details">
        {blog && (
          <article>
            <h2>{blog.title}</h2>
            <div>{blog.content}</div>
            <button onClick={handleDelete}>delete</button>
          </article>
        )}
      </div>
    </div>
  );
};
export default BlogDetails;
