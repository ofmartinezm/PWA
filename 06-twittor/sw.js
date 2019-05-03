//imports
importScripts('js/sw-utils.js')
const STATIC_CACHE= 'static_v4';
const DINAMIC_CACHE= 'dinamic_v1';
const INMUTABLE_CACHE= 'inmutable_v1';


//corazon de mi aplicación lo que se debe cargar mas rápido
const APP_SHEL =[
    //'/',
    'index.html',
    'css/style.css',
    'img/favicon.ico',
    'img/avatars/spiderman.jpg',
    'img/avatars/hulk.jpg',
    'img/avatars/ironman.jpg',
    'img/avatars/thor.jpg',
    'img/avatars/wolverine.jpg',
    'js/app.js'
];

const APP_SHEL_INMUTABLE=[
    'https://use.fontawesome.com/releases/v5.3.1/css/all.css',
    'https://fonts.googleapis.com/css?family=Lato:400,300',
    'https://fonts.googleapis.com/css?family=Quicksand:300,400',
    'css/animate.css',
    'js/libs/jquery.js'

];


self.addEventListener('install', e =>{
    const cacheStatic = caches.open(STATIC_CACHE).then(cache =>
        cache.addAll(APP_SHEL));

        const cacheInmutable = caches.open(INMUTABLE_CACHE).then(cache =>
            cache.addAll(APP_SHEL_INMUTABLE));    


    e.waitUntil(Promise.all([cacheStatic, cacheInmutable]));
});

self.addEventListener('activate' , e =>{
    const respuesta= caches.keys().then(keys =>{
        keys.forEach(key=>{
            if(key !=STATIC_CACHE && key.includes('static')){
                return caches.delete(key);
            }

            if(key !=DINAMIC_CACHE && key.includes('dinamic')){
                return caches.delete(key);
            }
        });

    });
    e.waitUntil(respuesta);
});


self.addEventListener('fetch', e =>{
   console.log('entra evento fecth')
    const respuesta= caches.match(e.request).then(res => {
        if (res){
            console.log('prueboooooo',e.request.url);
            return res;
        } else{
            console.log('pruebaaaaaa',e.request.url);
            
            return fetch(e.request).then(newRes=>{
                
                return actualizaCacheDinamico(DINAMIC_CACHE, e.request, newRes);
            
            });
        }

        


    });

    e.respondWith(respuesta);
});


