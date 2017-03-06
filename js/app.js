angular.module('ToDo', []).
controller('todoController',['$scope',function($scope){
  $scope.todos = [];

  $scope.addTodo = function(){
    $scope.todos.push({
		'title':$scope.newTodo,'done':false,
		'date':$scope.newDate,'done':false
	})
    $scope.newTodo = '',
	$scope.newDate = ''
  }

  $scope.editTodo = function() {
	var id = $scope.id;
	var record = $scope.todos.$getRecord(id);
	record.title = $scope.title;
	record.data = $scope.date;

	//save
	$scope.todos.$save(record).then(function(ref) {
		var id = ref.key();
	});
  }

//  $scope.removeTodo = function(todo){
//	$scope.todos.$remove(todo);
//  }
  $scope.clearCompleted = function(){
    $scope.todos = $scope.todos.filter(function(item){
    	return !item.done
    })
  }

  //Local Storage
  var todoList = {
	title: title,
	date: date
  }
  if(localStorage,getItem('todoList') === null {
	var todoList = [];
	todoList.push(todoList);
	localStorage.setItem('todoLIst', JSON.stringify(todoList));
    }  else {
        var todoList = JSON.parse(localStorage.getItem('todoList'));
        todoList.push(todoList);
        localStorage.setItem('todoLIst', JSON.stringify(todoList));
}
}]);


//-edit text - ng-bind?? ng-model
//add, delete, edit - 3 option push
//-local storage
//-competed, 2 ng-repeat with filter true/false
// load stored app data at start of app
