// bài 3. Viết hàm kiểm tra key có tồn tại trong Object không
// vd :
// var user = {
//     name : "Nguyễn Tiến Đạt",
//     age : 25,
//     email : 'support@xtp.vn'
// };
// => checkKey('name') => true
// checkKey('study') => false




let user = { name : "Nguyen Tien Dat" , age : 33 , address : "Nam Dinh"}
let user1 = { phone : "0323143234" }
let user2 = 1231231



function checkKey(obj, keyToCheck){
    if(typeof obj === "object"){
        return keyToCheck in obj;
    } 
    return "error"
}


console.log(checkKey(user, "address"))
console.log(checkKey(user, "name"))
console.log(checkKey(user, "fullname"))
console.log(checkKey(user, "email"))

console.log(checkKey(user2, "school"))
console.log(checkKey(user2, "name"))