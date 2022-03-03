"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendMailTo = void 0;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _logger = _interopRequireWildcard(require("../config/logger"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var sendMailTo = function sendMailTo(sendtoID, token) {
  // 1 - transporter use to transfport to email
  var transport = _nodemailer["default"].createTransport({
    service: "gmail",
    auth: {
      user: process.env.FROM_ID,
      pass: process.env.PASSWORD
    }
  }); // var transport = nodemailer.createTransport('smtps://user%40gmail.com: nanan66398@naluzotan.com');
  //2 transport object


  var formatedMail = {
    form: process.env.FROM_ID,
    to: sendtoID,
    subject: "Password Reset Link",
    html: "<h1>Hii,<br>click on this link</br></h1><h1>href=http://localhost:3000/".concat(token, "</h1>")
  }; //3.send mail with defined transport object

  transport.sendMail(formatedMail, function (err, info) {
    if (err) {
      _logger["default"].log('error', err);
    } else {
      _logger["default"].log('info', info);
    }
  });
};

exports.sendMailTo = sendMailTo;