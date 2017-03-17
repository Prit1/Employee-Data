myApp.controller('empCtrl', function($scope, dataService, $location){

    if(dataService.data.length===0) {
        dataService.getEmployee().then(function (data) {
            dataService.data = data;
            for(i=0; i < dataService.data.length; i++) {
                dataService.data[i].age = $scope.calculateAge(dataService.data[i].birthdate);
            }
            $scope.result = dataService.data;
        });
    }
    else {
        $scope.result = dataService.data;
        //console.log("else"+$scope.result);
    }
    //console.log("dataservice" + dataService.data);
    $scope.addNew = function () {
        dataService.flagSave = true;
        dataService.flagUpdate = false;
        $location.path('/form');
    };

    $scope.editData = function(id){
        dataService.flagUpdate = true;
        dataService.flagSave = false;
        dataService.index = id;
        $location.path('/form');
    };

    $scope.deleteData = function (id) {
        var index=$scope.result.indexOf(id);
        $scope.result.splice(index,1);
    };

    $scope.orderByMe = function(x) {
        $scope.sortByOrder = x;

    };
    $scope.calculateAge = function calculateAge(birthdate) { // birthday is a date
        var birthday = new Date(birthdate);
        var today = new Date();
        var age = ((today - birthday) / (31557600000));
        var age = Math.floor( age );
        return age;
    }
});





