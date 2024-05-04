// bài 4. Viết hàm kiểm tra Object có độ dài bao nhiêu ( có bao nhiêu key )
// vd :
// var user = {
//     name : "Nguyễn Tiến Đạt",
//     age : 25,
//     email : 'support@xtp.vn'
// };
// => getLengthObject(user) => 3



let user = { name: "Nguyễn Tiến Đạt", age: 25, email: 'support@xtp.vn', phone : '0987654111' };
let user1 = "qweqweqwewq";
let user2 = { name: "Nguyễn Tiến Đạt", age: 25 };
let user3 = { name: "Nguyễn Tiến Đạt"};
let user4 = 12123423442345;



function getLengthObject(obj){
    if(typeof obj === "object"){
        return Object.keys(obj).length;
    }
    return "error"
}


console.log(getLengthObject(user))
console.log(getLengthObject(user1))
console.log(getLengthObject(user2))
console.log(getLengthObject(user3))
console.log(getLengthObject(user4))
