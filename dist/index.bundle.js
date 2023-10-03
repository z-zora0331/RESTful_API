/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config/config.js":
/*!******************************!*\
  !*** ./src/config/config.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! joi */ \"joi\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_0__);\n/* config.js */\n\n\n// require and configure dotenv, will load vars in .env in PROCESS.ENV\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\n\n// 建立每個變數 joi 驗證規則\nconst envVarSchema = joi__WEBPACK_IMPORTED_MODULE_0___default().object().keys({\n  NODE_ENV: joi__WEBPACK_IMPORTED_MODULE_0___default().string().default('development').allow('development', 'production'),\n  // 字串且預設值為development 並允許兩種參數\n  PORT: joi__WEBPACK_IMPORTED_MODULE_0___default().number().default(8080),\n  // 數字且預設值為 8080\n  VERSION: joi__WEBPACK_IMPORTED_MODULE_0___default().string(),\n  // 字串\n\n  MYSQL_PORT: joi__WEBPACK_IMPORTED_MODULE_0___default().number().default(3306),\n  //數字且預設值為3306\n  MYSQL_HOST: joi__WEBPACK_IMPORTED_MODULE_0___default().string().default('127.0.0.1'),\n  //字串取預設值為127.0.0.1\n  MYSQL_USER: joi__WEBPACK_IMPORTED_MODULE_0___default().string(),\n  // 字串\n  MYSQL_PASS: joi__WEBPACK_IMPORTED_MODULE_0___default().string(),\n  // 字串\n  MYSQL_NAME: joi__WEBPACK_IMPORTED_MODULE_0___default().string() // 字串\n}).unknown().required();\n\n// process.env 撈取 .env 內的變數做 joi 驗證\nconst {\n  error,\n  value: envVars\n} = envVarSchema.validate(process.env);\nif (error) {\n  // throw new Error(`Config validation error: ${error.message}`);\n  throw new Error('Config validation error:${error.message}');\n}\n// console.log('>>>', envVars)\n\nconst config = {\n  version: envVars.VERSION,\n  // 版本\n  env: envVars.NODE_ENV,\n  // 開發模式\n  port: envVars.PORT,\n  // 阜號\n\n  mysqlPort: envVars.MYSQL_PORT,\n  // 連接阜號(MYSQL_PORT)\n  mysqlHost: envVars.MYSQL_HOST,\n  // 主機名稱 (MYSQL_HOST)\n  mysqlUserName: envVars.MYSQL_USER,\n  // 用戶名稱 (MYSQL_USER)\n  mysqlPass: envVars.MYSQL_PASS,\n  // 資料庫密碼(MYSQL_PASS)\n  mysqlDatabase: envVars.MYSQL_DATABASE // 資料庫名稱(MYSQL_DATABASE)\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config); // 匯出共用\n\n//# sourceURL=webpack://test-js2/./src/config/config.js?");

/***/ }),

/***/ "./src/config/express.js":
/*!*******************************!*\
  !*** ./src/config/express.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/config/config.js\");\n/* harmony import */ var _server_routes_index_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../server/routes/index.route */ \"./src/server/routes/index.route.js\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! http-status */ \"http-status\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_6__);\n/* express.js */\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n\n// parse body params and attache them to req.body ### 解析器 body-parser\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default().json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default().urlencoded({\n  extended: true\n}));\n\n// enable CORS - Cross Origin Resource Sharing ### 跨來源資源共享 cors\napp.use(cors__WEBPACK_IMPORTED_MODULE_4___default()());\n\n// HTTP request logger middleware for node.js ### 連線存取紀錄 morgan\napp.use(morgan__WEBPACK_IMPORTED_MODULE_5___default()('dev'));\n\n/* GET home page. */\napp.get('/', (req, res) => {\n  res.send(`server started on  port http://127.0.0.1:${_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].port} (${_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].env})`);\n});\napp.use('/api', _server_routes_index_route__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n// app.use((err, req, res, next) => {\n//     let errorMessage;\n//     let errorCode;\n//     let errorStatus;\n\n//     // express validation error 所有傳入參數驗證錯誤\n//     if (err instanceof expressValidation.ValidationError) {\n//         if (err.errors[0].location === 'query' || err.errors[0].location === 'body') {\n//             errorMessage = err.errors[0].messages;\n//             errorCode = 400;\n//             errorStatus = httpStatus.BAD_REQUEST;\n//         }\n//         const error = new APPError.APIError(errorMessage, errorStatus, true, errorCode);\n//         return next(error);\n//     }\n//     return next(err);\n// });\n\n// error handler, send stacktrace only during development 錯誤後才跑到這邊\napp.use((err, req, res, next) => {\n  res.status(err.status).json({\n    message: err.isPublic ? err.message : (http_status__WEBPACK_IMPORTED_MODULE_6___default())[err.status],\n    code: err.code ? err.code : (http_status__WEBPACK_IMPORTED_MODULE_6___default())[err.status],\n    stack: _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].env === 'development' ? err.stack : {}\n  });\n  next();\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n//# sourceURL=webpack://test-js2/./src/config/express.js?");

