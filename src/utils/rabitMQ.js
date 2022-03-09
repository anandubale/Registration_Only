var amqp = require('amqplib/callback_api');
import {Rabbitmq_sendMail} from '../utils/helper';


export const sender = (data)  => {

        amqp.connect('amqp://localhost', function(error0, connection) {                        //1 connect to sserver
        if (error0) {
            throw error0;
        }
        connection.createChannel( function(error1, channel) {                                  //2 create channel
            if (error1) {
                throw error1;
            }

            var queue = 'Rabit_Queue';                                                        //3 defining Queue and data
            var msg = JSON.stringify(data);        //need to use stringfy or something 

            channel.assertQueue(queue, {                                                       //4 assertQueue
                durable: false
            });

            channel.sendToQueue(queue, Buffer.from(msg));                                       //5 sending to Reciver

            console.log(" [x] Sent %s", msg);
            


        });
        // setTimeout(function() {
        //     connection.close();
        //     process.exit(0);
        // }, 500);
    
    });
}


export const receiver = () => {
        amqp.connect('amqp://localhost', function(error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function(error1, channel) {
            if (error1) {
                throw error1;
            }

            var queue = 'Rabit_Queue';

            channel.assertQueue(queue, {
                durable: false
            });

            console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

            channel.consume(queue, function(msg) {
                console.log(" [x] Received %s", msg.content.toString());
                const tonodmailer = JSON.parse(msg.content);
                console.log(tonodmailer.emailID);
                Rabbitmq_sendMail(tonodmailer.emailID);

            }, {
                noAck: true
            });


        });
    });

}

receiver();