//  Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không 
//  (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc false. 
//  Ví dụ 'Race car' trả về true, 'hello world' trả về false.

function myFunction(str) {
    if (typeof str === "string") {
        let text = str.toLowerCase()
        let repeatStr = text.reve
        console.log(text);
    } else {
        console.log("không hợp lệ");
    }
}
myFunction("Race car");