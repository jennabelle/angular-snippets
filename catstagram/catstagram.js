var app = angular.module('catstagram', []);

app.controller('CatController', ['$scope', 'catFactory', function($scope, catFactory){

    $scope.cats = catFactory.getCats();
	$scope.like = function(index) {
		$scope.cats[index].likes ++;
	}


    $scope.addCat = function(newCat) {
        $scope.cats.push(newCat);
        catFactory.setCats($scope.cats);

    }

}]);

app.factory('catFactory', [function(){
    var cats = [
		{
			"title": "Synchronized waking up",
			"url": "http://i.imgur.com/39yXnyh.gif",
			"likes": 305
		},
		{
			"title": "From under the sofa",
			"url": "http://i.imgur.com/Bz0AsI6.gif",
			"likes": 185
		},
		{
			"title": "What I have to deal with on a daily basis",
			"url": "http://i.imgur.com/MCmdIbF.gif",
			"likes": 65
		}
	];
    var getCats = function() {
        return cats;
    };

    var setCats = function(newCats) {
        cats = newCats;
    };

    return {
        getCats: getCats,
        setCats: setCats
    }
}]);
