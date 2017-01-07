// testing code goes here

'use strict'

var chai = require('chai');
var expect = chai.expect;

var myApp = require('../app/library.js');

describe("Test for proper arithmetic functionality", function() {
  it("should return 2 as average for 1, 2, 3", function() {
    expect(myApp.computeAverage(1,2,3)).to.equal(2);
  })
  it("should return 5 as average for 3, 7, 5", function() {
    expect(myApp.computeAverage(3, 7, 5)).to.equal(5);
  })
  it("should return 120 as factorial for 5", function() {
    expect(myApp.computeFactorial(5)).to.equal(120);
  })
})


describe("Test for temperature conversion functionality", function() {
  it("should return X for Celcius value Y", function() {
    expect(myApp.convertTempCtoF(40) == 104);
  })
  it("should return X for Celcius value Y", function() {
    expect(myApp.convertTempCtoF(60) == 140);
  })
  it("should return Y for Fahrenheit value X", function() {
    expect(myApp.convertTempFtoC(140) == 60);
  })
  it("should return Y for Fahrenheit value X", function() {
    expect(myApp.convertTempFtoC(104) == 40);
  })
})


