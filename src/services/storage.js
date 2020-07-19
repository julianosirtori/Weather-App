export function setCurrentLocation(location) {
  localStorage.setItem('location', JSON.stringify(location));
}

export function getCurrentLocation() {
  return JSON.parse(localStorage.getItem('location'));
}

export function getCities() {
  return JSON.parse(localStorage.getItem('cities'));
}

export function setCities(cities) {
  return localStorage.getItem('cities', JSON.stringify(cities));
}

export function getWeather() {
  return JSON.parse(localStorage.getItem('weather'));
}

export function setWeather(weather) {
  return localStorage.setItem('weather', JSON.stringify(weather));
}

export default function getStorage() {
  return {
    location: getCurrentLocation(),
    cities: getCities(),
    weather: getWeather(),
  };
}
