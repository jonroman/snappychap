angular.module('snappyapp').controller('HotelController', HotelController);

function HotelController($route, $routeParams, $window, hotelDataFactory, AuthFactory, jwtHelper) {
  var vm = this;
  var id = $routeParams.id;
  vm.isSubmitted = false;
  hotelDataFactory.hotelDisplay(id).then(function(response) {
    vm.hotel = response.data;
    vm.stars = _getStarRating(response.data.stars);
  });

  function _getStarRating(stars) {
    return new Array(stars);
  }

  vm.isLoggedIn = function() {
    if (AuthFactory.isLoggedIn) {
      return true;
    } else {
      return false;
    }
  };

  vm.addReview = function() {

    var token = jwtHelper.decodeToken($window.sessionStorage.token);
    var username = token.username;

    var postData = {
      name: username,
      rating: vm.rating,
      review: vm.review
    };
    if (vm.reviewForm.$valid) {
      console.log("id ===== " + id);
      console.log("postData " + JSON.stringify(postData));
      hotelDataFactory.postReview(id, JSON.stringify(postData)).then(function(response) {
        console.log("The response is " + response);
        if (response.status === 200) {
          $route.reload();
        }
      }).catch(function(error) {
        console.log(error);
      });
    } else {
      vm.isSubmitted = true;
    }
  };

}
