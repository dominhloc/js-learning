// Tính tổng các số chia hết cho 5 từ 0 -> 100

function chiaHet() {
  let tong = 0;
  for (let i = 0; i <= 100; i++) {
    if (i % 5 === 0) {
      tong = tong + i;
    }
  }
  return tong;
}
console.log("🚀 ~ chiaHet ~ chiaHet:", chiaHet());
