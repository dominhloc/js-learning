// // Bài 6. Cho 1 chuỗi và 1 số nguyên n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần,
// // ngăn cách nhau bởi dấu gạch ngang. 
// // Ví dụ: repeatString('a', 5) => Kết quả trả về là 'a-a-a-a-a'


function repeatString(str, n) {
    if (n > 1 && typeof n === "number") {
        let x = str.concat("-")
        let y = x.repeat(n)
        y = y.slice(0, y.length - 1)
        console.log(y);
    } else {
        console.log("khong hop le");
    }
}
repeatString("a", 5)
repeatString("a", 0)
repeatString("a", 1)
repeatString("a", 10)
repeatString("b", 2)
repeatString("a", "5")
repeatString("c", "đsd")
