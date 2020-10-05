'use strict';


// OBJECT SEATTLE
var seattle = {
    minCustHour: 23,
    maxCustHour: 65,
    avgCookieSale: 6.3, 
    
    customersEachHour:[],
    cookieSalesEachHour:[],
}

//    How many customers each hour?
    function sales(minCustHour, maxCustHour){
        var min = Math.ceil(minCustHour);
        var max = Math.floor(maxCustHour);
        return Math.floor(Math.random() * (max - min) + min);
        
    }

//    How many cookies each hour? 
     function calculate(object){
        for (var h = 0; h < 14; h++){
        var salesRand = Math.floor(sales(object.minCustHour, object.maxCustHour));
        
        object.cookieSalesEachHour.push(salesRand);
        object.customersEachHour.push(object.avgCookieSale * salesRand); // NEED CUSTOMER PER HR * avgCookieSale
        console.log('customer per hour ', object.customersEachHour, 'sales each hour ', object.cookieSalesEachHour);

        }
        return object;



     }

     calculate(seattle)



    
        
        
        



// OBJECT TOKYO
var tokyo = {
    minCustPerHour: 3,
    maxCustPerHour: 24,
    avgCookieSale: 1.2,  //$
    
    customersEachHour:[],
    cookieSalesEachHour:[],
    





}

// OBJECT DUBAI
var dubai = {
    minCustPerHour: 11,
    maxCustPerHour: 38,
    avgCookieSale: 3.7,  //$
    
    customersEachHour:[],
    cookieSalesEachHour:[],





}

// OBJECT PARIS
var paris = {
    minCustPerHour: 20,
    maxCustPerHour: 38,
    avgCookieSale: 2.3,  //$

    customersEachHour:[],
    cookieSalesEachHour:[],





}

// OBJECT LIMA
var lima = {
    minCustPerHour: 2,
    maxCustPerHour: 16,
    avgCookieSale: 4.6,  //$
    
    customersEachHour:[],
    cookieSalesEachHour:[],






}