"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateById = exports.getNoteById = exports.deleteNote = exports.createNotes = exports.TrashNote = exports.MakeArchive = exports.AllNotes = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _joi = require("@hapi/joi");

var _note = _interopRequireDefault(require("../models/note.model"));

var _redis = require("../config/redis");

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
            console.log(Notebody);

            if (!Notebody) {
              _context.next = 8;
              break;
            }

            _context.next = 7;
            return _redis.client.del('allnotes');

          case 7:
            return _context.abrupt("return", Notebody);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createNotes(_x) {
    return _ref.apply(this, arguments);
  };
}(); //to get all users using Note.find()


exports.createNotes = createNotes;

var AllNotes = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(UserID) {
    var AllNotedata;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _note["default"].find({
              UserID: UserID
            });

          case 2:
            AllNotedata = _context2.sent;

            if (!(AllNotedata.length == 0)) {
              _context2.next = 7;
              break;
            }

            throw new Error("user dont have any notes");

          case 7:
            _context2.next = 9;
            return _redis.client.set('allnotes', JSON.stringify(AllNotedata));

          case 9:
            return _context2.abrupt("return", AllNotedata);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function AllNotes(_x2) {
    return _ref2.apply(this, arguments);
  };
}(); //Using tow Parameters


exports.AllNotes = AllNotes;

var getNoteById = /*#__PURE__*/function () {
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

            if (!(dataById == null)) {
              _context3.next = 7;
              break;
            }

            throw new Error("There is no note with this ID");

          case 7:
            return _context3.abrupt("return", dataById);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getNoteById(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}(); //update user


exports.getNoteById = getNoteById;

var updateById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(_id, body) {
    var checking, updatedData;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _note["default"].findById(_id);

          case 2:
            checking = _context4.sent;

            if (!(checking == null)) {
              _context4.next = 7;
              break;
            }

            throw new Error("There is no note with this ID");

          case 7:
            _context4.next = 9;
            return _note["default"].findByIdAndUpdate({
              _id: _id
            }, body, {
              "new": true
            });

          case 9:
            updatedData = _context4.sent;
            return _context4.abrupt("return", updatedData);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateById(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateById = updateById;

var deleteNote = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(_id, body) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _note["default"].findByIdAndDelete({
              _id: _id,
              UserID: body.UserID
            });

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteNote(_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteNote = deleteNote;

var MakeArchive = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(_id, body) {
    var SendingItToArchieve;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _note["default"].findByIdAndUpdate({
              _id: _id,
              UserID: body.UserID
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

  return function MakeArchive(_x9, _x10) {
    return _ref6.apply(this, arguments);
  };
}();

exports.MakeArchive = MakeArchive;

var TrashNote = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(_id, body) {
    var TrashingIt;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _note["default"].findByIdAndUpdate({
              _id: _id,
              UserID: body.UserID
            }, {
              $set: {
                isDeleted: true
              }
            });

          case 2:
            TrashingIt = _context7.sent;
            return _context7.abrupt("return", TrashingIt);

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function TrashNote(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();

exports.TrashNote = TrashNote;