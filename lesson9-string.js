// Bài 9: Kiểm tra 1 chuỗi có phải là chuỗi viết hoa hay không?


function myFunction(str) {
    if (typeof str === "string") {
        return str === str.toUpperCase();
    }
}
console.log(myFunction("Hello"))
console.log(myFunction("HELLO"))
console.log(myFunction(1234))
console.log(myFunction("1234"))
console.log(myFunction(null))


