//1.Creamos la función que corrobora que los números que sean múltiplos de 3 impriman "fizz", los múltiplos de 5 impriman "buzz" y los múltiplos de ambos impriman "fizzbuzz":
function fizzbuzz(num) {
    //17. Hacemos una última comprobación para corroborar que el dato que le pasamos a la función sea de tipo number:
    if(typeof num !== 'number') {
        return "Error: The argument must be a number";
    }

    //13.Podemos refactorizar el código creando una constante y una arrow function y reemplazando en las cláusulas:
    const divisible = (divisor, num) => num % divisor === 0;

    //12.Si el número es 0, devuelve 0, debemos poner esta cláusula en primer lugar para que el 0 no imprima "fizzbuzz":
    if(num === 0) {
        return 0;
    }
    //8.Si el número es múltiplo de 3 y de 5, retornamos fizzbuzz, debemos poner esta cláusula en segundo lugar:
    // if(num % 3 === 0 && num % 5 === 0) {
    //     return 'fizzbuzz';
    // }

    //14.Refactorizamos la cláusula anterior:
    if(divisible(3,num) && divisible(5,num)) {
        return 'fizzbuzz';
    }

    //5.Si el número es un múltiplo de 3, retornamos fizz:
    // if(num % 3 === 0) {
    //     return 'fizz';
    // }

    //15.Refactorizamos la cláusula anterior:
    if(divisible(3,num)) {
        return 'fizz';
    }

    //4.Si el número es 3, retornamos fizz:
    // if(num === 3) {
    //     return 'fizz';
    // }

    //7.Si el número es un múltiplo de 5, retornamos buzz:
    // if(num % 5 === 0) {
    //     return 'buzz';
    // }

    //16.Refactorizamos la cláusula anterior:
    if(divisible(5,num)) {
        return 'buzz';
    }
    
    //6.Si el número es 5, retornamos buzz:
    // if(num === 5) {
    //     return 'buzz';
    // }

    //3.Retornamos cualquier número para comprobar que se imprime un número:
    return num;
}

//9.Creamos la función que imprime la lista de números:
function print(num) {
    for(let i=0; i<=num; i++) {
        console.log(`${i}: ${fizzbuzz(i)}`);
    }
}

//10.Llamamos a la función creada anteriormente y le pasamos el número al que queremos que llegue la lista:
print(16);
//11.En la terminal tipiamos node fizzbuzz para visualizar la lista.

//2.Exportamos el módulo para que pueda utilizarse en los test:
module.exports = fizzbuzz;