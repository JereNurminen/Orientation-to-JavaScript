var title = " ";
function calculate() {
		
		// Calculate length of the work as minutes.
		
		// If it is not Sunday
		// Call isSunday() function from 07.10_functions.js file
			//Calculate and show price of the repair work during the workdays
		//otherwise			
			//Calculate and showprice of the repair work on Sundays
			
}

function allCapsTitleTrimmed(originalText) {
    document.getElementById("title").value = title.toUpperCase().replace(" ", "");
}

function modifyTitle() {
    title = (document.getElementById("title").value).toUpperCase();
    allCapsTitleTrimmed();
    console.log(title);
    // Read value of title from the input field
    // Call allCapsTitleTrimmed() function from 07.10_functions.js file	
}

function isSunday(dateText) {
    
}