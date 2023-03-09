import React from 'react'

const Card = (props) => {

    const {coord, main, name, sys, visibility, weather, wind} = props.details;
    return (
        <div>
            <div className="container">
                <div>Date- {new Date().toLocaleDateString()}</div>
                <div>City- {name}, {sys.country}</div>
                <div>Weather- {weather[0].description.toUpperCase()}</div>
                <div>Temperature- {main.temp}&#8451;</div>
                <div>Feels like- {main.feels_like}&#8451;</div>
                <div>Max Temperature- {main.temp_max}&#8451;</div>
                <div>Min Temperature- {main.temp_min}&#8451;</div>
                <div>Humidity- {main.humidity}%</div>
                <div>Visibility- {visibility} km</div>
                <div>Pressure- {main.pressure}hPa</div>
                <div>latitude- {coord.lat}&#176;N</div>
                <div>longitude- {coord.lon}&#176;E</div>
                <div>Wind speed- {wind.speed} m/s</div>
                <div>Wind direction- {wind.deg}&#176;</div>
                <div>Sunrise- {sys.sunrise}</div>
                <div>Sunset- {new Date(sys.sunset).toLocaleTimeString()}</div>
            </div>
        </div>
    )
}

export default Card
