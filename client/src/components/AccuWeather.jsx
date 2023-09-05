import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCloud, FaCloudShowersHeavy } from "react-icons/fa";
import { TiWeatherSunny, TiWeatherCloudy, TiWeatherPartlySunny } from "react-icons/ti";
import { WiDaySunny, WiCloudy, WiDayCloudy, WiRain } from "react-icons/wi"; 


const apiKey = "gSfvlucG2s8KfvgbigFbfhTYb7ml4uiX";
// // const apiKey = "RwHmrZNBFluZ16Aew2NWoMoDOmVLJkY7";
// // const apiKey = "dmZnSAOST7J9aFSsGu6rfUt6MogTVDav";
// // const apiKey = "cD6ZYHRdAJ75WK9SPyNN7EM1gM5LdGUn";
// // const apiKey = "dmZnSAOST7J9aFSsGu6rfUt6MogTVDav";
// const apiKey = "GR9Qe2vK4yHR50ANAmE2W4z1eAarlQg1";
// const apiKey = "Bc9z1GZCFtls0bRGGwPnG5KBPS25mhjw";


const weatherIconDescriptions = {
  1: <TiWeatherSunny />,
  2: <TiWeatherPartlySunny />,
  3: <TiWeatherPartlySunny />,
  4: <TiWeatherCloudy />,
  5: <TiWeatherCloudy />,
  6: <FaCloud />,
  7: <FaCloud />,
  8: <FaCloud />,
  9: <FaCloud />,
  10: <FaCloudShowersHeavy />,
  11: <WiRain />,
};

const forecastIconDescriptions = {
  1: <WiDaySunny />,
  2: <WiDayCloudy />,
  3: <WiDayCloudy />,
  4: <WiCloudy />,
  5: <WiCloudy />,
  6: <WiCloudy />,
  7: <WiCloudy />,
  8: <WiCloudy />,
  9: <WiCloudy />,
  10: <FaCloudShowersHeavy />,
  11: <WiRain />, 
};

const AccuWeather = ({ searchLocation }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeatherData = async () => {
    if (searchLocation.trim() === "") {
      return;
    }

    setIsLoading(true);

    try {
      const locationSearchResponse = await axios.get(
        "http://dataservice.accuweather.com/locations/v1/cities/search",
        {
          params: {
            apikey: apiKey,
            q: searchLocation,
          },
        }
      );

      if (locationSearchResponse.data.length > 0) {
        const locationKey = locationSearchResponse.data[0].Key;

        
        const weatherResponse = await axios.get(
          `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}`,
          {
            params: {
              apikey: apiKey,
            },
          }
        );
        console.log(weatherResponse.data);
        setWeatherData(weatherResponse.data);

      
        const forecastResponse = await axios.get(
          `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}`,
          {
            params: {
              apikey: apiKey,
              metric: false, //f for far true for celc
            },
          }
        );
        setForecastData(forecastResponse.data.DailyForecasts);
      } else {
        console.error("No matching location found");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchWeatherData();
  }, [searchLocation]);

  return (
    <div className="weather-container">
      <h2>Current Park Conditions</h2>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : weatherData ? (
          <div>
            <p>
              Current Temperature: {weatherData[0].Temperature.Imperial.Value}{" "}
              °F
            </p>
            <p>
              Weather: {weatherData[0].WeatherText}
              {weatherIconDescriptions[weatherData[0].WeatherIcon]}
            </p>
          </div>
        ) : (
          <p>Enter a location and click Search to get weather data.</p>
        )}
      </div>
      {forecastData.length > 0 && (
        <div>
          <h3>5-Day Forecast</h3>
          <div className="forecast-container">
            {forecastData.map((forecast, index) => (
              <div className="forecast-item" key={index}>
                <p>
                  High: {forecast.Temperature.Maximum.Value} °F, Low:{" "}
                  {forecast.Temperature.Minimum.Value} °F
                  <p> 
                    
                    {weatherData[0].WeatherText}
                    {forecastIconDescriptions[forecast.Day.Icon]}
                  </p>
                </p>
                {/* <p>{forecastIconDescriptions[forecast.Day.Icon]}</p> */}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AccuWeather;






















// earlier code 
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// // const apiKey = "RwHmrZNBFluZ16Aew2NWoMoDOmVLJkY7";
// // const apiKey = "dmZnSAOST7J9aFSsGu6rfUt6MogTVDav";
// // const apiKey = "cD6ZYHRdAJ75WK9SPyNN7EM1gM5LdGUn";
// // const apiKey = "dmZnSAOST7J9aFSsGu6rfUt6MogTVDav";
// const apiKey = "GR9Qe2vK4yHR50ANAmE2W4z1eAarlQg1";
// const apiKey = "Bc9z1GZCFtls0bRGGwPnG5KBPS25mhjw";


// const AccuWeather = ({ searchLocation }) => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const fetchWeatherData = async () => {
//     if (searchLocation.trim() === "") {
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const locationSearchResponse = await axios.get(
//         "http://dataservice.accuweather.com/locations/v1/cities/search",
//         {
//           params: {
//             apikey: apiKey,
//             q: searchLocation,
//           },
//         }
//       );

//       if (locationSearchResponse.data.length > 0) {
//         const locationKey = locationSearchResponse.data[0].Key;
//         const weatherResponse = await axios.get(
//           `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}`,
//           {
//             params: {
//               apikey: apiKey,
//             },
//           }
//         );
//         console.log("Fetched Weather Data:", weatherResponse.data);
//         setWeatherData(weatherResponse.data);
//       } else {
//         console.error("No matching location found");
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }

//     setIsLoading(false);
//   };

//   useEffect(() => {
//     fetchWeatherData();
//   }, [searchLocation]);

//   return (
//     <div>
//       <h2>Current Weather Conditions</h2>
//       <div>
//         {/* ... (other JSX) */}
//         {isLoading ? (
//           <p>Loading...</p>
//         ) : weatherData ? (
//           <div>
//             <p>
//               Current Temperature: {weatherData[0].Temperature.Imperial.Value}{" "}
//               °F
//             </p>
//             <p>Weather: {weatherData[0].WeatherText}</p>
//             {/* Display the weather icon based on the WeatherIcon code
//             {weatherData[0].WeatherIcon && (
//               <WeatherIcons icon={weatherIconMap[weatherData[0].WeatherIcon]} />
//             )} */}
//           </div>
//         ) : (
//           <p>Enter a location and click Search to get weather data.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AccuWeather;