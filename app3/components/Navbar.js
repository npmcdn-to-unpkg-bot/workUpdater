import React from 'react'

const NavIt = () => (
   <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
          </button>
          <a className="navbar-brand" href="#"><strong className="navbarTxt">Work Status
              Updater</strong></a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li ><a href="#">Updater<span className="sr-only">(current)</span></a></li>
            <li><a
              href="file:////Users/justindrum/firstReduxApps/app1/index2.html">Tracker</a></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown"
                role="button" aria-haspopup="true"
                aria-expanded="false">Coming soon... <span className="caret">&nbsp; </span></a>
              <ul className="dropdown-menu">
                <li><a href="#">Action</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
)

export default NavIt 