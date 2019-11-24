const request = require('supertest');
const server = require('../src/hapi');

// let server = null;

// async function initserver(){
//   server = await init()
//   console.log('server-Created');
// }
// initserver()

console.log('-----',typeof server);

describe('Hapi-test', function(){
  //Mocha提供了四种hooks用来做测试准备和测后清理工作
  before(function() {}); //在所有测试套件运行之前运行
  after(function() { 
    server.stop()  //!!!重要
  }); //在所有测试套件运行之后运行
  beforeEach(function() {}); //在每个测试用例运行之前运行
  afterEach(function() {}); //在每个测试用例运行之后运行
  describe('GET /', function() {
    console.log('describe',typeof server);
    
    it('should responds with string "Hello World"', function(done) {
      request(server)
        .get('/')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(200)
        .end(function(err, res){
          if(err) return done(err)
          if(res.text === 'Hello World'){
            done()
          }else {
            done('返回值不是：Hello World')
          }
        })
    });
  });
})
