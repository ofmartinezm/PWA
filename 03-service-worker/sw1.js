
// Ciclo de vida del SW
self.addEventListener('install',event => {
    console.log('SW instalando serviceworker...');
    // activa automaticamente despues de hacer cualquier cambio
    //self.skipWaiting();
    const instalacion = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log('instalaciones terminadas!!');
            
            resolve();
        }, 1000);
        self.skipWaiting();

    }); 
    

   

    event.waitUntil(  instalacion );
});

//cuando sw toma el control de la aplicacion
self.addEventListener('activate', event => {
    //borrar cache viejo
    console.log('SW listo para controlar la app!!!');
});

//fetch manejo peticiones http
self.addEventListener('fetch', event =>{
    //aplicar estrategias del cache
   /*  console. log('SW: ', event.request.url);

    if(event.request.url.includes('https://reqres.in/')){
        const resp =new Response(                       
            `{ok: false, mensaje: 'jojojojo'}`
        );
        event.respondWith(resp);
    } */


});

//syn recuperamos conexion a internet
self.addEventListener('sync', event =>{
    /* console.log('tenemos conexion!!!');
    console.log(event);
    console.log(event.tag);
 */
});

//push manejar las push notificaciones
self.addEventListener('push', event =>{
    console.log('notificacion recibida');
}
)