/***/ }),

/***/ "./src/config/param-validation.js":
/*!****************************************!*\
  !*** ./src/config/param-validation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! joi */ \"joi\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  // POST /api/article\n  createArticle: {\n    body: joi__WEBPACK_IMPORTED_MODULE_0___default().object().keys({\n      user_id: joi__WEBPACK_IMPORTED_MODULE_0___default().number().required(),\n      // 數字＋必填\n      article_title: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required(),\n      // 字串＋必填\n      article_tag: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required(),\n      // 字串＋必填\n      article_content: joi__WEBPACK_IMPORTED_MODULE_0___default().string().min(20).required() // 文章長度至少20字\n    })\n  },\n\n  // POST /api/user\n  createUser: {\n    body: joi__WEBPACK_IMPORTED_MODULE_0___default().object({\n      user_name: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required(),\n      user_mail: joi__WEBPACK_IMPORTED_MODULE_0___default().string().email().trim().required(),\n      user_password: joi__WEBPACK_IMPORTED_MODULE_0___default().string().regex(/[a-zA-Z0-9]{6,30}$/).required()\n    })\n  }\n});\n\n//# sourceURL=webpack://test-js2/./src/config/param-validation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/config */ \"./src/config/config.js\");\n/* harmony import */ var _config_express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/express */ \"./src/config/express.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n// //透過http模組啟動web server服務\n// const http = require('http')\n\n// const server = http.createServer(function (req, res) {\n//     //設定回應為text文件，並回應 Hello World!\n//     res.writeHead(200, { 'Content-Type': 'text/plain' })\n//     res.end('Hello World!')\n// })\n\n// //設定服務監聽localhost:3000(127.0.0.1/:3000)\n// server.listen('3000', function () {\n//     console.log('server start on 3000 port')\n// })\n\n\n\nif (!module.parent) {\n  // listen on port config.port\n  _config_express__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listen(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port, () => {\n    console.log(`server started on port http://127.0.0.1:${_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port} (${_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].env})`);\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_config_express__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack://test-js2/./src/index.js?");

/***/ }),

/***/ "./src/server/controllers/article.controller.js":
/*!******************************************************!*\
  !*** ./src/server/controllers/article.controller.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_article_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/article.module */ \"./src/server/modules/article.module.js\");\n// article.controller.js\n\n\n/* Article GET JWT取得個人文章  */\nconst articlePersonalGet = (req, res) => {\n  _modules_article_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].selectPersonalArticle(req.token).then(result => {\n    res.send(result);\n  }).catch(err => {\n    return res.status(401).send(err);\n  });\n};\n\n/* Article  POST 新增 */\nconst articlePost = (req, res) => {\n  // 取得新增參數\n  const insertValues = req.body;\n  _modules_article_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createArticle(insertValues).then(result => {\n    res.send(result); // 成功回傳result結果\n  }).catch(err => {\n    return res.send(err);\n  }); // 失敗回傳錯誤訊息\n};\n\n/*  Article GET 取得  */\nconst articleGet = (req, res) => {\n  _modules_article_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].selectArticle().then(result => {\n    res.send(result); // 成功回傳result結果\n  }).catch(err => {\n    return res.send(err);\n  }); // 失敗回傳錯誤訊息\n};\n\n/* Article PUT 修改 */\nconst articlePut = (req, res) => {\n  // 取得修改id\n  const articleId = req.params.article_id;\n  // 取得修改參數\n  const inserValues = req.body;\n  _modules_article_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].modifyArticle(inserValues, articleId).then(result => {\n    res.send(result); // 回傳修改成功訊息\n  }).catch(err => {\n    return res.send(err);\n  }); // 失敗回傳錯誤訊息\n};\n\n/* Article  DELETE 刪除 */\nconst articleDelete = (req, res) => {\n  // 取得刪除id\n  const articleId = req.params.article_id;\n  _modules_article_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteArticle(articleId).then(result => {\n    res.send(result); // 回傳刪除成功訊息\n  }).catch(err => {\n    return res.send(err);\n  }); // 失敗回傳錯誤訊息\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  articlePost,\n  articleGet,\n  articlePut,\n  articleDelete,\n  articlePersonalGet\n});\n\n//# sourceURL=webpack://test-js2/./src/server/controllers/article.controller.js?");

