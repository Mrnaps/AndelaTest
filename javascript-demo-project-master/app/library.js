'use strict'

module.exports = {
   computeAverage: function(num1,num2,num3) {
      var average = 0;
      average = ((num1+num2+num3)/3);
      return average;
   },
 
   computeFactorial: function(num) {
      var factorial = num;
      for(var i=1; i<num; i++){
   	factorial = factorial*i;
      }
      return factorial; 
   },

   convertTempCtoF: function(cTemp) {
      var fTemp = 0;
      fTemp = ((cTemp*9)/5) + 32;
      return fTemp; 
   },

   convertTempFtoC: function(fTemp) {
      var cTemp = 0;
      cTemp = (5/9)*(fTemp-32);
      return cTemp; 
   },

  
} 
