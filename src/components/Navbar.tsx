import { NavLink } from "react-router-dom";

const Navbar = () => {
 
  return (
    <>
    <nav className="d-flex p-2 bd-highlight navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid"style={{padding:"4px"}}>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="#">Blogs Factory</a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <NavLink to='/'> <a className="nav-NavLink active" style={{color:"black",marginLeft:"30px"}} aria-current="page" href="#">Home</a></NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/About'><a className="nav-NavLink active" style={{color:"black",marginLeft:"30px"}}href="/About">About</a></NavLink>
        </li>
        <li className="nav-item">
         <NavLink to='/More'><a className="nav-NavLink active" style={{color:"black",marginLeft:"30px"}} href="/More" tabIndex={-1} aria-disabled="true">More</a></NavLink>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
        
      </form>
    </div>
  </div>
</nav>
</>
  )
}

export default Navbar;