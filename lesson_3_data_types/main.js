/*
    * Kiểu dữ liệu trong Javascript
        1. Primitive data types: giá trị được tạo ra và 
                    lưu vào 1 vùng nhớ cố định (không thể thay đổi giá trị trong vùng nhớ)
            - Number
            - String 
            - Boolean 
            - Undefined
            - Null
            - Symbol
        2. Complex data types: 
            - Function
            - Object:
                - Array
                - Object
                - Reference data
*/

// Number data type
var num = 1; 
var decimal = 10.5;

console.log(typeof num);

// String data type
var string = 'Hello World'
var text = '\'Robin Sharma\' is a famous author.'

// Boolean data type
var isSuccess = true;

// Undefined data type
var age;

// Null data type
var isNull = null;

// Symbol data type
var id = Symbol('id'); // unique

// Function data type
var myFunction = function() {
    alert('Hello, welcome to my Javascript tutorial!')
};

// myFunction();

// Object data type
    // Object(key: value)
    var myObject = {
        name: 'Hong Son',
        age: 21,
        address: 'Ho Chi Minh city'
    };
    // console.log('myInfor', myObject);

    // Array
    var arr = [
        'Javascript',
        'Python',
        'Golang',
        'Java',
        'C++'
    ];
    // console.log(arr);