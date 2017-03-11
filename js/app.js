//.run( ($rootScope, metaData) => {
//    // We'll inject our constant 'metaData' into the rootScope so that is accessible
//    // in our index.html
//    $rootScope.metaData = metaData
//
//    // We will test the support for localStorage once at startup and then cache the
//    // result for later use by our service component.
//    try {
//        localStorage.setItem("testKey", "this is the value to be saved")
//        localStorage.removeItem("testKey")
//        $rootScope.haslocalStorageSupport = true
//    }
//    catch(error){
//        $rootScope.haslocalStorageSupport = false
//    }
//
//  } )

angular.module('ToDo', []).
controller('todoController',['$scope',function($scope){
  $scope.todos = [];
	
//	Local Storage
//  var todoList = {
//	title: title,
//	date: date
//  }
//  if(localStorage.getItem('todoList') === null {
//	var todoList = [];
//	todoList.push(todoList);
//	localStorage.setItem('todoLIst', JSON.stringify(todoList));
//    }  else {
//        var todoList = JSON.parse(localStorage.getItem('todoList'));
//        todoList.push(todoList);
//        localStorage.setItem('todoLIst', JSON.stringify(todoList));
//}

//	Add To Do
  $scope.addTodo = function(){
    $scope.todos.push({
		'title':$scope.newTodo,'done':false,
		'date':$scope.newDate
	})
    $scope.newTodo = '',
	$scope.newDate = ''
//	$scope.newTodo.id = cuid()
//	$scope.todoList.push($scope.newTodo)
//	$scope.syncLocalStorage()
  }

//  Edit To Do
  $scope.editTodo = function() {
	var id = $scope.id;
	var record = $scope.todos.$getRecord(id);
	record.title = $scope.title;
	record.data = $scope.date;

	//save
	$scope.todos.$save(record).then(function(ref) {
		var id = ref.key();
	});
//	$scope.syncLocalStorage()
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
//	$scope.syncLocalStorage()
  }
  
}]);





//-edit text - ng-bind?? ng-model
//add, delete, edit - 3 option push
//-local storage
//-competed, 2 ng-repeat with filter true/false
// load stored app data at start of app
