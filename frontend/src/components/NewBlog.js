import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const token = localStorage.getItem("jwtToken");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/posts",
        {
          title,
          content,
        },
        config
      );
      console.log(response.data);
      setTitle("");
      setContent("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="content">
      <div className="input-form">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
          <label>Blog title:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Blog body:</label>
          <textarea
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>

          <button>Add Blog</button>
        </form>
      </div>
    </div>
  );
};
export default NewBlog;
