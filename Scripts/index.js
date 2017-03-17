'use strict';

var myApp = angular.module('myApp',[ 'ngRoute' ]);

myApp.config(function($routeProvider) {
    $routeProvider

        .when('/',{
            templateUrl: 'templates/homePage.html',
            controller: 'empCtrl'
        })

        .when('/empList', {
            templateUrl: 'templates/EmployeeList.html',
            controller: 'empCtrl'
        })

        .when('/form',{
            templateUrl: 'templates/Form.html',
            controller: 'formCtrl'
        });
});

myApp.factory('dataService', function($http, $q) {
    return {
        getEmployee: function () {
            var deferred = $q.defer();
            $http.get('employee.json').then(function (response) {
                deferred.resolve(response.data);
            });
            return deferred.promise;
        },
        data:[],

        flagSave:true,
        flagUpdate: true,
        index: 0
    }
});

