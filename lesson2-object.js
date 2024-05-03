// Bài 2. Viết hàm để lấy danh sách các value của object
// vd :
// var user = {
//     name : "Nguyễn Tiến Đạt",
//     age : 25,
//     email : 'support@xtp.vn'
// };
// => 'Nguyễn Tiến Đạt',25,'support@xtp.vn'


function myFunction(obj) {
    return Object.values(obj)
}
var user = { name: "Nguyễn Tiến Đạt", age: 25, email: 'support@xtp.vn' };
var value = myFunction(user)
console.log(value)