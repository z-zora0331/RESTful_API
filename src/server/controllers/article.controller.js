// article.controller.js
import articleModule from '../modules/article.module';

/* Article GET JWT取得個人文章  */
const articlePersonalGet = (req, res) => {
    articleModule.selectPersonalArticle(req.token).then((result) => {
        res.send(result);
    }).catch((err) => { return res.status(401).send(err); });
};

/* Article  POST 新增 */
const articlePost = (req, res) => {
    // 取得新增參數
    const insertValues = req.body;
    articleModule.createArticle(insertValues).then((result) => {
        res.send(result); // 成功回傳result結果
    }).catch((err) => { return res.send(err); }); // 失敗回傳錯誤訊息
};

/*  Article GET 取得  */
const articleGet = (req, res) => {
    articleModule.selectArticle().then((result) => {
        res.send(result); // 成功回傳result結果
    }).catch((err) => { return res.send(err); }); // 失敗回傳錯誤訊息
};

/* Article PUT 修改 */
const articlePut = (req, res) => {
    // 取得修改id
    const articleId = req.params.article_id;
    // 取得修改參數
    const inserValues = req.body;
    articleModule.modifyArticle(inserValues, articleId).then((result) => {
        res.send(result); // 回傳修改成功訊息
    }).catch((err) => {return res.send(err); }); // 失敗回傳錯誤訊息
};

/* Article  DELETE 刪除 */
const articleDelete = (req, res) => {
    // 取得刪除id
    const articleId = req.params.article_id;
    articleModule.deleteArticle(articleId).then((result) => {
        res.send(result); // 回傳刪除成功訊息
    }).catch((err) => { return res.send(err); }); // 失敗回傳錯誤訊息
};

export default {
    articlePost, articleGet, articlePut, articleDelete,
    articlePersonalGet
};
