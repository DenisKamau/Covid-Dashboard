var mymap = L.map("mapid").setView([0.0236, 37.9062], 6);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  maxZoom: 8,
}).addTo(mymap);

const markers = [
  { long: 1.2921, lat: 36.8219, radius: 80000 },
  { long: -1.2921, lat: 37.8219, radius: 100000 },
  { long: -1.2921, lat: 35.8219, radius: 40000 },
  { long: 2.9356, lat: 39.8551, radius: 38000 },
  { long: 3.2921, lat: 35.8219, radius: 15000 },
  { long: 0.2921, lat: 34.8219, radius: 19000 },
  { long: 0.2921, lat: 38.8219, radius: 22000 },
  { long: -1.02, lat: 39.6682, radius: 70000 },
];

markers.map((marker) => {
  return L.circle([marker.long, marker.lat], {
    color: "red",
    fillColor: "#f03",
    fillOpacity: 0.5,
    radius: marker.radius,
  }).addTo(mymap);
});
