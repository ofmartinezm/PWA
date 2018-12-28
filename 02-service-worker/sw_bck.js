self.addEventListener  ('fetch', event => {
    
    //console.log(event.request.url.includes('.css'));
 /*    if(event.request.url.includes('.jpg')){
        console.log(event.request.url);
        //let fotoReq= fetch('img/main.jpg');
        //let fotoReq= fetch('event.request.url');
        let fotoReq= fetch(event.request);
        event.respondWidth(fotoReq);
    }
}); */
//alt+96 saca los backtick alt+0180=tick 
   
/* if(event.request.url.includes('style.css')){
        let respuesta= new Response(
            `body{
                background-color: red !important;
                color: pink;
            }`, {headers: {
              'Content-Type': 'text/css'  
            }});
            event.respondWith(respuesta);
    }
 */


if(event.request.url.includes('main.jpg')){
    //event.respondWith(fetch('img/main-patas-arriba.jpg'));
    let resp=fetch('img/main-patas-arriba.jpg');
    event.respondWith(resp);
}
});
