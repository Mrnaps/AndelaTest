'use strict'

module.exports = {
   findMinMax: function(list){
      var max = 0;
      var min = 0;
      var result = [];

      min = Math.min.apply(null, list);
      max = Math.max.apply(null, list);
      
      if (min == max){

         result.push(min);
         return result;
      }
      else{
         result.push(min, max);
         return result;
      }
      
   
   },    
} 
