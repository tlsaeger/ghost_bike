var locations = [{
    lat: 53.550415,
    lng: 10.109466,
    labels: "03.06.20",
    streetName: "Schiffbeker Weg/Steinadlerweg"
  },
  {
    lat: 53.599232,
    lng: 9.993986,
    labels: "07.04.20",
    streetName: "Meenkwiese/Bebelallee"
  },
  {
    lat: 53.574697,
    lng: 10.074822,
    labels: "13.01.20",
    streetName: "Rüterstraße/Wendemuthstraße"
  },
  {
    lat: 53.560935,
    lng: 10.013736,
    labels: "15.07.19",
    streetName: "An der Alster / Lohmühlenstraße"
  },
  {
    lat: 53.572961,
    lng: 9.936176,
    labels: "19.03.19",
    streetName: "Holstenkamp/Großen Bahnstraße"
  },
  {
    lat: 53.573906,
    lng: 9.961272,
    labels: "07.05.18",
    streetName: "Osterstraße Ecke Eppendorfer Weg"
  },
  {
    lat: 53.567306,
    lng: 10.044876,
    labels: "2016",
    streetName: "Ecke Ritter­straße/Wandsbeker Chaussee "
  },
  {
    lat: 53.565047,
    lng: 10.019017,
    labels: "30.01.2014",
    streetName: "Mundsburger Damm/Arm­gartstraße"
  }
]
var images = [
  "0",
  "1",
  "2",
  "3",
  "4",
]
var map;
var newImg;

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
  var image = "Assets/mountain-bike.png";

  for (i = 0; i < locations.length; i++) {
    var lat = locations[i].lat;
    var lng = locations[i].lng;
    console.log(locations[i].labels)
    var marker = new google.maps.Marker({
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
   /*  streetViewFunc(lat, lng, newImg); */


  /*   function streetViewFunc(lat, lng, newImg) {
      var newImg = document.createElement("img");
      newImg.src = "https://maps.googleapis.com/maps/api/streetview?size=600x300&location=" + lat + "," + lng + "&heading=151.78&pitch=-0.76&key=" + APIKey;
      console.log(lat,lng)
    } */
    marker.addListener("click", function (e) {
      console.log(e.latLng);
      var newImg = document.createElement("img");
      var latLng = e.latLng.replace(/[- )(]/g,"");
      newImg.src = "https://maps.googleapis.com/maps/api/streetview?size=600x300&location=" + latLng+ "&heading=151.78&pitch=-0.76&key=" + APIKey;
      var section = document.getElementById("detailPicture");
      section.appendChild(newImg); 
    });

  }

}


function detailPictures() {
  for (i = 0; i < locations.length; i++) {
    var classNumber = i % 2;

    var newContainer = document.createElement("div");
    newContainer.classList.add('detailContainer', 'detailContainer' + classNumber);
    newContainer.setAttribute("data-aos", "fade-in")
    var section = document.getElementById("detailPicture");
    section.appendChild(newContainer);

    var newImg = document.createElement("img");
    newImg.src = "Assets/Bild_3.png";
    newImg.setAttribute('class', 'snippet');
    newContainer.appendChild(newImg);

    var descriptionText = document.createElement("h2");
    descriptionText.classList.add("descritptionTextHeadline")
    descriptionText.innerHTML = locations[i].labels;
    newContainer.appendChild(descriptionText);

    var streetName = document.createElement("p");
    streetName.classList.add("descritptionTextBody");
    streetName.innerHTML = locations[i].streetName;
    newContainer.appendChild(streetName);


  }
}
/* detailPictures(); */