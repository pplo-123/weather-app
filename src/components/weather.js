import React from "react";

class Weather extends React.Component{

    render(){

        return(

            <div className="weather-info">



                {
                    this.props.time && <p className="weather__key">Time:  
                        <span className="weather__value"> {this.props.time}</span>
                    </p>
                }

                {
                    this.props.country && this.props.city && <p className="weather__key">Location: 
                        <span className="weather__value">  {this.props.city}, {this.props.country}</span>                    
                    </p> 
                }
                
                {
                    this.props.temperature_min && <p className="weather__key">Minimum Temperature: 
                        <span className="weather__value">  {this.props.temperature_min}  <span>&#8451;</span></span>
                    </p>
                }
                
                {
                    this.props.temperature_max && <p className="weather__key">Maximum Temperature: 
                        <span className="weather__value">  {this.props.temperature_max} <span>&#8451;</span></span>
                    </p>
                }
                

                {
                    this.props.humidity && <p className="weather__key">Humidity: 
                        <span className="weather__value">  {this.props.humidity}</span>
                    </p>
                }

                {
                    this.props.description && <p className="weather__key">Conditions:  
                        <span className="weather__value">  {this.props.description}</span>
                    </p>
                }

 

                {
                    this.props.error && <p className="weather__error">{this.props.error}</p>
                }
        
            </div>
        )
    }
}

export default Weather;