"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PassAuth = exports.NoteAuthentication = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _winston = require("winston");

/**
 * Middleware to authenticate if user has a valid Authorization token
 * Authorization: Bearer <token>
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
//need to generate token first:
var NoteAuthentication = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var bearerToken;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            bearerToken = req.header('Authorization'); //checking if bearer is not defined 

            if (bearerToken) {
              _context.next = 4;
              break;
            }

            throw {
              code: _httpStatusCodes["default"].BAD_REQUEST,
              message: 'Authorization token is required'
            };

          case 4:
            //choosing the second from string - second thing will have SECRET_CODE
            bearerToken = bearerToken.split(' ')[1]; // header + creditials + secret 

            _jsonwebtoken["default"].verify(bearerToken, process.env.FORGET_PASS_CODE, function (err, verifedtoken) {
              if (err) throw {
                code: _httpStatusCodes["default"].BAD_REQUEST,
                message: 'Authorization token is incorrect'
              };else {
                // req.body['data'] = verifedtoken; //this verified token will have email id ,id
                // console.log(req.body.data);
                req.body = verifedtoken;
                req.body['UserID'] = verifedtoken.id;
                console.log(req.body.UserID);
                next();
              }
            });

            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            next(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function NoteAuthentication(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.NoteAuthentication = NoteAuthentication;

var PassAuth = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var bearerToken;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            bearerToken = req.header('Authorization'); //checking if bearer is not defined 

            if (bearerToken) {
              _context2.next = 4;
              break;
            }

            throw {
              code: _httpStatusCodes["default"].BAD_REQUEST,
              message: 'Authorization token is required'
            };

          case 4:
            //choosing the second from string - second thing will have SECRET_CODE
            bearerToken = bearerToken.split(' ')[1]; // alg + creditials + secret 

            _jsonwebtoken["default"].verify(bearerToken, process.env.FORGET_PASS_CODE, function (err, verifedtoken) {
              if (err) throw {
                code: _httpStatusCodes["default"].BAD_REQUEST,
                message: 'Authorization token is incorrect'
              };else {
                req.body['data'] = verifedtoken; //this verified token will have email id ,id

                next();
              }
            });

            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            next(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function PassAuth(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.PassAuth = PassAuth;