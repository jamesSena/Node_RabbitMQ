var amqp = require('amqplib/callback_api');
amqp.connect('amqp://localhost', function(err, conn) {
conn.createChannel(function(err, ch) {
   var queue = 'jamesQueue';

    ch.assertQueue(queue, {durable: true});
    ch.sendToQueue(queue, new Buffer('Primeira Msg enviada via node!'));
    console.log(" [x] Sent 'Primeira Msg enviada via node!'");
  });

setTimeout(function() { conn.close(); process.exit(0) }, 500);
});