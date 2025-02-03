import { useState } from "react";
import "./index.css";
import AddOn from "./AddOn.jsx";
import Personal from "./Personal.jsx";
import TrackPagePanel from "./TrackPagePanel.jsx";
import Plan from "./Plan.jsx";
import Summary from "./Summary.jsx";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { DataProvider } from "./StatePersonal.jsx";
import { PlanProvider } from "./plancontext.jsx";
import { AddOnProvider } from "./addOnContext.jsx";
import SuccessMessage from "./SuccessMessage.jsx";

const App = () => {
  const root_div = document.getElementById("root");
  const [currentPage, setCurrentPage] = useState(1);

  if (currentPage == 5) {
    root_div.classList.add("success-change");
  }

  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const changeplan = () => {
    setCurrentPage((prev) => prev - 2);
  };
  const render = () => {
    switch (currentPage) {
      case 1:
        return <Personal goToNextPage={goToNextPage} />;
      case 2:
        return (
          <Plan
            goToPreviousPage={goToPreviousPage}
            goToNextPage={goToNextPage}
          />
        );
      case 3:
        return (
          <AddOn
            goToPreviousPage={goToPreviousPage}
            goToNextPage={goToNextPage}
          />
        );
      case 4:
        return (
          <Summary
            goToPreviousPage={goToPreviousPage}
            changeplan={changeplan}
            SubmitButton={goToNextPage}
          />
        );

      case 5:
        return <SuccessMessage />;
    }
  };

  return (
    <>
      <TrackPagePanel />
      {render()}
    </>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AddOnProvider>
      <DataProvider>
        <PlanProvider>
          <App />
        </PlanProvider>
      </DataProvider>
    </AddOnProvider>
  </StrictMode>
);
