import { useState, useEffect } from "react";
import "./index.css";
import AddOn from "./AddOn.jsx";
import Personal from "./Personal.jsx";
import TrackPagePanel from "./Panel.jsx";  // Make sure this path matches your Panel.jsx file
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
  const [currentPage, setCurrentPage] = useState(() => {
    const savedPage = sessionStorage.getItem("currentPage");
    return savedPage ? parseInt(savedPage, 10) : 1;
  });

  useEffect(() => {
    sessionStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (currentPage === 5) {
      sessionStorage.clear();
      root_div.classList.add("success-change");
    }
  }, [currentPage, root_div]);

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
      default:
        return <Personal goToNextPage={goToNextPage} />;
    }
  };

  return (
    <>
      <TrackPagePanel currentPage={currentPage} />
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