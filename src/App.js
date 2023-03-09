import React, { useState } from "react"
import './App.css';
import Card from "./Card";

const App = () => {

  const [city, setCity] = useState("")
  const [details, setDetails] = useState({
    isLoading: false,
    cod: 400
  })

  const sendCity = async () => {
    try {
      setDetails({isLoading: true, cod: 400})

      const response = await fetch('https://weather-app-be.onrender.com/', {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ city })
      })
      const receivedData = await response.json();
      setDetails((prev) => {
        return {
          ...prev,
          ...receivedData,
          isLoading: false
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  const updateCity = (e) => {
    const value = e.target.value;
    setCity(value)
  }

  const sendData = (e) => {
    e.preventDefault();
    sendCity()
    setCity("")
  }


  return (
    <div className="App">
      <form onSubmit={sendData} action="" method="POST">
        <input type="text" name="city" value={city} onChange={updateCity} required />
        <button type="submit">check</button>
      </form>

      {details.isLoading ? <div className="container"><img className="loading__bar" src="https://media.tenor.com/guhB4PpjrmUAAAAC/loading-loading-gif.gif" /></div> : details.cod === 200 ? <Card details={details} /> : details.cod === 404 ? <div className="container">{details.message}</div> : ""}
      

    </div>
  );
}

export default App;
