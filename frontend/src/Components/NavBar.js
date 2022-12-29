import React from 'react'
import {Link} from 'react-router-dom';
import {FaPlusSquare} from 'react-icons/fa';
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg py-3 fixed-top" style={{backgroundColor: "navy"}}>
    <div className="container">
        <h1 className="navbar-brand text-white">Bloggy View</h1>
                  <button class="navbar-toggler " type="button" data-bs-toggle="collapse"  aria-expanded="true" aria-label="Toggle navigation">
          <Link className="nav-link text-light" to="/createView"><FaPlusSquare size={20}/></Link>
          </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item" style={{backgroundColor:"white"}}><Link className="nav-link" to="/createView">Create Blog  <FaPlusSquare size={20}/></Link></li>
        </ul>
        </div>
    </div>
    </nav>
  )
}

export default NavBar