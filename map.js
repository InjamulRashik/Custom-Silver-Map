var map;
function initMap() {
  // Create the map with no initial style specified.
  // It therefore has default styling.
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 23.8103, lng: 90.4125 },
    zoom: 10,
    mapTypeControl: false
  });

  // Add a style-selector control to the map.
  var styleControl = document.getElementById("style-selector-control");
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(styleControl);

  // Set the map's style to the initial value of the selector.
  var styleSelector = document.getElementById("style-selector");
  map.setOptions({ styles: styles[styleSelector.value] });

  // Apply new JSON when the user selects a different style.
  styleSelector.addEventListener("change", function() {
    map.setOptions({ styles: styles[styleSelector.value] });
  });
}

var styles = {
  default: null,
  silver: [
    {
      elementType: "geometry",
      stylers: [{ color: "#f5f5f5" }]
    },
    {
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }]
    },
    {
      elementType: "labels.text.fill",
      stylers: [{ color: "#616161" }]
    },
    {
      elementType: "labels.text.stroke",
      stylers: [{ color: "#f5f5f5" }]
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [{ color: "#bdbdbd" }]
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{ color: "#eeeeee" }]
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#757575" }]
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#e5e5e5" }]
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9e9e9e" }]
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }]
    },
    {
      featureType: "road.arterial",
      elementType: "labels.text.fill",
      stylers: [{ color: "#757575" }]
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#dadada" }]
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [{ color: "#616161" }]
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9e9e9e" }]
    },
    {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [{ color: "#e5e5e5" }]
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [{ color: "#eeeeee" }]
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#c9c9c9" }]
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9e9e9e" }]
    }
  ],
  hiding: [
    {
      featureType: "poi.business",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "transit",
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }]
    }
  ]
};
