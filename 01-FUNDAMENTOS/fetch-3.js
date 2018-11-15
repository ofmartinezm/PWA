

let usuario= {
    nombre: 'oscar',
    edad: 39
};

fetch('https://reqres.in/api',{
    method: 'POST',
    body: JSON.stringify(usuario),
    headers: {
        'Content-Type':'application/json'
    }

})
.then(resp => resp.json())
.then( console.log).catch( error =>{
    console.log('error en la peticion');
    console.log(error);
}
);
