var module = angular.module('myApp',[]);

var count_sentiment_pos = 0;
var count_sentiment_neg = 0;
var count_sentiment_neu = 0;

var count_spreading_pos = 0;
var count_spreading_neg = 0;
var count_spreading_neu = 0;

module.controller('controller1', ['$scope', '$http', function ($scope, $http) {
    $scope.title=''
    $scope.tweets=''
    $scope.pos_tweets=''
    $scope.neu_tweets=''
    $scope.neg_tweets=''
    $scope.status= ''
    $scope.pos_counter=0;

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
                    console.log(data.length);
                    var i;
                    for(i=0; i<data.length;i++){
                        if(data[i].attribut=='counter_pos'){
                            count_sentiment_pos = data[i].value;
                            console.log(count_sentiment_pos);
                        }if(data[i].attribut=='counter_neu'){
                            count_sentiment_neu= data[i].value;
                            console.log(count_sentiment_neu);
                        }if(data[i].attribut=='counter_neg'){
                            count_sentiment_neg = data[i].value;
                            console.log(count_sentiment_neg);
                        }

                        if(data[i].attribut=='follower_neg'){
                            count_spreading_neg = data[i].value;
                            console.log(count_spreading_neg);
                        }

                        if(data[i].attribut=='follower_neu'){
                            count_spreading_neu = data[i].value;
                            console.log(count_spreading_neu);
                        }

                        if(data[i].attribut=='follower_pos'){
                            count_spreading_pos= data[i].value;
                            console.log(count_spreading_pos);
                        }
                    }
                } else {

                }
            })
            .error(function (data, status, headers, control) {
                console.log(status);
            });
    };

    $scope.toptens = '';
    $scope.loadTopTens = function(){
        $http({
            method: 'GET',
            url : 'http://localhost:3000/topten'// ,
        })
            .success(function (data, status, headers, config) {
                if(data) {
                    $scope.toptens= data;
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
    $scope.loadTopTens();
    // $scope.total_neu = $scope.neu_tweets.length;
    // $scope.total_neg = $scope.neg_tweets.length;
    // $scope.total_pos = $scope.pos_tweets.length;

//    $scope.
}]);