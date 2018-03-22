angular.module('snappyapp').directive('footerNavigation', footerNavigation);

function footerNavigation() {
  return {
    restrict: 'E',
    templateUrl: 'angular-app/navigation-directive/footer-navigation-directive.html'
  };
}
