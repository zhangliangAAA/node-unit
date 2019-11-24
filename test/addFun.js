const {
  addFun
} = require("../src/tools/add")
const assert = require('assert') // node自带的断言库


describe('Add-Function-test', function(){
  // 案例1 2 个参数均为数字
  it("should return number 3", function() {
    const sum = addFun(1, 2)
    assert.equal(sum, 3)
  })
  
  // 当第2个参数为String时
  it("should return string '3' ", function() {
    var sum = addFun(1, "2");
    assert.equal((typeof sum),'string')
    assert.equal(sum, 3);

  });
  
  // 当只有1个参数时
  it("should return undefined", function() {
    var sum = addFun(1);
    assert.equal(sum, undefined);
  });
})
