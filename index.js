// Write your solution in this file!
var customerName = "bob"
const leastFavoriteCustomer = "joe"

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
}

console.log(upperCaseCustomerName);


function setBestCustomer() {
    bestCustomer = `not bob`
}
//when calling a variable I didn't need to use let or const
// when inside a function

console.log(bestCustomer);

function overwriteBestCustomer() {
    bestCustomer = `maybe bob`
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "henry"
}

changeLeastFavoriteCustomer();

//this has err_aborted 404 line 28
//this has err_aborted 404 line 37
//
