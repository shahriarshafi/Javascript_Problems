// https://github.com/shahriarshafi/Javascript_Problems/tree/main/Assignment_3



// Write a function which can convert kilometer to meter

function kilometerToMeter(n){
    if(n>=0){
        var meterToKilometer = 1000*n;
        return meterToKilometer;
    }
    else{
        var error = "Opps!Kilometer can't be negative.";
        return error;
    }
}

var output = kilometerToMeter(-1);
console.log(output);



// Write a function which can show the cost of your instruments

function budgetCalculator(watch,phone,laptop){

var priceOfWatch = 50;
var priceOfPhone = 100;
var priceOfLaptop = 500;
var totalCostOfWatch = priceOfWatch*watch;
var totalCostOfPhone = priceOfPhone*phone;
var totalCostOfLaptop = priceOfLaptop*laptop;
var totalCostOfAllThings = totalCostOfWatch+totalCostOfPhone+totalCostOfLaptop;

return totalCostOfAllThings;
}

var output2 = budgetCalculator(12,12,14);
console.log(output2);



// Write a programme which can calculate my total hotel room cost.

function hotelCost(day){
var  totalCost = 0;
if(day<=10){
    totalCost = 100*day;        
}
else if(day<=20){
    var firstTenDays = 100*10;
    var remainingDays = day-10;
    totalCost = firstTenDays + (remainingDays*80);
}
else(day>20);{
    firstTenDays = 100*10;
    var secondTenDays = 80*10;
    remainingDays = day - 20;
    totalCost = firstTenDays+secondTenDays+(remainingDays*50);
}
return totalCost;
}
var output3 = hotelCost(25);
console.log(output3);




// Write a programme which can tells you the largest name of your friend

function megaFriend(friendsName){
var largestFriendsName = "";
var normalLength = 0;

for(i=0; i<friendsName.length; i++){
     if(friendsName[i].length>normalLength){
         normalLength = friendsName[i].length;
         largestFriendsName = friendsName[i];
     }
}
return largestFriendsName;
}
var output4 = megaFriend(["Shafi","Sami","Zahid","Shahriar","Safhkhat Samin","Ayesha"]);
console.log(output4);