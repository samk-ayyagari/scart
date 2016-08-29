'use strict';

/**
 * @ngdoc function
 * @name shoppingCartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shoppingCartApp
 */
angular.module('shoppingCartApp')
  .controller('MainCtrl', function ($scope, $http, $q, ngDialog, ProductService) {
   	var vm = this;
    vm.appHeading = 'YOUR SHOPPING BAG';

    var productsList = ProductService.getProducts();

    productsList.then(function setProducts(products){
    	vm.products = products;
    }, function(){
    	console.log("Couldn't fetch products");
    });

    vm.editProduct = function editProduct(index){
    	ngDialog.open({
            template: 'views/editItem.html',
            controller: 'EditProductCtrl',
            controllerAs: 'ep',
            resolve: {
		        data: function depFactory() {
		        	var dataObj = {};
		        	dataObj.list = vm.products;
		        	dataObj.index = index; 
		            return dataObj;
		        }
    		}
        });
    };
    
    

  });
