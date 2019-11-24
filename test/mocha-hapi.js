const request = require('supertest');
const { init } = require('../src/hapi');
const assert = require('assert') // node自带的断言库
const should = require('should')

describe('Mocha-hapi-test', function(){
  let server;
  //Mocha提供了四种hooks用来做测试准备和测后清理工作
  before(async function() {
    server = await init();
  }); //在所有测试套件运行之前运行
  after(async function() { 
    await server.stop();  //!!!重要
  }); //在所有测试套件运行之后运行
  beforeEach(function() {}); //在每个测试用例运行之前运行
  afterEach(function() {}); //在每个测试用例运行之后运行
  describe('GET /', function() {
    it('should es.statusCode == 200 && res.result = Hello World', async function() {
      const res = await server.inject({
        method: 'get',
        url: '/'
      });
      assert.equal(res.statusCode, 200);
      should(res.result).equal('Hello World')
    });
  });

})
