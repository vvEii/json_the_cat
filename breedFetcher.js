const request = require('request');
const name = process.argv[2];

request(
  `https://api.thecatapi.com/v1/breeds/search?name=${name}`,
  (err, data, body) => {
    if (!err) {
      let data = JSON.parse(body);
      if (data.length === 0) {
        console.log('The cat is not found!');
      } else {
        console.log(data[0].description);
      }
    } else {
      console.log(err);
    }
  }
);
