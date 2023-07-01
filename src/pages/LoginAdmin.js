import React, { useContext, useState } from 'react'
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { NavLink, useNavigate } from 'react-router-dom';

const LoginAdmin = () => {
  const redirect = useNavigate();
  const { fetchUser } = useContext(AuthContext);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const connexion = async (e) => {
    e.preventDefault();
    try {
      const loginData = {
        email,
        password,
      };
      await axios.post(`http://localhost:5000/api/admin/login`, loginData);
      await fetchUser();
      redirect('/');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div id="page-container">
    <main id="main-container  justify-content-center">
     
    <div className="hero-static d-flex justify-content-center">
        <div className="w-100 justify-content-center">
       
          <div className="bg-body-extra-light align-items-center justify-content-center">
            <div className="content align-items-center  fs-sm">
              <div className="row g-3 justify-content-center block-content">
                <div className="col-md-10 col-lg-8 col-xl-6 py-4 px-4 px-lg-5 block block-rounded block-rounded" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
              
                  <div className="text-center">
                    <p className="mb-2">
                      <img src="assets/media/favicons/logo_large.jpg" alt="" width="200px"/>
                    </p>
                    <p className="fw-medium text-muted mb-3">
                      Connectez-vous pour accéder à votre compte et découvrir les dernières offres d'emploi correspondant à votre profil.
                    </p>
                  </div>
                  <form className="js-validation-signin" onSubmit={connexion}>
                    <div className="py-3">
                      <div className="mb-4">
                        <input type="text" className="form-control form-control-lg form-control-alt" id="login-username"
                          name="login-username" placeholder="Adresse email"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                      <div className="mb-4">
                        <input type="password" className="form-control form-control-lg form-control-alt" id="login-password"
                          name="login-password" placeholder="Mot de passe"
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}  
                        />
                      </div>
                      <div className="mb-4">
                       
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-lg-6 col-xxl-5">
                        <button type="submit" className="btn w-100 btn-alt-success">
                          <i className="fa fa-fw fa-sign-in-alt me-1 opacity-50"></i> Connectez
                        </button>
                      </div>
                      
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
         
       </div>
       </div>
       </main>
        </div>
  )
}

export default LoginAdmin