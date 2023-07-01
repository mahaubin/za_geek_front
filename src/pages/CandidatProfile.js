import React, { useState } from 'react';

const CandidatProfile = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 10;
  const [answers, setAnswers] = useState([]);

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Traitez les réponses finales
      console.log('Réponses finales:', answers);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleAnswerChange = (event) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentStep] = event.target.value;
    setAnswers(updatedAnswers);
  };

  const renderContent = () => {
    const steps = [
        {
            question: "Quelles sont vos compétences techniques ?",
            options: [
              "Développement web",
              "Développement mobile",
              "Analyse de données",
              "Design graphique"
            ]
          },
          {
            question: "Êtes-vous patient dans votre travail ?",
            options: [
              "Oui",
              "Non",
              "Ça dépend de la situation"
            ]
          },
          {
            question: "Quel est votre niveau d'études le plus élevé ?",
            options: [
              "Baccalauréat",
              "Maîtrise",
              "Doctorat",
              "Autre"
            ]
          },
          {
            question: "Quelle est votre expérience de travail précédente ?",
            options: [
              "Développeur front-end",
              "Développeur back-end",
              "Analyste fonctionnel",
              "Chef de projet"
            ]
          },
          {
            question: "Quels sont vos hobbies ou passions ?",
            options: [
              "Sport",
              "Lecture",
              "Musique",
              "Voyages"
            ]
          },
          {
            question: "Avez-vous une expérience avec la gestion de projet ?",
            options: [
              "Oui",
              "Non"
            ]
          },
          {
            question: "Quelle est votre disponibilité pour commencer un nouveau poste ?",
            options: [
              "Immédiatement",
              "Dans un mois",
              "Dans six mois",
              "Autre"
            ]
          },
          {
            question: "Quelle est votre langue maternelle ?",
            options: [
              "Français",
              "Anglais",
              "Espagnol",
              "Autre"
            ]
          },
          {
            question: "Avez-vous une certification pertinente pour le poste ?",
            options: [
              "Oui",
              "Non"
            ]
          },
          {
            question: "Quels sont vos objectifs professionnels à court terme ?",
            options: [
              "Acquérir de nouvelles compétences",
              "Progresser dans mon poste actuel",
              "Changer de domaine",
              "Autre"
            ]
          }
      
    ];

    const currentStepContent = steps[currentStep];

    return (
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{currentStepContent.question}</h2>
          <div className="form-check">
            {currentStepContent.options.map((option, index) => (
              <div key={index}>
                <input
                  className="form-check-input"
                  type="radio"
                  name={`step-${currentStep}`}
                  id={`option-${index}`}
                  value={option}
                  onChange={handleAnswerChange}
                />
                <label className="form-check-label" htmlFor={`option-${index}`}>
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const progressPercentage = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="container">
      <h1 className="text-center">Profil du candidat</h1>
      <div className="progress mb-3">
        <div className="progress-bar" role="progressbar" style={{ width: `${progressPercentage}%` }} aria-valuenow={progressPercentage} aria-valuemin="0" aria-valuemax="100" />
      </div>
      <div className="slider">
        {renderContent()}
      </div>
      <div className="navigation d-flex justify-content-center">
        {currentStep > 0 && (
          <button className="btn btn-success me-2" onClick={handlePrevious}>Précédent</button>
        )}
        {currentStep < totalSteps - 1 ? (
          <button className="btn btn-success" onClick={handleNext}>Suivant</button>
        ) : (
          <button className="btn btn-success" onClick={handleNext}>Terminer</button>
        )}
      </div>
    </div>
  );
};

export default CandidatProfile;
