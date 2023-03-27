import React, { useCallback, useEffect, useState } from "react";

const roles = [
  "Utilisateurs",
  "Administrateurs",
  "Modérateurs",
  "Comptables",
  "Directeurs",
  "Secrétaires",
];

const Roles = () => {
  const [criteria, setCriteria] = useState("");

  const handleChange = useCallback((event) => {
    setCriteria(event.target.value);
  }, []);

  const [rolesFiltered, setRolesFiltered] = useState([]);

  useEffect(() => {
    setRolesFiltered(
      roles.filter((role) =>
        role.toLocaleLowerCase().includes(criteria.toLocaleLowerCase())
      )
    );
  }, [criteria]);

  return (
    <div>
      <input
        type="text"
        placeholder="Recherche"
        value={criteria}
        onChange={handleChange}
      />
      <br />
      {rolesFiltered.length
        ? rolesFiltered.map((role, index) => <li key={index}>{role}</li>)
        : "Aucune correspondances à ce critère de recherche."}
    </div>
  );
};

export default Roles;
