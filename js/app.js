'use strict';

var hours = ['6am ', '7am', '8am ', '9am', '10am ', '11am ', '12pm', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm'];

var allStores = [];
// my global function, it doesn't have anything specified but it ready to create a random number when called for
function getRandomNumber(minimumCustomersPerHour, maximumCustomersPerHour){
  var randomNumber = Math.floor(Math.random() * (maximumCustomersPerHour - minimumCustomersPerHour) + minimumCustomersPerHour); //The maximum is inclusive and the minimum is inclusive
  // console.log(randomNumber);
  return randomNumber;
}

function Stores(name, minimumCustomersPerHour, maximumCustomersPerHour, avgCookiesPerCustomer) {
  this.name = name;
  this.minimumCustomersPerHour = minimumCustomersPerHour;
  this.maximumCustomersPerHour = maximumCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.numberOfCookiesSoldByHour = [];
  this.totalCookiesByDay = 0;

  // my for loop that will run for the length of hours-sends up min and max custperhour for city to GET ranndom number.
  for (var y = 0; y < hours.length; y++) {
    var customersPerHour = getRandomNumber(this.minimumCustomersPerHour, this.maximumCustomersPerHour);
    var cookiesPerHour = Math.floor(customersPerHour * this.avgCookiesPerCustomer); // random number of customers per hour * avg cookies per customer = cookies per hour
    this.numberOfCookiesSoldByHour.push(cookiesPerHour); // cookies per hour total is pushed into numberOfCookiesSoldByHour
  }
  // my for loop that calculate total of cookies sold each day at at each location
  for(var i = 0; i < this.numberOfCookiesSoldByHour.length; i++){ // loops for the length of numberOfCookiesSoldByHour
    this.totalCookiesByDay = this.totalCookiesByDay + this.numberOfCookiesSoldByHour[i];

  }

  allStores.push(this); //brings it to life
}
var seattle = new Stores('seattle', 23, 65, 6.3);
var tokyo = new Stores('tokyo', 3, 24, 1.2);
var dubai = new Stores('dubai', 11, 38, 3.7);
var paris = new Stores('paris', 20, 38, 2.3);
var lima = new Stores('lima', 2, 16, 4.6);

console.log(allStores);

//////////////////////////////////RENDERING HEADER////////////////////////////////////////////////////

var salesSection = document.getElementById('sales');

function renderTopRow(){
  var trElement = document.createElement('tr');//creating a row of 'th' cells
  var thElement = document.createElement('th');
  trElement.appendChild(thElement);
  salesSection.appendChild(trElement);

  for (var i = 0; i < hours.length; i++){
    var headerHours = document.createElement('th');
    headerHours.textContent = hours[i];
    trElement.appendChild(headerHours);
  }
  var headerTotal = document.createElement('th');
  headerTotal.textContent = 'Total For Day';
  trElement.appendChild(headerTotal);
}
renderTopRow();
////////////////////////////////RENDERING DATA ROWS/////////////////////////////////////////////////

Stores.prototype.body = function(){
  var bodyRow = document.createElement('tr');
  salesSection.appendChild(bodyRow);

  // name for each row
  var cityRow = document.createElement('td');
  cityRow.textContent = this.name;
  bodyRow.appendChild(cityRow);

  //hours using loop
  for (var i = 0; i < hours.length; i++){
    var bodyHours = document.createElement('td');
    bodyHours.textContent = this.numberOfCookiesSoldByHour[i];
    bodyRow.appendChild(bodyHours);
  }
  //total sales each day at the end
  var bodyTotal = document.createElement('td');
  bodyTotal.textContent = this.totalCookiesByDay;
  bodyRow.appendChild(bodyTotal);

};
seattle.body();
tokyo.body();
dubai.body();
paris.body();
lima.body();
