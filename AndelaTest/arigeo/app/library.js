'use strict'

module.exports = {
   aritGeo: function(arr){
      var check_1 = arr[1] - arr[0];
      var check_2 = arr[2] - arr[1];
      var check_3 = arr[1] / arr[0];
      var check_4 = arr[2] / arr[1];

      if (arr.length === 0){
         return 0;
      }

      else if (check_2 === check_1){
         return ('Arithmetic');
      }

      else if (check_4 === check_3){
         return ('Geometric');
      }

      else {
         return -1;
      }
   },
} 
