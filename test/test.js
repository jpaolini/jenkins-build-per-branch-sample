var request = require('supertest');
var app = require('../app.js');

describe('GET / ', function(){
	it('respond with hello jenkins', function(done){
		request(app).get('/')
			.expect('hello world', done);
	});
});

describe('GET /test', function(){
	it('respond with test', function(done){
		request(app).get('/test')
			.expect('test', done);
	});
});