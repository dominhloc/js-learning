// Bài 6: Cho 1 số nguyên, hãy viết hàm sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên). Ví dụ với tham số 53751 thì kết quả là 13557.

function smallestNumber(n) {
  // Chuyển số nguyên thành chuỗi và tách các chữ số thành mảng
  let digits = n.toString().split("");

  // Sắp xếp các chữ số
  digits.sort();

  // Nếu chữ số đầu tiên là 0, tìm chữ số đầu tiên không phải 0 và đổi chỗ
  if (digits[0] === "0") {
    for (let i = 1; i < digits.length; i++) {
      if (digits[i] !== "0") {
        // Đổi chỗ chữ số đầu tiên không phải 0 lên đầu mảng
        [digits[0], digits[i]] = [digits[i], digits[0]];
        break;
      }
    }
  }

  // Chuyển mảng đã sắp xếp trở lại thành chuỗi và sau đó thành số
  return parseInt(digits.join(""));
}

// Test hàm
let number = 53751;
console.log(
  "Số nhỏ nhất có thể từ các chữ số của " +
    number +
    " là: " +
    smallestNumber(number)
);
