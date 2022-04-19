"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newNoteValidator = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));

var newNoteValidator = function newNoteValidator(req, res, next) {
  var schema = _joi["default"].object({
    Title: _joi["default"].string().min(3).required(),
    Descreption: _joi["default"].string().min(7).required(),
    color: _joi["default"].string(),
    isArchived: _joi["default"]["boolean"](),
    isDeleted: _joi["default"]["boolean"](),
    UserID: _joi["default"].string()
  });

  var _schema$validate = schema.validate(req.body),
      error = _schema$validate.error,
      value = _schema$validate.value; //validate value using Schema and Options


  if (error) {
    res.status(_httpStatusCodes["default"].BAD_REQUEST).json({
      code: _httpStatusCodes["default"].BAD_REQUEST,
      message: error
    });
  } else {
    req.validatedBody = value;
    next();
  }
};

exports.newNoteValidator = newNoteValidator;