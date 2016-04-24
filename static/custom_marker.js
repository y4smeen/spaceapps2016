CustomMarker.prototype.draw = function() {

	var self = this;

	var div = this.div;

	if (!div) {

		div = this.div = document.createElement('div');

		div.className = 'marker';

		div.style.position = 'absolute';
		div.style.cursor = 'pointer';
		div.style.width = '20px';
		div.style.height = '20px';
		div.style.background = 'blue';

		if (typeof(self.args.marker_id) !== 'undefined') {
			div.dataset.marker_id = self.args.marker_id;
		}

		google.maps.event.addDomListener(div, "click", function(event) {
			google.maps.event.trigger(self, "click");
		});

		var panes = this.getPanes();
		panes.overlayImage.appendChild(div);
	}

	var point = this.getProjection().fromLatLngToDivPixel(this.latlng);

	if (point) {
		div.style.left = point.x + 'px';
		div.style.top = point.y + 'px';
	}
};
