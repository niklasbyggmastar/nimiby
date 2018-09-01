$(function(){
  $('#myNavbar').localScroll({duration:800});
  $('#headerNav').localScroll({duration:800});
  $('#welcomeContent').fadeIn(2500);

  $('nav a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
  });
  setTimeout(function(){
    $("#loading").fadeOut(700);
  },1000);
  setTimeout(function(){
    $(".container-fluid").fadeIn(3000);
  },1700);
});

var app = angular.module('app', []);

app.controller("ctrl", function($scope){
  $scope.app_title = "";
  $scope.app_description = "";
  $scope.app_img = "";
  $scope.app_link = "";
  $scope.open_app_text = "";

  $scope.setData = function(title, desc, img, link, opentxt){
    $scope.app_title = title;
    $scope.app_description = desc;
    $scope.app_img = img;
    $scope.app_link = link;
    $scope.open_app_text = opentxt;
  }

});
