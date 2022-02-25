"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var noteController = _interopRequireWildcard(require("../controllers/note.controller"));

var _note2 = require("../validators/note.validator");

var _auth = require("../middlewares/auth.middleware");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var noteRouter = _express["default"].Router(); //create note:


noteRouter.post('', _note2.newNoteValidator, noteController.create); //authentification for Created Post:

noteRouter.get('/auth/', _auth.NoteAuth); //get all notes 

noteRouter.get('', noteController.AllUsers); //get note by id

noteRouter.get('/:_id', noteController.getUserById); //update using put

noteRouter.put('/:_id', noteController.updateById); //delete by id:

noteRouter["delete"]('/:_id', noteController.deleteUser); //understadinf user authentification:
// noteRouter.get('/auth/:_id',noteController.getUser, userAuth );
//have to change is arcive to true by id

noteRouter.put('/archive/:_id', noteController.MakeArchive);
noteRouter.put('/delete/:_id', noteController.DeleteNote);
var _default = noteRouter;
exports["default"] = _default;