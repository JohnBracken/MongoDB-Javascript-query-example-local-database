#!/bin/bash

#Connect to localhost/server and the 'stars' database in that server.  Run javascript/mongoDB query file and output the results to a JSON file.
#The --quiet option prevents the mongoDB header info from going into your JSON output file.
mongo --quiet mongodb://localhost:27017/stars loop_through_database.js > reduced_star_results.json
