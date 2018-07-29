<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
	<head>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
		<link href="http://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet"/>
		<link rel="stylesheet" href="/css/styles.css"/>
	</head>
	<body>
		<div id="top-nav" class="navbar navbar-inverse navbar-static-top">
			<div class="container-fluid">
				<div class="navbar-header">
					<a class="navbar-brand">City Analyzer V1.0</a>
				</div>
			</div>
		</div>
	
		<div class="container-fluid">
			<div class="row">
	
				<div class="col-sm-3" id="sidebar">
					<hr>
					<ul class="nav nav-stacked">
						<li><a href="/"><i
								class="glyphicon glyphicon-map-marker lateral-icon"></i> View Map</a></li>
						<li><a href="#" onClick="navigate('/html/reports.html')"><i
								class="glyphicon glyphicon-stats lateral-icon"></i> Reports</a></li>
					</ul>
					<hr>
				</div>
	
				<div class="col-sm-9" id="page-content"">
	
					<div id="map"></div>
	
					<script async defer
						src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCUTbLMculvnNM995eVgtVAAN3h_2YIfEM&callback=initMap"></script>
	
				</div>
				
			</div>
		</div>
		
		<script type="text/javascript" src="/js/myScript.js"></script>
		<script type="text/javascript" src="/js/tableUtil.js"></script>
		<script type="text/javascript" src="/js/distanceCalculator.js"></script>
		<script type="text/javascript" src="/js/lodash.js"></script>
		
	</body>
</html>