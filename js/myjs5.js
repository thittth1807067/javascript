
var video1= {
        id: 'https://www.youtube.com/embed/UCXao7aTDQM',
        title: 'Tháng Tư Là Lời Nói Dối Của Em',
        author: 'Hà Anh Tuấn',
};
var video2 = {
         id: 'https://www.youtube.com/embed/dns2WLu8Su8',
        title: 'Người Tình Mùa Đông',
        author: 'Hà Anh Tuấn',
};
var video3 = {
    id: 'https://www.youtube.com/embed/XyjhXzsVdiI',
    title: 'Tình Thôi Xót Xa',
    author: 'Hà Anh Tuấn',
};
var video4 = {
    id: 'https://www.youtube.com/embed/nrpjNgZCdlM',
    title: 'Tái Bút Anh Yêu Em',
    author: 'Hà Anh Tuấn',
};
var video5 = {
    id: 'https://www.youtube.com/embed/y576-ONm5II',
    title: ' Lyrics || YÊU 5',
    author: 'Rhymastic',
};
var video6 = {
    id: 'https://www.youtube.com/embed/KhTCatAKVpk',
    title: 'Love you too much (Official MV)',
    author: 'JustaTee',
};
var video7 = {
    id: 'https://www.youtube.com/embed/VjJd5Ln_bmQ',
    title: 'Đã Từng',
    author: 'Bùi Anh Tuấn Ft. Dương Hoàng Yến',
};
var video8 = {
    id: 'https://www.youtube.com/embed/BkBqYlLjIeA',
    title: 'Em Không Là Duy Nhất',
    author: 'Tóc Tiên',
};
var arrayTubes = new Array();
arrayTubes.push(video1);
arrayTubes.push(video2);
arrayTubes.push(video3);
arrayTubes.push(video4);
arrayTubes.push(video5);
arrayTubes.push(video6);
arrayTubes.push(video7);
arrayTubes.push(video8);
var classMytubes = document.getElementsByClassName("myTubes");
if(classMytubes  != null && classMytubes .length>0) {
   var mytubes = classMytubes [0];
    for (var i = 0; i < arrayTubes.length; i++) {
       var itemContent = ' <div class="tube-item">';
                    itemContent += ' <iframe width="560" height="315" src="'+arrayTubes[i].id+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen class="video"></iframe>' ;
                    itemContent +=  '<h3>' + arrayTubes[i].title + '</h3>' ;
        itemContent +='</div>';
        mytubes.innerHTML += itemContent;
    }
}
