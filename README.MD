# About eve-datastream

eve-datastream is an app for streaming csv files's rows as javascript objects. It basically takes any csv file you include in the project
and streams every single row as a javascript object, good for making bulk test inputs to other apps that needs to handle incoming data from other sources

## Installation

just simply clone this repo, npm install it, and use it as you need

## Usage

check the format of the csv file in the collections folder and you can edit it or make your own, if you make your own you should change the dataCollection variable to point to your newly added file.


```javascript
// app.js

let dataCollection = '/colections/name_of_your_file.csv'
```

check for the event 'data' to handle every row that's returned and do something with it if you need to. also you can handle the data in the 'end' event

```javascript
    // app.js
    ...
    .on('data', (csvrow) => {
        //do something with csvrow
    })
    .on('end', () => {
      //do something when process ends
    });
```

then just npm start it!

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)