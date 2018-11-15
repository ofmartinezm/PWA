function sumar1(numero){
    var promesa = new Promise(function(resolve, reject){
        console.log(numero);
        if (numero>=7){
            return reject('el numero es mayor a 7');

        }
        setTimeout(function(){
           
            resolve(numero+1);
        },800)
   });
    
    
    return promesa;
    
}


sumar1(5).then(sumar1).
    then(sumar1).
    then(nuevoNumero=>{
    console.log(nuevoNumero);
    return sumar1(nuevoNumero);
    
}).catch(error=>{
    console.log('error en promesa');
    console.log(error);
})
; 


