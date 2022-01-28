import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "5f98c73e9d5502dfd92203b0efbdb65d";

//http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44

class App extends Component {
  state = {
    temprature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    error: "",
  };

  getWeather = async (e) => {
    e.preventDefault();
    var city = document.querySelector(".city").value;
    var country = document.querySelector(".country").value;
    //e.target.elements.city.value ->name=city

    const api = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`
    );
    const data = await api.json();
    console.log(data);

    if (city && country) {
      this.setState({
        temprature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "",
      });
    } else {
      this.setState({
        temprature: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        error: "please Enter Data",
      });
    }
  };

  render() {
    return (
      <div className="wrapper">
        <div className="form-container">
          <Form getWeather={this.getWeather} />
          <Weather
            temprature={this.state.temprature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}

export default App;
