import React, { useState } from "react";
import axios from "axios";

function SignupEntreprise() {
  const [formData, setFormData] = useState({
    entrepriseNom: "",
    email: "",
    telephone: "",
    adresse: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     
      const response = await axios.post("/api/entreprise/register", formData);
      console.log(response.data); 

     
      setFormData({
        entrepriseNom: "",
        email: "",
        telephone: "",
        adresse: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-2">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Inscription Entreprise</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="entrepriseNom" className="form-label">Nom de l'entreprise:</label>
                  <input type="text" className="form-control" id="entrepriseNom" name="entrepriseNom" value={formData.entrepriseNom} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="telephone" className="form-label">Numéro de téléphone:</label>
                  <input type="text" className="form-control" id="telephone" name="telephone" value={formData.telephone} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="adresse" className="form-label">Adresse:</label>
                  <input type="text" className="form-control" id="adresse" name="adresse" value={formData.adresse} onChange={handleChange} />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">S'inscrire</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupEntreprise;
