import _ from 'lodash';
const movie = {
  name: 'King Lion',
  duration: 120,
  similiarMovies: { name: 'Test movie' },
  sound: () => {
    return 'blaa';
  },
};

// json convert will do the trick and deep copy, but it doesn't work with functions.
// const movie2 = JSON.parse(JSON.stringify(movie));

//only a shallow copy, it won't copy the nested objects or arrays (will keep references)
// const movie2 = { ...movie };

const movie2 = _.cloneDeep(movie);

movie.name = 'King Lion 2';
movie.similiarMovies.name = 'Test movie changed';

export default movie2;
