// Bài 1. Viết hàm để lấy danh sách các key của object
// vd :
// var user = {
//     name : "Nguyễn Tiến Đạt",
//     age : 25,
//     email : 'support@xtp.vn'
// };
// => name,age,email






function myFunction(obj) {
    return Object.keys(obj)
}
var user = { name: "Nguyễn Tiến Đạt", age: 25, email: 'support@xtp.vn ' };
var key = myFunction(user);
console.log(key);