"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newNoteValidator = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var newNoteValidator = function newNoteValidator(req, res, next) {
  var schema = _joi["default"].object({
    Title: _joi["default"].string().required(),
    Descreption: _joi["default"].string().required(),
    color: _joi["default"].string(),
    isArchived: _joi["default"]["boolean"](),
    isDeleted: _joi["default"]["boolean"](),
    UserID: _joi["default"].string()
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

exports.newNoteValidator = newNoteValidator;