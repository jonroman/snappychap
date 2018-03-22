angular.module('snappyapp').factory('hotelDataFactory', hotelDataFactory);

function hotelDataFactory($http) {
  return {
    hotelList: hotelList,
    hotelDisplay: hotelDisplay,
    postReview: postReview
  };

  function hotelList() {
    return $http.get('/api/hotels?count=10').then(complete).catch(failed);
  }

  function hotelDisplay(id) {
    return $http.get('/api/hotels/' + id).then(complete).catch(failed);
  }

  function postReview(id, review) {

    console.log("id " + id);
    console.log("review == " + review);


    return $http.post('/api/hotels/' + id + '/reviews', review).then(complete).catch(failed);
  }

  function complete(response) {
    console.log("complete with ..");
    return response;
  }

  function failed(error) {
    console.log('failed');
    console.log(error);
  }

}
