angular.module("app").controller("gradesCtrl", function($scope, mainSvc){



$scope.getGrades = () => {
 mainSvc.getGrades().then((res) => {
   $scope.grades = res
   console.log(res)
 })
}
 $scope.postGrades = (grades) => {
   mainSvc.postGrades(grades).then(function(res){
     console.log(res)
     $scope.grades.push(res.data[0])


   })

 }

  $scope.getGrades()
  $scope.postGrades()

});