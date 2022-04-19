"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRegistration = exports.resetPassword = exports.login = exports.getallUsers = exports.forgetPassword = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));

var _winston = require("winston");

var UserService = _interopRequireWildcard(require("../services/user.service"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getallUsers = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return UserService.getAllUsers();

          case 3:
            data = _context.sent;
            res.status(_httpStatusCodes["default"].OK).json({
              code: _httpStatusCodes["default"].OK,
              data: data,
              message: "this is all user u have registered with"
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            next(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function getallUsers(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */


exports.getallUsers = getallUsers;

var userRegistration = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return UserService.userRegistration(req.body);

          case 3:
            data = _context2.sent;
            res.status(_httpStatusCodes["default"].CREATED).json({
              code: _httpStatusCodes["default"].CREATED,
              data: data,
              message: 'User created successfully'
            });
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            res.status(_httpStatusCodes["default"].CONFLICT).json({
              code: _httpStatusCodes["default"].CONFLICT,
              message: "".concat(_context2.t0)
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function userRegistration(_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

exports.userRegistration = userRegistration;

var login = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return UserService.login(req.body);

          case 3:
            data = _context3.sent;

            if (data == null) {
              res.status(_httpStatusCodes["default"].NOT_FOUND).json({
                code: _httpStatusCodes["default"].NOT_FOUND,
                message: "".concat(error)
              });
            } else {
              res.status(_httpStatusCodes["default"].OK).json({
                code: _httpStatusCodes["default"].OK,
                data: data,
                message: 'login Successfully'
              });
            }

            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            res.status(_httpStatusCodes["default"].BAD_REQUEST).json({
              code: _httpStatusCodes["default"].BAD_REQUEST,
              message: "".concat(_context3.t0)
            });

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function login(_x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();

exports.login = login;

var forgetPassword = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var data;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            console.log(req.body);
            _context4.next = 4;
            return UserService.forgetPassword(req.body.emailID);

          case 4:
            data = _context4.sent;
            console.log(data);
            res.status(_httpStatusCodes["default"].OK).json({
              code: _httpStatusCodes["default"].OK,
              data: data,
              message: "password has sent Successfully to email"
            });
            _context4.next = 12;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](0);
            res.status(_httpStatusCodes["default"].NOT_FOUND).json({
              code: _httpStatusCodes["default"].NOT_FOUND,
              message: "".concat(_context4.t0)
            });

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 9]]);
  }));

  return function forgetPassword(_x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}();

exports.forgetPassword = forgetPassword;

var resetPassword = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var resetPasswordData;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            req.body.UserID = req.body.data.id;
            console.log(req.body.password);
            _context5.next = 5;
            return UserService.resetPassword(req.body);

          case 5:
            resetPasswordData = _context5.sent;
            res.status(_httpStatusCodes["default"].OK).json({
              code: _httpStatusCodes["default"].OK,
              data: resetPasswordData,
              message: "password reset successfully"
            });
            _context5.next = 12;
            break;

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](0);
            res.status(_httpStatusCodes["default"].BAD_REQUEST).json({
              code: _httpStatusCodes["default"].BAD_REQUEST,
              message: "".concat(_context5.t0)
            });

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 9]]);
  }));

  return function resetPassword(_x10, _x11) {
    return _ref5.apply(this, arguments);
  };
}();

exports.resetPassword = resetPassword;