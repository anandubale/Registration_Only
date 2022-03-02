"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateById = exports.getUserById = exports.deleteUser = exports.createNotes = exports.MakeArchive = exports.DeleteNote = exports.AllUsers = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _joi = require("@hapi/joi");

var _note = _interopRequireDefault(require("../models/note.model"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

//to create user using Note.create()
var createNotes = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
    var Notebody;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _note["default"].create(body);

          case 2:
            Notebody = _context.sent;
            return _context.abrupt("return", Notebody);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createNotes(_x) {
    return _ref.apply(this, arguments);
  };
}(); //to get all users using Note.find()-->working


exports.createNotes = createNotes;

var AllUsers = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(UserID) {
    var AllUserdata;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _note["default"].find({
              UserID: UserID
            });

          case 2:
            AllUserdata = _context2.sent;
            console.log(AllUserdata);
            return _context2.abrupt("return", AllUserdata);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function AllUsers(_x2) {
    return _ref2.apply(this, arguments);
  };
}(); //Using tow Parameters ->working


exports.AllUsers = AllUsers;

var getUserById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_id, UserID) {
    var dataById;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _note["default"].findById({
              _id: _id,
              UserID: UserID
            });

          case 2:
            dataById = _context3.sent;
            console.log(dataById);
            return _context3.abrupt("return", dataById);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getUserById(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}(); //update user:-> working


exports.getUserById = getUserById;

var updateById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(_id, body) {
    var updatedData;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _note["default"].findByIdAndUpdate({
              ID: ID
            }, body, {
              "new": true
            });

          case 2:
            updatedData = _context4.sent;
            return _context4.abrupt("return", updatedData);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateById(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}(); //delete user using id: working


exports.updateById = updateById;

var deleteUser = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(ID) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _note["default"].findByIdAndDelete(ID);

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteUser(_x7) {
    return _ref5.apply(this, arguments);
  };
}(); //archive using Id; -working


exports.deleteUser = deleteUser;

var MakeArchive = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(_id) {
    var SendingItToArchieve;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _note["default"].findByIdAndUpdate({
              _id: _id
            }, {
              $set: {
                isArchived: true
              }
            });

          case 2:
            SendingItToArchieve = _context6.sent;
            return _context6.abrupt("return", SendingItToArchieve);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function MakeArchive(_x8) {
    return _ref6.apply(this, arguments);
  };
}(); //delete true --> working


exports.MakeArchive = MakeArchive;

var DeleteNote = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(_id) {
    var DeletingIt;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _note["default"].findByIdAndUpdate({
              _id: _id
            }, {
              $set: {
                isDeleted: true
              }
            });

          case 2:
            DeletingIt = _context7.sent;
            return _context7.abrupt("return", DeletingIt);

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function DeleteNote(_x9) {
    return _ref7.apply(this, arguments);
  };
}();

exports.DeleteNote = DeleteNote;