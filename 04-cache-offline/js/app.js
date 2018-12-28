

if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js');
}

/* if (window.caches) {
    //abre el cache y si no existe lo crea
    caches.open('prueba-1');
    caches.open('prueba-2');
    //verifica si existe el cache
    //caches.has('prueba-3').then(console.log);
    
    //borra el cache
    //caches.delete('prueba-1').then(console.log);
    caches.open('cache-v1.1').then( cache =>{
        //cache.add('/index.html');
        cache.addAll([
            '/index.html',
            '/css/style.css',
            '/img/main.jpg'
        ]).then(() =>{
            //borrado de algo en el cache
            //cache.delete('/css/style.css');
            
            //reemplazar algo que ya este en el cache por otra cosa
            cache.put('/index.html', new Response('hola mundo rsponse'));

        });
        //verifica si existe o no y devuelve lo que encuentra
       /*  cache.match('/index.html').then(res => {
            res.text().then(console.log);
    
        }); */

    
  /*   });

    caches.keys().then(  keys =>{
        console.log(keys)  ;
    });


    
    
} */ 