import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

// on créé notre contexte
export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [entreprise, setEntreprise] = useState(false);
  const [candidat, setCandidat] = useState(false);
  const [admin, setAdmin] = useState(false);

  const fetchUser = async () => {
    let adminUrl = 'http://localhost:5000/api/admin/loggedInAdmin';
    let entrepriseUrl = 'http://localhost:5000/api/user/loggedInEntreprise';
    let candidatUrl = 'http://localhost:5000/api/user/loggedInCandidat';

    const checkAdmin = await axios.get(adminUrl);
    const checkEntreprise = await axios.get(entrepriseUrl);
    const checkCandidat = await axios.get(candidatUrl);

    axios
      .all([checkAdmin, checkEntreprise, checkCandidat])
      .then(
        axios.spread((...responses) => {
          const reponseAdmin = responses[0];
          const reponseEntreprise = responses[1];
          const reponseCandidat = responses[2];
          if (reponseAdmin.data === true) {
            setAdmin(reponseAdmin.data);
          } else if (reponseEntreprise.data === true) {
            setEntreprise(reponseEntreprise.data);
          } else if (reponseCandidat.data === true) {
            setCandidat(reponseCandidat.data);
          }
        })
      )
      .catch((errors) => {
        console.log(errors);
      });
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <AuthContext.Provider value={{ entreprise, candidat, admin, fetchUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
