export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAvfgTztCa8bEaffEZ5Jyr7iHkfmFV85KA',
    authDomain: 'netflix-mm.firebaseapp.com',
    projectId: 'netflix-mm',
    storageBucket: 'netflix-mm.appspot.com',
    messagingSenderId: '46618907507',
    appId: '1:46618907507:web:ff4cf74f09c41b43256b06',
  },

  tmdb: {
    api_key: 'a97c8c6c69deb1118aa07fe599c940d7',
    movie_base_url: 'https://api.themoviedb.org/3/movie/',
    search_movie_url: 'https://api.themoviedb.org/3/search/movie?query=',

    tv_shows_base_url: 'https://api.themoviedb.org/3/tv/',
    search_tv_show_url: 'https://api.themoviedb.org/3/search/tv?query=',
  },
};
