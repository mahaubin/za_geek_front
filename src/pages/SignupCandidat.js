import React, { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    contact: '',
    adresse: '',
    avatar: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
      
        console.log('Inscription réussie !');
      } else {

        console.error('Erreur lors de l\'inscription');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-2">
      <div className="row justify-content-center">
        <div className="col-lg-12 col-md-8">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Inscription</h3>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="nom" className="form-label">Nom:</label>
                    <input type="text" className="form-control" id="nom" name="nom" value={formData.nom} onChange={handleChange} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="prenom" className="form-label">Prénom:</label>
                    <input type="text" className="form-control" id="prenom" name="prenom" value={formData.prenom} onChange={handleChange} />
                  </div>
                
               
                  
                  <div className="col-md-6 mb-3">
                    <label htmlFor="contact" className="form-label">Contact:</label>
                    <input type="text" className="form-control" id="contact" name="contact" value={formData.contact} onChange={handleChange} />
                  </div>
              
                <div className="col-md-6 mb-3">
                  <label htmlFor="adresse" className="form-label">Adresse:</label>
                  <input type="text" className="form-control" id="adresse" name="adresse" value={formData.adresse} onChange={handleChange} />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="avatar" className="form-label">Avatar:</label>
                  <input type="file" className="form-control" id="avatar" name="avatar" value={formData.avatar} onChange={handleChange} />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
                  </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="password" className="form-label">Password:</label>
                  <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-success">S'inscrire</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;

