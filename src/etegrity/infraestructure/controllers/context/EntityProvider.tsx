/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useState, useEffect } from "react";
import { useGetData } from "../utils/useGetData";
import { getNextPageType } from "../../../core/domain/changePage";
import { changePage } from "../../../useCases/changePage";

const EntityContext = React.createContext<any>([]);
const dataPath = "http://localhost:8000/data";

const EntityProvider: FC<React.ReactNode> = ({ children }): any => {
  const info = useGetData(dataPath);
  const [idPage, setIdPage] = useState(0);
  const [pageInfo, setPageInfo] = useState(info[idPage]);

  useEffect(() => {
    setPageInfo(info[idPage]);
  }, [info, idPage]);

  return (
    <EntityContext.Provider
      value={{
        pageInfo,
        idPage,
        setIdPage,
        getNextPageType,
        changePage,
      }}
    >
      {children}
    </EntityContext.Provider>
  );
};

export { EntityContext, EntityProvider };
