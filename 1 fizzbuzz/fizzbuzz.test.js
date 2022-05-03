// cal crear una variable al principi de tot, per poder importar el mòdul del js amb les funcions del test
const {fizzbuzz, returnDiv, returnAdult}=require("./fizzbuzz");

//1 - KATA FIZZBUZZ PART 1

test('should return Fizz if param is 3 div', () => {
    let num= 6;

    //expect
    let result = fizzbuzz(num);
    expect(result).toBe("Fizz"); 

    // si és correcte, el test passa, si el resultat és diferent sortirà error al test.
    // let result = 4+4 --> es pot refactoritzar el codi perquè quedi més maco.
});

test('should return Buzz if param is 5 div', () => {
    let num= 10;
    
    let result = fizzbuzz(num);
    expect(result).toBe("Buzz"); 
});

test ('should return FizzBuzz if param is 3 and 5 div',()=> {
    let num= 15;
    
    let result = fizzbuzz(num);
    expect(result).toBe("FizzBuzz");
});

test ('should return the same number if param is not 3 or 5 div', ()=>{
    let num= 11;

    let result = fizzbuzz(num)
    expect(result).toBe(num);
})

// PART 2

test ('should return an array of numbers div by num', ()=>{

    let result = returnDiv(10, [1, 2, 3, 5, 10, 25, 29, 40, 42, 50]);
    expect(result).toStrictEqual([10,40,50]);
})

// PART 3

test ('should return an array with only adult of users array', ()=>{

    const users = [
        {
            name: 'Agnès',
            age: 27
        },
        {
            name: 'Nil',
            age: 23
        },
        {
            name: 'Africa',
            age: 0
        },
        {
            name: 'Marina',
            age: 28
        }
    ]
    let usersOutput = [
        {
            name: 'Agnès',
            age: 27
        },
        {
            name: 'Nil',
            age: 23
        },
        {
            name: 'Marina',
            age: 28
        }
    ]
    
    let result = returnAdult(users);
    expect(result).toStrictEqual(usersOutput);
})
