//define command line variables
var PORT = process.argv[2];
var UID = process.argv[3];
var CONSUMER_HOST = 'http://localhost:' + PORT;

var common  = require('invision-common');
var logger  = common.logger.producer;
var Producer = require('./lib/producer');


var producer = new Producer(UID, CONSUMER_HOST);

var time = setInterval(function(){
    var promise = producer.push();

    promise.then(function(response){
        response = JSON.parse(response);
        logger.info('Producer [' + producer.uid + ']: Expression Evaluated ['+ response.expression +']');
    })
    .catch(function(error){
        logger.error('Producer [' + producer.uid + ']: Error Occurred', error);
    });
}, 50);

process.on('SIGINT',function() {
    logger.info("Starting Consumer Service");
    process.exit();
});

