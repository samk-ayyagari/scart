'use strict';

/**
 * @ngdoc function
 * @name shoppingCartApp.controller:ProductService
 * @description
 * # ProductService
 * Factory of the shoppingCartApp
 */
angular.module('shoppingCartApp')
  .factory('ProductService', function ($http, $q) {
   var products, result =0, discoutAmt, totalItems = 0, discountValue;

   function _getProducts(){
        var deferred = $q.defer();
        if(!products){
            $http({method:'GET', url:'scripts/cart.json'}).then(function successCallback(response){
                products = response.data.productsInCart;
                _calculateTotal();
                _applyDiscount();
                _finalAmount();
                deferred.resolve(products);
            }, function errorCallback(response){
                deferred.reject(response);
            });
        } else{
            _calculateTotal();
            _applyDiscount();
            _finalAmount();
            deferred.resolve(products);
        }
        
        return deferred.promise;
   }

   function _setProducts(products){
        products = products;
   }

   function _calculateTotal() {
        products.forEach(function(value, key){
            console.log(products[key].p_price);
            products[key].p_price = products[key].p_price * products[key].p_quantity;
            result += products[key].p_price ;
            totalItems += products[key].p_quantity;
        });
        products.subtotal = result;
        return result;
   }

   function _applyDiscount(){
        if(totalItems && result){
            if(totalItems >= 3){
                discoutAmt = 5;
            } else if (totalItems > 3 && totalItems <=6){
                discoutAmt = 10;
            } else if (totalItems >=10){
                discoutAmt = 25;
            } else {
                discoutAmt = 1;
            }
            discountValue = result * discoutAmt / 100;
        }
        products.discountValue = discountValue;
   }

   function _finalAmount(){
        if(result && discountValue){
            products.finalAmount = result - discountValue;
        }
   }

   return {
        getProducts:_getProducts,
        setProducts:_setProducts,
        calculateTotal:_calculateTotal,
        applyDiscount:_applyDiscount
   };

  });
