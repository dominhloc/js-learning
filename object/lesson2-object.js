// Bài 2. Viết hàm để lấy danh sách các value của object
// vd :
// var user = {
//     name : "Nguyễn Tiến Đạt",
//     age : 25,
//     email : 'support@xtp.vn'
// };
// => 'Nguyễn Tiến Đạt',25,'support@xtp.vn'



let user = { name : "Nguyễn Tiến Đạt", age : 25, email : 'support@xtp.vn' };
let user1 = { name : " Đỗ Đạt", age : 55 };
let user2 = 123456;
let user3 = "hello viet nam";


function myFunction(obj) {
    if(typeof obj === "object"){
        return Object.values(obj)
    }
    return " error "
}

console.log(myFunction(user))
console.log(myFunction(user1))
console.log(myFunction(user2))
console.log(myFunction(user3))
