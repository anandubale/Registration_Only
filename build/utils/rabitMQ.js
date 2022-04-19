"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sender = exports.receiver = void 0;

var _helper = require("../utils/helper");

var amqp = require('amqplib/callback_api');

var sender = function sender(data) {
  amqp.connect('amqp://localhost', function (error0, connection) {
    if (error0) {
      throw error0;
    }

    connection.createChannel(function (error1, channel) {
      if (error1) {
        throw error1;
      }

      var queue = 'Rabit_Queue';
      var msg = JSON.stringify(data);
      channel.assertQueue(queue, {
        durable: false
      });
      channel.sendToQueue(queue, Buffer.from(msg));
    });
  });
};

exports.sender = sender;

var receiver = function receiver() {
  amqp.connect('amqp://localhost', function (error0, connection) {
    if (error0) {
      throw error0;
    }

    connection.createChannel(function (error1, channel) {
      if (error1) {
        throw error1;
      }

      var queue = 'Rabit_Queue';
      channel.assertQueue(queue, {
        durable: false
      });
      console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
      channel.consume(queue, function (msg) {
        console.log(" [x] Received %s", msg.content.toString());
        var tonodmailer = JSON.parse(msg.content); //string object

        console.log(tonodmailer.emailID);
        (0, _helper.Rabbitmq_sendMail)(tonodmailer.emailID);
      }, {
        noAck: true
      });
    });
  });
};

exports.receiver = receiver;
receiver();