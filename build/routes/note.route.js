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


noteRouter.post('', _auth.NoteAuthentication, noteController.create); //get all notes 

noteRouter.get('', _auth.NoteAuthentication, noteController.AllUsers); //get note by id

noteRouter.get('/:_id', _auth.NoteAuthentication, noteController.getUserById); //update using put

noteRouter.put('/:_id', _auth.NoteAuthentication, noteController.updateById); //delete by id:

noteRouter["delete"]('/:_id', _auth.NoteAuthentication, noteController.deleteUser); //have to change is arcive to true by id

noteRouter.put('/archive/:_id', _auth.NoteAuthentication, noteController.MakeArchive); //have to change is trash to true by id

noteRouter.put('/trash/:_id', _auth.NoteAuthentication, noteController.TrashNote);
var _default = noteRouter; // export const resetPassword = async (body) => {
// const resetPass = await User.findByIdAndUpdate( body.UserID,
//   body,
//     {
//         $set: { password: body.password },
//     }
//   );
// body,
// {
//   new :true
// }
// console.log("Changed Password: " + resetPass.password);
//   const hashP = bcrypt.hashSync(resetPass.password ,10);
//   resetPass.password = hashP;
//   return resetPass;
// }

exports["default"] = _default;