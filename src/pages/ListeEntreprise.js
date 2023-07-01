import React from 'react'
import NavbarCandidat from'./components/NavbarCandidat'
const ListeEntreprise = () => {
  return (
    <div>
        <div class="main-content">
        <div class="content">
          <form action="be_pages_generic_search.html" method="POST">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="recherche"/>
              <span class="input-group-text">
                <i class="fa fa-fw fa-search"></i>
              </span>
            </div>
          </form>
        </div>
      
        <div class="content">
          <h2 class="content-heading">Les entreprises</h2>
          <div class="row justify-content-center">


            <div class="col-md-6 col-xl-4">
              <a class="block block-rounded block-link-pop text-center" href="#">
                <div class="block-content block-content-full">
                  <img class="img-avatar" src="assets/media/avatars/avatar15.jpg" alt=""/>
                </div>
                <div class="block-content block-content-full block-content-sm bg-body-light">
                  <p class="fw-semibold mb-0 text-success">Banky Foiben'ny Madagasikara</p>
                  <p class="fs-sm fw-medium text-muted mb-0">
                  Finance
                  </p>
                </div>
                <div class="block-content block-content-full">
                  <div class="row g-sm justify-content-between">
                    <div class="col-3">
                      <p class="mb-2">
                        <i class="fa fa-fw fa-box text-body-color-dark"></i>
                      </p>
                      <p class="fs-sm fw-medium text-muted mb-0">
                        32 Offres
                      </p>
                    </div>

                    <div class="col-3">
                      <p class="mb-2">
                        <i class="fa fa-fw fa-comment text-body-color-dark"></i>
                      </p>
                      <p class="fs-sm fw-medium text-muted mb-0">
                        15 Commentaires
                      </p>

                    </div>
                    <div class="col-3">
                      <p class="mb-2">
                        <i class="fa fa-fw fa-star text-body-color-dark"></i>
                      </p>
                      <p class="fs-sm fw-medium text-muted mb-0">
                        15 Vu
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>

      

            <div class="col-md-6 col-xl-4">
              <a class="block block-rounded block-link-pop text-center" href="#">
                <div class="block-content block-content-full">
                  <img class="img-avatar" src="assets/media/avatars/avatar15.jpg" alt=""/>
                </div>
                <div class="block-content block-content-full block-content-sm bg-body-light">
                  <p class="fw-semibold mb-0 text-success">Orange Digital Center Madagascar</p>
                  <p class="fs-sm fw-medium text-muted mb-0">
                    Centre formation numérique
                  </p>
                </div>
                <div class="block-content block-content-full">
                  <div class="row g-sm justify-content-between">
                    <div class="col-3">
                      <p class="mb-2">
                        <i class="fa fa-fw fa-box text-body-color-dark"></i>
                      </p>
                      <p class="fs-sm fw-medium text-muted mb-0">
                        32 Offres
                      </p>
                    </div>

                    <div class="col-3">
                      <p class="mb-2">
                        <i class="fa fa-fw fa-comment text-body-color-dark"></i>
                      </p>
                      <p class="fs-sm fw-medium text-muted mb-0">
                        15 Commentaires
                      </p>

                    </div>
                    <div class="col-3">
                      <p class="mb-2">
                        <i class="fa fa-fw fa-star text-body-color-dark"></i>
                      </p>
                      <p class="fs-sm fw-medium text-muted mb-0">
                        15 Vu
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>


            <div class="col-md-6 col-xl-4">
              <a class="block block-rounded block-link-pop text-center" href="#">
                <div class="block-content block-content-full">
                  <img class="img-avatar" src="assets/media/avatars/avatar15.jpg" alt=""/>
                </div>
                <div class="block-content block-content-full block-content-sm bg-body-light">
                  <p class="fw-semibold mb-0 text-success">Orange Digital Center Madagascar</p>
                  <p class="fs-sm fw-medium text-muted mb-0">
                    Centre formation numérique
                  </p>
                </div>
                <div class="block-content block-content-full">
                  <div class="row g-sm justify-content-between">
                    <div class="col-3">
                      <p class="mb-2">
                        <i class="fa fa-fw fa-box text-body-color-dark"></i>
                      </p>
                      <p class="fs-sm fw-medium text-muted mb-0">
                        32 Offres
                      </p>
                    </div>

                    <div class="col-3">
                      <p class="mb-2">
                        <i class="fa fa-fw fa-comment text-body-color-dark"></i>
                      </p>
                      <p class="fs-sm fw-medium text-muted mb-0">
                        15 Commentaires
                      </p>

                    </div>
                    <div class="col-3">
                      <p class="mb-2">
                        <i class="fa fa-fw fa-star text-body-color-dark"></i>
                      </p>
                      <p class="fs-sm fw-medium text-muted mb-0">
                        15 Vu
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>

          </div>
       
        </div>
        </div>
        </div>
    
  )
}

export default ListeEntreprise