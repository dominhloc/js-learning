// // Bài 3. Viết hàm có tác dụng biến 1 chuỗi thành chỉ viết hoa từ đầu tiên. 
// // Ví dụ: capitalizeString('chÀo MừnG đẾn với xTP') => Kết quả trả về là 'Chào Mừng Đến Với XTP'

let capitalizedString = "cHao Mung deN voi Xtp";
let text = capitalizedString.split(" ");

text = text.map((x, index) => {
    x = x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()
    if (index - (text.length - 1) === 0) {
        x = x.toUpperCase()
    }
    return x
})
let result = text.join(" ")
console.log(result)