/***/ }),

/***/ "./src/server/controllers/user.controller.js":
/*!***************************************************!*\
  !*** ./src/server/controllers/user.controller.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_user_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/user.module */ \"./src/server/modules/user.module.js\");\n// user.controller.js\n\n\n\n/* User POST 登入(Login) */\nconst userLogin = (req, res, next) => {\n  const insertValues = req.body;\n  _modules_user_module__WEBPACK_IMPORTED_MODULE_1__[\"default\"].selectUserLogin(insertValues).then(result => {\n    res.send(result);\n  }).catch(error => {\n    next(error);\n  });\n};\n\n/* User  POST 新增 */\nconst userPost = (req, res) => {\n  const insertValues = {\n    user_name: req.body.user_name,\n    user_mail: req.body.user_mail,\n    user_password: bcryptjs__WEBPACK_IMPORTED_MODULE_0___default().hashSync(req.body.user_password, 10)\n  };\n  _modules_user_module__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createUser(insertValues).then(result => {\n    res.send(result);\n  }).catch(err => {\n    return res.send(err);\n  });\n};\n\n/* User  GET 取得 */\nconst userGet = (req, res) => {\n  _modules_user_module__WEBPACK_IMPORTED_MODULE_1__[\"default\"].selectUser().then(result => {\n    res.send(result);\n  }).catch(err => {\n    return res.send(err);\n  });\n};\n\n/* User  PUT 修改 */\nconst userPut = (req, res) => {\n  const userId = req.params.user_id;\n  const insertValues = req.body;\n  _modules_user_module__WEBPACK_IMPORTED_MODULE_1__[\"default\"].modifyUser(insertValues, userId).then(result => {\n    res.send(result);\n  }).catch(err => {\n    return res.send(err);\n  });\n};\n\n/* User  DELETE 刪除 */\nconst userDelete = (req, res) => {\n  const userId = req.params.user_id;\n  _modules_user_module__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteUser(userId).then(result => {\n    res.send(result);\n  }).catch(err => {\n    return res.send(err);\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  userLogin,\n  userPost,\n  userGet,\n  userPut,\n  userDelete\n});\n\n//# sourceURL=webpack://test-js2/./src/server/controllers/user.controller.js?");

/***/ }),

/***/ "./src/server/helper/AppError.js":
/*!***************************************!*\
  !*** ./src/server/helper/AppError.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-status */ \"http-status\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/**\n * @extends Error\n */\nclass ExtendableError extends Error {\n  constructor(message, status, isPublic, code) {\n    super(message);\n    this.message = message;\n    this.name = this.constructor.name;\n    this.status = status;\n    this.isPublic = isPublic;\n    this.code = code;\n    this.isOperational = true;\n    Error.captureStackTrace(this, this.constructor.name);\n  }\n}\n\n/**\n * 信箱尚未註冊 Error\n * @extends ExtendableError\n */\nclass LoginError1 extends ExtendableError {\n  constructor(message = '信箱尚未註冊！', status = (http_status__WEBPACK_IMPORTED_MODULE_0___default().NOT_FOUND), isPublic = true, code = 401) {\n    super(message, status, isPublic, code);\n    this.name = 'LoginError';\n  }\n}\n\n/**\n * 密碼錯誤 Error.\n * @extends ExtendableError\n */\nclass LoginError2 extends ExtendableError {\n  constructor(message = '您輸入的密碼有誤！', status = (http_status__WEBPACK_IMPORTED_MODULE_0___default().NOT_FOUND), isPublic = true, code = 401) {\n    super(message, status, isPublic, code);\n    this.name = 'LoginError';\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  LoginError1,\n  LoginError2\n});\n\n//# sourceURL=webpack://test-js2/./src/server/helper/AppError.js?");

/***/ }),

