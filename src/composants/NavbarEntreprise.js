import React from 'react'

const NavbarEntreprise = () => {
  return (
    <header id="page-header">
      <div className="content-header">
        <div className="d-flex align-items-center">
          <a className="fw-semibold fs-5 tracking-wider text-dual me-3" href="index.html"> <img width="120px"
              src="assets/media/favicons/logo_large.jpg" alt="" className=""/> </a>
          <div className="dropdown d-inline-block me-2">
          </div>
        </div>

        <div className="d-flex align-items-center">
          <div className="ms-2">
            <div className="row items-push mb-4">
              <div className="col-sm-6 col-xl-4">
                <div className="dropdown">
                  <button type="button" className="btn btn-outline-primary dropdown-toggle"
                    id="dropdown-default-outline-primary" data-bs-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    Profile
                  </button>
                  <div className="dropdown-menu fs-sm" aria-labelledby="dropdown-default-outline-primary">
                    <a className="dropdown-item" href="javascript:void(0)">Paramètre</a>
                    <a className="dropdown-item" href="javascript:void(0)">Mes profils</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="javascript:void(0)">Se déconnecter</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="page-header-loader" className="overlay-header bg-success">
          <div className="content-header">
            <div className="w-100 text-center">
              <i className="fa fa-fw fa-circle-notch fa-spin text-primary"></i>
            </div>
          </div>
        </div>
    </div>
    </header>
  )
}

export default NavbarEntreprise