var title = " ";
var date = new Date();
var startInput = "";
var endInput = "";
var sunday = "";
var hs = 0;
var he = 0;
var ms = 0;
var me = 0;
var start = new Date();
var end = new Date();
var timePassed = "";
var price = "";
var line1 = "";
var line2 = "";
var totalPrice = "";
function allCapsTitleTrimmed(originalText) {
    "use strict";
    document.getElementById("title").value = title.toUpperCase().trim();
}
function modifyTitle() {
    "use strict";
    title = (document.getElementById("title").value).toUpperCase();
    allCapsTitleTrimmed();
    console.log(title);
}
function isSunday(dateText) {
    "use strict";
    var date = document.getElementById("date").value;
    console.log(date);
    var day = date.substr(0, 2);
    console.log(day);
    var month = date.substr(3, 2);
    console.log(month);
    var year = date.substr(6, 4);
    console.log(year);
    function cleanMonth() {
        if (month.charAt(0) === 0) {
            month = month.slice(1, 2) - 1;
            return month;
        } else {
            month = month - 1;
            return month;
        }
    }
    cleanMonth();
    console.log(month);
    var asDate = new Date();
    asDate.setFullYear(year, month, day);
    console.log(asDate);
    if (asDate.getDay() === 0) {
        sunday = true;
    } else {
        sunday = false;
    }
    console.log(asDate.getDay());
    console.log(sunday);
}
function calculate() {
    "use strict";
    isSunday();
    var startInput = document.getElementById("startTime").value;
    var endInput = document.getElementById("endTime").value;
	hs = startInput.slice(0, 2);
    ms = startInput.slice(3, 5);
    he = endInput.slice(0, 2);
    me = endInput.slice(3, 5);
    console.log(hs);
    console.log(ms);
    console.log(he);
    console.log(me);
    start.setHours(hs);
    start.setMinutes(ms);
    end.setHours(he);
    end.setMinutes(me);
    timePassed = Math.abs(start - end);
    timePassed = timePassed / 1000 / 60;
    console.log(start);
    console.log(end);
    console.log(timePassed);
    if (sunday === true) {
        price = 72;
        line2 = "The hourly price during the Sundays is " + price + " euros.";
    } else {
        price = 48;
        line2 = "The hourly price during the workdays is " + price + " euros.";
    }
    totalPrice = price * (timePassed/60);   
    document.getElementById("answer").innerHTML = "Length of the work was " + timePassed + " minutes. <br>" + line2 + "<br> The Price of this repair work is " + totalPrice.toFixed(2) + " euros.";
    console.log(price);
    console.log(totalPrice);	
}