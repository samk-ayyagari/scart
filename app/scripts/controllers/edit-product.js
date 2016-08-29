'use strict';

/**
 * @ngdoc function
 * @name shoppingCartApp.controller:EditProductCtrl
 * @description
 * # EditProductCtrl
 * Controller of the shoppingCartApp
 */
angular.module('shoppingCartApp')
  .controller('EditProductCtrl', function ($scope, $route, $timeout, data, ProductService) {
  	console.log(data);
  	var vm = this;
  	$scope.item = data.list[data.index];

  	vm.availableQty = [{name:'1', value:1 }, {name:'2', value:2 }, {name:'3', value:3 },{name:'4', value:4 }];

  	

  	$scope.getBGColor = function(color){
  		var bgObj = {};
  		bgObj['background-color'] = color;
  		return bgObj;
  	};

  	vm.setColor = function(color){
  		vm.selectedColor=color;
  	};

  	vm.editItem = function(){
  		data.list[data.index].p_selected_color = vm.selectedColor ? vm.selectedColor : data.list[data.index].p_selected_color;
  		data.list[data.index].p_selected_size = vm.selectedSize ? vm.selectedSize : data.list[data.index].p_selected_size;
  		data.list[data.index].p_quantity = vm.selectedQty ? vm.selectedQty : data.list[data.index].p_quantity;
  		ProductService.setProducts(data);
  		$timeout(function(){
  			$scope.closeThisDialog();
  			$route.reload();
  		}, 100);
  		
  	};

  	

  });