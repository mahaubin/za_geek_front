import React, { useState, useEffect } from 'react';

const ListeEntreprise = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [entreprises, setEntreprises] = useState([]);

  useEffect(() => {
    
    fetch('fake.json')
      .then(response => response.json())
      .then(data => setEntreprises(data))
      .catch(error => console.error(error));
  }, []);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const filteredEntreprises = entreprises.filter(entreprise => {
    const lowercaseSearchTerm = searchTerm.toLowerCase();
    const lowercaseNomEntreprise = entreprise.nomEntreprise.toLowerCase();
    const lowercaseDomaine = entreprise.domaine.toLowerCase();
    return lowercaseNomEntreprise.includes(lowercaseSearchTerm) || lowercaseDomaine.includes(lowercaseSearchTerm);
  });

  return (
    <div className="main-content">
      <div className="content">
        <form action="be_pages_generic_search.html" method="POST">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="recherche" value={searchTerm} onChange={handleSearch} />
            <span className="input-group-text">
              <i className="fa fa-fw fa-search"></i>
            </span>
          </div>
        </form>
      </div>

      <div className="content">
        <h2 className="content-heading">Les entreprises</h2>
        <div className="row justify-content-center">
          {filteredEntreprises.map(entreprise => (
            <div key={entreprise.nomEntreprise} className="col-md-6 col-xl-4">
              <a className="block block-rounded block-link-pop text-center" href="#">
                <div className="block-content block-content-full">
                  <img className="img-avatar" src={entreprise.logoEntreprise} alt="" />
                </div>
                <div className="block-content block-content-full block-content-sm bg-body-light">
                  <p className="fw-semibold mb-0 text-success">{entreprise.nomEntreprise}</p>
                  <p className="fs-sm fw-medium text-muted mb-0">{entreprise.domaine}</p>
                </div>
                <div className="block-content block-content-full">
                  <div className="row g-sm justify-content-between">
                    <div className="col-3">
                      <p className="mb-2">
                        <i className="fa fa-fw fa-box text-body-color-dark"></i>
                      </p>
                      <p className="fs-sm fw-medium text-muted mb-0">32 Offres</p>
                    </div>
                    <div className="col-3">
                      <p className="mb-2">
                        <i className="fa fa-fw fa-comment text-body-color-dark"></i>
                      </p>
                      <p className="fs-sm fw-medium text-muted mb-0">15 Commentaires</p>
                    </div>
                    <div className="col-3">
                      <p className="mb-2">
                        <i className="fa fa-fw fa-star text-body-color-dark"></i>
                      </p>
                      <p className="fs-sm fw-medium text-muted mb-0">15 Vu</p>
                    </div>
                  </div>
                </div>
              </a>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListeEntreprise;
