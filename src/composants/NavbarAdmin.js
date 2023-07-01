import React from 'react'

const NavbarAdmin = () => {
  return (
    <!doctype html>
    <html lang="fr">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
    
        <title>Admin / Wonboar</title>
    
        <meta name="description" content="Admin Wonboard">
        <meta name="author" content="pixelcave">
        <meta name="robots" content="noindex, nofollow">
    
        <!-- Open Graph Meta -->
        <meta property="og:title" content="Wonboard">
        <meta property="og:site_name" content="Wonboard">
        <meta property="og:description" content="Admin Wonboard">
        <meta property="og:type" content="website">
        <meta property="og:url" content="">
        <meta property="og:image" content="">
        <link rel="shortcut icon" href="assets/media/favicons/favicon.png">
        <link rel="icon" type="image/png" sizes="192x192" href="assets/media/favicons/favicon-192x192.png">
        <link rel="apple-touch-icon" sizes="180x180" href="assets/media/favicons/apple-touch-icon-180x180.png">
        <link rel="stylesheet" id="css-main" href="assets/css/oneui.min.css">
      </head>
    
      <body>
        <div id="page-container" class="sidebar-o sidebar bg-body-extra-light enable-page-overlay side-scroll page-header-fixed main-content-narrow">
          <!-- Side Overlay-->
          <aside id="side-overlay">
            <!-- Side Header -->
            <div class="content-header border-bottom">
              <!-- User Avatar -->
              <a class="img-link me-1" href="javascript:void(0)">
                <img class="img-avatar img-avatar32" src="assets/media/avatars/avatar10.jpg" alt="">
              </a>
              <div class="ms-2">
                <a class="text-dark fw-semibold fs-sm" href="javascript:void(0)">Admin</a>
              </div>
              <a class="ms-auto btn btn-sm btn-alt-danger" href="javascript:void(0)" data-toggle="layout" data-action="side_overlay_close">
                <i class="fa fa-fw fa-times"></i>
              </a>
            </div>
    
            <div class="content-side">
              <!-- Side Overlay Tabs -->
              <div class="block block-transparent pull-x pull-t">
                <ul class="nav nav-tabs nav-tabs-block nav-justified" role="tablist">
                  <li class="nav-item">
                    <button type="button" class="nav-link active" id="so-overview-tab" data-bs-toggle="tab" data-bs-target="#so-overview" role="tab" aria-controls="so-overview" aria-selected="true">
                      <i class="fa fa-fw fa-coffee text-gray opacity-75 me-1"></i> Overview
                    </button>
                  </li>
                  <li class="nav-item">
                    <button type="button" class="nav-link" id="so-sales-tab" data-bs-toggle="tab" data-bs-target="#so-sales" role="tab" aria-controls="so-sales" aria-selected="false">
                      <i class="fa fa-fw fa-chart-line text-gray opacity-75 me-1"></i> Sales
                    </button>
                  </li>
                </ul>
                <div class="block-content tab-content overflow-hidden">
                  <!-- Overview Tab -->
                  <div class="tab-pane pull-x fade fade-left show active" id="so-overview" role="tabpanel" aria-labelledby="so-overview-tab" tabindex="0">
                    <!-- Activity -->
                    <div class="block block-transparent">
                      <div class="block-header block-header-default">
                        <h3 class="block-title">Activité récent</h3>
                        <div class="block-options">
                          <button type="button" class="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                            <i class="si si-refresh"></i>
                          </button>
                          <button type="button" class="btn-block-option" data-toggle="block-option" data-action="content_toggle"></button>
                        </div>
                      </div>
                      <div class="block-content">
                        <!-- Activity List -->
                        <ul class="nav-items mb-0">
                          <li>
                            <a class="text-dark d-flex py-2" href="javascript:void(0)">
                              <div class="flex-shrink-0 me-3 ms-2">
                                <i class="fa fa-fw fa-plus text-success"></i>
                              </div>
                              <div class="flex-grow-1 fs-sm">
                                <div class="fw-semibold">Nouveau profil vous a aboné</div>
                                <div>Rabenanaokokolo Laris</div>
                                <small class="text-muted">il y a 3 minutes</small>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a class="text-dark d-flex py-2" href="javascript:void(0)">
                              <div class="flex-shrink-0 me-3 ms-2">
                                <i class="fa fa-fw fa-pencil-alt text-info"></i>
                              </div>
                              <div class="flex-grow-1 fs-sm">
                                <div class="fw-semibold">Un profil a désaboné</div>
                                <div>Jean Pière Paul</div>
                                <small class="text-muted">il y a 15 minutes</small>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a class="text-dark d-flex py-2" href="javascript:void(0)">
                              <div class="flex-shrink-0 me-3 ms-2">
                                <i class="fa fa-fw fa-plus text-danger"></i>
                              </div>
                              <div class="flex-grow-1 fs-sm">
                                <div class="fw-semibold">Nouveau offre ajouter</div>
                                <div>Rabarikoto</div>
                                <small class="text-muted">Il y a 4 heures</small>
                              </div>
                            </a>
                          </li>
                        </ul>
    
                      </div>
                    </div>
    
                    <div class="block block-transparent">
                      <div class="block-header block-header-default">
                        <h3 class="block-title">Amis en ligne</h3>
                        <div class="block-options">
                          <button type="button" class="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                            <i class="si si-refresh"></i>
                          </button>
                          <button type="button" class="btn-block-option" data-toggle="block-option" data-action="content_toggle"></button>
                        </div>
                      </div>
                      <div class="block-content">
                        <!-- Users Navigation -->
                        <ul class="nav-items mb-0">
                          <li>
                            <a class="d-flex py-2" href="javascript:void(0)">
                              <div class="me-3 ms-2 overlay-container overlay-bottom">
                                <img class="img-avatar img-avatar48" src="assets/media/avatars/avatar1.jpg" alt="">
                                <span class="overlay-item item item-tiny item-circle border border-2 border-white bg-success"></span>
                              </div>
                              <div class="flex-grow-1 fs-sm">
                                <div class="fw-semibold">Laura Carry</div>
                                <div class="text-muted">Copywriter</div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a class="d-flex py-2" href="javascript:void(0)">
                              <div class="me-3 ms-2 overlay-container overlay-bottom">
                                <img class="img-avatar img-avatar48" src="assets/media/avatars/avatar16.jpg" alt="">
                                <span class="overlay-item item item-tiny item-circle border border-2 border-white bg-success"></span>
                              </div>
                              <div class="flex-grow-1 fs-sm">
                                <div class="fw-semibold">Jack Estrada</div>
                                <div class="text-muted">Web Developer</div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a class="d-flex py-2" href="javascript:void(0)">
                              <div class="me-3 ms-2 overlay-container overlay-bottom">
                                <img class="img-avatar img-avatar48" src="assets/media/avatars/avatar1.jpg" alt="">
                                <span class="overlay-item item item-tiny item-circle border border-2 border-white bg-success"></span>
                              </div>
                              <div class="flex-grow-1 fs-sm">
                                <div class="fw-semibold">Melissa Rice</div>
                                <div class="text-muted">Web Designer</div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a class="d-flex py-2" href="javascript:void(0)">
                              <div class="me-3 ms-2 overlay-container overlay-bottom">
                                <img class="img-avatar img-avatar48" src="assets/media/avatars/avatar1.jpg" alt="">
                                <span class="overlay-item item item-tiny item-circle border border-2 border-white bg-warning"></span>
                              </div>
                              <div class="flex-grow-1 fs-sm">
                                <div class="fw-semibold">Rakotonoro Rova</div>
                                <div class="text-muted">Photographer</div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a class="d-flex py-2" href="javascript:void(0)">
                              <div class="me-3 ms-2 overlay-container overlay-bottom">
                                <img class="img-avatar img-avatar48" src="assets/media/avatars/avatar14.jpg" alt="">
                                <span class="overlay-item item item-tiny item-circle border border-2 border-white bg-warning"></span>
                              </div>
                              <div class="flex-grow-1 fs-sm">
                                <div class="fw-semibold">Jesse Fisher</div>
                                <div class="text-muted">Graphic Designer</div>
                              </div>
                            </a>
                          </li>
                        </ul>
                        <!-- END Users Navigation -->
                      </div>
                    </div>
                    <div class="block block-transparent mb-0">
                      <div class="block-header block-header-default">
                        <h3 class="block-title">Aaccès rapide</h3>
                        <div class="block-options">
                          <button type="button" class="btn-block-option" data-toggle="block-option" data-action="content_toggle"></button>
                        </div>
                      </div>
                      <div class="block-content">
                        <!-- Quick Settings Form -->
                        <form action="be_pages_dashboard.html" method="POST" onsubmit="return false;">
                          <div class="mb-4">
                            <p class="fs-sm fw-semibold mb-2">
                              en ligne
                            </p>
                            <div class="form-check form-switch">
                              <input class="form-check-input" type="checkbox" value="" id="so-settings-check1" name="so-settings-check1" checked>
                              <label class="form-check-label fs-sm" for="so-settings-check1">Voir votre profil</label>
                            </div>
                          </div>
                          <div class="mb-4">
                            <p class="fs-sm fw-semibold mb-2">
                             auto mis à jours
                            </p>
                            <div class="form-check form-switch">
                              <input class="form-check-input" type="checkbox" value="" id="so-settings-check2" name="so-settings-check2" checked>
                              <label class="form-check-label fs-sm" for="so-settings-check2">Atention pour votre iddentité</label>
                            </div>
                          </div>
                          <div class="mb-4">
                            <p class="fs-sm fw-semibold mb-1">
                              Alerte application
                            </p>
                            <div class="space-y-2">
                              <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" value="" id="so-settings-check3" name="so-settings-check3" checked>
                                <label class="form-check-label fs-sm" for="so-settings-check3">otification email</label>
                              </div>
                              <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" value="" id="so-settings-check4" name="so-settings-check4" checked>
                                <label class="form-check-label fs-sm" for="so-settings-check4">SMS Notifications</label>
                              </div>
                            </div>
                          </div>
                          <div class="mb-4">
                            <p class="fs-sm fw-semibold mb-1">
                              API
                            </p>
                            <div class="form-check form-switch">
                              <input class="form-check-input" type="checkbox" value="" id="so-settings-check5" name="so-settings-check5" checked>
                              <label class="form-check-label fs-sm" for="so-settings-check5">Acces interdit</label>
                            </div>
                          </div>
                        </form>
                        <!-- END Quick Settings Form -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
    
          <nav id="sidebar" aria-label="Main Navigation" class="border-primary" style="box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Shadow color and intensity */
      transition: box-shadow 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }
    ">
            <!-- Side Header -->
            <div class="content-header">
              <!-- Logo -->
              <a class="fw-semibold text-dual" href="index.html">
                <span class="smini-visible">
                  <i class="text-primary"></i>
                </span>
                <span class="smini-hide fs-5 tracking-wider">Won<span class="fw-normal">board</span></span>
              </a>
              <div>
                <a class="d-lg-none btn btn-sm btn-alt-secondary ms-1" data-toggle="layout" data-action="sidebar_close" href="javascript:void(0)">
                  <i class="fa fa-fw fa-times"></i>
                </a>
              </div>
            </div>
            <div class="js-sidebar-scroll">
              <!-- Side Navigation -->
              <div class="content-side">
                <ul class="nav-main">
                  <li class="nav-main-item">
                    <a class="nav-main-link" href="">
                      <span class="nav-main-link-name">Tableau de bord</span>
                    </a>
                  </li>
                  <li class="nav-main-item">
                    <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                      <span class="nav-main-link-name">Gestion des offres d'emploi</span>
                    </a>
                  </li>
                  <li class="nav-main-item">
                    <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="user-list.html">
                      <span class="nav-main-link-name">Gestion des utilisateurs</span>
                    </a>
                  </li>
                  <li class="nav-main-item">
                    <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
    
                      <span class="nav-main-link-name">Statistiques et rapports</span>
                    </a>
                  </li>
                  <li class="nav-main-item">
                    <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
    
                      <span class="nav-main-link-name">Gestion des candidatures</span>
                    </a>
                  </li>
                  <li class="nav-main-item">
                    <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
    
                      <span class="nav-main-link-name">Gestion des catégories et des tags</span>
                    </a>
                  </li>
                  <li class="nav-main-item">
                    <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
    
                      <span class="nav-main-link-name">Paramètres du site</span>
                    </a>
                  </li>
                </ul>
              </div>
    
            </div>
          </nav>
    
          <header id="page-header">
            <div class="content-header">
              <div class="d-flex align-items-center">
    
                <button type="button" class="btn btn-sm btn-alt-secondary me-2 d-lg-none" data-toggle="layout" data-action="sidebar_toggle">
                  <i class="fa fa-fw fa-bars"></i>
                </button>
    
                <button type="button" class="btn btn-sm btn-alt-secondary me-2 d-none d-lg-inline-block" data-toggle="layout" data-action="sidebar_mini_toggle">
                  <i class="fa fa-fw fa-ellipsis-v"></i>
                </button>
              </div>
              <!-- END Left Section -->
    
              <!-- Right Section -->
              <div class="d-flex align-items-center">
                <!-- User Dropdown -->
                <div class="dropdown d-inline-block ms-2">
                  <button type="button" class="btn btn-sm btn-alt-secondary d-flex align-items-center" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img class="rounded-circle" src="assets/media/avatars/avatar10.jpg" alt="Header Avatar" style="width: 21px;">
                    <span class="d-none d-sm-inline-block ms-2">Wonboard</span>
                    <i class="fa fa-fw fa-angle-down d-none d-sm-inline-block opacity-50 ms-1 mt-1"></i>
                  </button>
                  <div class="dropdown-menu dropdown-menu-md dropdown-menu-end p-0 border-0" aria-labelledby="page-header-user-dropdown">
                    <div class="p-3 text-center bg-body-light border-bottom rounded-top">
                      <img class="img-avatar img-avatar48 img-avatar-thumb" src="assets/media/avatars/avatar10.jpg" alt="">
                      <p class="mt-2 mb-0 fw-medium">Wonboard</p>
                      <p class="mb-0 text-muted fs-sm fw-medium">Admin pricipal</p>
                    </div>
                    <div class="p-2">
                      <a class="dropdown-item d-flex align-items-center justify-content-between" href="be_pages_generic_inbox.html">
                        <span class="fs-sm fw-medium">Message</span>
                        <span class="badge rounded-pill bg-primary ms-2">3</span>
                      </a>
                      <a class="dropdown-item d-flex align-items-center justify-content-between" href="be_pages_generic_profile.html">
                        <span class="fs-sm fw-medium">Profile</span>
                        <span class="badge rounded-pill bg-primary ms-2">1</span>
                      </a>
                      <a class="dropdown-item d-flex align-items-center justify-content-between" href="javascript:void(0)">
                        <span class="fs-sm fw-medium">Parametre</span>
                      </a>
                    </div>
                    <div role="separator" class="dropdown-divider m-0"></div>
                    <div class="p-2">
                      <a class="dropdown-item d-flex align-items-center justify-content-between" href="op_auth_signin.html">
                        <span class="fs-sm fw-medium">Déconnexion</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="dropdown d-inline-block ms-2">
                  <button type="button" class="btn btn-sm btn-alt-secondary" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fa fa-fw fa-bell"></i>
                    <span class="text-primary">•</span>
                  </button>
                  <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 border-0 fs-sm" aria-labelledby="page-header-notifications-dropdown">
                    <div class="p-2 bg-body-light border-bottom text-center rounded-top">
                      <h5 class="dropdown-header text-uppercase">Notifications</h5>
                    </div>
                    <ul class="nav-items mb-0">
                      <li>
                        <a class="text-dark d-flex py-2" href="javascript:void(0)">
                          <div class="flex-shrink-0 me-2 ms-3">
                            <i class="fa fa-fw fa-check-circle text-success"></i>
                          </div>
                          <div class="flex-grow-1 pe-2">
                            <div class="fw-semibold">Vous avez un nouveau utilisateur</div>
                            <span class="fw-medium text-muted">15 min ago</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a class="text-dark d-flex py-2" href="javascript:void(0)">
                          <div class="flex-shrink-0 me-2 ms-3">
                            <i class="fa fa-fw fa-plus-circle text-primary"></i>
                          </div>
                          <div class="flex-grow-1 pe-2">
                            <div class="fw-semibold">1 new sale, keep it up</div>
                            <span class="fw-medium text-muted">22 min ago</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a class="text-dark d-flex py-2" href="javascript:void(0)">
                          <div class="flex-shrink-0 me-2 ms-3">
                            <i class="fa fa-fw fa-times-circle text-danger"></i>
                          </div>
                          <div class="flex-grow-1 pe-2">
                            <div class="fw-semibold">Update failed, restart server</div>
                            <span class="fw-medium text-muted">26 min ago</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a class="text-dark d-flex py-2" href="javascript:void(0)">
                          <div class="flex-shrink-0 me-2 ms-3">
                            <i class="fa fa-fw fa-plus-circle text-primary"></i>
                          </div>
                          <div class="flex-grow-1 pe-2">
                            <div class="fw-semibold">2 new sales, keep it up</div>
                            <span class="fw-medium text-muted">33 min ago</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a class="text-dark d-flex py-2" href="javascript:void(0)">
                          <div class="flex-shrink-0 me-2 ms-3">
                            <i class="fa fa-fw fa-user-plus text-success"></i>
                          </div>
                          <div class="flex-grow-1 pe-2">
                            <div class="fw-semibold">You have a new subscriber</div>
                            <span class="fw-medium text-muted">41 min ago</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a class="text-dark d-flex py-2" href="javascript:void(0)">
                          <div class="flex-shrink-0 me-2 ms-3">
                            <i class="fa fa-fw fa-check-circle text-success"></i>
                          </div>
                          <div class="flex-grow-1 pe-2">
                            <div class="fw-semibold">You have a new follower</div>
                            <span class="fw-medium text-muted">42 min ago</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                    <div class="p-2 border-top text-center">
                      <a class="d-inline-block fw-medium" href="javascript:void(0)">
                        <i class="fa fa-fw fa-arrow-down me-1 opacity-50"></i> Load More..
                      </a>
                    </div>
                  </div>
                </div>
     
                <button type="button" class="btn btn-sm btn-alt-secondary ms-2" data-toggle="layout" data-action="side_overlay_toggle">
                  <i class="fa fa-fw fa-list-ul fa-flip-horizontal"></i>
                </button>
    
              </div>
            </div>
    
            <div id="page-header-search" class="overlay-header bg-body-extra-light">
              <div class="content-header">
                <form class="w-100" action="#" method="POST">
                  <div class="input-group">
                    <button type="button" class="btn btn-alt-danger" data-toggle="layout" data-action="header_search_off">
                      <i class="fa fa-fw fa-times-circle"></i>
                    </button>
                    <input type="text" class="form-control" placeholder="Search or hit ESC.." id="page-header-search-input" name="page-header-search-input">
                  </div>
                </form>
              </div>
            </div>
            <!-- END Header Search -->
    
            <!-- Header Loader -->
            <!-- Please check out the Loaders page under Components category to see examples of showing/hiding it -->
            <div id="page-header-loader" class="overlay-header bg-body-extra-light">
              <div class="content-header">
                <div class="w-100 text-center">
                  <i class="fa fa-fw fa-circle-notch fa-spin"></i>
                </div>
              </div>
            </div>
            <!-- END Header Loader -->
          </header>
          <!-- END Header -->
    
          <!-- Main Container -->
          <main id="main-container">
            <!-- Hero -->
            <div class="bg-image overflow-hidden" style="background-image: url('assets/media/photos/photo3@2x.jpg');">
              <div class="bg-primary-dark-op">
                <div class="content content-full">
                  <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center mt-5 mb-2 text-center text-sm-start">
                    <div class="flex-grow-1">
                      <h1 class="fw-semibold text-white mb-0">Tableau de bord principal</h1>
                      <h2 class="h4 fw-normal text-white-75 mb-0">Bienvenu Administrateur</h2>
                    </div>
                    <div class="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3">
                      <span class="d-inline-block">
                        <a class="btn btn-primary px-4 py-2" data-toggle="click-ripple" href="javascript:void(0)">
                          <i class="fa fa-plus me-1 opacity-50"></i> Nouveau offre
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- END Hero -->
    
            <!-- Page Content -->
            <div class="content">
              <!-- Stats -->
              <div class="row">
                <div class="col-6 col-md-3 col-lg-6 col-xl-3">
                  <a class="block block-rounded block-link-pop border-start border-primary border-4" href="javascript:void(0)">
                    <div class="block-content block-content-full">
                      <div class="fs-sm fw-semibold text-uppercase text-muted">Visiteurs</div>
                      <div class="fs-2 fw-normal text-dark">120,580</div>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-md-3 col-lg-6 col-xl-3">
                  <a class="block block-rounded block-link-pop border-start border-primary border-4" href="javascript:void(0)">
                    <div class="block-content block-content-full">
                      <div class="fs-sm fw-semibold text-uppercase text-muted">Entreprise</div>
                      <div class="fs-2 fw-normal text-dark">150</div>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-md-3 col-lg-6 col-xl-3">
                  <a class="block block-rounded block-link-pop border-start border-primary border-4" href="javascript:void(0)">
                    <div class="block-content block-content-full">
                      <div class="fs-sm fw-semibold text-uppercase text-muted">Utilisateur</div>
                      <div class="fs-2 fw-normal text-dark">3200</div>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-md-3 col-lg-6 col-xl-3">
                  <a class="block block-rounded block-link-pop border-start border-primary border-4" href="javascript:void(0)">
                    <div class="block-content block-content-full">
                      <div class="fs-sm fw-semibold text-uppercase text-muted">Offre publié</div>
                      <div class="fs-2 fw-normal text-dark">321</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <!-- END Page Content -->
          </main>
          <!-- END Main Container -->
    
          <!-- Footer -->
          <footer id="page-footer" class="bg-body-extra-light">
            <div class="content py-3">
              <div class="row fs-sm">
                <div class="col-sm-6 order-sm-2 py-1 text-center text-sm-end">
                  Tous les droits Réservés
                </div>
                <div class="col-sm-6 order-sm-1 py-1 text-center text-sm-start">
                  <a class="fw-semibold" href="#" target="_blank">Wonboard &copy; </a><span data-toggle="year-copy"></span>
                </div>
              </div>
            </div>
          </footer>
          <!-- END Footer -->
        </div>
        <!-- END Page Container -->
    
        <!--
            OneUI JS
    
            Core libraries and functionality
            webpack is putting everything together at assets/_js/main/app.js
        -->
        <script src="assets/js/oneui.app.min.js"></script>
    
        <!-- Page JS Plugins -->
        <script src="assets/js/plugins/chart.js/chart.min.js"></script>
    
        <!-- Page JS Code -->
        <script src="assets/js/pages/be_pages_dashboard_v1.min.js"></script>
      </body>
    </html>
  )
};

export default NavbarAdmin;

