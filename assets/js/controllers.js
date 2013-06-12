'use strict';

/* Controllers */

function CarouselCtrl($scope) {
	$scope.myInterval = 5000;
	$scope.indexSlides = [
		{image: 'AW_gallery/Screenshot.png'},
		{image: 'AW_gallery/Screenshot2.png'},
		{image: 'AW_gallery/Screenshot3.png'},
		{image: 'AW_gallery/Screenshot4.png'},
		{image: 'AW_gallery/Screenshot5.png'},
		{image: 'AW_gallery/Screenshot6.png'}
	];
}
