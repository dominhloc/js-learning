// Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true, nếu không trả về false
// - Đầu vào có 2 tham số : Tham số 1 là chuỗi ban đầu, tham số 2 là chuỗi cần kiểm tra

// Ví dụ: checkStringExist("i love you", "you") => true
//        checkStringExist("i love you", "hate") => false


function checkStringExist(obj, user) {
    if (typeof user === "string") {
        let result = obj.includes(user);
        console.log(result);
    } else {
        console.log("khong hop le");
    }
}
checkStringExist("i love you", "you")
checkStringExist("i love you", "hello")
checkStringExist("love you", "love")
checkStringExist("love you", 1)
checkStringExist("love you", null)
checkStringExist("love you", undefined)



