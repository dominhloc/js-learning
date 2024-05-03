// // Bài 5. Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, 
// // ngăn cách nhau bởi dấu gạch ngang. 
// // Ví dụ: repeatString('a') => Kết quả trả về là 'a-a-a-a-a-a-a-a-a-a'

function repeatString(obj) {
    if (typeof obj === "string") {
        let x = obj.concat(" - ");
        let y = x.repeat(10);
        y = y.slice(0, y.length - 2)
        console.log(y);
    } else {
        console.log("không hợp lệ ");
    }
}
repeatString("a");
repeatString("alo");
repeatString("he lô");
repeatString(1);
repeatString(null);
repeatString(undefined);







// function repeatString(obj) {
//     return obj
// }
// let obj = "a";
// let x = obj.padEnd(2, "-");
// let y = x.repeat(10);
// y = y.slice(0, y.length - 1)
// console.log(y);