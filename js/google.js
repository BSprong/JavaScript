 var map;
      function initialize() {
        var mapDiv = document.getElementById('map-canvas');
        map = new google.maps.Map(mapDiv, {
          center: new google.maps.LatLng(51.451537,5.480611),
          zoom: 13,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });
      
        google.maps.event.addListenerOnce(map, 'tilesloaded', addMarkers);
      
      }
      
      function addMarkers() {
       
          var latLng = new google.maps.LatLng(51.451537,5.480611);
          var marker = new google.maps.Marker({
            position: latLng,
            map: map
          });
      }

      google.maps.event.addDomListener(window, 'load', initialize);