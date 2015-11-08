//define command line variables
var PORT = process.argv[2];

//loading requirements
var connect    = require('connect');
var http       = require('http');
var bodyParser = require('body-parser');
var app        = connect();
var common     = require('invision-common');
var logger     = common.logger.consumer;
var Expression = require('invision-common').expression;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({verify:false}));

/**
 * @todo Implement a persistent distributed queue structure if I have time.
 */
app.use(function consumer(req, res, next){

    //res.setHeader('Content-Type', 'application/json');

    if (!req.body) return res.sendStatus(400);

    var expressionString = req.body.expression;

    //validate that a mathematical expression was pushed to the consumer.
    if (!expressionString) {
        var message = 'An invalid payload was submitted to the consumer.';
        var error = new TypeError(message);
        error.status = 500;
        error.message = message;
        next(error);

        return;
    }

    logger.info("Consumer received expression [" + expressionString + "]");

    var exp = new Expression(expressionString);
    var result = exp.evaluate();

    logger.info('Consumer evaluated expression ['+ expressionString + result +']');
    res.end(JSON.stringify({ expression: expressionString + result}));
    res.end(JSON.stringify({ body: req.body}));
});

app.use(function on_error(err, req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var message = 'Consumer Error Occurred: ' + err.message;
    res.end(JSON.stringify({message:message, error: err}));
    logger.error(message, {error: err});
});


app.listen(PORT, function(){
    logger.info("Starting Consumer Service on port " + PORT);
});

process.on('SIGINT',function() {
    logger.info("Terminating Consumer Service on port " + PORT);
    process.exit();
});