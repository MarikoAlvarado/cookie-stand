'use strict';

var hours = ['6am ', '7am', '8am ', '9am', '10am ', '11am ', '12pm', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm'];

var allStores = [];

function getRandomNumber(minimumCustomersPerHour, maximumCustomersPerHour) {
  var randomNumber = Math.floor(Math.random() * (maximumCustomersPerHour - minimumCustomersPerHour) + minimumCustomersPerHour); //The maximum is inclusive and the minimum is inclusive

  return randomNumber;
}

function Stores(name, minimumCustomersPerHour, maximumCustomersPerHour, avgCookiesPerCustomer) {
  this.name = name;
  this.minimumCustomersPerHour = minimumCustomersPerHour;
  this.maximumCustomersPerHour = maximumCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.numberOfCookiesSoldByHour = [];
  this.totalCookiesByDay = 0;

  for (var y = 0; y < hours.length; y++) {
    var customersPerHour = getRandomNumber(this.minimumCustomersPerHour, this.maximumCustomersPerHour);
    var cookiesPerHour = Math.floor(customersPerHour * this.avgCookiesPerCustomer); 
    this.numberOfCookiesSoldByHour.push(cookiesPerHour);
  }

  for (var i = 0; i < this.numberOfCookiesSoldByHour.length; i++) {
    this.totalCookiesByDay = this.totalCookiesByDay + this.numberOfCookiesSoldByHour[i];

  }

  allStores.push(this);
  this.body();
}

console.log(allStores);

var salesSection = document.getElementById('sales');

function renderTopRow() {
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  trElement.appendChild(thElement);
  salesSection.appendChild(trElement);

  for (var i = 0; i < hours.length; i++) {
    var headerHours = document.createElement('th');
    headerHours.textContent = hours[i];
    trElement.appendChild(headerHours);
  }
  var headerTotal = document.createElement('th');
  headerTotal.textContent = 'Total For Day';
  trElement.appendChild(headerTotal);
}
renderTopRow();

Stores.prototype.body = function () {
  var bodyRow = document.createElement('tr');
  salesSection.appendChild(bodyRow);

  var cityRow = document.createElement('td');
  cityRow.textContent = this.name;
  bodyRow.appendChild(cityRow);

  for (var i = 0; i < hours.length; i++) {
    var bodyHours = document.createElement('td');
    bodyHours.textContent = this.numberOfCookiesSoldByHour[i];
    bodyRow.appendChild(bodyHours);
  }

  var bodyTotal = document.createElement('td');
  bodyTotal.textContent = this.totalCookiesByDay;
  bodyRow.appendChild(bodyTotal);

};

function renderFooter() {
  var totalsRow = document.createElement('tr');
  var tdTotals = document.createElement('td');
  tdTotals.textContent = 'Total';
  totalsRow.appendChild(tdTotals);

  var allTotalsByHour = 0;
  var grandTotal = 0;

  for (var t = 0; t < hours.length; t++) {
    allTotalsByHour = 0;
    for (var a = 0; a < allStores.length; a++) {
      allTotalsByHour = allTotalsByHour + allStores[a].numberOfCookiesSoldByHour[t];
    }
    grandTotal = grandTotal + allTotalsByHour;
    tdTotals = document.createElement('td');
    tdTotals.textContent = allTotalsByHour;
    totalsRow.appendChild(tdTotals);

  }
  tdTotals = document.createElement('td');
  tdTotals.textContent = grandTotal;
  totalsRow.appendChild(tdTotals);

  salesSection.appendChild(totalsRow);
}

var formEL = document.getElementById('form');
function handleClick (event){

  event.preventDefault();

  var name = event.target.location.value;
  var minimumCustomersPerHour = event.target.minimum.value;
  var maximumCustomersPerHour = event.target.maximum.value;
  var avgCookiesPerCustomer = event.target.average.value;
  new Stores(name, minimumCustomersPerHour, maximumCustomersPerHour, avgCookiesPerCustomer);

  salesSection.innerHTML = '';

  renderTopRow();

  for(var i = 0; i <allStores.length; i++){
    allStores[i].body();
  }
  renderFooter();

  console.log(name, minimumCustomersPerHour, maximumCustomersPerHour, avgCookiesPerCustomer);

}

formEL.addEventListener('submit', handleClick);

salesSection.innerHTML = '';

renderTopRow();

renderFooter();

new Stores('seattle', 23, 65, 6.3);
new Stores('tokyo', 3, 24, 1.2);
new Stores('dubai', 11, 38, 3.7);
new Stores('paris', 20, 38, 2.3);
new Stores('lima', 2, 16, 4.6);



