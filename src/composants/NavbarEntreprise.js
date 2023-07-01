import React from 'react'

const NavbarEntreprise = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-success fixed-top">
  <div class="container">
    <a class="navbar-brand" href="#">Mon Site</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Mes offre</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Candidat</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="#">Déconnexion</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default NavbarEntreprise