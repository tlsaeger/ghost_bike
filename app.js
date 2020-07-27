//Marker Icon
var image = "Assets/mountain-bike.png";
//Locations 
var locations = [{
    lat: 53.550415,
    lng: 10.109466,
    labels: "03.06.20",
    streetName: "Schiffbeker Weg/Steinadlerweg",
    year: 2020
  },
  {
    lat: 53.599232,
    lng: 9.993986,
    labels: "07.04.20",
    streetName: "Meenkwiese/Bebelallee",
    year: 2020
  },
  {
    lat: 53.574697,
    lng: 10.074822,
    labels: "13.01.20",
    streetName: "Rüterstraße/Wendemuthstraße",
    year: 2020
  },
  {
    lat: 53.560935,
    lng: 10.013736,
    labels: "15.07.19",
    streetName: "An der Alster / Lohmühlenstraße",
    year: 2019
  },
  {
    lat: 53.572961,
    lng: 9.936176,
    labels: "19.03.19",
    streetName: "Holstenkamp/Großen Bahnstraße",
    year: 2019
  },
  {
    lat: 53.573906,
    lng: 9.961272,
    labels: "07.05.18",
    streetName: "Osterstraße Ecke Eppendorfer Weg",
    year: 2018
  },
  {
    lat: 53.567306,
    lng: 10.044876,
    labels: "2016",
    streetName: "Ecke Ritter­straße/Wandsbeker Chaussee ",
    year: 2016
  },
  {
    lat: 53.565047,
    lng: 10.019017,
    labels: "30.01.2014",
    streetName: "Mundsburger Damm/Arm­gartstraße",
    year: 2014
  },
  {
    lat: 53.545973,
    lng: 9.969355,
    labels: "08.10.2019",
    streetName: "Bei den St. Pauli Landungsbrücken",
    year: 2019
  },
  {
    lat: 53.455057,
    lng: 9.990482,
    labels: "03.03.2016",
    streetName: "Hannoversche Straße Höhe 100",
    year: 2019
  },
  {
    lat: 53.805751,
    lng: 10.004923,
    labels: "21.10.2019",
    streetName: "Henstedter Str./ Mühlenredder",
    year: 2019
  },
  {
    lat: 53.664552,
    lng: 9.796481,
    labels: "15.06.2020",
    streetName: "Bismarckstr.",
    year: 2020
  }

]
var marker = [];
var counter = 0;
var markers = [];
//Images for Gallery
var images = [
  "0",
  "1",
  "2",
  "3",
  "4",
  /* "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19", */
]
var map;
var newImg;
//initalise the Map, with a specific location currently the Alster in Hamburg includes Dark-Mode Styles
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 53.565575,
      lng: 10.006912
    },
    zoom: 13,
    styles: [{
        "elementType": "geometry",
        "stylers": [{
          "color": "#0d0d0d"
        }]
      },
      {
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#212121"
        }]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [{
          "color": "#757575"
        }]
      },
      {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#9e9e9e"
        }]
      },
      {
        "featureType": "administrative.land_parcel",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#bdbdbd"
        }]
      },
      {
        "featureType": "administrative.neighborhood",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      },
      {
        "featureType": "poi.business",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
          "color": "#181818"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#616161"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#1b1b1b"
        }]
      },
      {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#2c2c2c"
        }]
      },
      {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#8a8a8a"
        }]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
          "color": "#373737"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
          "color": "#3c3c3c"
        }]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [{
          "color": "#4e4e4e"
        }]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#616161"
        }]
      },
      {
        "featureType": "transit",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#000000"
        }]
      },
      {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#3d3d3d"
        }]
      }
    ]
  });
}
//add the Gallery Pictures automaticaly, add a new line for each image in var images
function galleryPictures() {
  for (i = 0; i < images.length; i++) {
    /* var classNumber = i % 2; */

    var newContainer = document.createElement("div");
    newContainer.classList.add('galleryContainerImg');
    var section = document.getElementById("galleryImgFlexContainer");
    section.appendChild(newContainer);

    var newImg = document.createElement("img");
    newImg.src = "Assets/img/ghost_bike_gallery" + images[i] + ".jpg";
    newImg.setAttribute('class', 'galleryImg');
    newContainer.appendChild(newImg);
  }

}
galleryPictures();

//calling slider function to set the inital value to current year
var slider = document.getElementById("myRange");




// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}
//Function to set the markers in scope in the map
function markerSliderFunc() {
  if (counter != 0) {
    setMapOnAll(null);
    markers = [];
    console.log("test")
  }
  for (var i = 0; i < locations.length; i++) {
    if (locations[i].year <= slider.value) {
      const marker = new google.maps.Marker({
        position: locations[i],
        icon: {
          url: image,
          labelOrigin: {
            x: 12,
            y: 0
          }
        },
        title: locations[i].labels,
        label: {
          text: locations[i].labels,
          color: '#dad9d7',
          fontSize: '15px',
          textAlign: "center"
        },
        map: map
      });
      markers.push(marker);
    }
  }
  setMapOnAll(map);
  counter++;
}
console.log(slider.value)
var output = document.getElementById("demo");
/* output.innerHTML = slider.value; */ // Display the default slider value
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  markerSliderFunc();
  /*  output.innerHTML = this.value; */
};