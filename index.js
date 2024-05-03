




// // -------- Bài tập Object --------- //
// // --------------------------------- //



///// bai lam 1

// function myFunction(obj) {
//     return Object.keys(obj)
// }
// var user = { name: "Nguyễn Tiến Đạt", age: 25, email: 'support@xtp.vn ' };
// var key = myFunction(user);
// console.log(key);


//// bai lam 2
// function myFunction(obj) {
//     return Object.values(obj)
// }
// var user = { name: "Nguyễn Tiến Đạt", age: 25, email: 'support@xtp.vn' };
// var value = myFunction(user)
// console.log(value)


//bai lam 3
// function checkKey(obj, keyToCheck) // obj là đối tượng cần kiểm tra 
// {                                   // keyTocheck là từ khóa muốn kiểm tra
//     return keyToCheck in obj; // kết quả -- phương thức kiểm tra xem đối tượng có chứa từ khóa không?
// }
// var user = { name: "Nguyễn Tiến Đạt", age: 25, email: 'support@xtp.vn' };
// console.log(checkKey(user, 'hdhsdf')); // với công thức ở bên trên


// bai lam 4

// function getLengthObject(obj) {
//     return Object.keys(obj).length;
// }
// var user = { name: "Nguyễn Tiến Đạt", age: 25, email: 'support@xtp.vn' };
// var length = getLengthObject(user);
// console.log(length);



// Bài 5. Cho mảng các user
// mỗi user có cấu trúc như sau

// user = {
//     name : string,
//     age : number,
//     isStatus : bool
// }
// Viết function lấy ra những user có tuổi > 25 và isStatus = true


// function checkStringExist(array) {
//     return array.filter(user => user.age > 25 && user.isStatus === true);
// }
// const array = [
//     user1 = { name: "Nguyễn Van A", age: 20, isStatus: true },
//     user2 = { name: "Tran Van B", age: 26, isStatus: true },
//     user3 = { name: "Do Van C", age: 30, isStatus: false },
//     user4 = { name: "Do Van C", age: 35, isStatus: true }
// ]
// const array1 = checkStringExist(array);
// console.log(array1);

