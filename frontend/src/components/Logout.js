const Logout = () => {
  const logout = () => {
    localStorage.removeItem("jwtToken")
  }
  return <div onClick={logout}>Logout</div>
}
export default Logout
