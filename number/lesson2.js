// Bài 2: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với
// tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).

function toTal() {
  let a = 3;
  let b = 8;
  let c = 0;
  for (let i = a + 1; i < b; i++) {
    c = c + i;
  }
  return c;
}
console.log("🚀 ~ toTal ~ toTal:", toTal());
