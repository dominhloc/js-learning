
// let value = toCelsius(90);
// function toCelsius(fahrenheit) {
//     return (5 / 9) * (fahrenheit - 32);
// }
// console.log(value);



// let text = "Thoi tiet hom nay la " + doF(77) + " do C";

// function doF(doC) {
//     return (5 / 9) * (doC - 32);
// }
// console.log(text);


// function myFunction() {
//     let a = "Minh Lộc";
//     let b = "Đỗ"
//     let c = a + " " + b;
//     console.log("🚀 ~ myFunction ~ c:", " Tên đầy đủ là :", c)
// }
// myFunction()


// let text = "Outside: " + typeof carName; //
// console.log(text);

// function myFunction() {
//     let carName = "Volvo";
//     let text2 = "Inside: " + typeof carName + " " + carName;
//     console.log("🚀 ~ myFunction ~ text2:", text2)

// }
// myFunction() // bắt buộc phải gọi khi viết hàm function



// vs ??  nếu giá trị đứng trc undììedn or null thì trả về giá trị sau

// let x = "Ư" || 2
// console.log("🚀 ~ x:", x)
// let age = 17


// if (age > 20 && age < 12) {
//     console.log("tre em");
// } else {
//     console.log('ket qua sai');
// }








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





// ////-----------------  Bài tập String  ----------------////
// Bài 1. Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true, nếu không trả về false
// - Đầu vào có 2 tham số : Tham số 1 là chuỗi ban đầu, tham số 2 là chuỗi cần kiểm tra

// Ví dụ: checkStringExist("i love you", "you") => true
//        checkStringExist("i love you", "hate") => false



// // Bai 1 
// function checkStringExist(obj, user) {
//     return obj.includes(user);
// }
// var user = checkStringExist("i love you", "love")
// console.log(user);

``

// // Bài 2
// function shortenString(text) {
//     if (text && text.length > 8) {
//         let chars = text.substr(0, 8) + "..."
//         console.log(chars)
//     } else {
//         console.log("======> input ko hop le: ", text)
//     }
// }
// shortenString();
// shortenString("NGuyen Long Thanh");
// shortenString("Xin chào các bạn");
// shortenString("Cộng hòa xã hội chủ nghĩa Việt Nam");
// shortenString("Cộng ");
// shortenString("123456789");
// shortenString("  d sdflsdf * sdf8");
// shortenString(null);
// shortenString(undefined);
// shortenString(`asdflmnas,d fknalksd flaksjdflkajsdlkfjaslkdfj 
// \\asdfa
// asdfaasd
// f`);



// // Bài 3. Viết hàm có tác dụng biến 1 chuỗi thành chỉ viết hoa từ đầu tiên. 
// // Ví dụ: capitalizeString('chÀo MừnG đẾn với xTP') => Kết quả trả về là 'Chào Mừng Đến Với XTP'

// let capitalizedString = "cHao Mung deN voi Xtp";
// let text = capitalizedString.split(" ");

// text = text.map((x, index) => {
//     x = x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()
//     if (index - (text.length - 1) === 0) {
//         x = x.toUpperCase()
//     }
//     return x
// })
// let result = text.join(" ")
// console.log(result)



// // Bài 4

// function myFunction(obj) {
//     return obj;
// }
// let obj = "Hello";
// let x = obj.repeat(10);
// console.log(x);



// // Bài 5. Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, 
// // ngăn cách nhau bởi dấu gạch ngang. 
// // Ví dụ: repeatString('a') => Kết quả trả về là 'a-a-a-a-a-a-a-a-a-a'

// function repeatString(obj) {
//     return obj
// }
// let obj = "a";
// let x = obj.padEnd(2, "-");
// let y = x.repeat(10);
// y = y.slice(0, y.length - 1)
// console.log(y);


// // Bài 6. Cho 1 chuỗi và 1 số nguyên n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần,
// // ngăn cách nhau bởi dấu gạch ngang. 
// // Ví dụ: repeatString('a', 5) => Kết quả trả về là 'a-a-a-a-a'


// function repeatString(str, n) {
//     let str = "b"
//     let n = 4
//     let x = str.padEnd(2, "-")
//     let y = x.repeat(n)
// }

// let result = repeatString(str, n)
// console.log(result);




// function repeatString(str, n) {
//     let x = ""
//     console.log("🚀 ~ repeatString ~ n:", n)
//     for (let i = 0; i < n; i++) {
//         if (i === n - 1) {
//             x += str
//         } else {
//             x += str + "-"
//         }
//         // console.log("🚀 ~ repeatString ~ x:", x)

//     }
//     return x
// }
// let result = repeatString(str, n)
// console.log("🚀 ~ result:", result)



// let arr1 = [1, 2, 3, 4, 5, 6, 7]
// arr1 = arr1.map((item, index, data) => {
//     // console.log(a);
//     item = item + 5
//     return item
//     // console.log(index);

//     // console.log(data);
// })
// let result = arr1.join(" ")
// console.log(result)



// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// let text = " ";
// for (let i = 0; i < cars.length; i++) {
//     text = text + cars[i] + "\n ";
// }
// console.log(text)