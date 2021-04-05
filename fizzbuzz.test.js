//1.Hacemos un require del módulo para que lo podamos utilizar:
const fizzbuzz = require('./fizzbuzz');

//2.Creamos un describe que contendrá los distintos test:
describe('fizzbuzz', () => {
    //4.Creamos el test para comprobar que el argumento de la función sea de tipo number:
    test('should print and error message if the argument is not a number', () => {
        const expected = "Error: The argument must be a number";
        const result = fizzbuzz("16");
        expect(expected).toBe(result);
    });

    //3.Creamos el primer test para verificar que el test se ejecuta con exito:
    // test('test', () => {
    //     expect(true).toBe(true);
    // });

    //5.Creamos el test para comprobar que el primer número que se imprima (1) sea 1:
    test('should print 1 if they receive 1', () => {
        const expected = 1;
        const result = fizzbuzz(1);
        expect(expected).toBe(result);
    });

    //6.Creamos el test para comprobar que se imprima "fizz" cuando el número sea 3:
    test('should print fizz if they receive 3', () => {
        const expected = 'fizz';
        const result = fizzbuzz(3);
        expect(expected).toBe(result);
    });

    //7.Creamos el test para comprobar que se imprima "fizz" cuando el número sea múltiplo de 3.
    test('should print fizz if they receive a multiple of 3', () => {
        const expected = 'fizz';
        const result = fizzbuzz(6);
        expect(expected).toBe(result);
    });

    //8.Creamos el test para comprobar que se imprima "buzz" cuando el número sea 5.
    test('should print buzz if they receive 5', () => {
        const expected = 'buzz';
        const result = fizzbuzz(5);
        expect(expected).toBe(result);
    });

    //9.Creamos el test para comprobar que se imprima "buzz" cuando el número sea múltiplo de 5.
    test('should print buzz if they receive a multiple of 5', () => {
        const expected = 'buzz';
        const result = fizzbuzz(10);
        expect(expected).toBe(result);
    });

    //10.Creamos el test para comprobar que se imprima "fizzbuzz" cuando el número sea múltiplo de 3 y de 5.
    test('should print fizzbuzz if they receive a multiple of 3 and 5', () => {
        const expected = 'fizzbuzz';
        const result = fizzbuzz(15);
        expect(expected).toBe(result);
    });

});