  
// export const displayMap = locations => {
//     mapboxgl.accessToken =
//       'pk.eyJ1IjoiYWRhcnNoa21lZXRoYWxnbWFpbGNvbSIsImEiOiJja3hneDc0bXg1cHBoMnBsYXlmaWM2N3ZvIn0.c_lUmmNn8w_PJVqMpGbJ7w';
  
//     var map = new mapboxgl.Map({
//       container: 'map',
//       style: 'mapbox://styles/adarshkmeethalgmailcom/cl09b30fu009j14rotr1ggeai',
//       scrollZoom: false
//       // center: [-118.113491, 34.111745],
//       // zoom: 10,
//       // interactive: false
//     });
  
//     const bounds = new mapboxgl.LngLatBounds();
  
//     locations.forEach(loc => {
//       // Create marker
//       const el = document.createElement('div');
//       el.className = 'marker';
  
//       // Add marker
//       new mapboxgl.Marker({
//         element: el,
//         anchor: 'bottom'
//       })
//         .setLngLat(loc.coordinates)
//         .addTo(map);
  
//       // Add popup
//       new mapboxgl.Popup({
//         offset: 30
//       })
//         .setLngLat(loc.coordinates)
//         .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
//         .addTo(map);
  
//       // Extend map bounds to include current location
//       bounds.extend(loc.coordinates);
//     });
  
//     map.fitBounds(bounds, {
//       padding: {
//         top: 200,
//         bottom: 150,
//         left: 100,
//         right: 100
//       }
//     });
//   };
  