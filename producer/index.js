//define command line variables
var PORT = process.argv[2];
var NUM_OF_PRODUCERS = process.argv[3];
var CONSUMER_HOST = 'http://localhost:' + PORT;

var common  = require('invision-common');
var logger  = common.logger.producer;
var ProducerFactory = require('./lib/producer-factory');
var factory = new ProducerFactory(CONSUMER_HOST);

var producer = factory.create();

var time = setInterval(function(){
    var promise = producer.push();

    promise.then(function(response){
        logger.info('Producer response', response);
    })
    .catch(function(error){
        logger.error('Producer [' + producer.uid + '] error occurred pushing expression to consumer.', error);
    });
}, 5000);



process.on('SIGINT',function() {
    logger.info("Starting Consumer Service");
    process.exit();
});

