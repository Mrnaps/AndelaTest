// testing code goes here

var myApp = require('../app/library.js');
(function() {
  'use strict';

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(myApp.findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [1,4] for [5, 6, 7 , 8]', function () {
        expect(myApp.findMinMax([5, 6, 7, 8])).toEqual([5, 8]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(myApp.findMinMax([6, 4])).toEqual([4, 6]);
      });
      it('should return [1,4] for [9, 3]', function () {
        expect(myApp.findMinMax([9, 3])).toEqual([3, 9]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(myApp.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

      it('should return [2, 78] for [11, 22, 33, 44, 55, 55, 66, 77, 88]', function () {
        expect(myApp.findMinMax([11, 22, 33, 44, 55, 55, 66, 77, 88])).toEqual([11, 88]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(myApp.findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

      it('should return [4] for [5, 5, 5, 5]', function () {
      	expect(myApp.findMinMax([5, 5, 5, 5])).toEqual([5]);
      });

      it('should return [4] for [2, 2, 2, 2]', function () {
      	expect(myApp.findMinMax([2, 2, 2, 2])).toEqual([2]);
      });
      it('should return [4] for [10, 10, 10, 10]', function () {
      	expect(myApp.findMinMax([10, 10, 10, 10])).toEqual([10]);
      });
	});

  });

})();



