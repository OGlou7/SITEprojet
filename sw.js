var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/SITEprojet/style.css',
  '/SITEprojet/script.js',
  '/SITEprojet/logo.jpg',
  '/SITEprojet/img/artisanal-food-cheese-cooking-905847.jpg',
  '/SITEprojet/img/blur-burn-chocolate-1082342.jpg',
  '/SITEprojet/img/blur-burn-dark-1082343.jpg',
  '/SITEprojet/img/bright-dark-design-846944.jpg',
  '/SITEprojet/img/crown-agency-216105-unsplash.jpg',
  '/SITEprojet/img/foodiesfeed.com_basic-italian-pizza-margherita.jpg',
  '/SITEprojet/img/crown-agency-216105-unsplash.jpg',
  '/SITEprojet/img/jon-tyson-204115-unsplash.jpg',
  '/SITEprojet/img/katarzyna-grabowska-397453-unsplash.jpg',
  '/SITEprojet/img/malcolm-lightbody-591458-unsplash.jpg' ,
  '/SITEprojet/img/markus-spiske-253727-unsplash.jpg' ,
  '/SITEprojet/img/masaaki-komori-671599-unsplash.jpg' ,
  '/SITEprojet/img/michael-browning-188999-unsplash.jpg' ,
  '/SITEprojet/img/nadya-spetnitskaya-544606-unsplash.jpg' ,
  '/SITEprojet/img/roberta-sorge-142255-unsplash.jpg' ,
  '/SITEprojet/img/tim-mossholder-678979-unsplash.jpg' ,
  '/SITEprojet/img/wine-dharma-614290-unsplash'


];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
