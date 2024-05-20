// Bài 5: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.

function sumOfDivisors(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      total += i;
    }
  }
  return total;
}

let number = 12;
console.log("Tổng các ước số của", sumOfDivisors(number));
