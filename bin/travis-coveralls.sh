#!/bin/bash

#install common dependencies
echo "Started common coveralls generation"
cd common
cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js
echo "Finished common coveralls generation"

#install consumer dependencies
#echo "Started consumer coveralls generation"
#cd ../consumer
#cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js
#echo "Finished consumer coveralls generation"

#install producer dependencies
echo "Started producer coveralls generation"
cd ../producer
cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js
echo "Finished producer coveralls generation"
