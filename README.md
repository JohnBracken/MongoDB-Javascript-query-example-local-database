# Query a Local MongoDB Database
A local mongoDB database was created of stars data in a JSON file.
A connection was made to it and a Javascript query file was used
to query the data in the database.  The query results were sent
as output to another JSON file.

## List of Files used

- `mongoimport.sh`: Load the `stars.json` file into a local MongoDB stars database.
- `mongod_run.sh`:  Open up a local server to the database.
- `loop_through_database.js`:  Script to query the stars database and output the results.
- `run_stars_query.sh`: Shell script to run javascript query and output the results to `reduced_star_results.json`. 
