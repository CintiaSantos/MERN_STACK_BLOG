import { Link } from "react-router-dom"

const BlogList = ({ blogs }) => {
  return (
    <div className="content">
      <div className="blog-list">
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog._id}>
            <Link to={`/blogs/${blog._id}`}>
              <h2>{blog.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
export default BlogList
