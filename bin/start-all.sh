#!/bin/bash

cd consumer
npm run-script start-forever

cd ../producer
npm run-script start-forever