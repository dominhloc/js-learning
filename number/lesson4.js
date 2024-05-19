// Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham
// số truyền vào.

function checkNumber(n) {
  for (i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
// let a = 4;
// console.log("🚀 ~ a có phải là số nguyên tố không?", checkNumber(a));

function toTal(n) {
  let tong = 0;
  for (let i = 2; i <= n; i++) {
    if (checkNumber(i)) {
      tong += i;
    }
  }
  return tong;
}
let a = 3;
console.log("🚀 ~ result:", toTal(a));
