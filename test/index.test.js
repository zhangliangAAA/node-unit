const request = require('supertest');
const {
  init
} = require('../index');

describe('Express-test', function() {
  //Jest提供了四种hooks用来做测试准备和测后清理工作
  let server;
  beforeAll(async function() {
    server = await init()
  }); //在所有测试套件运行之前运行
  afterAll(function() {
    server.close() //!!!重要
  }); //在所有测试套件运行之后运行
  beforeEach(function() {}); //在每个测试用例运行之前运行
  afterEach(function() {}); //在每个测试用例运行之后运行
  describe('GET /', function() {
    it('should responds.code == 200 ', function(done) {
      request(server)
        .get('/')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(200, done)
    });
  });
  describe('GET /getSum/a=3&b=7', function() {
    it('should responds with string "10"', function(done) {
      request(server)
        .get('/getSum?a=3&b=7')
        .expect('Content-Type', /json/)
        .expect(200, {
          sum: '10'
        }, done)
    });
  });
  describe('Post /post', function() {
    it('should responds with string "Hello POST"', function(done) {
      request(server)
        .post('/post')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err)
          if (res.text === 'Hello POST') {
            done()
          } else {
            done('返回值不是：Hello POST')
          }
        })
    });
  });
})