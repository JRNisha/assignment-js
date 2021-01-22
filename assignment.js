// kilometerToMeter

function kilometerToMeter(kilometer){

    var meter = kilometer*1000 ;
    return meter;
    
}
var a = kilometerToMeter(9);
console.log(a);
var b = kilometerToMeter(5);
console.log(b);
var c = kilometerToMeter(100);
console.log(c); 


// budgetCalculator

function budgetCalculator( watch, phone, laptop){
        
    var watchCost = watch * 50;
    var phoneCost = phone * 100;
    var laptopCost = laptop * 500;

    var total = watchCost + phoneCost + laptopCost;
    return total;
}

var budget = budgetCalculator(2,3,1); 
console.log(budget);


// hotelCost
function hotelCost(days){
    var cost = 0;
    if (days <= 10){
        cost = days * 100;
    }
    else if (days <= 20){
        var firstcost = 10 * 100;
        var remains = days-10;
        var secondcost = remains * 80;
        total = firstcost + secondcost;

    }
    else{
        var firstcost = 10 * 100;
        var secondcost = 10 * 80;
        var remains = days - 20;
        var thirdcost = remains * 50;
        total =  firstcost + secondcost + thirdcost;
    }
    return total;
}
var count = hotelCost(35);
console.log(count);

// megaFriend
var arr = ["Eshan", "Jannat", "Nisha", "Nilufa", "Kolimuddin"]

function megaFriend(arr) { 
    let longestStringArr = arr.sort((a, b) => a.length - b.length).reverse();
     return longestStringArr[0];
     }

console.log(megaFriend(arr))