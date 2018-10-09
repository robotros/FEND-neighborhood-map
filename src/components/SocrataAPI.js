
const api = 'https://data.lacity.org/resource/xyvg-dst2.json';

// Unique Token obtained at https://data.lacity.org/profile/robotros/
let token = '6R2aVyEytig0yKcvBpsD8nXoe';
let autho = '$$app_token='+token;

export const getParks = (center, radius) =>
  fetch(`${api}?locationtype=Parks&$where=within_circle(city,${center.lat},${center.lng},${radius})&${autho}`)
      .then((res) => res.json());

export const getPark = (name) =>
  fetch(`${api}?location_name=${name}&${autho}`)
      .then((res) => res.json());