/***/ "./src/server/modules/article.module.js":
/*!**********************************************!*\
  !*** ./src/server/modules/article.module.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2 */ \"mysql2\");\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/config */ \"./src/config/config.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n// article.module.js\n\n\n\nconst connectionPool = mysql2__WEBPACK_IMPORTED_MODULE_0___default().createPool({\n  connectionLimit: 10,\n  // 限制池子連線人數\n  host: _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlHost,\n  // 主機名稱\n  user: _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlUserName,\n  // 用戶名稱\n  password: _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlPass,\n  // 資料庫密碼\n  database: _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlDatabase // 資料庫名稱\n});\n\n/* Article GET JWT取得個人文章 */\nconst selectPersonalArticle = token => {\n  return new Promise((resolve, reject) => {\n    // JWT解密驗證\n    jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(token, 'my_secret_key', (err, decoded) => {\n      if (err) {\n        reject(err);\n      } else {\n        // JWT 驗證成功\n        const userId = decoded.payload.user_id;\n        connectionPool.getConnection((connectionError, connection) => {\n          if (connectionError) {\n            reject(connectionError);\n          } else {\n            connection.query('SELECT * FROM Article WHERE user_id = ?', [userId], (error, result) => {\n              if (error) {\n                reject(error);\n              } else {\n                resolve(result);\n              }\n              connection.release();\n            });\n          }\n        });\n      }\n    });\n  });\n};\n\n/* Article  POST 新增 */\nconst createArticle = insertValues => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      if (connectionError) {\n        reject(connectionError); // 若連線有問題回傳錯誤\n      } else {\n        connection.query('INSERT INTO Article SET ?', insertValues, (error, result) => {\n          // Article資料表寫入一筆資料\n          if (error) {\n            console.error('SQL error: ', error); // 寫入資料庫有問題時回傳錯誤\n            reject(error);\n          } else if (result.affectedRows == 1) {\n            resolve('新增成功！ article_id: ' + result.insertId); // 寫入成功回傳寫入id\n          }\n\n          connection.release();\n        });\n      }\n    });\n  });\n};\n\n/*  Article GET 取得  */\nconst selectArticle = () => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      // 資料庫連線\n      if (connectionError) {\n        reject(connectionError);\n      } else {\n        // Article撈取所有欄位的值組\n        connection.query(`SELECT * FROM Article`, (error, result) => {\n          if (error) {\n            console.error('SQL error: ', error); // 寫入資料庫有問題時回傳錯誤\n            reject(error);\n          } else {\n            resolve(result); // 撈取成功回傳 JSON 資料\n          }\n\n          connection.release();\n        });\n      }\n    });\n  });\n};\n\n/* Article PUT 修改 */\nconst modifyArticle = (insertValues, articleId) => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      // 資料庫連線\n      if (connectionError) {\n        reject(connectionError);\n      } else {\n        // Article資料表修改指定id一筆資料\n        connection.query(`UPDATE Article SET ? WHERE article_id = ?`, [insertValues, articleId], (error, result) => {\n          if (error) {\n            console.error('SQL error: ', error); // 寫入資料庫有問題時回傳錯誤\n            reject(error);\n          } else if (result.affectedRows === 0) {\n            // 寫入時發現無該筆資料\n            resolve('請確認修改Id！');\n          } else if (result.info.match('Changed: 1')) {\n            // 寫入成功\n            resolve('資料修改成功');\n          } else {\n            resolve('資料無異動');\n          }\n          connection.release();\n        });\n      }\n    });\n  });\n};\n\n/* Article  DELETE 刪除 */\nconst deleteArticle = articleId => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      // 資料庫連線\n      if (connectionError) {\n        reject(connectionError);\n      } else {\n        // Article資料表刪除指定id一筆資料\n        connection.query(`DELETE FROM Article WHERE article_id = ?`, articleId, (error, result) => {\n          if (error) {\n            console.error('SQL error: ', error); // 資料庫存取有問題時回傳錯誤\n            reject(error);\n          } else if (result.affectedRows === 1) {\n            resolve('刪除成功！');\n          } else {\n            resolve('刪除失敗！');\n          }\n          connection.release();\n        });\n      }\n    });\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  createArticle,\n  selectArticle,\n  modifyArticle,\n  deleteArticle,\n  selectPersonalArticle\n});\n\n//# sourceURL=webpack://test-js2/./src/server/modules/article.module.js?");

/***/ }),

