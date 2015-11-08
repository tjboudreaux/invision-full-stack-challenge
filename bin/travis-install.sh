#!/bin/bash


#install common dependencies
echo "Started common lib install"
cd common
npm install
echo "Finished common lib install"

#install consumer dependencies
echo "Started consumer lib install"
cd ../consumer
npm install
echo "Finished consumer lib install"

#install producer dependencies
echo "Started producer lib install"
cd ../producer
npm install
echo "Finished producer lib install"