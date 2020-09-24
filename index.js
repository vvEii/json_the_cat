const {fetchBreedDescription } = require('./breedFetcher');

const name = process.argv[2];

fetchBreedDescription(name, (err, desc) => {
  if (!err) {
    console.log(desc);
  } else {
    console.log(err);
  }
});
