run = false;
once  = false;
console.time('%cinitializing YogaMaps','color:purple;font-size:large;');
{
	// console.log(addressFieldId+' '+idmap);
  if (idmap != 'none' && run != true)
	{
		//console.log('create map');
		map = new google.maps.Map(document.getElementById(idmap), {
    center: {lat: -33.8688, lng: 151.2195},
		streetViewControl: false,
		 disableDefaultUI: true,
		 rotateControl: false,
		 zoomControl: true,
		zoom: 17

  });
	run = true;
}
  var autocomplete = new google.maps.places.Autocomplete(
	/** @type {!HTMLInputElement} */(document.getElementById(addressFieldId)),
	{types: ['geocode']});

  if (idmap !='none')	{autocomplete.bindTo('bounds', map);

  var infowindow = new google.maps.InfoWindow();
}

  autocomplete.addListener('place_changed', function() {

    var place = autocomplete.getPlace();
    if (!place.geometry) {
      window.alert("Autocomplete's returned place contains no geometry");
      return;
    }
		document.getElementById(LatId).value = place.geometry.location.lat();
		document.getElementById(LngId).value = place.geometry.location.lng();

    // If the place has a geometry, then present it on a map.
  	if( idmap!='none')
		{		  infowindow.close();
			 if (place.geometry.viewport) {
      	map.fitBounds(place.geometry.viewport);
    			}
					else
					 {
      map.setCenter(place.geometry.location);
      map.setZoom(17);  // Why 17? Because it looks good.
    				}

    marker.setPosition(map.getCenter());
    marker.setVisible(true);

    var address = '';
    if (place.address_components) {
      address = [
       (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }
		// console.log(address)
    infowindow.setContent(place.name);
    infowindow.open(map, marker);
		}

  });
if(idmap !='none')
{

if (once !=true){	var marker = new google.maps.Marker({
    map: map,
    'draggable': false,
		position: new google.maps.LatLng({lat: -33.8688, lng: 151.2195}),
		animation: google.maps.Animation.DROP,
    anchorPoint: new google.maps.Point(0, -29)
  });
	var circle = new google.maps.Circle({
	      strokeColor: '#FF0000',
	      strokeOpacity: 0.3,
	      strokeWeight: 1,
	      fillColor: '#F1C40F',
	      fillOpacity: 0.15,
	      map: map,
	      center: map.getCenter(),
	      radius: 130
	    });
}
	 marker.addListener('click', toggleBounce);
	 function toggleBounce() {
	  if (marker.getAnimation() !== null) {
	    marker.setAnimation(null);
	  } else {
	    marker.setAnimation(google.maps.Animation.BOUNCE);
	  }
	}

		 google.maps.event.addListener(map,'drag',function(){
			marker.setPosition(map.getCenter());
			circle.setMap(null);
			infowindow.close();
		 });
		 var geocoder = new google.maps.Geocoder();

		 google.maps.event.addListener(map,'zoom_changed',function(){
			 circle.setMap(null);
			marker.setPosition(map.getCenter());

			circle = new google.maps.Circle({
					 strokeColor: '#FF0000',
					 strokeOpacity: 0.3,
					 strokeWeight: 1,
					 fillColor: '#F1C40F',
					 fillOpacity: 0.15,
					 map: map,
					 center: map.getCenter(),
					 radius: 130
				 });
				geocodePosition(marker.getPosition());
		 });
		 google.maps.event.addListener(map,'dragend',function(){
			 marker.setPosition(map.getCenter());
			 circle = new google.maps.Circle({
	 		      strokeColor: '#FF0000',
	 		      strokeOpacity: 0.5,
	 		      strokeWeight: 1,
	 		      fillColor: '#F1C40F',
	 		      fillOpacity: 0.15,
	 		      map: map,
	 		      center: map.getCenter(),
	 		      radius: 130
	 		    });
				geocodePosition(marker.getPosition());
		 });


	 }

function geocodePosition(pos) {
		geocoder.geocode({
			latLng: pos
		}, function(responses) {

			if (responses && responses.length > 0) {
					address = [
						(responses[0].address_components[1] && responses[0].address_components[1].short_name || ''),
						(responses[0].address_components[2] && responses[0].address_components[2].short_name || '')
					].join(' ');
				marker.formatted_address = responses[0].formatted_address;
			} else {
				marker.formatted_address = 'Cannot determine address at this location.';
			}
			document.getElementById(LatId).value = responses[0].geometry.location.lat();
			document.getElementById(LngId).value = responses[0].geometry.location.lng();
			document.getElementById(addressFieldId).value = responses[0].formatted_address;

			infowindow.setContent(address);
			infowindow.open(map, marker);
		});
		}

}
