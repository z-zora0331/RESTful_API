// user.module.js
import mysql from 'mysql2';
import config from '../../config/config';
import bcrypt from 'bcryptjs';
import AppError from '../helper/AppError';
import jwt from 'jsonwebtoken';

const connectionPool = mysql.createPool({
    connectionLimit: 10,
    host: config.mysqlHost,
    user: config.mysqlUserName,
    password: config.mysqlPass,
    database: config.mysqlDatabase
});

/*  User GET 登入Login取得資訊  */
const selectUserLogin = (insertValues) => {
    return new Promise((resolve, reject) => {
        connectionPool.getConnection((connectionError, connection) => {
            if (connectionError) {
                reject(connectionError);
            } else {
                connection.query('SELECT * FROM User WHERE user_mail = ?', insertValues.user_mail, (error, result) => {
                    if (error) {
                        console.error('SQL error: ', error);
                        reject(error);
                    } else if (Object.keys(result).length === 0) {
                        reject(new AppError.LoginError1()); // 信箱尚未註冊
                    } else {
                        const dbHashPassword = result[0].user_password; // 資料庫(加密後)的密碼
                        const userPassword = insertValues.user_password; // 使用者登入輸入的密碼

                        bcrypt.compare(userPassword, dbHashPassword).then((res) => {
                            if (res) {
                                // 產生 JWT (json web token)
                                const payload = {
                                    user_id: result[0].user_id,
                                    user_name: result[0].user_name,
                                    user_mail: result[0].user_mail
                                };
                                const token = jwt.sign({ payload, exp: Math.floor(Date.now() / 1000) + (60 * 15) }, 'my_secret_key');
                                resolve(Object.assign({ code: 200 }, { message: '登入成功', token }));
                            } else {
                                reject(new AppError.LoginError2()); // 您輸入的密碼有誤
                            }
                        });
                    }
                    connection.release();
                })
            }
        });
    });
};

/* User  POST 新增 */
const createUser = (insertValues) => {
    return new Promise((resolve, reject) => {
        connectionPool.getConnection((connectionError, connection) => {
            if (connectionError) {
                reject(connectionError);
            } else {
                connection.query('INSERT INTO User SET ?', insertValues, (error, result) => {
                    if (error) {
                        console.error('SQL error: ', error);
                        reject(error);
                    } else if (result.affectedRows === 1) {
                        resolve('新增成功！ user_id: ' + result.insertId)
                    }
                    connection.release();
                });
            }
        });
    });
};

/* User  GET 取得 */
const selectUser = () => {
    return new Promise((resolve, reject) => {
        connectionPool.getConnection((connectionError, connection) => {
            if (connectionError) {
                reject(connectionError);
            } else {
                connection.query('SELECT * FROM User', (error, result) => {
                    if (error) {
                        console.error('SQL error: ', error);
                        reject(error);
                    } else {
                        resolve(result);
                    }
                    connection.release();
                });
            }
        });
    });
};

/* User  PUT 修改 */
const modifyUser = (insertValues, userId) => {
    return new Promise((resolve, reject) => {
        connectionPool.getConnection((connectionError, connection) => {
            if (connectionError) {
                reject(connectionError);
            } else {
                connection.query('UPDATE User SET ? WHERE user_id = ?', [insertValues, userId], (error, result) => {
                    if (error) {
                        console.error('SQL error: ', error);
                        reject(error);
                    } else if (result.affectedRows === 0) {
                        resolve('請確認修改Id！');
                    } else if (result.info.match('Changed: 1')) {
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

/* User  DELETE 刪除 */
const deleteUser = (userId) => {
    return new Promise((resolve, reject) => {
        connectionPool.getConnection((connectionError, connection) => {
            if (connectionError) {
                reject(connectionError);
            } else {
                connection.query('DELETE FROM User WHERE user_id = ?', userId, (error, result) => {
                    if (error) {
                        console.error('SQL error: ', error);
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
    selectUserLogin,
    createUser, selectUser, modifyUser, deleteUser
}
