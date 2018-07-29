var citiesJson;

function initMap() {
	$.ajax({
		url: '/cities',
		dataType: 'json',
		method: 'POST',
		data: {
			actionName: "initMap"
		},
		success: function(result) {

			citiesJson = result;

			var usa = {lat: 37.0902, lng: -95.7129};
			var map = new google.maps.Map(
					document.getElementById('map'), {zoom: 4, center: usa});

			$.each(result, function(i, item) {
				var marker = new google.maps.Marker({
					position : {
						lat : result[i].latitude,
						lng : result[i].longitude
					},
					map : map
				});

			});
		}
	});
};

function navigate(page) {
	$.ajax({
		url: page,
		method: 'GET',
		success: function(response) {
			document.getElementById("page-content").innerHTML = response;
		}
	});
};

function submitForm(string, table_id) {

    if (string == "alphabetical") {

        populateAlphabeticalTable(table_id);

    } else if (string == "smallest") {

        populateSmallestCitiesTable(table_id);

    } else if (string == "biggest") {

        populateBiggestCitiesTable(table_id);

    } else if (string == "distances") {

        populateDistancesTable(table_id);
    }
};