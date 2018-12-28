self.addEventListener  ('fetch', event => {
   /*  event.respondWith(
        fetch(event.request)
        .then(resp =>{
            
            // if (resp.ok) {
            //     return resp;
            // } else {
            //     return fetch('img/main.jpg');
            // }  
            

        })
    );  
   */


    const resp= fetch(event.request)
    .then(resp => {
        return resp.ok ? resp : fetch('img/main-patas-arriba.jpg');
    });
    event.respondWith(resp);

});
