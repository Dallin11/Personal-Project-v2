angular.module("app").controller("gradesCtrl", function($scope, mainSvc){



$scope.getGrades = () => {
 mainSvc.getGrades().then((res) => {
   $scope.grades = res
   console.log(res)
 })
}
 $scope.postGrades = (grades) => {
   mainSvc.postGrades(grades).then(response => {
     const {
       name,
       grade
     } = response.data[0]

     $scope.grades.push({
       name: name,
       grade: grade
     })
  
   })

 }

  $scope.getGrades()


});