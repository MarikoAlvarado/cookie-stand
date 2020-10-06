'use strict';

//global var for hours

var hours = ['6am ', '7am' , '8am ', '9am' , '10am ' , '11am ', '12pm' , '1pm ', '2pm ', '3pm ', '4pm ', '5pm ' , '6pm ' , '7pm'];

// OBJECT SEATTLE //
var seattle = {
  location: 'seattle',
  minimumCustomersPerHour: 23,
  maximumCustomersPerHour: 65,
  avgCookiesPerCustomer: 6.3,
  totalCookiesByDay: 0, //totaled at end of day

  customersEachHour:[], //random number of customer PER hour to be created using loop
  cookiesEachHour:[], //$$

  // Need to generate how many customerEachHour using hoursArray
  // Use provided minimumCustomersPerHour and maximumCustomersPerHour
  generateCustomersEachHour: function(){
    for(var x = 0; x < hours.length; x++){ //going through each hour set in global var hours and using inclusive
      var randomNumber = Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1) + this.minimumCustomersPerHour); //The maximum is inclusive and the minimum is inclusive
      this.customersEachHour.push(randomNumber); // each loop of random number of customers per hour adds up for customerEachHour
    }
  },
  // NOW generate how many cookies are sold each hour in accordance to customersEachHour using global var hourArray and generateCustomerEachHour
  generateCookiesSoldEachHour: function (){
    this.generateCustomersEachHour(); //array of customers
    for(var x = 0; x < hours.length; x++){
      var cookiesSoldByHour = Math.ceil(this.customersEachHour[x] * this.avgCookiesPerCustomer);

      this.totalCookiesByDay += cookiesSoldByHour;
      this.cookiesEachHour.push(cookiesSoldByHour);
    }
  },
  render: function(){
    var parentSection = document.getElementById('seattle'); //use section id to parent element h2
    var headingSeattle = document.createElement('h2'); //this creates an h2 heading
    headingSeattle.textContent = this.location; //filling with content from "location" property
    parentSection.appendChild(headingSeattle); //appending h2 to Section in DOM

    var printSales = document.getElementById('seattle-sales'); //get ul id, which is now the parent element

    for(var x = 0; x < this.cookiesEachHour.length; x++){ //looping cookies each hour

      var liElement = document.createElement('li'); //creating new child element LI
      liElement.textContent = `${hours[x]}: ${this.cookiesEachHour[x]} cookies`; //adding content of cookies each hour AT the hour
      printSales.appendChild(liElement);
    }

  }


};
seattle.generateCookiesSoldEachHour();
seattle.render();



// OBJECT TOKYO //
var tokyo = {
  location: 'tokyo',
  minimumCustomersPerHour: 3,
  maximumCustomersPerHour: 24,
  avgCookiesPerCustomer: 1.2,
  totalCookiesByDay: 0,

  customersEachHour:[],
  cookiesEachHour:[],

  generateCustomersEachHour: function(){
    for(var x = 0; x < hours.length; x++){
      var randomNumber = Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1) + this.minimumCustomersPerHour); //The maximum is inclusive and the minimum is inclusive
      this.customersEachHour.push(randomNumber);
    }
  },

  generateCookiesSoldEachHour: function (){
    this.generateCustomersEachHour();
    for(var x = 0; x < hours.length; x++){
      var cookiesSoldByHour = Math.ceil(this.customersEachHour[x] * this.avgCookiesPerCustomer);

      this.totalCookiesByDay += cookiesSoldByHour;
      this.cookiesEachHour.push(cookiesSoldByHour);
    }
  },
  render: function(){
    var parentSection = document.getElementById('tokyo'); //use section id to parent element h2
    var headingSeattle = document.createElement('h2'); //this creates an h2 heading
    headingSeattle.textContent = this.location; //filling with content from "location" property
    parentSection.appendChild(headingSeattle); //appending h2 to Section in DOM

    var printSales = document.getElementById('tokyo-sales'); //get ul id, which is now the parent element

    for(var x = 0; x < this.cookiesEachHour.length; x++){ //looping cookies each hour

      var liElement = document.createElement('li'); //creating new child element LI
      liElement.textContent = `${hours[x]}: ${this.cookiesEachHour[x]} cookies`; //adding content of cookies each hour AT the hour
      printSales.appendChild(liElement);
    }

  }

};

tokyo.generateCookiesSoldEachHour();
tokyo.render();

