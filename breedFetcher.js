const request = require('request');

const fetchBreedDescription = function (name, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?name=${name}`,
    (err, data, body) => {
      if (!err) {
        let data = JSON.parse(body);
        if (data.length !== 0) {
          callback(null, data[0].description);
        } else {
          callback(null, 'The cat is not found');
        }
      } else {
        callback(err, null);
      }
    }
  );
};

module.exports = { fetchBreedDescription };