/***/ "./src/server/modules/user.module.js":
/*!*******************************************!*\
  !*** ./src/server/modules/user.module.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2 */ \"mysql2\");\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/config */ \"./src/config/config.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helper_AppError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/AppError */ \"./src/server/helper/AppError.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);\n// user.module.js\n\n\n\n\n\nconst connectionPool = mysql2__WEBPACK_IMPORTED_MODULE_0___default().createPool({\n  connectionLimit: 10,\n  host: _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlHost,\n  user: _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlUserName,\n  password: _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlPass,\n  database: _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlDatabase\n});\n\n/*  User GET 登入Login取得資訊  */\nconst selectUserLogin = insertValues => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      if (connectionError) {\n        reject(connectionError);\n      } else {\n        connection.query('SELECT * FROM User WHERE user_mail = ?', insertValues.user_mail, (error, result) => {\n          if (error) {\n            console.error('SQL error: ', error);\n            reject(error);\n          } else if (Object.keys(result).length === 0) {\n            reject(new _helper_AppError__WEBPACK_IMPORTED_MODULE_3__[\"default\"].LoginError1()); // 信箱尚未註冊\n          } else {\n            const dbHashPassword = result[0].user_password; // 資料庫(加密後)的密碼\n            const userPassword = insertValues.user_password; // 使用者登入輸入的密碼\n\n            bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().compare(userPassword, dbHashPassword).then(res => {\n              if (res) {\n                // 產生 JWT (json web token)\n                const payload = {\n                  user_id: result[0].user_id,\n                  user_name: result[0].user_name,\n                  user_mail: result[0].user_mail\n                };\n                const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().sign({\n                  payload,\n                  exp: Math.floor(Date.now() / 1000) + 60 * 15\n                }, 'my_secret_key');\n                resolve(Object.assign({\n                  code: 200\n                }, {\n                  message: '登入成功',\n                  token\n                }));\n              } else {\n                reject(new _helper_AppError__WEBPACK_IMPORTED_MODULE_3__[\"default\"].LoginError2()); // 您輸入的密碼有誤\n              }\n            });\n          }\n\n          connection.release();\n        });\n      }\n    });\n  });\n};\n\n/* User  POST 新增 */\nconst createUser = insertValues => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      if (connectionError) {\n        reject(connectionError);\n      } else {\n        connection.query('INSERT INTO User SET ?', insertValues, (error, result) => {\n          if (error) {\n            console.error('SQL error: ', error);\n            reject(error);\n          } else if (result.affectedRows === 1) {\n            resolve('新增成功！ user_id: ' + result.insertId);\n          }\n          connection.release();\n        });\n      }\n    });\n  });\n};\n\n/* User  GET 取得 */\nconst selectUser = () => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      if (connectionError) {\n        reject(connectionError);\n      } else {\n        connection.query('SELECT * FROM User', (error, result) => {\n          if (error) {\n            console.error('SQL error: ', error);\n            reject(error);\n          } else {\n            resolve(result);\n          }\n          connection.release();\n        });\n      }\n    });\n  });\n};\n\n/* User  PUT 修改 */\nconst modifyUser = (insertValues, userId) => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      if (connectionError) {\n        reject(connectionError);\n      } else {\n        connection.query('UPDATE User SET ? WHERE user_id = ?', [insertValues, userId], (error, result) => {\n          if (error) {\n            console.error('SQL error: ', error);\n            reject(error);\n          } else if (result.affectedRows === 0) {\n            resolve('請確認修改Id！');\n          } else if (result.info.match('Changed: 1')) {\n            resolve('資料修改成功');\n          } else {\n            resolve('資料無異動');\n          }\n          connection.release();\n        });\n      }\n    });\n  });\n};\n\n/* User  DELETE 刪除 */\nconst deleteUser = userId => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      if (connectionError) {\n        reject(connectionError);\n      } else {\n        connection.query('DELETE FROM User WHERE user_id = ?', userId, (error, result) => {\n          if (error) {\n            console.error('SQL error: ', error);\n            reject(error);\n          } else if (result.affectedRows === 1) {\n            resolve('刪除成功！');\n          } else {\n            resolve('刪除失敗！');\n          }\n          connection.release();\n        });\n      }\n    });\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  selectUserLogin,\n  createUser,\n  selectUser,\n  modifyUser,\n  deleteUser\n});\n\n//# sourceURL=webpack://test-js2/./src/server/modules/user.module.js?");

