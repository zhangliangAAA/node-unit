/** 
 * 只测接口
 * 1、单独启动服务 node index.js
 * 2、执行 node ./node_modules/mocha/bin/_mocha test/http.js
 */
const request = require('request');
const assert = require('assert') // node自带的断言库


describe('http-test', function() {
  //Mocha提供了四种hooks用来做测试准备和测后清理工作
  before(function() {}); //在所有测试套件运行之前运行
  after(function() {}); //在所有测试套件运行之后运行
  beforeEach(function() {}); //在每个测试用例运行之前运行
  afterEach(function() {}); //在每个测试用例运行之后运行

  describe('GET http://localhost:8000/', function() {
    it('should body == Hello World! ', function(done) {
      request('http://localhost:8000', function(error, response, body) {
        assert.equal(!error, true) //接口不报错
        assert.equal(response.statusCode, 200) //接口200
        assert.equal(body, 'Hello World!') //返回值为 Hello World!
        done()
      });
    });
  });
  describe('GET http://localhost:8000/getSum/a=3&b=7', function() {
    it('should responds with string "10"', function(done) {
      request('http://localhost:8000/getSum?a=3&b=7', function(error, response, body) {
        assert.equal(!error, true) //接口不报错
        assert.equal(response.statusCode, 200) //接口200
        const data = JSON.parse(body)
        assert.equal((typeof data.sum), 'string') //body.sum 是string类型
        assert.equal(data.sum, '10') //body.sum 是 '10'
        done()
      });
    });
  });
})