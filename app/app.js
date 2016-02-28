var app = angular.module('app', []);

// it always takes in scope and can take in dependencies
app.controller('MainController', ['$scope', function($scope){
    $scope.todos = [];

    $scope.addTodo = function(todo) {
    	$scope.todos.push(todo);
      // clear ng-model value
      $scope.todo = '';
    };
}]);

//Add ng-model to the input tag and name a scope variable as a value

//Give the value of ng-model to the addTodo() function in button tag as an argument.
