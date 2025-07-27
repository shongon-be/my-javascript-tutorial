var greeting = 'This is a tutorial of operators in Javascript!'
console.log(greeting);

/*
    * Operators in Javascript:
        - Arithmetic: Dùng để thực hiện các phép toán cơ bản
            + - * / % 
            ** - lũy thừa -> a ** b = 5 ** 2 = 5^2 = 25.
            a++/++a
            a--/--a
        - Assignment: Gán giá trị cho biến
        - Comparison: Dùng để so sánh 2 giá trị và trả về boolean (true/false)
            * a = 5, b = "5"

            ==	So sánh bằng (coi như ép kiểu)	    a == b	    true
            ===	So sánh bằng (nghiêm ngặt)	        a === b	    false

            !=	Không bằng	                a != b	        false
            !==	Không bằng (nghiêm ngặt)	a !== b	        true

        - Logical: Dùng để kết hợp các biểu thức điều kiện
            && - AND - cả 2 điều kiện đều phải đúng
            || - OR - 1 trong 2 đúng
            ! - NOT - phủ định
*/


/*  
            * a++/++a và a--/--a
    * ✅ ++a là "tăng rồi mới sử dụng" → tiền tố
    * ✅ a++ là "sử dụng rồi mới tăng" → hậu tố
*/
var a = 5;
var b = a++;

var c = 5;
var d = ++c;

console.log('Value of a++ :', b);
console.log('Value of ++a :', d);

console.log('------------------------------------------------');

// * Comparison operators
var num = 10;
var string = '10';
console.log('num type:', num);
console.log('string(text) type:', string);

// * == và ===
console.log('num == string:', num == string);
console.log('num === string:', num === string);
// * != và !==
console.log('num != string?', num != string);
console.log('num !== string?', num !== string);