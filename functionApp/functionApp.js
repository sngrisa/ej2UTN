let sum = (a, b, callback) => {
    console.log(a + b);
    return callback();
}

let holaMundo = () => {
    return "hola mundo";
}


console.log(sum(4, 5, holaMundo));

/*

1 - Una función de callback es una función que se pasa a otra 
función como un argumento, que luego se invoca dentro de la función 
externa para completar algún tipo de rutina o acción.

2 - Se utiliza cuando queremos usar el resultado de una funcion en otra función,
acoplando funciones, en caso contrario se llega a que callback no es una función
error de ejecucción.

*/