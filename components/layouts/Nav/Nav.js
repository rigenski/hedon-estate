import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg w-100 bg-transparent position-absolute"
      style={{ background: "rgba(0, 0, 0, 0.5)", zIndex: 100 }}
    >
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" href="#">
          <div className="logo-icon">
            <img src="/assets/img/logo-icon.png" alt="" />
          </div>
          <div className="logo-text ms-2">
            <img src="/assets/img/logo-text.png" alt="" />
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Icon icon="mingcute:menu-fill" color="#fff" height={28} width={28} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2 px-2">
              <Link className="nav-link text-light active" href="#">
                HOME
              </Link>
            </li>
            <li className="nav-item mx-2 px-2">
              <Link className="nav-link text-light" href="#">
                EVENTS & PROMO
              </Link>
            </li>
            <li className="nav-item mx-2 px-2">
              <Link className="nav-link text-light" href="#">
                FACILLITY
              </Link>
            </li>
            <li className="nav-item mx-2 px-2">
              <Link className="nav-link text-light" href="#">
                OUR PARTNERS
              </Link>
            </li>
            <li className="nav-item mx-2 px-2 my-2 mt-md-0 ">
              <Link
                className="nav-link px-3 py-2 btn btn-outline-light text-light"
                href="#"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
