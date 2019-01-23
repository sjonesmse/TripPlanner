console.log('Hellllloooooooooo!');

const mapboxgl = require('mapbox-gl');
const marker = require('./marker');

mapboxgl.accessToken =
  'pk.eyJ1Ijoic2pvbmVzbXNlIiwiYSI6ImNqcjluaTRxaDBqY3UzeXJ2cnhhMm1jMWQifQ.roR1j5mprPAA0SGFtjodFg';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});


const markerDrop = marker("Restaurant", [-87.6354, 41.8885]);
markerDrop.addTo(map);

