# Yogamaps js(0.1.0)
	An extended Google Maps plugin for getting started with maps
# Getting Started
	In your html include(note: yogamaps is included after maps scripts)
	<script src="http://maps.googleapis.com/maps/api/js?key=YOUR_KEY&libraries=places"></script>
	<script scr="yogampas.js"></script>
	then write a script and call function myMaps(addressfieldId,idmap,latid,lngid)
		The addressfieldId is the autocomplete address field
		Idmap is the id of the div tag you want to generate the map.
		You can leave it as 'none' if you dont require visual map
		latid, lngid are the field of latitude and longitude fields.
# Examples 1
Autocomplete

	myMaps('address','none','lat','lng');

# Examples 2
Multiples Autocomplete fields
	
	myMaps('address','none','lat','lng');
	myMaps('address1','none','lat1','lng1');
	.
	.
	.
	upto n fields
# Examples 3
Autocomplete and Map

	myMaps('address','none','lat','lng');
	myMaps('address1','map1','lat1','lng1');


 Note
strings passed are the ids of input fields for autocomplete and latitude and longitude
Maps ids strings are the ids of div


 
 
		

