;(function ($) {
	"use strict";

	const firstSlider = $('.ba-slide');
	firstSlider.slick({
		infinite: false,
	
		slide: ".ba-slide-simple",
		arrows: false,
	
		dots: true,

	});
	const cardSlider = $('.ba-slide-card');
	cardSlider.slick({
		infinite: true,
		slidesToShow: 3,
        slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		slide: ('.card-slide'),
		prevArrow: ".ba-card-slider-prev",
		nextArrow: ".ba-card-slider-next",
		dots: true,

	});

	

	$(document).ready(function(){
		let map;
		var mapContainer = $('.ba-map')[0];
		var mapCenter = {lat: 40.676285, lng: -73.910390};
 
			map = new google.maps.Map(mapContainer, {
				center: mapCenter,
				zoom: 13,
				disableDefaultUI: true,
				styles: [{
					"elementType": "geometry",
					"stylers": [{
						"color": "#f5f5f5"
					}]
				},
				{
					"elementType": "labels.icon",
					"stylers": [{
						"visibility": "off"
					}]
				},
				{
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#616161"
					}]
				},
				{
					"elementType": "labels.text.stroke",
					"stylers": [{
						"color": "#f5f5f5"
					}]
				},
				{
					"featureType": "administrative.land_parcel",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#bdbdbd"
					}]
				},
				{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [{
						"color": "#eeeeee"
					}]
				},
				{
					"featureType": "poi",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#757575"
					}]
				},
				{
					"featureType": "poi.park",
					"elementType": "geometry",
					"stylers": [{
						"color": "#e5e5e5"
					}]
				},
				{
					"featureType": "poi.park",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#9e9e9e"
					}]
				},
				{
					"featureType": "road",
					"elementType": "geometry",
					"stylers": [{
						"color": "#ffffff"
					}]
				},
				{
					"featureType": "road.arterial",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#757575"
					}]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry",
					"stylers": [{
						"color": "#dadada"
					}]
				},
				{
					"featureType": "road.highway",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#616161"
					}]
				},
				{
					"featureType": "road.local",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#9e9e9e"
					}]
				},
				{
					"featureType": "transit.line",
					"elementType": "geometry",
					"stylers": [{
						"color": "#e5e5e5"
					}]
				},
				{
					"featureType": "transit.station",
					"elementType": "geometry",
					"stylers": [{
						"color": "#eeeeee"
					}]
				},
				{
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [{
						"color": "#c9c9c9"
					}]
				},
				{
					"featureType": "water",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#9e9e9e"
					}]
				}
			]
			});
			
	var marker = new google.maps.Marker({
		position: mapCenter,
		map:map,
		icon: "img/Pin.png",
	});
	});
 
})(jQuery);





