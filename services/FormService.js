module.exports = class FormService {
    constructor() {
        this.form = require('express-form');
        this.field = this.form.field;
    }

    create(...args) {
        let form = this.createFormOnly(...args);
        let formValidator = this.validate();

        return (req, res, next) => form(req, res, () => formValidator(req, res, next));
    }

    createFormOnly(...args) {
        return this.form(...args);
    }

    validate() {
        return (req, res, next) => {
            if (!req.form.isValid) {
                return res.status(400).send(req.form.getErrors());
            }

            return next();
        };
    }
}
