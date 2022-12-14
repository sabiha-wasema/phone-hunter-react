import React from "react";

const Header = () => {
  return (
    <div>
      <nav class="navbar p-3 navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand fw-bold fs-4" href="#">
            Phone Hunter
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto fst-normal ">
              <li class="nav-item me-4">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item me-4">
                <a class="nav-link" href="#">
                  Products
                </a>
              </li>
              <li class="nav-item me-4">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
