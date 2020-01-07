import axios from "axios";
import requestPromise from 'request-promise';


var user = '1fae0cc6c2aa788ac7c5e6eb2bd0399a9031835d';
var password = "X";

var base64encodedData = new Buffer(user + ':' + password).toString('base64');

// Export an object with a "search" method that searches the Giphy API for the passed query
export default function getData () {
    return requestPromise.get({
        uri: 'https://api.appmonsta.com/v1/stores/android/rankings.json?country=US&date=2019-11-18',
        headers: {
            'Authorization': 'Basic ' + base64encodedData
          },
          json: true
    })
}
