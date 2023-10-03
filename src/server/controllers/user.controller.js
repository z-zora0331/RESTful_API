// user.controller.js
import bcrypt from 'bcryptjs';
import userModule from "../modules/user.module";

/* User POST 登入(Login) */
const userLogin = (req, res, next) => {
    const insertValues = req.body;
    userModule.selectUserLogin(insertValues).then((result) => {
        res.send(result);
    }).catch((error) => { next(error); });
};

/* User  POST 新增 */
const userPost = (req, res) => {
    const insertValues = {
        user_name: req.body.user_name,
        user_mail: req.body.user_mail,
        user_password: bcrypt.hashSync(req.body.user_password, 10)
    };
    userModule.createUser(insertValues).then((result) => {
        res.send(result);
    }).catch((err) => { return res.send(err); });
};

/* User  GET 取得 */
const userGet = (req, res) => {
    userModule.selectUser().then((result) => {
        res.send(result);
    }).catch((err) => { return res.send(err); });
};

/* User  PUT 修改 */
const userPut = (req, res) => {
    const userId = req.params.user_id;
    const insertValues = req.body;
    userModule.modifyUser(insertValues, userId).then((result) => {
        res.send(result);
    }).catch((err) => { return res.send(err); });
};

/* User  DELETE 刪除 */
const userDelete = (req, res) => {
    const userId = req.params.user_id;
    userModule.deleteUser(userId).then((result) => {
        res.send(result);
    }).catch((err) => { return res.send(err); });
};

export default {
    userLogin,
    userPost, userGet, userPut, userDelete
}
