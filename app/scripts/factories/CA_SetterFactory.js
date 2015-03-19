
'use strict';

angular.module('customFactories',[]).factory('setClassContentFactory',function ($http){
    return {
        setContent:function(data){
           // Simple GET request example :
            var fullPath = 'server/ClassAssignmentsSetter.php?';
            //json demo : {"path":"data/idc/","fname":"cs16"}
            var path = 'data/idc/';
            var fname= 'cs16';
            fullPath += 'path=' +path + '&fname='+ fname + '&data=' +JSON.stringify(data);
            //TODO: implement this via POST method
            return $http.get(fullPath);
        }  
    };
}).factory('getClassContentFactory',function ($http){
    return {
        getContent:function(path, fname){

            // Simple GET request example :
            var fullPath = 'server/ClassAssignmentsGetter.php?';
            //json demo : {"path":"data/idc/","fname":"cs16"}
            path = 'data/idc/';
            fname= 'cs16';
            fullPath += 'path=' +path + '&fname='+ fname;
            return $http.get(fullPath);
        }  
    };
});