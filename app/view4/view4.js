/**
 * Created by UNANAC1 on 12/13/2016.
 */
'use strict';

angular.module('myApp.view4', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view4', {
            templateUrl: 'view4/view4.html',
            controller: 'View4Ctrl'
        });
    }])

    .controller('View4Ctrl', ['$scope',function($scope) {
        $scope.itemsList = {};

    }]);