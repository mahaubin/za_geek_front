import React from 'react'

const CreateOffre = () => {
  return (
    <div>
  <div id="page-container" class="page-header-light main-content-boxed">
    <header id="page-header">
      <div class="content-header">
        <div class="d-flex align-items-center">
          <a class="fw-semibold fs-5 tracking-wider text-dual me-3" href="index.html">
            <img width="120px" src="assets/media/favicons/logo_large.jpg" alt="" class="" />
          </a>
          <div class="dropdown d-inline-block me-2"></div>
        </div>

        <div class="d-flex align-items-center">
          <div class="ms-2">
            <div class="row items-push mb-4">
              <div class="col-sm-6 col-xl-4">
                <div class="dropdown">
                  <button type="button" class="btn btn-outline-primary dropdown-toggle" id="dropdown-default-outline-primary"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Profile
                  </button>
                  <div class="dropdown-menu fs-sm" aria-labelledby="dropdown-default-outline-primary">
                    <a class="dropdown-item" href="javascript:void(0)">Paramètre</a>
                    <a class="dropdown-item" href="javascript:void(0)">Mes profils</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="javascript:void(0)">Se déconnecter</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="page-header-loader" class="overlay-header bg-success">
          <div class="content-header">
            <div class="w-100 text-center">
              <i class="fa fa-fw fa-circle-notch fa-spin text-primary"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
  <main id="main-container">
    <div class="bg-success">
      <div class="bg-black-10">
        <div class="content py-3">
          <div class="d-lg-none">
            <button type="button"
              class="btn w-100 btn-alt-secondary d-flex justify-content-between align-items-center"
              data-toggle="class-toggle" data-target="#main-navigation" data-class="d-none">
              Menu
              <i class="fa fa-bars"></i>
            </button>
          </div>

          <div id="main-navigation" class="d-none d-lg-flex mt-2 mt-lg-0">
            <ul class="nav-main nav-main-dark nav-main-horizontal nav-main-hover">
              <li class="nav-main-item">
                <a class="nav-main-link" href="#">
                  <span class="nav-main-link-name active">Dashboard</span>
                </a>
              </li>
              <li class="nav-main-item">
                <a class="nav-main-link active" href="#">
                  <span class="nav-main-link-name">Offres d'emploi</span>
                </a>
              </li>
              <li class="nav-main-item">
                <a class="nav-main-link active" href="#">
                  <span class="nav-main-link-name">Candidatures</span>
                </a>
              </li>
              <li class="nav-main-item">
                <a class="nav-main-link active" href="#">
                  <span class="nav-main-link-name">Messages</span>
                </a>
              </li>
              <li class="nav-main-item">
                <a class="nav-main-link active" href="#">
                  <span class="nav-main-link-name">Statistiques</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="content col-lg-7">
      <form class="js-validation" action="" method="POST">
        <div class="block block-rounded">
          <div class="block-content block-content-full">
            <h2 class="content-heading border-bottom mb-4 pb-2">Publier une offre d'emploi</h2>
            <div class="row items-push">
              <div class="col-lg-4">
                <p class="fs-sm text-muted">
                  Veuillez remplir ce formulaire pour pouvoir publier votre offre d'emploi. Tous les champs sont obligatoires.
                </p>
              </div>
              <div class="col-lg-8 col-xl-5 card border-white">

                <div class="mb-4">
                  <label class="form-label" for="val-desc">Titre <span class="text-danger">*</span></label>
                  <input type="text" name="" id="" class="form-control" />
                </div>

                <div class="mb-4">
                  <label class="form-label" for="localisation">Localisation <span class="text-danger">*</span></label>
                  <select class="form-select" id="localisation" name="localisation">
                    <option value="">Sélectionner un lieu</option>
                    <option value="html">Antananarivo</option>
                    <option value="css">Antsiranana</option>
                    <option value="javascript">Majunga</option>
                    <option value="angular">Toliara</option>
                    <option value="react">Nosy Be</option>
                    <option value="vuejs">Fianarantsoa</option>
                    <option value="ruby">Antsirabe</option>
                  </select>
                </div>

                <div class="mb-4">
                  <label class="form-label" for="val-desc">Description <span class="text-danger">*</span></label>
                  <textarea class="form-control" id="val-desc" name="val-desc" rows="5" placeholder="Décrivez votre offre"></textarea>
                </div>

                <div class="mb-4">
                  <label class="form-label" for="val-competence">Compétences <span class="text-danger">*</span></label>
                  <textarea class="form-control" id="val-competence" name="val-competence" rows="5"
                    placeholder="Quelles sont les compétences requises pour cette offre ?"></textarea>
                </div>

              </div>
            </div>
            <div class="row items-push text-center justify-content-center">
              <div class="">
                <button type="submit" class="btn btn-primary col-lg-4">Publier</button>
              </div>
              <div class="">
                <button type="submit" class="btn btn-alt-danger col-lg-4">Annuler</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </main>
</div>


  )
}

export default CreateOffre