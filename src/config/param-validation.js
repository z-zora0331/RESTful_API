import Joi from 'joi';

export default {
    // POST /api/article
    createArticle: {
        body: Joi.object().keys({
            user_id: Joi.number().required(), // 數字＋必填
            article_title: Joi.string().required(), // 字串＋必填
            article_tag: Joi.string().required(), // 字串＋必填
            article_content: Joi.string().min(20).required() // 文章長度至少20字
        })
    },
    // POST /api/user
    createUser: {
        body: Joi.object({
            user_name: Joi.string().required(),
            user_mail: Joi.string().email().trim().required(),
            user_password: Joi.string().regex(/[a-zA-Z0-9]{6,30}$/).required()
        })
    }
};
