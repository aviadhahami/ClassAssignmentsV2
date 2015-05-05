/*
* To change this license header, choose License Headers in Project Properties.
* To change this template file, choose Tools | Templates
* and open the template in the editor.
*/
'use strict';
angular.module('customFilters', []).filter('futureDates', function () {
  return function (items) {
    var filtered = [];
    var date = new Date();
    var tempDate;
    angular.forEach(items, function (item) {
      tempDate = new Date(item.due.getFullYear(),item.due.getMonth()-1,item.due.getDate(),item.due.getHours(),item.due.getMinutes());
      if (item && item.due && date < tempDate ) {
        console.log(item,item.due, date < tempDate);
        // if (item.due.getFullYear() > date.getFullYear()) {
        //   filtered.push(item);
        // } else if (item.due.getFullYear() === date.getFullYear()) { //year is even
        //   if (item.due.getMonth() > date.getMonth() + 1) {
        //     filtered.push(item);
        //   } else if (item.due.getMonth() === date.getMonth() + 1) { //month even
        //     if (item.due.getDate() >= date.getDate()) {
        //       //TODO: implemenet hour check
        //       filtered.push(item);
        //     }
        //   }
        // }
        filtered.push(item);
      } else {
        //console.log('dead item');
        //console.log(item.due, date > item.due);
      }
    });
    return filtered;
  };
}).filter('pastDate', function () {
  return function (items) {
    var filtered = [];
    var date = new Date();
    var tempDate;
    angular.forEach(items, function (item) {
      tempDate = new Date(item.due.getFullYear(),item.due.getMonth()-1,item.due.getDate(),item.due.getHours(),item.due.getMinutes());
      if (item && item.due && date > tempDate ) {
        //   if (item.due.getFullYear() < date.getFullYear()) {
        //     filtered.push(item);
        //   } else if (item.due.getFullYear() === date.getFullYear()) { //year is even
        //     if (item.due.getMonth() < date.getMonth() + 1) {
        //       filtered.push(item);
        //     } else if (item.due.getMonth() === date.getMonth() + 1) { //month even
        //       if (item.due.getDate() < date.getDate()) {
        //         filtered.push(item);
        //       }
        //     }
        //   }
        filtered.push(item);
      } else {
        console.log('dead item');
      }
    });
    return filtered;
  };
});
