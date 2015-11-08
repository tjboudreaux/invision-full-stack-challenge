#!/bin/bash

#install common dependencies
cd common
npm install

#install consumer dependencies
cd ../consumer
npm install

#install producer dependencies
cd ../producer
npm install