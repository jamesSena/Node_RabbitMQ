var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(err, conn) {
  conn.createChannel(function(err, ch) {
    var queue = 'jamesQueue';

    ch.assertQueue(queue, {durable: true});
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
    ch.consume(queue, function(msg) {
      console.log(" [x] Received %s", msg.content.toString());
    }, {noAck: true});
  });
});