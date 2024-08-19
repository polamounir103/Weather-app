// import searchIcon from "../assets/searchIcon.svg";

import { useContext, useState } from "react";
import { WeatherContext } from "../context/WeatherContext";

function Forcast() {
  const [inputValue, setInputValue] = useState("");
  const { setCountry, weatherData } = useContext(WeatherContext);
  // console.log(weatherData);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { current, location, forecast } = weatherData;
  const nextForecast = forecast.forecastday;

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setCountry(inputValue); 
    setInputValue(""); 
  };
  return (
    <div className="rounded-lg  text-white w-full h-full flex flex-col gap-10">
      <form onSubmit={handleFormSubmit}>
        <div className="relative">
          <span className="absolute top-1/2 -translate-y-1/2 left-2 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M 13.261719 14.867188 L 15.742188 17.347656 C 15.363281 18.070313 15.324219 18.789063 15.722656 19.1875 L 20.25 23.714844 C 20.820313 24.285156 22.0625 23.972656 23.015625 23.015625 C 23.972656 22.058594 24.285156 20.820313 23.714844 20.25 L 19.191406 15.722656 C 18.789063 15.324219 18.070313 15.363281 17.347656 15.738281 L 14.867188 13.261719 Z M 8.5 0 C 3.804688 0 0 3.804688 0 8.5 C 0 13.195313 3.804688 17 8.5 17 C 13.195313 17 17 13.195313 17 8.5 C 17 3.804688 13.195313 0 8.5 0 Z M 8.5 15 C 4.910156 15 2 12.089844 2 8.5 C 2 4.910156 4.910156 2 8.5 2 C 12.089844 2 15 4.910156 15 8.5 C 15 12.089844 12.089844 15 8.5 15 Z"></path>
            </svg>
          </span>
          <input
            type="text"
            onChange={handleInputChange}
            placeholder="enter country name"
            className="w-full p-2 ps-12 rounded-lg text-black text-ellipsis input"
          />
        </div>
      </form>
      <div className="p-6 rounded-lg flex flex-col items-center gap-5">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-no-repeat bg-cover flex flex-col items-center">
            {/* style=
            {{
              backgroundImage:
                "url('https://cdn-icons-png.flaticon.com/512/1163/1163661.png')",
            }} */}
            <img src={current.condition.icon} alt="" />
          </div>
          <p>{current.condition.text}</p>
        </div>
        <div className="text-center flex flex-col gap-3">
          <p className="text-lg">
            {location.name} , {location.country}
          </p>
          <p className="text-5xl font-bold">{current.temp_c} °C</p>
          <p className="text-sm text-white/80">
            {location.localtime} , {forecast.forecastday[0].hour[1].time}
          </p>
        </div>

        <div className="sebarator"></div>

        <div className=" flex flex-col gap-3 w-full px-20">
          <p className="text-lg font-bold">The Next Day forecast</p>
          <div className=" flex flex-col">
            <div className="flex justify-between  ">
              <p className="text-sm">{`${nextForecast[1].date}`}</p>
              <p className="text-sm font-bold">{`${nextForecast[1].day.condition.text}`}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm">{`${nextForecast[2].date}`}</p>
              <p className="text-sm font-bold">{`${nextForecast[2].day.condition.text}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forcast;
