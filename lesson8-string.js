//  Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không 
//  (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc false. 
//  Ví dụ 'Race car' trả về true, 'hello world' trả về false.

function myFunction(str) {
    if (typeof str === "string") {
        let text = str.toLowerCase().replace(/\s/g, ''); // .replace(/\s/g, '') 
        return text === text.split('').reverse().join('');
    } else {
        console.log("không hợp lệ");
    }
}
console.log(myFunction("A L O L "));
console.log(myFunction("Race car"));
console.log(myFunction("hello world"));
console.log(myFunction("xin chao"));
console.log(myFunction("O L O l O"));




