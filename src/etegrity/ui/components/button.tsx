import React, { useContext } from "react";
import { EntityContext } from "../../infraestructure/controllers/context/EntityProvider";

export const Button = () => {
  const { changePage, idPage, setIdPage } = useContext(EntityContext);

  return (
    <button onClick={() => setIdPage(changePage(idPage))}>Siguiente</button>
  );
};
