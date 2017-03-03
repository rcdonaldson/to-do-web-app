angular.module('ToDo', []).
controller('todoController',['$scope',function($scope){
  $scope.todos = [];

  $scope.addTodo = function(){
    $scope.todos.push({'title':$scope.newTodo,'done':false})
    $scope.newTodo = ''
  }
  $scope.editTodo = function() {
  
  }
  $scope.clearCompleted = function(){
    $scope.todos = $scope.todos.filter(function(item){
      return !item.done
    })
  }
}])

$('#datetimepicker').data("DateTimePicker").FUNCTION()
//$(function () {
//	$('#datetimepicker').datetimepicker();
//});



//-edit text - ng-bind?? ng-model
//add, delete, edit - 3 option push
//-date picker
//-local storage 
//-competed, 2 ng-repeat with filter true/false
// load stored app data at start of app