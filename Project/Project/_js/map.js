//geolocation map
function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center : {
			lat : -34.397,
			lng : 150.644
		},
		zoom : 8
	});
	var infoWindow = new google.maps.InfoWindow({
		map : map
	});

	// Try HTML5 geolocation.
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var pos = {
				lat : position.coords.latitude,
				lng : position.coords.longitude
			};

			infoWindow.setPosition(pos);
			infoWindow.setContent('Your location');
			map.setCenter(pos);
		}, function() {
			handleLocationError(true, infoWindow, map.getCenter());
		});
	} else {
		// Browser doesn't support Geolocation
		handleLocationError(false, infoWindow, map.getCenter());
	}
	
	
	//array of local restaurants
	var restaurants = [['Bella Bia', 52.2675041, -9.7087652],
	['Il Pomo Doro', 52.2675915, -9.7095263],
	['Cassidys', 52.269034, -9.707935],
	['Yummy Cafe', 52.2693233,-9.7073487],
	['The Stonehouse', 52.26916,-9.707179],
	['No. 4 on the Square', 52.2694546,-9.7067831],
	['Quinlan\'s Fish & Chips', 52.269542, -9.7063635],
	['Denny Lane', 52.2684541, -9.7056328],
	['The Roast House', 52.2692526,-9.7053096],
	['The Daily Grind', 52.2697351,-9.7064298],
	['Mozarts', 52.2695991,-9.7043386],
	['Il Forno', 52.2696635,-9.7039745],
	['Sunshine Palace', 52.2689538,-9.7030675],
	['Rose Garden Chinese', 52.2709995,-9.7077255],
	['Lana Asian Street Food', 52.2695089,-9.704524]];
	
	
	//loop to add markers to map
	for(var i=0; i<restaurants.length; i++)
	{
		var restaurant = restaurants[i];
		var marker = new google.maps.Marker({
			position: {lat: restaurant [1], lng:restaurant [2]},
			map: map,
			title: restaurant[0]
		});
	}	
}

//error checking
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	infoWindow.setPosition(pos);
	infoWindow.setContent( browserHasGeolocation ? 'Error: The Geolocation service failed.' : 'Error: Your browser doesn\'t support geolocation.');
}