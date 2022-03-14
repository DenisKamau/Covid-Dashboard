import { counties } from "../data/data.js";

var mymap = L.map("mapid").setView([0.0236, 37.9062], 6);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  maxZoom: 15,
}).addTo(mymap);

counties.reverse().map((county) => {
  return L.circle([county.lat, county.long], {
    color: "red",
    fillColor: "#f03",
    fillOpacity: 0.4,
    radius: county.positive * 5,
  })
    .addTo(mymap)
    .bindPopup(`${county.name} : ${county.positive.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`)
    .openPopup();
});
