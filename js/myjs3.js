var celebrationNames = [
    'Vũ Thị Hoài Anh',
    'Phạm Thanh Hoa',
    'Trần Thị Thi',
    'Ngô Thị Ngọc Ánh',
    'Ngô Thị Mai',
    'Giang Thị Tình',
    'Giang Thị Hạnh',
    'Trần Thị Hương Ly',
    'Đặng Danh Quảng'
];
var celebrationRose = '<div class="celebration-rose">\n' +
    ' <img src="http://getdrawings.com/image/beauty-and-the-beast-rose-drawing-step-by-step-62.jpg" alt="Rose">\n' +
    ' </div>';
var celebrationContentP1 = '<div class="celebration-content">\n' +
    ' <h1>Chào mừng ngày phụ nữ Việt Nam 20 tháng 10</h1>\n' +
    ' <p>Nhân ngày phụ nữ Việt Nam 20/10/2018, thay mặt các bạn nam lớp T1808A, Thầy gửi lời chúc tới các bạn: </p>\n' +
    ' <div class="celebration-name">\n' +
    ' <ul>';

var liCelerationName = '';
for (var i = 0; i < celebrationNames.length; i++) {
    liCelerationName += '<li>' + celebrationNames[i] + '</li>';
    if (i==2){
        var liCelerationNameShortcut = liCelerationName + '<li>' + '<a href="#" id="short-cut">Xem thêm</a>' + '</li>';
    }
}
var celebrationContentP2 = '</ul>\n' +
    ' </div>\n' +
    ' <blockquote>"Một ngày 20 tháng 10 vui vẻ, nhận được nhiều quà, luôn hoàn thành tốt assignment\n' +
    ' Thầy giao để khỏi phải học lại cũng như bị lưu ban sang lớp khác :)"</blockquote>\n' +
    ' </div>';

document.body.innerHTML = celebrationRose + celebrationContentP1 + liCelerationNameShortcut + celebrationContentP2;
var xemThem = document.getElementById('short-cut');
xemThem.onclick = function() {
    document.body.innerHTML = celebrationRose + celebrationContentP1 + liCelerationName + celebrationContentP2;
}
