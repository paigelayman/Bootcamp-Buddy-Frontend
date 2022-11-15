import { Link } from 'react-router-dom'

const Nav = ({ authenticated, user, handleLogOut }) => {
    let authenticatedOptions
    if (user) {
      authenticatedOptions = (
        <nav className="signin-nav">
          <h3>Welcome {user.firstName}!</h3>
          <Link onClick={handleLogOut} to="/">
            Sign Out
          </Link>
        </nav>
      )
    }
  
    const publicOptions = (
      <nav className="nav">
        <ul>
        {/* <Link to="/">Home</Link> */}
        <Link to="/register" style={{textDecoration: 'none'}}><li>Register</li></Link>
        <Link to="/signin" style={{textDecoration: 'none'}}><li>Sign In</li></Link>
        </ul>
      </nav>
    )
  
    return (
      <header>
        <Link to="/">
          <div className="logo-wrapper" alt="logo">
            <br></br>
            <img
              className="logo"
              src="https://i.imgur.com/HrcKgzc.png"
              alt="App Logo"
            />
          </div>
        </Link>
        <ul className="nav-links">
   
        </ul>
        {authenticated && user ? authenticatedOptions : publicOptions}
      </header>
    )
  }

  export default Nav