angular
	.module('ToDo', 'ui.bootstrap.modal', ['ui.bootstrap.modal', 'ui.bootstrap.multiMap', 'ui.bootstrap.stackedMap', 'ui.bootstrap.position'])
	.run( ($rootScope) => {
		// We will test the support for localStorage once at startup and then cache the
		// result for later use by our service component.
		try {
			localStorage.setItem("testKey", "this is the value to be saved")
			localStorage.removeItem("testKey")
			$rootScope.haslocalStorage = true
		}
		catch(error){
			$rootScope.haslocalStorage = false
		}
  	} )
	.controller('todoController',['$scope', '$rootScope', function($scope, $rootScope){
  
	$scope.getDefaultTodo = function() {
			return {id: cuid(), title: '', date: '', done: false}
		}

		
		$scope.newTodo = $scope.getDefaultTodo()
		
		if ($rootScope.haslocalStorage) {
			conts storedList = JSON.parse(localStorage.getItem('todoList'))
			$scope.todos = Array.isArray(storedList) ? storedList : []
		}
		else {
			$scope.todos = []
		}
		
	$scope.syncLocalStorage = function () {
		if ($rootScope.haslocalStorage) {
		localStorage.setItem('todoList', JSON.stringify($scope.todos))
		}
	}

//	Add To Do
  $scope.addTodo = function() {
	$scope.newTodo.id = cuid()
    $scope.todos.push($scope.newTodo)
	//reset newToso object with a default empty object
    $scope.newTodo = $scope.getDefaultTodo()
	$scope.syncLocalStorage()
  }

//  Edit To Do
  $scope.populateEditForm = function(todo) {
	$scope.editingTodo = todo
	
	$scope.syncLocalStorage()
  }

//  $scope.removeTodo = function(todo){
//	$scope.todos.$remove(todo);
//	$scope.syncLocalStorage()
//  }
  
//  Completed
  $scope.clearCompleted = function(){
    $scope.todos = $scope.todos.filter(function(item){
    	return !item.done
    })
	$scope.syncLocalStorage()
  }
  
}]);





//-edit text - ng-bind?? ng-model
//add, delete, edit - 3 option push
//-local storage
//-competed, 2 ng-repeat with filter true/false
// load stored app data at start of app
