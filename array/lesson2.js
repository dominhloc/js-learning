// Bài 2. Viết hàm tìm ra số lớn thứ nhì trong mảng các số. Ví dụ:
// max2Numbers([2, 1, 3, 4]) => Kết quả trả về là 3

function max2Numbers(arr) {
  let max1 = -Infinity,
    max2 = -Infinity;

  for (let num of arr) {
    if (num > max1) {
      max2 = max1;
      max1 = num;
    } else if (num > max2 && num !== max1) {
      max2 = num;
    }
  }
  if (max2 === -Infinity) {
    throw new Error("Không tồn tại số lớn thứ nhì trong mảng");
  }

  return max2;
}
console.log(max2Numbers([2, 1, 3, 4])); // Kết quả trả về là 3
