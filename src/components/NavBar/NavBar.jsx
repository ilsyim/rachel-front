import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      <header className="App-header">
        <Link to="/" className='rachel'>Rachel's Photography</Link> 
        {user ?
          <nav>
            <Link to="/">Photos</Link>
            <Link to="/add">Add Photo</Link>
            <Link to="" onClick={handleLogout}>Log Out</Link>
            {/* <Link to="/changePassword">Change Password</Link> */}
            {/* is the change password component needed? */}
          </nav>
        :
          <nav>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </nav>
        }
      </header>
    </>
  )
}

export default NavBar
