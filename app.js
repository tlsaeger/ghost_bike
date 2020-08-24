//Marker Icon
var image = "Assets/mountain-bike.png";
//Locations 
var marker = [];
var counter = 0;
var markers = [];
//Images for Gallery
var images = [
  "0",
  "1",
  "2",
  "3",
  /* "4", */
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
    disableDefaultUI: true,
    zoomControl: true,
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
            x: 30,
            y: 45
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
var output = document.getElementById("demo");
/* output.innerHTML = slider.value; */ // Display the default slider value
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  markerSliderFunc();
  /*  output.innerHTML = this.value; */
};

function clickAbout(){
  var imprint = document.getElementById("imprint");
  var about = document.getElementById("about-this-project");
  var footer = document.getElementById("footer");
  if(about.classList.contains("footer-content-clicked")){
    about.classList.remove("footer-content-clicked");
    footer.scrollIntoView({behavior: "smooth"})

  }
  else{
  imprint.classList.remove("footer-content-clicked");
  about.classList.add("footer-content-clicked");
  about.scrollIntoView({behavior: "smooth"});
  }
}

function clickImprint(){
  var about = document.getElementById("about-this-project");
  var imprint = document.getElementById("imprint");
  var footer = document.getElementById("footer");
  if(imprint.classList.contains("footer-content-clicked")){
    imprint.classList.remove("footer-content-clicked");
    footer.scrollIntoView({behavior: "smooth"})

  }
  else{
  about.classList.remove("footer-content-clicked");
  imprint.classList.add("footer-content-clicked");
  imprint.scrollIntoView({behavior: "smooth"});
  }
}

function cityButtonFunc(city_id){
  map.setCenter(city_id);
  
}