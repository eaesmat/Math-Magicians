import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="/home">
        Math Magicians
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form className="d-flex m-auto" />
        <span className="pe-5 text-light">
          <Link to="/" className="text-decoration-none">
            <span className="text-light text-decoration-none"> Home</span>
          </Link>
        </span>
        <span className="pe-5 text-light">
          <Link to="/calculator " className="text-decoration-none">
            <span className="text-light text-decoration-none"> Calculator</span>
          </Link>
        </span>
        <span className="pe-5 text-light">
          <Link to="/quote " className="text-decoration-none">
            <span className="text-light text-decoration-none"> Quote</span>
          </Link>
        </span>
      </div>
    </div>
  </nav>
);

export default NavBar;
