/* global describe it before */
/* 執行 npm test */
const { expect } = require('chai');

const supertest = require('supertest');
require('../dist/index.bundle');

const api = supertest('http://localhost:3000/api');
let APItoken;

before((done) => {
    api.post('/user/login')
    .set('Accept', 'application/json')
    .send({
        user_mail: 'jing@gmail.com',
        user_password: 'password'
    })
    .expect(200)
    .end((err, res) => {
        APItoken = res.body.APItoken; // 登入成功存入JWT
        done();
    });
});

describe('Article', () => {
    it('Article should be an object with keys and values', (done) => {
        api.get('/article') // 取得所有文章
        .expect(200)
        .end((err, res) => {
            if (err) {
                done(err);
            }
            // 斷言做資料驗證(文章id、用戶id、文章標題、文章標籤、文章內容)
            expect(res.body[0]).to.have.property('article_id');
            expect(res.body[0].article_id).to.be.a('number');
            expect(res.body[0]).to.have.property('user_id');
            expect(res.body[0].user_id).to.be.a('number');
            expect(res.body[0]).to.have.property('article_title');
            expect(res.body[0].article_title).to.be.a('string');
            expect(res.body[0]).to.have.property('article_tag');
            expect(res.body[0].article_tag).to.be.a('string');
            expect(res.body[0]).to.have.property('article_content');
            expect(res.body[0].article_content).to.be.a('string');
            done();
        });
    });

    it('should return a 200 response', (done) => {
        api.get('/article/personal') // 取得某用戶的所有文章
        .set('Authorization', `Bearer ${APItoken}`)
        .expect(200);
        done();
    });
});
