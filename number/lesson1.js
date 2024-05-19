// Bài 1: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.

function voLume() {
  let r = 5;
  return (4 / 3) * Math.PI * Math.pow(r, 3);
}
console.log("🚀 ~ voLume ~ voLume:", voLume());

// function tinhTheTichHinhCau(r) {
//     // Công thức tính thể tích hình cầu
//     const theTich = (4 / 3) * Math.PI * Math.pow(r, 3);
//     return theTich;
// }

// // Ví dụ sử dụng hàm
// const banKinh = 5;  // bạn có thể thay đổi giá trị này
// const theTich = tinhTheTichHinhCau(banKinh);
// console.log(`Thể tích của hình cầu với bán kính ${banKinh} là: ${theTich.toFixed(2)} cm³`);
