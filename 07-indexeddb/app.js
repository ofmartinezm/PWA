
// indexedDB: Reforzamiento
let request= window.indexedDB.open('mi-database', 4);

//se actualiza cuando se crea o se sube versión de la BD
request.onupgradeneeded= event =>{
    console.log('actualización BD');
    
    let db= event.target.result;
    
    db.createObjectStore('heroes', {
        keyPath:'id'
    });

    };


    //manejo error
    request.onerror= event =>{
        console.log('DB error:', event.target.error);

    };

    //insertar datos
    request.onsuccess=event =>{
        
        let db= event.target.result;

        let heroesData=[
            {id:'111', heroe: 'Spiderman', mensaje:'Aqui su amigo Spiderman'},
            {id:'222', heroe: 'Ironman', mensaje:'Aqui en mi nuevo Mark 50'}
        ];

        let heroesTransaction=db.transaction('heroes','readwrite');

        heroesTransaction.onerror=event => {
            console.log('Error guardando', event.target.error);
        };

        //informa sobre el exito del la transacción
        heroesTransaction.oncomplete= event=>{
            console.log('Transacción realizada', event);

        };

        let heroesStore= heroesTransaction.objectStore('heroes');

        for(let heroe of heroesData){
            heroesStore.add(heroe);
        }

        heroesStore.onsuccess= event=>{
           console.log( 'Nuevo item agregado a la bd');
        }

    }






