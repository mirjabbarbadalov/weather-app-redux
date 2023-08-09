import { useSelector } from "react-redux";

export default function Card() {
  const weatherData = useSelector((state) => state.weather.data);

  const locationMame = weatherData.name;
  const country = weatherData.sys.country;
  const temp = Math.round(weatherData.main.temp);
  const weatherType = weatherData.weather[0].main;
  const weatherDescription = weatherData.weather[0].description;
  const imgIcon = weatherData.weather[0].icon;
  const humidity = weatherData.main.humidity;

  return (
    <>
      <div className="card--header">
        <div className="weather-info">
          <img
            className="weather-info-img"
            src={`https://openweathermap.org/img/wn/${imgIcon}@2x.png`}
            alt="weather img"
          />
          <p className="weather-info-type">{weatherType}</p>
        </div>
        <p className="weather-degree">
          {temp} <span>&deg;C</span>
        </p>
      </div>

      <div className="weather-description">
        <h1 className="location-name">
          {locationMame}, {country}
        </h1>
        <p className="location-desc">
          The weather condition in {locationMame} is described as:{" "}
          {weatherDescription} with a temperature of {temp}&deg;C and a humidity
          of {humidity} %
        </p>
      </div>
    </>
  );
}
