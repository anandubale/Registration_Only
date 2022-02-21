"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newUserValidator = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var newUserValidator = function newUserValidator(req, res, next) {
  var schema = _joi["default"].object({
    firstName: _joi["default"].string().min(4).required(),
    lastName: _joi["default"].string().min(4).required(),
    emailID: _joi["default"].string().required(),
    password: _joi["default"].string().min(10).required()
  });

  var _schema$validate = schema.validate(req.body),
      error = _schema$validate.error,
      value = _schema$validate.value; //validate value using Schema and Options


  if (error) {
    next(error);
  } else {
    req.validatedBody = value; //true or false

    next();
  }
};

exports.newUserValidator = newUserValidator;