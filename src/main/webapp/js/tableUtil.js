function clearTable(table_id) {
    var tableHeaderRowCount = 1;
    var table = document.getElementById(table_id);
    var rowCount = table.rows.length;
    for (var i = tableHeaderRowCount; i < rowCount; i++) {
        table.deleteRow(tableHeaderRowCount);
    }
    return table;
}

function populateAlphabeticalTable(table_id) {
	
	if (document.getElementById(table_id).rows.length > 1) {
		// table is already loaded
		return;
	}
	
    var table = clearTable(table_id);
	
    citiesJson.sort(function (a, b) {
        if (a.city < b.city)
            return -1;
        if (a.city > b.city)
            return 1;
        return 0;
    })

    var groupedCities = _.groupBy(citiesJson, "state");
    var sortedStates = _.keys(groupedCities).sort();

    $.each(sortedStates, function (i) {

        var row = table.insertRow(i + 1);

        var cityList = groupedCities[sortedStates[i]];
        var cityString = "";

        $.each(cityList, function (j) {
            cityString = cityString + cityList[j].city + ", ";
        });

        var cell0 = row.insertCell(0).innerHTML = sortedStates[i];
        var cell1 = row.insertCell(1).innerHTML = cityString.substring(0, cityString.length - 2);
    });
}

function populateSmallestCitiesTable(table_id) {
	
	if (document.getElementById(table_id).rows.length > 1) {
		// table is already loaded
		return;
	}
	
    var table = clearTable(table_id);
	
    citiesJson.sort(function (a, b) {
        if (a.population < b.population)
            return -1;
        if (a.population > b.population)
            return 1;
        return 0;
    })

    var groupedCities = _.groupBy(citiesJson, "state");
    var sortedStates = _.keys(groupedCities).sort();

    $.each(sortedStates, function (i) {

        var row = table.insertRow(i + 1);

        var cityList = groupedCities[sortedStates[i]];
        var cityString = "";

        $.each(cityList, function (j) {
            if (j > 2) {
                return false;
            }
            cityString = cityString + cityList[j].city + " (" + cityList[j].population + "), ";
        });

        var cell0 = row.insertCell(0).innerHTML = sortedStates[i];
        var cell1 = row.insertCell(1).innerHTML = cityString.substring(0, cityString.length - 2);
    });
}

function populateBiggestCitiesTable(table_id) {
	
	if (document.getElementById(table_id).rows.length > 1) {
		// table is already loaded
		return;
	}
	
    var table = clearTable(table_id);
	
    citiesJson.sort(function (a, b) {
        if (a.population > b.population)
            return -1;
        if (a.population < b.population)
            return 1;
        return 0;
    })

    var groupedCities = _.groupBy(citiesJson, "state");
    var sortedStates = _.keys(groupedCities).sort();

    $.each(sortedStates, function (i) {

        var row = table.insertRow(i + 1);

        var cityList = groupedCities[sortedStates[i]];
        var cityString = "";

        $.each(cityList, function (j) {

            if (j > 1) {
                return false;
            }
            cityString = cityString + cityList[j].city + " (" + cityList[j].population + "), ";
        });

        var cell0 = row.insertCell(0).innerHTML = sortedStates[i];
        var cell1 = row.insertCell(1).innerHTML = cityString.substring(0, cityString.length - 2);
    });
}

function populateDistancesTable(table_id) {

	if (document.getElementById(table_id).rows.length > 1) {
		// table is already loaded
		return;
	}
	
    var table = clearTable(table_id);
    
    citiesJson.sort(function (a, b) {
        if (a.population > b.population)
            return -1;
        if (a.population < b.population)
            return 1;
        return 0;
    })

    var groupedCities = _.groupBy(citiesJson, "state");
    var sortedStates = _.keys(groupedCities).sort();

    var distancesMap = new Array();

    $.each(sortedStates, function (i) {

        var cityList = groupedCities[sortedStates[i]];

        if (_.size(cityList) > 1) {
            var dist = distance(cityList[0].latitude, cityList[0].longitude, cityList[1].latitude, cityList[1].longitude);

            var obj = new Object();
            obj.state = sortedStates[i];
            obj.distance = dist;
            distancesMap.push(obj)
        }
    });

    distancesMap.sort(function (a, b) {
        if (a.distance < b.distance)
            return -1;
        if (a.distance > b.distance)
            return 1;
        return 0;
    })

    $.each(distancesMap, function (i) {
        var row = table.insertRow(i + 1);
        var cell0 = row.insertCell(0).innerHTML = distancesMap[i].state
        var cell1 = row.insertCell(1).innerHTML = Number(distancesMap[i].distance).toFixed(2);
    })
}