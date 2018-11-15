function sumar1(numero, callback){
    setTimeout(function(){
        //return numero+1;
        callback(numero+1);
    },800)
    
    
}


sumar1(5,function(nuevoValor){
//console.log(nuevoValor);
sumar1(nuevoValor, function(nuevoValor2)
{
    console.log(nuevoValor2)
});
});