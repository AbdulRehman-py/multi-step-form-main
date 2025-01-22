import "./App.css";

const Personal = () => {
  

  return (
    <>
      <div className="personal-info">
        <h1>Personal Info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        <form>
          <div className="input-container">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="eg. Roger Clark" />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="RogerClark@gmail.com" />
          </div>
          <div className="input-container">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="eg. +1 301 525 987" />
          </div>
          <button type="button" >Next</button>
        </form>
      </div>
    </>
  );
};


export default Personal;
