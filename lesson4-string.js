// Bài 4. Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần.

function myFunction(obj) {
    if (typeof obj === "string") {
        let result = obj.repeat(10);
        console.log(result);
    } else {
        console.log("khong hop le")
    }
}
myFunction("hello");
myFunction("0.");
myFunction(0);
myFunction(null);
myFunction(undefined);