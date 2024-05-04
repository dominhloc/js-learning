// Bài 5. Cho mảng các user
// mỗi user có cấu trúc như sau

// user = {
//     name : string,
//     age : number,
//     isStatus : bool
// }
// Viết function lấy ra những user có tuổi > 25 và isStatus = true

let users = [
    { name: "Nguyễn Van A", age: 20, isStatus: true },
    { name: "Tran Van B", age: 26, isStatus: true },
    { name: "Do Van C", age: 30, isStatus: false },
    { name: "Do Van C", age: 35, isStatus: true } 
]

function isExist(){
    for (let index = 0; index < users.length; index++) {
        const user = users[index];
        if(user.age > 25){
            console.log("user " + user.name +" age: " + user.age +" > 25" )
        }
    }
}

// function isExist(){
//     let user_checked = users.filter((x)=>{
//         return x.age > 25
//     })
// }

console.log(isExist())
    