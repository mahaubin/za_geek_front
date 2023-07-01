import React from 'react'

const OffrePublier = () => {
  return (
    
<main id="main-container">

<div class="">
  <div class="bg-success">
    <div class="content py-3">
   
      <div class="d-lg-none">
        <button type="button"
          class="btn w-100 btn-alt-secondary d-flex justify-content-between align-items-center"
          data-toggle="class-toggle" data-target="#main-navigation" data-class="d-none">
          Menu
          <i class="fa fa-bars"></i>
        </button>
      </div>

      <div id="main-navigation" class="d-none d-lg-block mt-2 mt-lg-0">
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


 
<div class="content">

  <div class="block block-rounded">
    <div class="block-content">
      <div class="block block-rounded">
        <div class="block-header block-header-default">
          <h3 class="block-title text-danger">
            <small>Listes de la dérniers offres</small>
          </h3>
          <a href="#" class="btn btn-primary push border-primary" >Publier</a>
        </div>

        <div class="block-content block-content-full">
         
          <table class="table table-bordered table-striped table-vcenter js-dataTable-responsive">
            <thead>
              <tr>
                <th class="text-center"></th>
                <th>Offres</th>
                <th>Description</th>
                <th style={{width: "15%"}}>Status</th>
                <th style={{width: "15%"}}>Pulication</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center fs-sm">1</td>
                <td class="fw-semibold fs-sm">Technicien IT</td>
                <td class="fs-sm"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, provident totam,
                  cum architecto laudantium ipsam molestiae enim odio dolore debitis nam non, velit hic nemo
                  quidem amet veniam vero impedit? </td>
                <td>
                  <span
                    class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-primary">Public</span>
                </td>
                <td class="text-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-alt-primary" data-bs-toggle="tooltip"
                      title="Modifier l'offre">
                      <i class="fa fa-fw fa-pencil-alt"></i>
                    </button>
                    <button type="button" class="btn btn-sm btn-alt-danger" data-bs-toggle="tooltip"
                      title="Supprimer l'offre">
                      <i class="fa fa-fw fa-times"></i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">2</td>
                <td class="fw-semibold fs-sm">Communication Marketing</td>
                <td class="fs-sm"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum perspiciatis
                  delectus tenetur dolore nisi nihil ut est beatae aliquam explicabo saepe esse reprehenderit eum
                  quos dolores omnis, blanditiis amet accusamus? </td>
                <td>
                  <span
                    class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-danger">Privé</span>
                </td>
                <td class="text-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-alt-primary" data-bs-toggle="tooltip"
                      title="Modifier l'offre">
                      <i class="fa fa-fw fa-pencil-alt"></i>
                    </button>
                    <button type="button" class="btn btn-sm btn-alt-danger" data-bs-toggle="tooltip"
                      title="Supprimer l'offre">
                      <i class="fa fa-fw fa-times"></i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">3</td>
                <td class="fw-semibold fs-sm">Gestionnaire et comptable</td>
                <td class="fs-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, odio. Odio
                  impedit est voluptatum nulla saepe earum in eos vitae reiciendis, corrupti alias inventore
                  deleniti. Exercitationem tenetur sed quisquam labore?</td>
                <td>
                  <span
                    class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-primary">Public</span>
                </td>
                <td class="text-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-alt-primary" data-bs-toggle="tooltip"
                      title="Modifier l'offre">
                      <i class="fa fa-fw fa-pencil-alt"></i>
                    </button>
                    <button type="button" class="btn btn-sm btn-alt-danger" data-bs-toggle="tooltip"
                      title="Supprimer l'offre">
                      <i class="fa fa-fw fa-times"></i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">4</td>
                <td class="fw-semibold fs-sm">Designer avancé</td>
                <td class="fs-sm"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Id veritatis provident
                  quasi! Cumque aliquam ea at reiciendis repudiandae, alias, impedit nemo nulla iusto earum quis
                  deserunt. Alias non odio totam!</td>
                <td>
                  <span
                    class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-danger">Privé</span>
                </td>
                <td class="text-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-alt-primary" data-bs-toggle="tooltip"
                      title="Modifier l'offre">
                      <i class="fa fa-fw fa-pencil-alt"></i>
                    </button>
                    <button type="button" class="btn btn-sm btn-alt-danger" data-bs-toggle="tooltip"
                      title="Supprimer l'offre">
                      <i class="fa fa-fw fa-times"></i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">5</td>
                <td class="fw-semibold fs-sm">Enseignant</td>
                <td class="fs-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, deleniti.
                  Deserunt officia aspernatur qui eum totam saepe laudantium corporis impedit ab commodi quod
                  consequatur molestiae velit, beatae recusandae eaque ex.</td>
                <td>
                  <span
                    class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-primary">Publier</span>
                </td>
                <td class="text-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-alt-primary" data-bs-toggle="tooltip"
                      title="Modifier l'offre">
                      <i class="fa fa-fw fa-pencil-alt"></i>
                    </button>
                    <button type="button" class="btn btn-sm btn-alt-danger" data-bs-toggle="tooltip"
                      title="Supprimer l'offre">
                      <i class="fa fa-fw fa-times"></i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">6</td>
                <td class="fw-semibold fs-sm">Mécanicien</td>
                <td class="fs-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsa debitis
                  praesentium tenetur facere quos maxime veritatis quasi fugit ipsum? Eos odio excepturi
                  doloremque fugit enim officia aut, eius sed.</td>
                <td>
                  <span
                    class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-danger-light text-danger">Disabled</span>
                </td>
                <td class="text-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-alt-primary" data-bs-toggle="tooltip"
                      title="Modifier l'offre">
                      <i class="fa fa-fw fa-pencil-alt"></i>
                    </button>
                    <button type="button" class="btn btn-sm btn-alt-danger" data-bs-toggle="tooltip"
                      title="Supprimer l'offre">
                      <i class="fa fa-fw fa-times"></i>
                    </button>
                  </div>
                </td>
              </tr>
             
                <td class="text-center fs-sm">7</td>
                <td class="fw-semibold fs-sm">Chauffeur</td>
                <td class="fs-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita commodi ipsa
                  velit saepe fugit assumenda corrupti ut fugiat et, porro, eum nam voluptatem blanditiis illo
                  minus dolore quas aliquid quisquam.</td>
                <td>
                  <span
                    class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">Business</span>
                </td>
                <td class="text-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-alt-primary" data-bs-toggle="tooltip"
                      title="Modifier l'offre">
                      <i class="fa fa-fw fa-pencil-alt"></i>
                    </button>
                    <button type="button" class="btn btn-sm btn-alt-danger" data-bs-toggle="tooltip"
                      title="Supprimer l'offre">
                      <i class="fa fa-fw fa-times"></i>
                    </button>
                  </div>
                </td>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
</div>


</main>

       
  )
}

export default OffrePublier









