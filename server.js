const { MongoClient } = require("mongodb");
const uri = 'mongodb://iapp:iapptech12345@ds155665.mlab.com:55665/heroku_02qpmwnv';  // mongodb://localhost - will fail

let seedData = [
  {
    decade: '1970s',
    artist: 'Debby Boone',
    song: 'You Light Up My Life',
    weeksAtOne: 10
  },
  {
    decade: '1980s',
    artist: 'Olivia Newton-John',
    song: 'Physical',
    weeksAtOne: 10
  },
  {
    decade: '1990s',
    artist: 'Mariah Carey',
    song: 'One Sweet Day',
    weeksAtOne: 16
  }
];

(async function() {
  try {

    const client = await MongoClient.connect(uri,{ useNewUrlParser: true });
    

    let db = client.db('heroku_02qpmwnv');
    let songs = db.collection('songs');
    
      console.log("here");


    songs.insertMany(seedData, function(err, result) {

    if(err) throw err;
    
    
    });
    
    // ... anything

    client.close();
  } catch(e) {
    console.error(e)
  }

})()



return false;


