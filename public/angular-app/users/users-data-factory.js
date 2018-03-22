angular.module('snappyapp').factory('userDataFactory', userDataFactory);

function userDataFactory($http) {
  return {
    userList: userList,
    userDisplay: userDisplay
  };

  function userList() {
    return $http.get('/api/users').then(complete).catch(failed);
  }

  function userDisplay(id) {
    return $http.get('/api/users/' + id).then(complete).catch(failed);
  }

  function complete(response) {
    return response;
  }

  function failed(error) {
    console.log(error);
  }
}
