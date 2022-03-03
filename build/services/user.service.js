"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRegistration = exports.resetPassword = exports.login = exports.getAllUsers = exports.forgetPassword = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../models/user.model"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _helper = require("../utils/helper.js");

//get all users
var getAllUsers = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _user["default"].find();

          case 2:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAllUsers() {
    return _ref.apply(this, arguments);
  };
}(); //create new user


exports.getAllUsers = getAllUsers;

var userRegistration = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
    var saltRounds, hasedPassword, data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            saltRounds = 10;
            hasedPassword = _bcrypt["default"].hashSync(body.password, saltRounds); //if use await - then use bcrypt.hashSync

            body.password = hasedPassword;
            _context2.next = 5;
            return _user["default"].create(body);

          case 5:
            data = _context2.sent;
            return _context2.abrupt("return", data);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function userRegistration(_x) {
    return _ref2.apply(this, arguments);
  };
}(); // login user;
//emailID + password = body


exports.userRegistration = userRegistration;

var login = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(body) {
    var user, validPassword, token;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _user["default"].findOne({
              emailID: body.emailID
            });

          case 2:
            user = _context3.sent;

            if (!(user != null)) {
              _context3.next = 13;
              break;
            }

            validPassword = _bcrypt["default"].compareSync(body.password, user.password);

            if (!validPassword) {
              _context3.next = 10;
              break;
            }

            token = _jsonwebtoken["default"].sign({
              "emailID": user.emailID,
              "id": user._id
            }, process.env.NOTE_SECRET_CODE);
            return _context3.abrupt("return", token);

          case 10:
            throw new Error('password does not match');

          case 11:
            _context3.next = 14;
            break;

          case 13:
            throw new Error('User is not Registered');

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function login(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

exports.login = login;

var forgetPassword = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(emailID) {
    var storedData, token, generateMail;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _user["default"].findOne({
              emailID: emailID
            });

          case 2:
            storedData = _context4.sent;

            if (!(storedData.emailID != null)) {
              _context4.next = 9;
              break;
            }

            token = _jsonwebtoken["default"].sign({
              "emailID": storedData.emailID,
              "id": storedData._id
            }, process.env.FORGET_PASS_CODE);
            generateMail = (0, _helper.sendMailTo)(storedData.emailID, token);
            return _context4.abrupt("return", generateMail);

          case 9:
            throw new Error("email is not registered");

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function forgetPassword(_x3) {
    return _ref4.apply(this, arguments);
  };
}();

exports.forgetPassword = forgetPassword;

var resetPassword = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(body) {
    var hashP, resetPass;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            hashP = _bcrypt["default"].hashSync(body.password, 10);
            body.password = hashP;
            _context5.next = 4;
            return _user["default"].findByIdAndUpdate(body.UserID, body, {
              "new": true
            });

          case 4:
            resetPass = _context5.sent;
            return _context5.abrupt("return", resetPass);

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function resetPassword(_x4) {
    return _ref5.apply(this, arguments);
  };
}();

exports.resetPassword = resetPassword;