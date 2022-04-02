import 'dotenv/config';
import disconnect from 'disconnect';

const UA = 'RecordCollection';
const auth = {
  consumerKey: process.env.DISCOGS_KEY,
  consumerSecret: process.env.DISCOGS_SECRET
};

const Discogs = disconnect.Client;

const db = new Discogs(UA, auth).database();

const q = { title: 'Blackalicious - Melodica' };
db.search(q).then(function (err, result) {
  console.log('RESULT:::', result);
});

console.log(Discogs);
/**
 * 
 curl https://api.discogs.com/releases/249504 --user-agent "FooBarApp/3.0"

 curl https://api.discogs.com/database/search?title=blackalicious&nbsp;&#45;&nbsp;melodica&key=fMPLuQsIaPJHwQwvykVz&secret=CyPcZITZeFbQQyzqQgspHAgyXjlGJAMM --user-agent "RecordCollection"
 curl "https://api.discogs.com/database/search?release_title=Melodica&artist=Blackalicious&key=fMPLuQsIaPJHwQwvykVz&secret=CyPcZITZeFbQQyzqQgspHAgyXjlGJAMM"
 curl "https://api.discogs.com/database/search?type=artist&q=Gift of Gab&key=fMPLuQsIaPJHwQwvykVz&secret=CyPcZITZeFbQQyzqQgspHAgyXjlGJAMM"
 * 
 */
