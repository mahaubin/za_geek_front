import React from 'react'
import { NavLink} from 'react-router-dom';
import icouser from './avatar10.jpg';
import logo from './logo_large.jpg';
const HeaderCandidat = () => {
  return (
<header id="page-header">
<div className="content-header">
  <div className="d-flex align-items-center">
    <a className="fw-semibold fs-5 tracking-wider text-dual me-3" href="index.html"> <img width="120px" src={logo} alt="" className=""/> </a>
    <div className="dropdown d-inline-block me-2">
    </div>
  </div>
  <div className="d-flex align-items-center">
    <button type="button" className="btn btn-sm btn-alt-secondary d-md-none" data-toggle="layout"
      data-action="header_search_on">
      <i className="fa fa-fw fa-search"></i>
    </button>
    
    <div className="ms-2">
      <button type="button" className="btn btn-sm btn-alt-secondary d-flex align-items-center"
        id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img className="rounded-circle" src={icouser} alt="Header Avatar"
  style={{ width: '21px' }} />
        
       
        <NavLink to="/inscriptionMembre" className="d-none d-sm-inline-block ms-2 text-success">S'inscrire</NavLink>
      </button>
    </div>
    <div className="ms-2">
      <button type="button" className="btn btn-sm btn-alt-secondary d-flex align-items-center"q
        id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img className="rounded-circle" src={icouser} alt="Header Avatar"
  style={{ width: '21px' }} />
        
       
        <NavLink to="/login" className="d-none d-sm-inline-block ms-2 text-success">Se connecter</NavLink>
      </button>
    </div>
  </div>
</div>

<div id="page-header-search" className="overlay-header bg-body-extra-light">
  <div className="content-header">
    <form className="w-100" action="" method="POST">
      <div className="input-group">
        <button type="button" className="btn btn-alt-danger" data-toggle="layout" data-action="header_search_off">
          <i className="fa fa-fw fa-times-circle"></i>
        </button>
        <input type="text" className="form-control" placeholder="Entrez..." id="page-header-search-input"
          name="page-header-search-input" />
      </div>
    </form>
  </div>
</div>

<div id="page-header-loader" className="overlay-header bg-success">
  <div className="content-header">
    <div className="w-100 text-center">
      <i className="fa fa-fw fa-circle-notch fa-spin text-primary"></i>
    </div>
  </div>
</div>

</header>
)
}

export default HeaderCandidat