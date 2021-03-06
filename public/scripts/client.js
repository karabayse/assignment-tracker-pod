console.log('in the client');
// bringing angular to the party
var myApp = angular.module('myApp', []);
// set up a controller
myApp.controller('AssignmentInputs', function($http) {
  //variable global to this controller
  var vm = this;
  vm.assignmentArray = [];

  vm.postAssignments = function() {
    console.log('in postAssignments ng-click');
    var objectToSend = {
      assignment: vm.assignName,
      student: vm.studentName,
      score: vm.score,
      date: vm.dateComp,
    };//end objectToSend
    console.log('adding objectToSend ->', objectToSend);

    // angular post call
    $http({
      method: 'POST',
      url: '/assignments',
      data: objectToSend
    }).then(function(response) {
      console.log('back from server ->', response);
      vm.getAssignments();
    });
  };

vm.getAssignments = function(){
  console.log('in getAssignments ->');
  $http({
    method: 'GET',
    url: '/assignments',
  }).then(function success(response){
    console.log('this is the response', response);
    vm.assignmentArray = response.data;
    console.log('in vm response ->',response.data);
    console.log(vm.assignmentArray);
  });//success
};
}); //end controller
