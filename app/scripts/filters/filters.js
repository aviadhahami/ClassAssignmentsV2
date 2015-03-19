/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
angular.module('customFilters', []).filter('futureDates', function () {
    return function (items) {
        var filtered = [];
        angular.forEach(items, function (item) {
            var date = new Date();
             if (item.due.getFullYear() > date.getFullYear()) {
                filtered.push(item);
            } else if (item.due.getFullYear() === date.getFullYear()) { //year is even
                if (item.due.getMonth() > date.getMonth()+1) {
                    filtered.push(item);
                } else if (item.due.getMonth() === date.getMonth()+1) { //month even
                    if (item.due.getDate() > date.getDate()) {
                        filtered.push(item);
                    }
                }
            }
        });
        return filtered;
    };
}).filter('pastDate', function () {
    return function (items) {
        var filtered = [];
        angular.forEach(items, function (item) {
            var date = new Date();
            if (item.due.getFullYear() < date.getFullYear()) {
                filtered.push(item);
            } else if (item.due.getFullYear() === date.getFullYear()) { //year is even
                if (item.due.getMonth() < date.getMonth()+1) {
                    filtered.push(item);
                } else if (item.due.getMonth() === date.getMonth()+1) { //month even
                    if (item.due.getDate() < date.getDate()) {
                        filtered.push(item);
                    }
                }
            }
        });
        return filtered;
    };
});