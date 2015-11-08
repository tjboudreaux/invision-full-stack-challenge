#!/bin/bash

#install common dependencies
echo "Started common test suite"
cd common
npm test
echo "Finished common test suite"

#install consumer dependencies
echo "Started consumer test suite"
cd ../consumer
npm test
echo "Finished consumer test suite"

#install producer dependencies
echo "Started producer test suite"
cd ../producer
npm test
echo "Finished producer test suite"