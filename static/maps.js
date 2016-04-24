var server = "http://eonet.sci.gsfc.nasa.gov/api/v2.1";

var types = ["Severe Storms", "Wildfires", "Floods", "Dust and Haze", "Water Color", "Sea and Lake Ice", "Volcanoes"]
//var color = []
// First, show the list of events
$( document ).ready(function() {
    $.getJSON( server + "/events", {
        status: "open",
        limit: 20
    })
        .done(function( data ) {
            $.each( data.events, function( key, event ) {
                // $( "#eventList" ).append(
                //     "<dt class='event'>" +
                //     "<a href='#' onclick='showLayers(\"" + event.id+ "\");'>" +
                //     event.title + "</a></dt>"
                // );
                // var icon = picstype.indexOf(event.categories.title)];
                var description = "";

                if (event.description.length) {
                    description = event.description;
                }

                var latlong = {lat: event.geometries.coordinates[0][0][0], lng: event.geometries.coordinates[0][0][1]};

                var contentString = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h1 id="firstHeading" class="firstHeading"><a href="' + event.link + '">' + event.title + '</a></h1>'+
                '<br><h2>' + event.categories.title + '</h2>' +
                '<br><h3>' + event.geometries[0].date + '</h3>' +
                '<div id="bodyContent">'+
                '<p>' + description + '</p>'+
                '<p>' + event.sources[0].url + '</p>'+
                '</div>'+
                '</div>';

                var infowindow = new google.maps.InfoWindow({
                  content: contentString
                });

                var marker = new google.maps.Marker({
                  position: latlong,
                  map: map,
                  title: event.title
                });

                marker.addListener('click', function() {
                  infowindow.open(map, marker);
                });


            });
        });
});
