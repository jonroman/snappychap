angular.module('snappyapp').controller('RegisterController', RegisterController);

function RegisterController($http) {
  var vm = this;

  vm.register = function() {
    var user = {
      username: vm.username,
      email: vm.email,
      password: vm.password
    };

    if (!vm.username || !vm.password || !vm.email) {
      vm.error = 'Please add a username, email and a password.';
    } else {
      if (vm.password !== vm.passwordRepeat) {
        vm.error = 'Please make sure the passwords match.';
      } else {
        $http.post('/api/users/register', user).then(function(result) {
          console.log(result);
          vm.message = 'Successful registration, please login.';
          vm.error = '';
        }).catch(function(error) {
          console.log(error);
        });
      }
    }
  }
};