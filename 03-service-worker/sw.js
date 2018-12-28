
// Ciclo de vida del SW
self.addEventListener('install',event => {
    console.log('SW instalando serviceworker');
    // activa automaticamente despues de hacer cualquier cambio
    //self.skipWaiting();
    const instalacion = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log('instalaciones terminadas!!');
            //self.skipWaiting();
            resolve();
        }, 1000);

    }); 
    

    self.skipWaiting();

    event.waitUntil(  instalacion );
});

//cuando sw toma el control de la aplicacion
self.addEventListener('activate', event => {
    //borrar cache viejo
    console.log('SW listo para controlar la app...');
});
