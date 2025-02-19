import React from "react";

export const Navbar = () => {
    return(
        <nav class="navbar navbar-expand-md bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand text-light" href="#">Start Bootstrap </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="d-flex" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">Abaout</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">Contact</a>
        </li>
    </ul>
    </div>
  </div>
</nav>
    );
};