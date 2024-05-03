
// Bài 2. Viết hàm rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1
//  chuỗi và thêm dấu ba chấm ở cuối chuỗi. 
// Ví dụ: shortenString('Xin chào các bạn') => Kết quả trả về là 'Xin chào...'


function shortenString(text) {
    if (text && text.length > 8) {
        let chars = text.substr(0, 8) + "..."
        console.log(chars)
    } else {
        console.log("======> input ko hop le: ", text)
    }
}


shortenString();
shortenString("NGuyen Long Thanh");
shortenString("Xin chào các bạn");
shortenString("Cộng hòa xã hội chủ nghĩa Việt Nam");
shortenString("Cộng ");
shortenString("123456789");
shortenString("  d sdflsdf * sdf8");
shortenString(null);
shortenString(undefined);
shortenString(`asdflmnas,d fknalksd flaksjdflkajsdlkfjaslkdfj `)


