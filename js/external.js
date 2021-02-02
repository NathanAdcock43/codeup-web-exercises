"use strict"
alert("Welcome to my website!");
var favColor = prompt('What is your favorite Color?');
console.log("your favorite color is " + favColor);
alert("Great " + favColor + " is my favorite color too!");

// question 1
var mer = prompt("How many days did you keep the Little Mermaid rental?");
var bear = prompt("How many days did you keep the Brother Bear rental?");
var herc = prompt("How many days did you keep the Hercules rental?");

var rentTotal;
rentTotal = Number(mer)  + Number(bear) + Number(herc);

prompt("Wow, You spent a total of " + (rentTotal) + " dollars on rentals");

//question 2
var gooHours;
gooHours = prompt("How many hours did you work at Google?");
var gooPay;
gooPay = prompt("How much do you get paid at Google?");
var amaHours;
amaHours = prompt("How many hours did you work at Amazon?");
var amaPay;
amaPay = prompt("How much do you get paid at Amazon?");
var faceHours;
faceHours = prompt("How many hours did you at Facebook?");
var facePay;
facePay = prompt("How much do you get paid at Facebook?");

var totalPay;
totalPay= (gooHours * gooPay) + (amaHours * amaPay) + (faceHours * facePay);
prompt("Wow, You got paid a total of " + (totalPay) + " dollars from your jobs! You are rich!");

//question 3
var room = confirm("Is there still room available in the class?");
var sch = confirm("Is there still room on your schedule?");
var cantakeclass = room && sch;
if (cantakeclass === true) {
    alert("Congrats you can enroll");
}
else{
    alert("Sorry, you will have to wait till next time");
}

//question 4
var items;
items = prompt("How many things did you end up buying?");
var premium;
premium = confirm("Are you a premium member?");
var expire;
expire = confirm("Is your offer expired?");
var offercanapply = (items >= 2 || premium === true) && !expire === true;
if (offercanapply === true) {
    alert("Congrats, You are eligible for this offer");
    }
    else{
    alert("Sorry, this offer is not available");
    }


