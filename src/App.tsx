import React, { useContext } from "react";
import "./App.css";
import { Button } from "./etegrity/ui/components/button";
import { EntityContext } from "./etegrity/infraestructure/controllers/context/EntityProvider";
import { Page } from "./etegrity/ui/components/page";

function App() {
  const { pageInfo } = useContext(EntityContext);
  console.log(pageInfo);
  return (
    <div className="App">
      {pageInfo && (
        <>
          <Page
            title={pageInfo.title}
            image={pageInfo.image}
            text={pageInfo.text}
            questions={pageInfo.quesi}
          />
          <Button />
        </>
      )}
    </div>
  );
}

export default App;
