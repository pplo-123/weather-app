import React from "react";
import Weather from "./components/weather";
import Form from "./components/form";
// import SWeather from "./components/stateless_weather";
// import SForm from "./components/stateless_form"
import Titles from "./components/titles";

const Api_Key = "8d2de98e089f1c28e1a22fc19a24ef04";

class App extends React.Component {

  state = {
    temperature_min: undefined,
    temperature_max: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    time: undefined,
    error: undefined
  }

  //getWeather is a method we'll use to make the api call
  getWeather = async (e) => {

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();   
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
    const response = await api_call.json();
    console.log(response);
    if(city && country){
      this.setState({

        temperature_min: parseInt(response.main.temp_min)-273,
        temperature_max: parseInt(response.main.temp_max)-273,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        time: new Date().toTimeString().split(" ")[0],
        error: ""
      })
    }else{
      this.setState({
        error: "Please input search values..."
      })
    }
  }

  render() {

    return (

      <div>
         <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                <Titles />
                </div>
                <div className="col-xs-7 form-container">
                <Form loadWeather={this.getWeather} />
                  <Weather
        

                    temperature_min={this.state.temperature_min}
                    temperature_max={this.state.temperature_max}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    time={this.state.time}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
export default App;