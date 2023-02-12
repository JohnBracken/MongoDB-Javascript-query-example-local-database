#!/bin/bash

#Import a JSON file of stars data into a local MongoDB database.
mongoimport --db stars --collection star_samples --file ./stars/stars.json --jsonArray
