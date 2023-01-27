import L from 'leaflet';

const map = L.map('map')
  .setView({
    lat: 34.863576380661875,
    lng: -111.79750330517345,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const points = [
  {
    title: 'Sedona',
    lat: 34.862865719570266,
    lng: -111.8032851194465,
  },
  {
    title: 'Devil\'s Bridge',
    lat: 34.899321687679006,
    lng: -111.80727465719914,
  },
  {
    title: 'Soldiers Pass Trail',
    lat: 34.89764739114561,
    lng:-111.78706470719266,
  },
  {
    title: 'Amitabha Stupa and Peace Park',
    lat: 34.877888114817786,
    lng: -111.80860157310867,
  },
  {
    title: 'Lover\'s Knoll',
    lat: 34.839069557010575,
    lng: -111.82085214206994,
  },
  {
    title: 'Schnebly Hill Vista Overlook',
    lat: 34.89094739613198,
    lng: -111.7008379366311,
  },
  {
    title: 'Two Trees Observation Area',
    lat: 34.82281781234612,
    lng: -111.90439708736724,
  },
];

const icon = L.icon({
  iconUrl: '/img/map-marker.svg',
  iconSize: [24, 38],
  iconAnchor: [12, 38],
});

points.forEach(({lat, lng, title}) => {
  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );
  marker.addTo(map).bindPopup(title);
});
