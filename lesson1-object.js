// Bài 1. Viết hàm để lấy danh sách các key của object
// vd :
// var user = {
//     name : "Nguyễn Tiến Đạt",
//     age : 25,
//     email : 'support@xtp.vn'
// };
// => name,age,email



function myFunction(obj) {
    if (typeof obj === "object") {
        return Object.keys(obj)
    }
}
console.log(myFunction(user = { name: "Nguyễn Tiến Đạt", age: 35, email: 'support@xtp.vn ' }));
console.log(myFunction(user = 123))
console.log(myFunction(user = "hello abc"))