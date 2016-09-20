/**
 * Created by UNANAC1 on 9/20/2016.
 */
'use strict';

angular.module('myApp.view3', ['ngRoute', 'ngMaterial'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view3', {
            templateUrl: 'view3/view3.html',
            controller: 'View3Ctrl'
        });
    }])

    .controller('View3Ctrl', ['$scope', '$mdDialog', function ($scope, $mdDialog) {

        var alert;
        $scope.showAlert = showAlert;
        $scope.showDialog = showDialog;
        $scope.showFormDialog = showFormDialog;
        $scope.items = [1, 2, 3];
        $scope.data = [];

        $scope.data['alt'] = [4, 5, 6];

        // Internal method
        /*$scope.showAlert =*/
        function showAlert() {
            alert = $mdDialog.alert({
                title: 'Attention',
                textContent: 'This is an example of how easy dialogs can be!',
                ok: 'Close'
            });

            $mdDialog
                .show(alert)
                .finally(function () {
                    alert = undefined;
                });
        }

        /*$scope.showDialog =*/
        function showDialog($event) {
            var parentEl = angular.element(document.body);
            $mdDialog.show({
                parent: parentEl,
                targetEvent: $event,
                template: '<md-dialog aria-label="List dialog">' +
                '  <md-dialog-content>' +
                '    <md-list>' +
                '      <md-list-item ng-repeat="item in items">' +
                '       <p>Number {{item}}</p>' +
                '      ' +
                '    </md-list-item></md-list>' +
                '  </md-dialog-content>' +
                '  <md-dialog-actions>' +
                '    <md-button ng-click="closeDialog()" class="md-primary">' +
                '      Close Dialog' +
                '    </md-button>' +
                '  </md-dialog-actions>' +
                '</md-dialog>',
                locals: {
                    items: $scope.items
                },
                controller: DialogController
            });
            function DialogController($scope, $mdDialog, items) {
                $scope.items = items;
                $scope.closeDialog = function () {
                    $mdDialog.hide();
                }
            }
        }

        function showFormDialog($event) {
            var parentEl = angular.element(document.body);
            $mdDialog.show({
                parent: parentEl,
                targetEvent: $event,
                templateUrl: 'view3/dialogTemplate.html',
                locals: {
                    items: $scope.items,
                    alt: $scope.data['alt']
                },
                controller: 'formController as frmCtrl'
            });
        }

    }])
    .controller('formController', ['$scope', '$mdDialog', function ($scope, $mdDialog, items, alt) {
        var vm = this;
        vm.data = {
            id: 0,
            name: 'xxx'
        };
        $scope.items = items;
        $scope.alt = alt;

        vm.closeDialog = function () {
            $mdDialog.hide();
            console.log("Dialog Closed");
        };
        vm.submitDialog = function () {
            console.log("Dialog Submitted : " + vm.data.name);
        };

        vm.save = function () {
            console.log('Save triggered : ' + vm.data.name);
        };

        return vm;

    }]);