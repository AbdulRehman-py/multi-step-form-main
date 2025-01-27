import { useState } from 'react'
import './index.css'
import AddOn from './AddOn.jsx'
import Personal from './Personal.jsx'
import TrackPagePanel from './TrackPagePanel.jsx'
import Plan from './Plan.jsx'
import Summary from './Summary.jsx'
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';


const App = () => {
  
const [currentPage, setCurrentPage] = useState(1);


const goToNextPage = () => {
  setCurrentPage((prev)=> prev + 1);
};

const goToPreviousPage = () => {
  setCurrentPage((prev)=> prev - 1);
};

const SubmitButton = () => {
  alert("Thank you for your purchase!");
};

const render = () => {
  switch (currentPage) {
    case 1:
      return <Personal goToNextPage={goToNextPage} />;
    case 2:
      return <Plan goToPreviousPage={goToPreviousPage} goToNextPage={goToNextPage} />;
    case 3:
      return <AddOn goToPreviousPage={goToPreviousPage} goToNextPage={goToNextPage} />;
    case 4:
      return <Summary goToPreviousPage={goToPreviousPage} SubmitButton={SubmitButton}/>;
  }
}

return (
  <>
    <TrackPagePanel/>
    {render()}
  </>
);

}

const rootElement = document.getElementById('root'); 
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
