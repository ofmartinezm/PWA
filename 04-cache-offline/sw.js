//const CACHE_NAME='cache-1';

const CACHE_STATIC_NAME='static-v2';
const CACHE_DINAMIC_NAME='dinamic-v1';
const CACHE_INMUTABLE_NAME='inmutable-v1';
const CACHE_DINAMIC_LIMIT=50;

function limpiarCache(cacheName, numeroItems){
    caches.open(cacheName).then(cache =>{
        return cache.keys().then(keys =>{
            //console.log(keys);
            if (keys.length > numeroItems){
                cache.delete(keys[0]).then( limpiarCache(cacheName, numeroItems));
            }

        })

    });

}


self.addEventListener('install', e => {

        const cacheProm = caches.open(CACHE_STATIC_NAME).then(cache => {
           
            return cache.addAll([
                '/',
                '/index.html',
                '/css/style.css',
                '/img/main.jpg',
                '/js/app.js',
                '/img/no-img.jpg'
            ]);

        });


        const cacheInmutable = caches.open(CACHE_INMUTABLE_NAME).then(cache => cache.add('https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'));

      
        // espera hasta que esta promesa se complete
        e.waitUntil(Promise.all([cacheProm, cacheInmutable]));

        
});

self.addEventListener('fetch', e =>{
        // 1 cache only usada cuando sea servido todo desde el cache
       // e.respondWith(caches.match(e.request));

       //2 cache  with network fallback
 /*     const respuesta=  caches.match(e.request).then(res => {
            
        if (res) return res;
            //no existe el archivo tengo que ir a la web
            console.log('no existe', e.request.url);

            return fetch(e.request).then( newResp => {
                //meter la respuesta en el cache
                caches.open(CACHE_DINAMIC_NAME).then(cache => {
                    cache.put( e.request, newResp  );
                    limpiarCache(CACHE_DINAMIC_NAME,5);
                })

                return newResp.clone();
            });

        });


        e.respondWith(respuesta); */

        //3 Network with chache fallback
      /*  const respuesta = fetch(e.request).then(res =>
        {
           if(!res) return caches.match(e.request); 
            caches.open(CACHE_DINAMIC_NAME)
            .then(cache =>{
                cache.put(e.request, res);
                limpiarCache(CACHE_DINAMIC_NAME,CACHE_DINAMIC_LIMIT);
            });
            
            return res.clone();
        }).catch(err => {

            return caches.match(e.request);  
        });


    e.respondWith(respuesta);
 */

 //4 - cache with network update (cuando el rendimiento es crítico)
// las actualizaciones estaran un paso atrás
/* 
if(e.request.url.includes('bootstrap')){
    return e.respondWith(caches.match(e.request));
}

const respuesta= caches.open(CACHE_STATIC_NAME)
.then(cache => {
    fetch(e.request).then(newRes => 
        cache.put(e.request,newRes));
    
        return cache.match(e.request);
});

  
e.respondWith(respuesta); */

//5 cache & network race
const respuesta= new Promise((resolve, reject) => {

    let rechazada = false;
    const falloUnaVez = ()=>{
        if(rechazada){
            if(/\.(png|jpg)$/i.test(e.request.url)){
                resolve(caches.match('/img/no-img.jpg'))
            }else {
                reject('No se encontro respuesta');
            }
        }else{
            rechazada=true;
        }

    };
    
   fetch(e.request).then(res => {
        res.ok ?resolve(res): falloUnaVez();

    }).catch(falloUnaVez);



    caches.match( e.request). then( res =>{
        res ? resolve(res):falloUnaVez();
    }).catch(falloUnaVez);

});


e.respondWith(respuesta); 



})