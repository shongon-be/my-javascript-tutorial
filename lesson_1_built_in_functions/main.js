//  Khai báo biến - variable:
//  var variableName;
var fullName = 'Created by Nguyen Tran Hong Son';
var age = 21;

alert(fullName);
alert(age);

/* 
     * Built-in functions:

        - Alert: Hiển thị hộp thoại cảnh báo (popup) với nội dung là chuỗi 'message'.
            - Dừng chương trình cho đến khi người dùng bấm "OK".

        - Console: Dùng để in thông tin ra tab Console trong trình duyệt - browser.
            - log: In thông tin bình thường (debug, log output).
            - error: In lỗi (hiển thị màu đỏ).
            - warn: In cảnh báo (hiển thị màu vàng).
            - info: In thông tin (gần giống log).
            - assert: In lỗi nếu biểu thức là false.

        - Confirm: Hiển thị hộp thoại xác nhận Yes/No. (popup)
            - Trả về true nếu chọn "OK", false nếu chọn "Cancel".

        - Prompt: Hiển thị hộp thoại nhập dữ liệu. (popup)
            - Trả về giá trị người dùng nhập (string) hoặc null nếu Cancel.

        - Set timeout: Chạy callback sau một khoảng thời gian (ms).
            - setTimeout(callback, delay)

        - Set interval: Lặp lại callback sau mỗi khoảng interval (ms)
                cho đến khi bị dừng bằng clearInterval.
            - setInterval(callback, interval)    
*/


// Console
console.log("This is a log");
console.error("This is an error");
console.warn("This is a warning");
console.info("This is info");
console.assert(1 === 2, "Something went wrong"); // In nếu sai


// Confirm
const result = confirm("Are you 18?");
if (result) {
    console.log("User confirmed.");
} else {
    console.log("User canceled.");
}


//Prompt
const name = prompt("What's your name?", "Anonymous");
console.log("User's name is:", name);


// setTimeout
setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);


// setInterval
const timer = setInterval(() => {
    console.log("Repeats every 1 second");
}, 1000);

    // Dừng sau 5 giây
setTimeout(() => clearInterval(timer), 5000);
