import httpStatus from "http-status";

/**
 * @extends Error
 */
class ExtendableError extends Error {
    constructor(message, status, isPublic, code) {
        super(message);
        this.message = message;
        this.name = this.constructor.name;
        this.status = status;
        this.isPublic = isPublic;
        this.code = code;
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor.name);
    }
}

/**
 * 信箱尚未註冊 Error
 * @extends ExtendableError
 */
class LoginError1 extends ExtendableError {
    constructor(message = '信箱尚未註冊！', status = httpStatus.NOT_FOUND, isPublic = true, code = 401) {
        super(message, status, isPublic, code);
        this.name = 'LoginError';
    }
}

/**
 * 密碼錯誤 Error.
 * @extends ExtendableError
 */
class LoginError2 extends ExtendableError {
    constructor(message = '您輸入的密碼有誤！', status = httpStatus.NOT_FOUND, isPublic = true, code = 401) {
        super(message, status, isPublic, code);
        this.name = 'LoginError';
    }
}

export default {
    LoginError1, LoginError2
}
