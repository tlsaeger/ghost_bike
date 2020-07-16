var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    mapId: '27db100e2f205fbc',
    center: { lat: 53.585971, lng: 10.0431 },
    zoom: 11,
  });
  var image = "Assets/mountain-bike.png";
  var locations = [
    {lat:  53.554581, lng: 10.113277, labels: "03.06.20"},
    {lat:  53.599232, lng: 9.993986, labels: "07.04.20"},
    {lat:  53.574697, lng: 10.074822, labels: "13.01.20"},
    {lat:  53.560935, lng: 10.013736, labels: "15.07.19"},
    {lat:  53.572961, lng: 9.936176, labels: "19.03.19"},
    {lat:  53.573906, lng: 9.961272, labels: "07.05.18"},
    {lat:  53.567306, lng: 10.044876, labels: "2016"},
    {lat:  53.565047, lng: 10.019017, labels: "2014"}
  ]
  for (i = 0; i < locations.length; i++){
    console.log(locations[i].labels)
    var marker = new google.maps.Marker({position: locations[i], label: locations[i].labels, icon: image, map: map});
  }
}
