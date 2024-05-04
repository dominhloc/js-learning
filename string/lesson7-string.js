// Viết hàm đảo ngược chuỗi. Viết function với đầu vào là 1 chuỗi string. Trả về chuỗi đảo ngược của chuỗi đó
// Ví dụ: reverseStrin('Hello') => Kết quả trả về là 'olleH'


function reverseStrin(str) {
    if (typeof str === "string") {
        let text = str.split("");

        let x = text.reverse();

        repeatStr = x.join("");
        console.log(repeatStr)
    } else {
        console.log("khong hop le")
    }
}
reverseStrin("Hello");
reverseStrin("123456789");
reverseStrin('hehe haha');
reverseStrin(12345);
reverseStrin(null);
reverseStrin(undefined);





