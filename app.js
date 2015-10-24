var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
  '$scope',
  function($scope){
    $scope.posts = [
      {title: 'post 1', upvotes: 5},
      {title: 'post 2', upvotes: 2, link: "https://www.google.com"},
      {title: 'post 3', upvotes: 15},
    ];
    $scope.addPost = function(){
      if(!$scope.title || $scope.title === '') {return; }
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0});
      $scope.title = '';
      $scope.link = '';
    };
    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    };
    $scope.decrementUpvotes = function(post) {
      post.upvotes -= 1;
    };
  }
]);
