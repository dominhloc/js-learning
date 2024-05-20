// Bài 1. Viết hàm tìm ra số nhỏ nhất trong mảng các số. Ví dụ:
// minNumbers([2, 1, 3]) => Kết quả trả về là 1

function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}
let arr = [2, 5, 3, 6, 5, 9, 10, 3, 4, 6];
console.log("🚀 ~ myArrayMin ~ myArrayMin:", myArrayMin(arr));
