"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cached_data_Redis = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));

var _redis = require("../config/redis");

//named function so should be in { brackets }
var cached_data_Redis = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _redis.client.get('allnotes');

          case 2:
            data = _context.sent;

            if (data == null) {
              next();
            } else {
              res.status(_httpStatusCodes["default"].OK).json({
                code: _httpStatusCodes["default"].OK,
                data: JSON.parse(data),
                Message: "All notes are fetched Successfully from cache"
              });
            }

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function cached_data_Redis(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.cached_data_Redis = cached_data_Redis;