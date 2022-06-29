import React from "react";

function App() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=bce8c954081c279ac8cacfa24c6cf82f`;

  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Delhi</p>
          </div>
          <div className="temp">
            <h1>95°F</h1>
          </div>
          <div className="discription">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>90°F</p>
          </div>
          <div className="humidity">
            <p>37%</p>
          </div>
          <div className="wind">
            9 MPH
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
