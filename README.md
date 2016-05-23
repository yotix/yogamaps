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

# Copyright (c) 2016 Yogesh Bhardwaj
	All rights reserved.

	Redistribution and use in source and binary forms, with or without
	modification, are permitted provided that the following conditions are met:
  	  * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
  	  * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
	ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
	WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
	DISCLAIMED. IN NO EVENT SHALL YOGESH BHARDWAJ BE LIABLE FOR ANY
	DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
	(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
	LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
	ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
	SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


 
 
		

