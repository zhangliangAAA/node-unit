const {
  addFun
} = require("../src/tools/add")
const assert = require('assert') // node自带的断言库




describe('Add-Function-Jest', function() {
  // 案例1 2 个参数均为数字
  test('1+2 =3', () => {
    expect(addFun(1, 2)).toBe(3);
  });

  // 当第2个参数为String时
  it("should return string '3' ", function() {
    var sum = addFun(1, "2");
    assert.equal((typeof sum), 'string')
    assert.equal(sum, 3);
  });
})