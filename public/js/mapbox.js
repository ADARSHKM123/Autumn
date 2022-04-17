console.log('hello from mapbox')
const locations = JSON.parse(document.getElementById('map').dataset.locations)

mapboxgl.accessToken = 'pk.eyJ1IjoiYWRhcnNoa21lZXRoYWxnbWFpbGNvbSIsImEiOiJja3hneDc0bXg1cHBoMnBsYXlmaWM2N3ZvIn0.c_lUmmNn8w_PJVqMpGbJ7w';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/adarshkmeethalgmailcom/cl09b30fu009j14rotr1ggeai',
    scrollZoom:false

});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach(loc => {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
        element: el,
        author: 'bottom'
    }).setLngLat(loc.coordinates).addTo(map)

    new mapboxgl.Popup({
        offset: 30
    }).setLngLat(loc.coordinates)
        .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
        .addTo(map)

    bounds.extend(loc.coordinates);
})

map.fitBounds(bounds, {
    padding: {
        top: 200,
        bottom: 150,
        left: 100,
        right: 100
    }
});