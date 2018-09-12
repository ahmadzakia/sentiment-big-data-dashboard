var module = angular.module('myApp',[]);


module.controller('controller1', ['$scope', '$http', function ($scope, $http) {
    $scope.title=''
    $scope.tweets=''
    $scope.pos_tweets=''
    $scope.neu_tweets=''
    $scope.neg_tweets=''
    $scope.status= ''
    $scope.loadData = function(){
        $http({
            method: 'GET',
            url : 'http://localhost:3000/data'// ,
        })
            .success(function (data, status, headers, config) {
                if(data) {
                    $scope.tweets= data;

                } else {

                }
            })
            .error(function (data, status, headers, control) {
                console.log(status);
            });
    };
    $scope.loadPos = function(){
        $http({
            method: 'GET',
            url : 'http://localhost:3000/pos_tweets'// ,
        })
            .success(function (data, status, headers, config) {
                if(data) {
                    $scope.pos_tweets= data;
                } else {

                }
            })
            .error(function (data, status, headers, control) {
                console.log(status);
            });
    };
    $scope.loadNeg = function(){
        $http({
            method: 'GET',
            url : 'http://localhost:3000/neg_tweets'// ,
        })
            .success(function (data, status, headers, config) {
                if(data) {
                    $scope.neg_tweets= data;
                } else {

                }
            })
            .error(function (data, status, headers, control) {
                console.log(status);
            });
    };
    $scope.loadNeu = function(){
        $http({
            method: 'GET',
            url : 'http://localhost:3000/neu_tweets'// ,
        })
            .success(function (data, status, headers, config) {
                if(data) {
                    $scope.status= data;
                } else {

                }
            })
            .error(function (data, status, headers, control) {
                console.log(status);
            });
    };

    $scope.status = '';
    $scope.loadStatus = function(){
        $http({
            method: 'GET',
            url : 'http://localhost:3000/status'// ,
        })
            .success(function (data, status, headers, config) {
                if(data) {
                    $scope.status= data;
                } else {

                }
            })
            .error(function (data, status, headers, control) {
                console.log(status);
            });
    };
    // $scope.loadData();
    // $scope.loadNeg();
    // $scope.loadNeu();
    // $scope.loadPos();
    $scope.loadStatus();
    // $scope.total_neu = $scope.neu_tweets.length;
    // $scope.total_neg = $scope.neg_tweets.length;
    // $scope.total_pos = $scope.pos_tweets.length;

//    $scope.
}]);