/***/ }),

/***/ "./src/server/routes/article.route.js":
/*!********************************************!*\
  !*** ./src/server/routes/article.route.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-validation */ \"express-validation\");\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_validation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _controllers_article_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/article.controller */ \"./src/server/controllers/article.controller.js\");\n/* harmony import */ var _config_param_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/param-validation */ \"./src/config/param-validation.js\");\n// article.route.js\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\n\n/** 利用 Middleware 取得 Header 中的 Rearer Token */\nconst ensureToken = (req, res, next) => {\n  const bearerHeader = req.headers.authorization;\n  if (typeof bearerHeader !== 'undefined') {\n    const bearer = bearerHeader.split(' ');\n    const bearerToken = bearer[1]; // 取得JWT\n    req.token = bearerToken;\n    next(); // 結束 Middleware 進入 articleCtrl.articlePersonalGet\n  } else {\n    res.status(403).send(Object.assign({\n      code: 403\n    }, {\n      message: '您尚未登入！'\n    }));\n  }\n};\nrouter.get('/personal', ensureToken, _controllers_article_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].articlePersonalGet);\nrouter.route('/').get(_controllers_article_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].articleGet) /** 取得 Article 所有值組 */.post(express_validation__WEBPACK_IMPORTED_MODULE_1___default()(_config_param_validation__WEBPACK_IMPORTED_MODULE_3__[\"default\"].createArticle), _controllers_article_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].articlePost); /** 新增 Article 值組 */\n\nrouter.route('/:article_id').put(_controllers_article_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].articlePut) /** 修改 Article 值組 */.delete(_controllers_article_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].articleDelete); /** 刪除 Article 值組 */\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://test-js2/./src/server/routes/article.route.js?");

/***/ }),

/***/ "./src/server/routes/index.route.js":
/*!******************************************!*\
  !*** ./src/server/routes/index.route.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mysql2 */ \"mysql2\");\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mysql2__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../config/config */ \"./src/config/config.js\");\n/* harmony import */ var _article_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article.route */ \"./src/server/routes/article.route.js\");\n/* harmony import */ var _user_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.route */ \"./src/server/routes/user.route.js\");\n\n\n\n\n// Router\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\n\n/* GET localhost:[port]/api page. */\nrouter.get('/', (req, res) => {\n  res.send('此路徑是: localhost:${config.port}/api');\n});\n\n/* mysql連線測試 */\nrouter.get('/sqlTest', (req, res) => {\n  const connectionPool = mysql2__WEBPACK_IMPORTED_MODULE_1___default().createPool({\n    // 建立一個連線池\n    connectionLimit: 10,\n    // 限制池子連線人數\n    host: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlHost,\n    // 主機名稱\n    user: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlUserName,\n    // 用戶名稱\n    password: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlPass,\n    // 資料庫密碼\n    database: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlDatabase // 資料庫名稱\n  });\n\n  connectionPool.getConnection((err, connection) => {\n    // 建立一個連線若錯誤回傳err\n    if (err) {\n      res.send(err);\n      console.log('連線失敗！');\n    } else {\n      res.send('連線成功！');\n      // console.log(connection)\n    }\n  });\n});\n\n/** Article Router */\nrouter.use('/article', _article_route__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\n/** User Router */\nrouter.use('/user', _user_route__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://test-js2/./src/server/routes/index.route.js?");

/***/ }),

/***/ "./src/server/routes/user.route.js":
/*!*****************************************!*\
  !*** ./src/server/routes/user.route.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-validation */ \"express-validation\");\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_validation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/user.controller */ \"./src/server/controllers/user.controller.js\");\n/* harmony import */ var _config_param_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/param-validation */ \"./src/config/param-validation.js\");\n// user.route.js\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/login').post(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].userLogin);\nrouter.route('/').get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].userGet).post(express_validation__WEBPACK_IMPORTED_MODULE_1___default()(_config_param_validation__WEBPACK_IMPORTED_MODULE_3__[\"default\"].createUser), _controllers_user_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].userPost);\nrouter.route('/:user_id').put(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].userPut).delete(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].userDelete);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://test-js2/./src/server/routes/user.route.js?");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-validation":
/*!*************************************!*\
  !*** external "express-validation" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("express-validation");

/***/ }),

/***/ "http-status":
/*!******************************!*\
  !*** external "http-status" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("http-status");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("joi");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");

/***/ }),

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("mysql2");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;