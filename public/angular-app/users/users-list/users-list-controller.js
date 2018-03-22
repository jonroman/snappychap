angular.module('snappyapp').controller('UsersController', UsersController);
function UsersController($scope, $http, uiGridConstants, userDataFactory) {
  var vm = this;
  vm.title = 'Users';
  userDataFactory.userList().then(function(response) {
    vm.gridOptions.data = response.data;
  });

  vm.highlightFilteredHeader = function( row, rowRenderIndex, col, colRenderIndex ) {
    if( col.filters[0].term ){
      return 'header-filtered';
    } else {
      return '';
    }
  };
  
  vm.toggleFiltering = function(){
    vm.gridOptions.enableFiltering = !vm.gridOptions.enableFiltering;
    vm.gridApi.core.notifyDataChange( uiGridConstants.dataChange.COLUMN );
  };

  vm.gridOptions = {
    enableSorting: true,
    enableRowSelection: true,
    enableRowHeaderSelection: false,
    enableFiltering: true,
    selectionRowHeaderWidth: 35,
    rowHeight: 35,
    multiSelect: true,
    enableGridMenu: true,
    onRegisterApi: function( gridApi ) {
      vm.grid2Api = gridApi;
    },
    paginationPageSizes: [5, 10, 25, 50],
    paginationPageSize: 5,
    columnDefs: [
      {
        field: 'username', 
        displayName: 'Username',
        sort: {
          direction: uiGridConstants.DESC,
          priority: 1
        }
      },
      {field: 'name', displayName: 'Name'},
      {field: 'email', displayName: 'Email'},
      {name: 'edit', displayName: 'Edit', cellTemplate: '<button id="editBtn" type="button" class="btn btn-sm btn-primary" ng-click="edit(row.entity)" >Edit</button> '}
    ]    
  };
  

}