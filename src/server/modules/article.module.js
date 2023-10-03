// article.module.js
import mysql from 'mysql2';
import config from '../../config/config';
import jwt from 'jsonwebtoken';

const connectionPool = mysql.createPool({
    connectionLimit: 10, // 限制池子連線人數
    host: config.mysqlHost, // 主機名稱
    user: config.mysqlUserName, // 用戶名稱
    password: config.mysqlPass, // 資料庫密碼
    database: config.mysqlDatabase, // 資料庫名稱
});

/* Article GET JWT取得個人文章 */
const selectPersonalArticle = (token) => {
    return new Promise((resolve, reject) => {
        // JWT解密驗證
        jwt.verify(token, 'my_secret_key', (err, decoded) => {
            if (err) {
                reject(err);
            } else {
                // JWT 驗證成功
                const userId = decoded.payload.user_id;
                connectionPool.getConnection((connectionError, connection) => {
                    if (connectionError) {
                        reject(connectionError);
                    } else {
                        connection.query('SELECT * FROM Article WHERE user_id = ?', [userId], (error, result) => {
                            if (error) {
                                reject(error);
                            } else {
                                resolve(result);
                            }
                            connection.release();
                        });
                    }
                });
            }
        });
    });
};

/* Article  POST 新增 */
const createArticle = (insertValues) => {
    return new Promise((resolve, reject) => {
        connectionPool.getConnection((connectionError, connection) => {
            if (connectionError) {
                reject(connectionError); // 若連線有問題回傳錯誤
            } else {
                connection.query('INSERT INTO Article SET ?', insertValues, (error, result) => { // Article資料表寫入一筆資料
                    if (error) {
                        console.error('SQL error: ', error); // 寫入資料庫有問題時回傳錯誤
                        reject(error);
                    } else if (result.affectedRows == 1) {
                        resolve('新增成功！ article_id: ' + result.insertId); // 寫入成功回傳寫入id
                    }
                    connection.release();
                });
            }
        });
    });
};

/*  Article GET 取得  */
const selectArticle = () => {
    return new Promise((resolve, reject) => {
        connectionPool.getConnection((connectionError, connection) => { // 資料庫連線
            if (connectionError) {
                reject(connectionError)
            } else { // Article撈取所有欄位的值組
                connection.query(`SELECT * FROM Article`, (error, result) => {
                    if (error) {
                        console.error('SQL error: ', error); // 寫入資料庫有問題時回傳錯誤
                        reject(error);
                    } else {
                        resolve(result); // 撈取成功回傳 JSON 資料
                    }
                    connection.release();
                });
            }
        });
    });
};

/* Article PUT 修改 */
const modifyArticle = (insertValues, articleId) => {
    return new Promise((resolve, reject) => {
        connectionPool.getConnection((connectionError, connection) => { // 資料庫連線
            if (connectionError) {
                reject(connectionError)
            } else { // Article資料表修改指定id一筆資料
                connection.query(`UPDATE Article SET ? WHERE article_id = ?`, [insertValues, articleId], (error, result) => {
                    if (error) {
                        console.error('SQL error: ', error); // 寫入資料庫有問題時回傳錯誤
                        reject(error);
                    } else if (result.affectedRows === 0) { // 寫入時發現無該筆資料
                        resolve('請確認修改Id！');
                    } else if (result.info.match('Changed: 1')) { // 寫入成功
                        resolve('資料修改成功');
                    } else {
                        resolve('資料無異動');
                    }
                    connection.release();
                });
            }
        });
    });
};

/* Article  DELETE 刪除 */
const deleteArticle = (articleId) => {
    return new Promise((resolve, reject) => {
        connectionPool.getConnection((connectionError, connection) => { // 資料庫連線
            if (connectionError) {
                reject(connectionError);
            } else { // Article資料表刪除指定id一筆資料
                connection.query(`DELETE FROM Article WHERE article_id = ?`, articleId, (error, result) => {
                    if (error) {
                        console.error('SQL error: ', error); // 資料庫存取有問題時回傳錯誤
                        reject(error);
                    } else if (result.affectedRows === 1) {
                        resolve('刪除成功！');
                    } else {
                        resolve('刪除失敗！');
                    }
                    connection.release();
                });
            }
        });
    });
};

export default {
    createArticle, selectArticle, modifyArticle, deleteArticle,
    selectPersonalArticle
};
