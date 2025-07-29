/*
    * Nếu gặp những giá trị dưới đây: 
        - 0
        - ''
        - null
        - NaN
        - undefined
        - false
    -> trả về false trong kiểu boolean
*/

// Nếu các giá trị không bằng với 6 giá trị trên
// Lấy giá trị cuối cùng gán cho biến temp
// var temp = 'a' && 'b'; // -> b

// Nếu gặp phải 6 giá trị trên thì trả về giá trị đó
// var temp = 'a' && 'b' && NaN && 'c'; // -> NaN
// console.log(temp); 


// Nếu các giá trị không bằng với 6 giá trị trên
// Lấy giá trị đầu tiên gán cho biến temp, bỏ qua các giá trị còn lại
// var temp = 'a' || 'b' || 'c'; // -> a

// Nếu gặp phải 6 giá trị trên thì bỏ qua, xét đến giá trị kế tiếp
// var temp = undefined || 'b' || 0; // -> b

// Nếu tất cả giá trị đều nằm trong khoảng 6 giá trị trên mới trả về false (boolean)
var temp = undefined || null || 0;
console.log(temp);

if (temp) {
    console.log('condition true');
} else{
    console.log('condition false');
}
