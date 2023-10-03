/* express.js */
import express from 'express';
import config from './config';
import index from '../server/routes/index.route';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import httpStatus from 'http-status';

const app = express();

// parse body params and attache them to req.body ### 解析器 body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// enable CORS - Cross Origin Resource Sharing ### 跨來源資源共享 cors
app.use(cors());

// HTTP request logger middleware for node.js ### 連線存取紀錄 morgan
app.use(morgan('dev'))

/* GET home page. */
app.get('/', (req, res) => {
    res.send(`server started on  port http://127.0.0.1:${config.port} (${config.env})`);
});

app.use('/api', index);

// app.use((err, req, res, next) => {
//     let errorMessage;
//     let errorCode;
//     let errorStatus;

//     // express validation error 所有傳入參數驗證錯誤
//     if (err instanceof expressValidation.ValidationError) {
//         if (err.errors[0].location === 'query' || err.errors[0].location === 'body') {
//             errorMessage = err.errors[0].messages;
//             errorCode = 400;
//             errorStatus = httpStatus.BAD_REQUEST;
//         }
//         const error = new APPError.APIError(errorMessage, errorStatus, true, errorCode);
//         return next(error);
//     }
//     return next(err);
// });

// error handler, send stacktrace only during development 錯誤後才跑到這邊
app.use((err, req, res, next) => {
    res.status(err.status).json({
        message: err.isPublic ? err.message : httpStatus[err.status],
        code: err.code ? err.code : httpStatus[err.status],
        stack: config.env === 'development' ? err.stack : {}
    });
    next();
});

export default app;
