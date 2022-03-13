const totalTests = document.getElementById("totalTests");
const totalCases = document.getElementById("positiveCases");
const negativeCases = document.getElementById("negativeCases");
const table = document.getElementById("table");
const labsTable = document.getElementById("labsTable");
import { counties, labs } from "../data/data.js";

function fetchCovidStats() {
  fetch("https://disease.sh/v3/covid-19/countries/kenya?strict=true")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      totalCases.innerText = data.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      totalTests.innerText = data.tests.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      negativeCases.innerText = (data.tests - data.cases).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    })
    .catch((err) => {
      console.error(err);
    });
}

function addCountiesRow() {
  counties.forEach((county) => {
    const { name, positive, negative } = county;
    var row = table.insertRow();
    var cell = row.insertCell();
    cell.innerHTML = name;
    cell = row.insertCell();
    cell.innerHTML = positive.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    cell = row.insertCell();
    cell.innerHTML = negative.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  });
}

function addLabRows() {
  labs.forEach((lab) => {
    const { name, tests } = lab;
    var row = labsTable.insertRow();
    var cell = row.insertCell();
    cell.innerHTML = name;
    cell = row.insertCell();
    cell.innerHTML = tests.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  });
}

fetchCovidStats();
addCountiesRow();
addLabRows();
