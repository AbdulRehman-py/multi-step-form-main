import "./Panel.css";

const TrackPagePanel = ({ currentPage }) => {
  return (
    <div className="track-panel">
      <ol className="ol-panel">
        <li className={currentPage === 1 ? "active" : ""}>
          <div className="step-info">
            <span className="step-label">STEP 1</span>
            <h2>YOUR INFO</h2>
          </div>
        </li>
        <li className={currentPage === 2 ? "active" : ""}>
          <div className="step-info">
            <span className="step-label">STEP 2</span>
            <h2>SELECT PLAN</h2>
          </div>
        </li>
        <li className={currentPage === 3 ? "active" : ""}>
          <div className="step-info">
            <span className="step-label">STEP 3</span>
            <h2>ADD-ONS</h2>
          </div>
        </li>
        <li className={currentPage === 4 ? "active" : ""}>
          <div className="step-info">
            <span className="step-label">STEP 4</span>
            <h2>SUMMARY</h2>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default TrackPagePanel; 