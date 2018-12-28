


self.addEventListener('fetch', event =>{
   /*  const offLineresp= new Response(
        `
          Bienvenido a mi pagina web, 
          disculpa pero para usarla necesitas
          INTERNET  
        `
    ) */
    /* const offLineresp= new Response(
        
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Mi PWA</title>
       </head>
        <body class="container p-3">
            <h1> offline MODE!!!!!</h1>
        </body>
        </html>
        `,{
            headers :{
                'Content-Type': 'text/html'
            }
        }
    );
 */
    const offLineresp = fetch('pages/offline.html');
    const resp= fetch(event.request).
    catch( () =>offLineresp);

    event.respondWith(resp);
});