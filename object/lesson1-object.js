// Bài 1. Viết hàm để lấy danh sách các key của object
// vd :
// var user = {
//     name : "Nguyễn Tiến Đạt",
//     age : 25,
//     email : 'support@xtp.vn'
// };
// => name,age,email

let user = { name: "Nguyễn Tiến Đạt", age: 25, email: "support@xtp.vn" };
let user1 = { name: " Đỗ Đạt", age: 55 };
let user2 = 123456;
let user3 = "hello viet nam";

function myFunction(obj) {
  if (typeof obj === "object") {
    return Object.keys(obj);
  }
  return "error";
}

console.log(myFunction(user));
console.log(myFunction(user1));

console.log(myFunction(user2));
console.log(myFunction(user3));

//dfafsufasf
