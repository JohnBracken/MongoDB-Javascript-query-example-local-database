
//Get stars database with this line, but don't need to use right now since it's in mongo shell script to run the query javascript file.
//var stardb = db.getSiblingDB('stars');


//Sample code to perform find query into array of star results and print out their proper names.
/*
for (let star_result of db.getCollection("star_samples").find({}).toArray()){ 
    printjson(star_result["PROPER NAME"]);
}
*/


//Array of all star samples using a mongoDB find query.
var result_array = db.getCollection("star_samples").find({}).toArray();


//Declare array to store reduced star details of a few specific data fields..
var brief_star_details = [];

//Pull out specific star data fields of interest and place them into reduced detail
//objects to store in the brief_star_details_array.
for (let j = 0; j < result_array.length; j++){

    //empty reduced star object to fill.
    let star_object = {proper_name: "", greek_name: "", distance_ly: NaN, stellar_class: ""};

    //Fill reduced star object with values.
    if ('PROPER NAME' in result_array[j]){
        star_object['proper_name'] = result_array[j]['PROPER NAME'];
    }
    if ('GREEK LETTER NAME' in result_array[j]){
        star_object['greek_name'] = result_array[j]['GREEK LETTER NAME'];
    }
    if ('DIST (LY)' in result_array[j]){
        star_object['distance_ly'] = result_array[j]['DIST (LY)'];
    }
    if ('CLASS' in result_array[j]){
        star_object['stellar_class'] = result_array[j]['CLASS'];
    }
    
    //Append reduced star object to the brief_star_details array
    brief_star_details.push(star_object);   
}

//Write brief_star_details array to JSON.  This command can also be directed to output to
//an actual JSON file.
printjson(brief_star_details)

