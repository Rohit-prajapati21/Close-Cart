import sty from "./header.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
function Header() {
  const [Tab, setTab] = useState(false);
  return (
    <div className={sty.head_container}>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <div className={sty.logo_container}>
              <img src={logo} alt="" className={sty.logo} />

              <span className={sty.logo}>CLOSECART</span>
            </div>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/" className="nav-link px-2 text-secondary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/add-product" className="nav-link px-2 text-white">
                  addProduct
                </Link>
              </li>
               {/*
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  About
                </a>
              </li> */}
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>
            {Tab ? (
              <div className="text-end">
                <Link to="/signin">
                  <button type="button" className="btn btn-outline-light me-2">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button type="button" className="btn btn-warning">
                    Sign-up
                  </button>
                </Link>
              </div>
            ) : (
              <div className={sty.user_icons}>
                <button type="button" className="btn btn-warning">
                  Logout
                </button>
                <Link to="/profile">
                <i className="bi bi-person-circle text-white"></i>
                </Link>
                <Link to="/cart">
                  <i className="bi bi-bag text-white"></i>
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
