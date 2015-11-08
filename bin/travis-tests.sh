#!/bin/bash

#install common dependencies
cd common
npm test

#install consumer dependencies
cd ../consumer
npm test

#install producer dependencies
cd ../producer
npm test