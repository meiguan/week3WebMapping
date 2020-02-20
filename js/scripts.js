// this is my mapboxGL token
// the base style includes data provided by mapbox, this links the requests to my account
mapboxgl.accessToken = 'pk.eyJ1IjoibWVpZ3VhbiIsImEiOiJjazZ1NmFtYmUwNmxpM21xczgzajNmOG5nIn0.OcXexId1dlHq5jAVkL6d2Q';

// we want to return to this point and zoom level after the user interacts
// with the map, so store them in variables
var initialCenterPoint = [-73.987, 40.735]
var initialZoom = 10.67


// create an object to hold the initialization options for a mapboxGL map
var initOptions = {
  container: 'map-container', // put the map in this container
  style: 'mapbox://styles/meiguan/ck6uyoshh02ma1iqk7x60lf1f', // use this basemap
  center: initialCenterPoint, // initial view center
  zoom: initialZoom, // initial view zoom level (0-18)
}

// create the new map
var map = new mapboxgl.Map(initOptions);

// add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// make a single marker in central park
 new mapboxgl.Marker()
   .setLngLat([-73.974087,40.770718])
   .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
   .setHTML('I am in Central Park'))
   .addTo(map);


// iterate over each object in collegesData
collegesData.forEach(function(collegeEntry) {
  // for each object in the studentData, add a marker to the map with a popup
  new mapboxgl.Marker()
    .setLngLat([collegeEntry.geo_longitude, collegeEntry.geo_latitude])
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
     .setHTML(`${collegeEntry.inst_name} is located ${collegeEntry.county_name}`))
    .addTo(map);
})

// event listeners for the fly to buttons

$('#NYU').on('click', function() {
  map.flyTo({
    center: [-73.997,	40.7297],
    zoom: initialZoom
  })
})

$('#michigan').on('click', function() {

  var michiganLngLat = [-83.10538, 42.50448]

  map.flyTo({
    center: michiganLngLat,
    zoom: initialZoom
  })
})

$('#colombia').on('click', function() {
  var colombiaLngLat = [-73.997208, 0.721615]

  map.flyTo({
    center: colombiaLngLat,
    zoom: initialZoom
  })
})

$('#nyc').on('click', function() {
  map.flyTo({
    center: initialCenterPoint,
    zoom: initialZoom
  })
})
