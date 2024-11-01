"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [city, setcity] = useState("");
  const [weatherData, setweatherData] = useState(null);
  const fetchWeather = async () => {
    // بعداً این قسمت را با درخواست API کامل می‌کنیم
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
      <h1 className="text-4xl font-bold mb-8">Weather App</h1>
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="p-2 rounded border"
        />
        <button onClick={fetchWeather} className="p-2 bg-blue-800 rounded">
          Check Weather
        </button>
      </div>
      {weatherData && (
        <div className="mt-4">
          <h2 className="text-2xl font-semibold">{weatherData.city}</h2>
          <p>{weatherData.description}</p>
          <p>{weatherData.temperature}°C</p>
        </div>
      )}
    </div>
  );
}
