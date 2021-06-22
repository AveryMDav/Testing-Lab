const {returnTwo, greeting, add, multiply, divide, subtract} = require('./functions.js')

test('Function should return the number 2', function(){
    expect(returnTwo()).toBe(2)
});

test('Function should greet the user with their name', function(){
    expect(greeting('James')).toEqual('Hello, James')
})

test('Function should return sum of two numbers', function(){
    expect(add(3, 5)).toEqual(8)
})

function ranNum(){
    return Math.floor(Math.random() * 10) + 1
};

describe('Math Functions', function(){
test('Function should return two numbers multiplied', ()=> {
    expect(multiply(5, 2)).toEqual(10);
    expect(multiply(ranNum(), 2)).toBeGreaterThanOrEqual(2);
});

test('Function should return two numbers divided', ()=>{
    expect(divide(10, 2)).toEqual(5);
    expect(divide(15648, 2)).toBeGreaterThan(500)
});

test('function should return two numbers', ()=>{
    expect(subtract(5, 3)).not.toBeNaN();
    expect(subtract(10, 5)).toBe(5);
});
})