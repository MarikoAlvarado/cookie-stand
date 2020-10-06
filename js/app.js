'use strict';


// OBJECT SEATTLE
var seattle = {
    location: 'seattle',
    minimumCustomersPerHour: 23,
    maximumCustomersPerHour: 65,
    averageCookiesPerCustomer: 6.3, 
    
    customersEachHour:[],
    cookieSalesEachHour:[],// customers each hour *averag customers each hour
};

// OBJECT TOKYO
var tokyo = {
    location: 'tokyo',
    minimumCustomersPerHour: 3,
    maximumCustomersPerHour: 24,
    avgCookieSale: 1.2,  //$
    
    customersEachHour:[],
    cookieSalesEachHour:[],
};

// OBJECT DUBAI
var dubai = {
    location: 'dubai',
    minimumCustomersPerHour: 11,
    maximumCustomersPerHour: 38,
    avgCookieSale: 3.7,  //$
    
    customersEachHour:[],
    cookieSalesEachHour:[],
};

// OBJECT PARIS
var paris = {
    location: 'paris',
    minimumCustomersPerHour: 20,
    maximumCustomersPerHour: 38,
    avgCookieSale: 2.3,  //$

    customersEachHour:[],
    cookieSalesEachHour:[],
};

// OBJECT LIMA
var lima = {
    location: 'lima',
    minimumCustomersPerHour: 2,
    maximumCustomersPerHour: 16,
    avgCookieSale: 4.6,  //$
    
    customersEachHour:[],
    cookieSalesEachHour:[],


};

//    How many customers each hour?
function sales(minimumCustomersPerHour, maximumCustomersPerHour){
    var min = Math.ceil(minimumCustomersPerHour); 
    var max = Math.floor(maximumCustomersPerHour);
    return Math.floor(Math.random() * (max - min) + min);
    
}

//    How many cookies each hour? 
 function calculate(object){
    for (var h = 0; h < 14; h++){
    var salesRand = Math.floor(sales(object.minimumCustomersPerHour, object.maximumCustomersPerHour));
    
    object.cookieSalesEachHour.push(salesRand);
    object.customersEachHour.push(Math.floor(object.avgCookieSale * salesRand)); // NEED CUSTOMER PER HR * avgCookieSale
    console.log('customer/hr ', object.customersEachHour, 'sales/hr ', object.cookieSalesEachHour);

    }
    return object;



 }

 calculate(seattle);
 calculate(tokyo);
 calculate(dubai);
 calculate(paris);
 calculate(lima);

//  DOM=DOCUMENT OBJECT MODEL

//  1. CREATE ID ELEMENT 
//  2. GET CONTENT (document.getelementbyid)
//  3. APPEND IT TO DOM 

var locationArray = [seattle, tokyo, dubai, paris, lima]; //location names listed through each object
var SalesPerHour = [seattle, tokyo, dubai, paris, lima]; //cookie sales each hour by each location

    for (var i = 0; i < locationArray.length; i++){ //loop through each city for the length of number of cities listed in array
        var shopLocation = locationArray[i].location; // generate shopLocation name each time from array
        // console.log(shopLocation);
        
        var cityTitle = document.getElementById('shopLocation');
        var thElement = document.createElement('th');

        thElement.textContent = shopLocation;
        cityTitle.appendChild(thElement);
        console.log(element, cityName);
        
    // for (var x = 0; x < 14; x++){ //hour loop WITHIN location loop
    //         var hourlySales = x + 1;
    //         var sales = SalesPerHour[x].cookieSalesEachHour;

    //     }
    }