export function setCurrentLocation(location) {
  localStorage.setItem('location', JSON.stringify(location));
}

export function getCurrentLocation() {
  return JSON.parse(localStorage.getItem('location'));
}

export function getLocations() {
  const locations = JSON.parse(localStorage.getItem('locations'));
  return locations || [];
}

export function setLocations(locations) {
  localStorage.setItem('locations', JSON.stringify(locations));
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
    locations: getLocations(),
    weather: getWeather(),
  };
}
