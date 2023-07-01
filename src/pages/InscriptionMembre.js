import React from "react"
import { NavLink} from 'react-router-dom';
import './inscription.css'
function Inscription() {
    return (
        <main id="main-container">
        <div className="button-container">
          <div className="button">
            <p>Rejoignez notre communauté en tant qu'individu ou groupe pour découvrir des opportunités professionnelles,
              partager vos compétences et élargir votre réseau.</p>
            <button><NavLink to="/SignupCandidat"> <h5>S'incrire en tant que candidat</h5></NavLink>
               
             </button>
          </div>
          <div className="button">
            <p>Rejoignez notre plateforme en tant qu'entreprise pour trouver les meilleurs talents et recruter des
              professionnels qualifiés.</p>
            <button >
            <NavLink to="/SignupEntreprise"><h5 className="text-center">S'incrire en tant qu'entreprise</h5></NavLink>
             
            </button>
          </div>
        </div>
  
        <div className="news-container">
          <div className="news">
            <h3>Découvrez les dernières offres d'emploi correspondant à votre profil</h3>
            <p>Restez à jour avec les opportunités de carrière qui correspondent à vos compétences et à vos intérêts. Nous
              recueillons et présentons les meilleures offres d'emploi provenant de diverses entreprises et industries.
            </p>
            <a href="#" className="read-more">Voir les offres d'emploi</a>
          </div>
        </div>
  
  
      </main>
     
    )
}

export default Inscription






