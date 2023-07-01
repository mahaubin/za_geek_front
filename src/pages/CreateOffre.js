import React from 'react'

const CreateOffre = () => {
  return (
    <div>
    <div id="page-container" class="page-header-light main-content-boxed">
    <header id="page-header">
      <div className="content-header">
        <div className="d-flex align-items-center">
          <a className="fw-semibold fs-5 tracking-wider text-dual me-3" href="index.html"> <img width="120px"
              src="assets/media/favicons/logo_large.jpg" alt="" className=""/></a>
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
 
    <main id="main-container">

      <div className="bg-success">
        <div className="bg-black-10">
          <div className="content py-3">
          
            <div className="d-lg-none">
              <button type="button"
                className="btn w-100 btn-alt-secondary d-flex justify-content-between align-items-center"
                data-toggle="class-toggle" data-target="#main-navigation" data-class="d-none">
                Menu
                <i className="fa fa-bars"></i>
              </button>
            </div>

            <div id="main-navigation" className="d-none d-lg-block mt-2 mt-lg-0">
              <ul className="nav-main nav-main-dark nav-main-horizontal nav-main-hover">
                <li className="nav-main-item">
                  <a className="nav-main-link" href="#">
                    <span className="nav-main-link-name active">Dashboard</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a className="nav-main-link active" href="#">
                    <span className="nav-main-link-name">Offres d'emploi</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a className="nav-main-link active" href="#">
                    <span className="nav-main-link-name">Candidatures</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a className="nav-main-link active" href="#">
                    <span className="nav-main-link-name">Messages</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a className="nav-main-link active" href="#">
                    <span className="nav-main-link-name">Statistiques</span>
                  </a>
                </li>
               
              </ul>
            </div>
          
          </div>
        </div>
      </div>

    
      <div className="content col-lg-7">
        <form className="js-validation" action="" method="POST">
          <div className="block block-rounded">
            <div className="block-content block-content-full">
              <h2 className="content-heading border-bottom mb-4 pb-2">Publier un offre emploie</h2>
              <div className="row items-push">
                <div className="col-lg-4">
                  <p className="fs-sm text-muted">
                    Veillez remplir ce formulaire pour pouvoir publier votre offre d'emploi, ils sont tous obligatoire.
                  </p>
                </div>
                <div className="col-lg-8 col-xl-5 card border-white">

                  <div className="mb-4">
                    <label className="form-label" for="val-desc">Titre <span className="text-danger"/>*</label>
                    <input type="text" name="" id="" className="form-control"/>
                  </div>

                  <div className="mb-4">
                    <label className="form-label" for="localisation">Localisation <span className="text-danger"/>*</label>
                    <select className="form-select" id="localisation" name="localisation">
                      <option value="">Selectionner un lieu</option>
                      <option value="html">Antananarivo</option>
                      <option value="css">Antsiranana</option>
                      <option value="javascript">Majunga</option>
                      <option value="angular">Toliara</option>
                      <option value="react">Nosy Be</option>
                      <option value="vuejs">Fianarantsoa</option>
                      <option value="ruby">Antsirabe</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className="form-label" for="val-desc">Description <span className="text-danger"/>*</label>
                    <textarea className="form-control" id="val-desc" name="val-desc" rows="5"
                      placeholder="Decrivez votre offre?"></textarea>
                  </div>

                  <div className="mb-4">
                    <label className="form-label" for="val-competence">Compétences <span
                        className="text-danger"/>*</label>
                    <textarea className="form-control" id="val-competence" name="val-competence" rows="5"
                      placeholder="Quels sont les compétences réquis pour cet offre?"></textarea>
                  </div>

                </div>
              </div>
              <div className="row items-push text-center justify-content-center">
                <div className="">
                  <button type="submit" className="btn btn-primary col-lg-4">Publier</button>
                </div>
                <div className="">
                  <button type="submit" className="btn btn-alt-danger col-lg-4">Annuler</button>
                </div>
              </div>
              </form> 
</div>
    </main>

  
   
    </div>
  )
}

export default CreateOffre