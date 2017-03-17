
myApp.controller('formCtrl', function ($scope, dataService, $location) {

    var index = dataService.index;
    index--;
    $scope.savebtn = dataService.flagSave;
    $scope.updatebtn = dataService.flagUpdate;
    //console.log("save: " + $scope.savebtn + "update: " + $scope.updatebtn);

    if(index >= 0 ) {
        $scope.newid = dataService.data[index].id;
        $scope.newfirstname = dataService.data[index].firstname;
        $scope.newmiddlename = dataService.data[index].middlename;
        $scope.newlastname = dataService.data[index].lastname;
        $scope.newbirthdate = dataService.data[index].birthdate;
        $scope.newage = parseInt(dataService.data[index].age);
    }

    // push data to the json object on clicking Add button
    $scope.addData = function () {
        dataService.data.push({
            'id': $scope.newid,
            'firstname': $scope.newfirstname,
            'middlename': $scope.newmiddlename,
            'lastname': $scope.newlastname,
            'birthdate': $scope.newbirthdate,
            'age': $scope.newage
        });
        dataService.index=0;
        //console.log(dataService.data);
        $location.path('/empList');
    };

    // edit data
    $scope.updateData = function(){
        var i = dataService.index - 1;
        //console.log(i);
        //console.log(dataService.data[i]);
        dataService.data[i].id = $scope.newid;
        dataService.data[i].firstname=$scope.newfirstname;
        dataService.data[i].middlename=$scope.newmiddlename;
        dataService.data[i].lastname=$scope.newlastname;
        dataService.data[i].birthdate=$scope.newbirthdate;
        dataService.data[i].age=$scope.newage;

        dataService.index = 0;
        $location.path('/empList');
    };

    $scope.test = function (x) {
        if(dataService.index==0) {
            $scope.addData();
        }
        else {
            $scope.updateData();
        }
    };
});