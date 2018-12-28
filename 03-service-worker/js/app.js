// Detectar si podemos usar Service Workers
if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw1.js')
    .then (reg => {
     /*   setTimeout(() => {
            reg.sync.register('posteo-perros');  
            //console.log('se enviaron fotos de perros al server');
       }, 5000);  */
    Notification.requestPermission().then(result => {
    console.log(result);
    reg.showNotification('hola mundo');
});
});



}



//if(window.SyncManager){}
/* fetch('https://reqres.in/api/users')
.then(resp =>resp.text())
.then(console.log); */

