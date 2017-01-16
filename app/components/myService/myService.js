/**
 * Created by Channaka on 24/09/2016.
 */
var myserviceServiceModule = angular.module('myservice', []);

myserviceServiceModule.service('myserviceService', function ($rootScope, $http) {

    var myserviceService = {};

    myserviceService.data = [];

    //Send myservice
    myserviceService.sendMessage = function (message) {
        console.log('sendMessage emitted from myserviceService...' + JSON.stringify(message));


        //$socket.emit('inquirySend', message);

    };

    return myserviceService;

});