// OBJECT DUBAI
var dubai = {
  location: 'dubai',
  minimumCustomersPerHour: 11,
  maximumCustomersPerHour: 38,
  avgCookiesPerCustomer: 3.7,


  customersEachHour:[],
  cookiesEachHour:[],

  generateCustomersEachHour: function(){
    for(var x = 0; x < hours.length; x++){
      var randomNumber = Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1) + this.minimumCustomersPerHour); //The maximum is inclusive and the minimum is inclusive
      this.customersEachHour.push(randomNumber);
    }
  },

  generateCookiesSoldEachHour: function (){
    this.generateCustomersEachHour();
    for(var x = 0; x < hours.length; x++){
      var cookiesSoldByHour = Math.ceil(this.customersEachHour[x] * this.avgCookiesPerCustomer);

      this.totalCookiesByDay += cookiesSoldByHour;
      this.cookiesEachHour.push(cookiesSoldByHour);
    }
  },
  render: function(){
    var parentSection = document.getElementById('dubai'); //use section id to parent element h2
    var headingSeattle = document.createElement('h2'); //this creates an h2 heading
    headingSeattle.textContent = this.location; //filling with content from "location" property
    parentSection.appendChild(headingSeattle); //appending h2 to Section in DOM

    var printSales = document.getElementById('dubai-sales'); //get ul id, which is now the parent element

    for(var x = 0; x < this.cookiesEachHour.length; x++){ //looping cookies each hour

      var liElement = document.createElement('li'); //creating new child element LI
      liElement.textContent = `${hours[x]}: ${this.cookiesEachHour[x]} cookies`; //adding content of cookies each hour AT the hour
      printSales.appendChild(liElement);
    }

  }
};

dubai.generateCookiesSoldEachHour();
dubai.render();

// OBJECT PARIS
var paris = {
  location: 'paris',
  minimumCustomersPerHour: 20,
  maximumCustomersPerHour: 38,
  avgCookiesPerCustomer: 2.3,

  customersEachHour:[],
  cookiesEachHour:[],

  generateCustomersEachHour: function(){
    for(var x = 0; x < hours.length; x++){
      var randomNumber = Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1) + this.minimumCustomersPerHour); //The maximum is inclusive and the minimum is inclusive
      this.customersEachHour.push(randomNumber);
    }
  },

  generateCookiesSoldEachHour: function (){
    this.generateCustomersEachHour();
    for(var x = 0; x < hours.length; x++){
      var cookiesSoldByHour = Math.ceil(this.customersEachHour[x] * this.avgCookiesPerCustomer);

      this.totalCookiesByDay += cookiesSoldByHour;
      this.cookiesEachHour.push(cookiesSoldByHour);
    }
  },
  render: function(){
    var parentSection = document.getElementById('paris'); //use section id to parent element h2
    var headingSeattle = document.createElement('h2'); //this creates an h2 heading
    headingSeattle.textContent = this.location; //filling with content from "location" property
    parentSection.appendChild(headingSeattle); //appending h2 to Section in DOM

    var printSales = document.getElementById('paris-sales'); //get ul id, which is now the parent element

    for(var x = 0; x < this.cookiesEachHour.length; x++){ //looping cookies each hour

      var liElement = document.createElement('li'); //creating new child element LI
      liElement.textContent = `${hours[x]}: ${this.cookiesEachHour[x]} cookies`; //adding content of cookies each hour AT the hour
      printSales.appendChild(liElement);
    }

  }
};

paris.generateCookiesSoldEachHour();
paris.render();

// OBJECT LIMA
var lima = {
  location: 'lima',
  minimumCustomersPerHour: 2,
  maximumCustomersPerHour: 16,
  avgCookiesPerCustomer: 4.6,

  customersEachHour:[],
  cookiesEachHour:[],

  generateCustomersEachHour: function(){
    for(var x = 0; x < hours.length; x++){
      var randomNumber = Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1) + this.minimumCustomersPerHour); //The maximum is inclusive and the minimum is inclusive
      this.customersEachHour.push(randomNumber);
    }
  },

  generateCookiesSoldEachHour: function (){
    this.generateCustomersEachHour();
    for(var x = 0; x < hours.length; x++){
      var cookiesSoldByHour = Math.ceil(this.customersEachHour[x] * this.avgCookiesPerCustomer);

      this.totalCookiesByDay += cookiesSoldByHour;
      this.cookiesEachHour.push(cookiesSoldByHour);
    }
  },
  render: function(){
    var parentSection = document.getElementById('lima'); //use section id to parent element h2
    var headingSeattle = document.createElement('h2'); //this creates an h2 heading
    headingSeattle.textContent = this.location; //filling with content from "location" property
    parentSection.appendChild(headingSeattle); //appending h2 to Section in DOM

    var printSales = document.getElementById('lima-sales'); //get ul id, which is now the parent element

    for(var x = 0; x < this.cookiesEachHour.length; x++){ //looping cookies each hour

      var liElement = document.createElement('li'); //creating new child element LI
      liElement.textContent = `${hours[x]}: ${this.cookiesEachHour[x]} cookies`; //adding content of cookies each hour AT the hour
      printSales.appendChild(liElement);
    }

  }
};

lima.generateCookiesSoldEachHour();
lima.render();
