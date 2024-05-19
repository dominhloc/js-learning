// Bài 3: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.

let a = 3110;

function checkNumber(a) {
  for (i = 2; i <= Math.sqrt(a); i++) {
    if (a % i === 0) {
      return false;
    }
  }
  return true;
}

console.log("🚀 ~ a có phải là số nguyên tố không?", checkNumber(a));
