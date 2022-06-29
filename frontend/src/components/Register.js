import { useState } from "react"
import { toast } from "react-toastify"
import { FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"
import axios from "axios"

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  })
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const { name, email, password, password2 } = formData

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("submit")
    if (password !== password2) {
      toast.error("Passwords do not match")
    } else {
      const userData = {
        name,
        email,
        password,
      }
      const response = await axios.post(
        "http://localhost:4000/api/users",
        userData
      )
      if (response.data._id) {
        console.log("success")
      }
    }
  }

  return (
    <div className="input-form">
      <section>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={onChange}
          />

          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={onChange}
          />

          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            placeholder="Enter password"
            onChange={onChange}
          />

          <input
            type="password"
            className="form-control"
            id="password2"
            name="password2"
            value={password2}
            placeholder="Confirm password"
            onChange={onChange}
          />

          <button type="submit" className="btn btn-block">
            Submit
          </button>
          <p>
            Already registered <Link to="/sign-in">sign in?</Link>
          </p>
        </form>
      </section>
    </div>
  )
}
export default Register
