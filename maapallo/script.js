		var earth;
		function initialize() {
		  var options = {atmosphere: true, center: [0, 0], zoom: 0};
		  earth = new WE.map('earth_div', options);
		  WE.tileLayer('http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.jpg',{
				  attribution: 'Tiles Courtesy of MapQuest'
				}).addTo(earth);
		}

		function goHome() {
		  // Set the map center to the latitude / longitude position of your own home and 
		  earth.setView([43.893292620836945,17.483070431973514]); 
}		  // Zoom the map close enough
		  earth.setZoom(13);
		}

		function showCoords() {
		  //  Show the current coordinates of the map center in an alert dialog box
		alert(earth.getCenter());
		earth.setView([41.893292620836945,12.483070431973514]); 
		}