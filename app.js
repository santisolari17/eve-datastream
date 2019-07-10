const fs = require('fs'); 
const parse = require('csv-parse');
const options = require('./config/appConfig').CSV_PARSE_OPTIONS

let csvData = [];
let dataCollection = '/collections/players.csv'
const streamOptions = {
    highWatermark: 32 * 1024
}

fs.createReadStream(__dirname + dataCollection, streamOptions)
    .pipe(parse(options))
    .on('data', (csvrow) => {
        console.log('-----------------------------------------')
        console.log(csvrow);
        console.log('-----------------------------------------')
        //do something with csvrow
        csvData.push(csvrow); 
    })
    .on('end', () => {
      //do something wiht csvData
      console.log('stream ended...')
    });

